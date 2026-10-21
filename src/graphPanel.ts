import * as vscode from 'vscode';
import { GraphIndexer } from './indexer';
import { QueryPanel } from './queryPanel';

export interface PanelOptions {
  focus?: string;
  depth?: number;
  /** 以某个文件夹（相对工作区）为展示范围；空字符串表示整个工作区 */
  folder?: string;
}

interface UiConfig {
  showOrphans: boolean;
  showUnresolved: boolean;
  showAttachments: boolean;
  colorMode: string;
  nodeScale: number;
  linkDistance: number;
  repulsion: number;
  labelThreshold: number;
  openInNewTab: boolean;
}

function getNonce(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';
  for (let i = 0; i < 32; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
}

/**
 * 承载关系图谱的 Webview 面板（单例）。
 */
export class GraphPanel {
  public static current: GraphPanel | undefined;
  public static readonly viewType = 'markdownsInGraph.panel';

  private readonly panel: vscode.WebviewPanel;
  private readonly disposables: vscode.Disposable[] = [];
  private ready = false;
  private updateTimer: NodeJS.Timeout | undefined;
  private focus: string | undefined;
  private depth: number;
  private folderScope: string | undefined;

  public static async createOrShow(
    context: vscode.ExtensionContext,
    indexer: GraphIndexer,
    output: vscode.OutputChannel,
    options: PanelOptions = {}
  ): Promise<GraphPanel> {
    const column = vscode.window.activeTextEditor?.viewColumn ?? vscode.ViewColumn.One;

    if (GraphPanel.current) {
      GraphPanel.current.panel.reveal(column, false);
      if (options.focus) {
        GraphPanel.current.setFocus(options.focus, options.depth ?? 1);
      }
      if (options.folder !== undefined) {
        GraphPanel.current.setFolderScope(options.folder);
      }
      return GraphPanel.current;
    }

    await vscode.window.withProgress(
      { location: vscode.ProgressLocation.Window, title: '正在索引 Markdown 笔记…' },
      () => indexer.ensureReady()
    );

    const panel = vscode.window.createWebviewPanel(
      GraphPanel.viewType,
      indexer.displayRoot ? `关系图谱 · ${indexer.displayRoot}` : '关系图谱',
      { viewColumn: column, preserveFocus: false },
      {
        enableScripts: true,
        enableFindWidget: false,
        retainContextWhenHidden: true,
        localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
      }
    );

    GraphPanel.current = new GraphPanel(panel, context, indexer, output, options);
    return GraphPanel.current;
  }

  private constructor(
    panel: vscode.WebviewPanel,
    private readonly context: vscode.ExtensionContext,
    private readonly indexer: GraphIndexer,
    private readonly output: vscode.OutputChannel,
    options: PanelOptions
  ) {
    this.panel = panel;
    this.focus = options.focus;
    this.depth = options.depth ?? 1;
    this.folderScope = options.folder;

    this.panel.webview.html = this.getHtml(this.panel.webview);

    this.panel.onDidDispose(() => this.dispose(), null, this.disposables);
    this.panel.webview.onDidReceiveMessage(
      (msg: unknown) => void this.onMessage(msg),
      null,
      this.disposables
    );

    this.disposables.push(
      indexer.onDidChange(() => this.scheduleUpdate()),
      vscode.workspace.onDidChangeConfiguration((e) => {
        if (!e.affectsConfiguration('markdownsInGraph')) {
          return;
        }
        const visualKeys = [
          'showAttachments',
          'showOrphans',
          'showUnresolved',
          'colorMode',
          'nodeScale',
          'linkDistance',
          'repulsion',
          'labelThreshold'
        ];
        const visual = visualKeys.some((key) => e.affectsConfiguration(`markdownsInGraph.${key}`));
        this.postConfig(visual);
      })
    );

    void vscode.commands.executeCommand('setContext', 'markdownsInGraph.panelVisible', true);
    const coreInfo = this.indexer.coreInfo;
    this.output.appendLine(
      coreInfo
        ? `[graph] 面板已创建（内核 ${coreInfo.backend} v${coreInfo.version}）`
        : '[graph] 面板已创建（内核尚未加载）'
    );
  }

  // ------------------------------------------------------------ 消息

  private async onMessage(raw: unknown): Promise<void> {
    const msg = raw as { type?: string; [key: string]: unknown };
    if (!msg || typeof msg.type !== 'string') {
      return;
    }
    switch (msg.type) {
      case 'ready': {
        this.ready = true;
        this.postConfig(false);
        this.postGraph(true);
        this.postActiveFile(vscode.window.activeTextEditor?.document.uri);
        if (this.focus) {
          this.postFocus(this.focus, this.depth);
        }
        if (this.folderScope !== undefined) {
          this.postScope(this.folderScope);
        }
        break;
      }
      case 'openFile': {
        const rel = typeof msg.path === 'string' ? msg.path : '';
        const newTab = Boolean(msg.newTab);
        if (rel) {
          await this.openFile(rel, newTab);
        }
        break;
      }
      case 'refresh': {
        await this.refresh();
        break;
      }
      case 'openQuery': {
        void QueryPanel.createOrShow(this.context, this.indexer, this.output);
        break;
      }
      case 'copy': {
        const text = typeof msg.text === 'string' ? msg.text : '';
        if (text) {
          await vscode.env.clipboard.writeText(text);
          vscode.window.setStatusBarMessage('$(check) 已复制到剪贴板', 1800);
        }
        break;
      }
      case 'openSettings': {
        void vscode.commands.executeCommand('workbench.action.openSettings', 'markdownsInGraph');
        break;
      }
      case 'revealFile': {
        const rel = typeof msg.path === 'string' ? msg.path : '';
        const uri = rel ? this.indexer.uriFor(rel) : undefined;
        if (uri) {
          void vscode.commands.executeCommand('revealInExplorer', uri);
        }
        break;
      }
      case 'log': {
        this.output.appendLine(`[webview] ${String(msg.message ?? '')}`);
        break;
      }
      case 'error': {
        this.output.appendLine(`[webview:error] ${String(msg.message ?? '')}`);
        break;
      }
      default:
        break;
    }
  }

  private async openFile(rel: string, newTab: boolean): Promise<void> {
    const uri = this.indexer.uriFor(rel);
    if (!uri) {
      vscode.window.showWarningMessage(`无法定位文件：${rel}`);
      return;
    }
    try {
      await vscode.workspace.fs.stat(uri);
    } catch {
      vscode.window.showWarningMessage(`文件不存在：${rel}`);
      this.scheduleUpdate();
      return;
    }
    const doc = await vscode.workspace.openTextDocument(uri);
    await vscode.window.showTextDocument(doc, {
      preview: !newTab,
      viewColumn: newTab ? vscode.ViewColumn.Beside : undefined
    });
  }

  public async refresh(): Promise<void> {
    await this.indexer.refresh(true);
    this.postGraph(false);
    vscode.window.setStatusBarMessage('$(refresh) 关系图谱已重新扫描', 2000);
  }

  private scheduleUpdate(): void {
    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
    }
    this.updateTimer = setTimeout(() => {
      this.updateTimer = undefined;
      this.postGraph(false);
    }, 260);
  }

  private postGraph(reset: boolean): void {
    if (!this.ready) {
      return;
    }
    const data = this.indexer.buildGraph();
    void this.panel.webview.postMessage({ type: 'graph', data, reset });
    this.output.appendLine(
      `[graph] 推送 ${data.stats.notes} 笔记 / ${data.stats.links} 连线 / ${data.stats.unresolved} 未解析`
    );
  }

  private postConfig(changed: boolean): void {
    if (!this.ready) {
      return;
    }
    void this.panel.webview.postMessage({
      type: 'config',
      config: this.readConfig(),
      changed
    });
  }

  private postFocus(rel: string, depth: number): void {
    if (!this.ready) {
      return;
    }
    void this.panel.webview.postMessage({ type: 'focus', path: rel, depth });
  }

  public postActiveFile(uri: vscode.Uri | undefined): void {
    if (!this.ready) {
      return;
    }
    const rel = uri ? this.indexer.toRel(uri) : undefined;
    void this.panel.webview.postMessage({ type: 'activeFile', path: rel ?? null });
  }

  public setFocus(rel: string, depth: number): void {
    this.focus = rel;
    this.depth = depth;
    this.postFocus(rel, depth);
  }

  /** 切换展示范围；空字符串代表整个工作区 */
  public setFolderScope(rel: string): void {
    this.folderScope = rel;
    this.focus = undefined;
    this.postScope(rel);
  }

  private postScope(rel: string): void {
    if (!this.ready) {
      return;
    }
    void this.panel.webview.postMessage({ type: 'scope', folder: rel || null });
  }

  private readConfig(): UiConfig {
    const cfg = vscode.workspace.getConfiguration('markdownsInGraph');
    return {
      showOrphans: cfg.get<boolean>('showOrphans', true),
      showUnresolved: cfg.get<boolean>('showUnresolved', true),
      showAttachments: cfg.get<boolean>('showAttachments', false),
      colorMode: cfg.get<string>('colorMode', 'folder'),
      nodeScale: cfg.get<number>('nodeScale', 1),
      linkDistance: cfg.get<number>('linkDistance', 90),
      repulsion: cfg.get<number>('repulsion', 1),
      labelThreshold: cfg.get<number>('labelThreshold', 0.5),
      openInNewTab: cfg.get<boolean>('openInNewTab', false)
    };
  }

  // ------------------------------------------------------------ 生命周期

  public dispose(): void {
    GraphPanel.current = undefined;
    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
      this.updateTimer = undefined;
    }
    void vscode.commands.executeCommand('setContext', 'markdownsInGraph.panelVisible', false);
    this.panel.dispose();
    for (const d of this.disposables) {
      d.dispose();
    }
    this.disposables.length = 0;
  }

  // ------------------------------------------------------------ HTML

  private getHtml(webview: vscode.Webview): string {
    const nonce = getNonce();
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.context.extensionUri, 'media', 'graph.js')
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.context.extensionUri, 'media', 'graph.css')
    );
    // MoonBit 布局内核：Webview 侧通过 fetch + WebAssembly 加载
    const coreUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.context.extensionUri, 'media', 'core.wasm')
    );

    const csp = [
      "default-src 'none'",
      `img-src ${webview.cspSource} data:`,
      `style-src ${webview.cspSource} 'unsafe-inline'`,
      `font-src ${webview.cspSource}`,
      `connect-src ${webview.cspSource}`,
      `script-src 'nonce-${nonce}'`
    ].join('; ');

    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta http-equiv="Content-Security-Policy" content="${csp}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="core-wasm" content="${coreUri}" />
<link rel="stylesheet" href="${styleUri}" />
<title>关系图谱</title>
</head>
<body>
<div id="app">
  <header id="bar">
    <div class="brand">
      <span class="logo" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6">
          <circle cx="6" cy="7" r="2.4"/><circle cx="18" cy="6" r="1.8"/>
          <circle cx="12" cy="17" r="2.6"/><circle cx="20" cy="17" r="1.6"/>
          <path d="M8.2 6.4 15.9 5.9M7.3 9 10.7 14.9M14.2 16.2 18.3 16.7" stroke-linecap="round"/>
        </svg>
      </span>
      <span class="title">关系图谱</span>
      <span id="stats" class="stats"></span>
    </div>
    <span class="grow"></span>
    <div class="searchbox">
      <svg class="search-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.4">
        <circle cx="7" cy="7" r="4.2"/><path d="m10.2 10.2 3.3 3.3" stroke-linecap="round"/>
      </svg>
      <input id="search" type="text" placeholder="搜索笔记、路径或标签" spellcheck="false" autocomplete="off" />
      <button id="search-clear" class="clear hidden" title="清除搜索">×</button>
    </div>
    <div class="toolbar">
      <button class="icon-btn" id="btn-zoom-out" title="缩小（-）">
        <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.5 8h9" stroke-linecap="round"/></svg>
      </button>
      <span id="zoom-label" class="zoom-label">100%</span>
      <button class="icon-btn" id="btn-zoom-in" title="放大（+ / 滚轮）">
        <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 3.5v9M3.5 8h9" stroke-linecap="round"/></svg>
      </button>
      <button class="icon-btn" id="btn-fit" title="适应视图（0）">
        <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.4">
          <path d="M2.5 6V3.5a1 1 0 0 1 1-1H6M10 2.5h2.5a1 1 0 0 1 1 1V6M13.5 10v2.5a1 1 0 0 1-1 1H10M6 13.5H3.5a1 1 0 0 1-1-1V10" stroke-linecap="round"/>
        </svg>
      </button>
      <button class="icon-btn" id="btn-query" title="NoteQL 查询（Ctrl+Alt+Q）">
        <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.4">
          <circle cx="7" cy="7" r="4.2"/><path d="m10.2 10.2 3.3 3.3M5 5.6h4M5 7.6h2.6" stroke-linecap="round"/>
        </svg>
      </button>
      <button class="icon-btn" id="btn-refresh" title="重新扫描工作区（R）">
        <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.4">
          <path d="M13 8a5 5 0 1 1-1.6-3.7M13 2.5V5h-2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="icon-btn" id="btn-panel" title="筛选与设置">
        <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.4">
          <path d="M2.5 4.5h11M4.5 8h6.5M6.5 11.5h2.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </header>

  <main id="stage">
    <canvas id="graph"></canvas>

    <div id="loading" class="empty">
      <div class="spinner"></div>
      <div class="empty-title">正在构建图谱…</div>
    </div>

    <div id="empty" class="empty hidden">
      <div class="empty-title">还没有可展示的笔记</div>
      <div class="empty-desc">打开包含 <code>.md</code> 文件的工作区，或新建一篇笔记后再试。</div>
    </div>

    <aside id="panel" class="panel hidden">
      <div class="panel-head">
        <span>筛选与设置</span>
        <button id="panel-close" class="icon-btn small" title="关闭">×</button>
      </div>
      <div class="panel-body">
        <section class="sec">
          <h4>图谱范围</h4>
          <select id="s-scope" class="wide-select"></select>
          <p class="sec-note">只展示所选文件夹及其子文件夹中的笔记；与范围外笔记的连线会被忽略，互不相连的簇与孤立节点仍会保留。</p>
        </section>

        <section class="sec">
          <h4>显示内容</h4>
          <label class="check"><input type="checkbox" id="f-orphans" /><span>孤立笔记</span></label>
          <label class="check"><input type="checkbox" id="f-unresolved" /><span>未解析链接</span></label>
          <label class="check"><input type="checkbox" id="f-attachments" /><span>附件（图片 / PDF）</span></label>
          <label class="check"><input type="checkbox" id="f-matches" /><span>仅显示搜索结果</span></label>
        </section>

        <section class="sec">
          <h4>局部图谱</h4>
          <div class="focus-row">
            <span class="focus-name" id="focus-name">全部笔记</span>
            <button class="link-btn" id="focus-clear">重置</button>
          </div>
          <div class="seg" id="depth-group">
            <button data-depth="1">1 层</button>
            <button data-depth="2">2 层</button>
            <button data-depth="3">3 层</button>
          </div>
        </section>

        <section class="sec">
          <h4>文件夹</h4>
          <div class="chips" id="folder-chips"></div>
        </section>

        <section class="sec">
          <h4>标签</h4>
          <div class="chips" id="tag-chips"></div>
        </section>

        <section class="sec">
          <h4>外观</h4>
          <div class="row"><span>节点大小</span><input type="range" id="s-scale" min="0.5" max="2" step="0.05" /><em id="v-scale"></em></div>
          <div class="row"><span>连线长度</span><input type="range" id="s-dist" min="20" max="200" step="5" /><em id="v-dist"></em></div>
          <div class="row"><span>排斥力</span><input type="range" id="s-repel" min="0.2" max="3" step="0.1" /><em id="v-repel"></em></div>
          <div class="row"><span>着色</span>
            <select id="s-color">
              <option value="folder">按文件夹</option>
              <option value="degree">按连接数</option>
              <option value="tag">按标签</option>
              <option value="single">单色</option>
            </select>
          </div>
          <label class="check"><input type="checkbox" id="s-labels" /><span>显示文字标签</span></label>
          <button class="wide-btn" id="s-reset">恢复默认布局</button>
        </section>
      </div>
    </aside>

    <div id="legend" class="legend"></div>
    <div id="hint" class="hint">滚轮缩放 · 拖拽空白平移 · 单击节点打开 · Alt+单击聚焦 · 双击空白适应视图 · 右键更多操作</div>
    <div id="tip" class="tip hidden"></div>
    <div id="menu" class="menu hidden"></div>
    <div id="toast" class="toast hidden"></div>
  </main>
</div>
<script nonce="${nonce}" src="${scriptUri}"></script>
</body>
</html>`;
  }
}
