import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

import { GraphIndexer } from './indexer';
import { NoteQLResult } from './types';

interface QueryExample {
  name: string;
  source: string;
}

const DEFAULT_QUERY = `SELECT n.path, n.degree, indegree(n.path) AS in_deg, outdegree(n.path) AS out_deg
FROM note n
ORDER BY n.degree DESC, n.path
LIMIT 20`;

function getNonce(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';
  for (let i = 0; i < 32; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
}

/**
 * NoteQL 查询面板（单例）。
 *
 * 查询在扩展宿主里执行：TS 把源码交给 MoonBit 内核，内核返回 JSON；
 * Webview 只负责编辑器和结果表。这样同一套查询语义也跑在 CLI / CI 里。
 */
export class QueryPanel {
  public static current: QueryPanel | undefined;
  public static readonly viewType = 'markdownsInGraph.query';

  private readonly panel: vscode.WebviewPanel;
  private readonly disposables: vscode.Disposable[] = [];
  private ready = false;
  private lastSource: string;
  private lastUseCache = true;
  private autoRefresh = true;
  private runSeq = 0;
  private refreshTimer: NodeJS.Timeout | undefined;

  public static async createOrShow(
    context: vscode.ExtensionContext,
    indexer: GraphIndexer,
    output: vscode.OutputChannel,
    initialQuery?: string
  ): Promise<QueryPanel> {
    const column = vscode.window.activeTextEditor?.viewColumn ?? vscode.ViewColumn.One;

    if (QueryPanel.current) {
      QueryPanel.current.panel.reveal(column, false);
      if (initialQuery) {
        QueryPanel.current.setQuery(initialQuery);
      }
      return QueryPanel.current;
    }

    await vscode.window.withProgress(
      { location: vscode.ProgressLocation.Window, title: '正在索引 Markdown 笔记…' },
      () => indexer.ensureReady()
    );

    const panel = vscode.window.createWebviewPanel(
      QueryPanel.viewType,
      indexer.displayRoot ? `NoteQL · ${indexer.displayRoot}` : 'NoteQL',
      { viewColumn: column, preserveFocus: false },
      {
        enableScripts: true,
        enableFindWidget: true,
        retainContextWhenHidden: true,
        localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
      }
    );

    QueryPanel.current = new QueryPanel(panel, context, indexer, output, initialQuery);
    return QueryPanel.current;
  }

  private constructor(
    panel: vscode.WebviewPanel,
    private readonly context: vscode.ExtensionContext,
    private readonly indexer: GraphIndexer,
    private readonly output: vscode.OutputChannel,
    initialQuery?: string
  ) {
    this.panel = panel;
    this.lastSource = initialQuery?.trim() || DEFAULT_QUERY;
    this.panel.webview.html = this.getHtml(this.panel.webview);

    this.panel.onDidDispose(() => this.dispose(), null, this.disposables);
    this.panel.webview.onDidReceiveMessage(
      (msg: unknown) => void this.onMessage(msg),
      null,
      this.disposables
    );

    this.disposables.push(
      indexer.onDidChange(() => this.scheduleRefresh())
    );
  }

  private async onMessage(raw: unknown): Promise<void> {
    const msg = raw as { type?: string; [key: string]: unknown };
    if (!msg || typeof msg.type !== 'string') {
      return;
    }
    switch (msg.type) {
      case 'ready': {
        this.ready = true;
        void this.panel.webview.postMessage({
          type: 'init',
          examples: this.loadExamples(),
          relations: this.indexer.queryRelations(),
          stats: this.indexer.queryStats(),
          source: this.lastSource,
          autoRefresh: this.autoRefresh
        });
        void this.run(this.lastSource, this.lastUseCache);
        break;
      }
      case 'run': {
        const source = typeof msg.source === 'string' ? msg.source : '';
        if (source.trim()) {
          this.lastUseCache = Boolean(msg.useCache);
          void this.run(source, this.lastUseCache);
        }
        break;
      }
      case 'autoRefresh': {
        this.autoRefresh = Boolean(msg.value);
        break;
      }
      case 'openFile': {
        const rel = typeof msg.path === 'string' ? msg.path : '';
        const line = typeof msg.line === 'number' ? msg.line : 1;
        if (rel) {
          await this.openFile(rel, line);
        }
        break;
      }
      case 'clearCache': {
        this.indexer.resetQueryCache();
        await this.run(this.lastSource, false);
        break;
      }
      case 'copy': {
        const text = typeof msg.text === 'string' ? msg.text : '';
        if (text) {
          await vscode.env.clipboard.writeText(text);
          vscode.window.setStatusBarMessage('$(check) 已复制', 1600);
        }
        break;
      }
      case 'log': {
        this.output.appendLine(`[noteql] ${String(msg.message ?? '')}`);
        break;
      }
      default:
        break;
    }
  }

  private scheduleRefresh(): void {
    if (!this.ready || !this.autoRefresh || !this.lastSource.trim()) {
      return;
    }
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
    this.refreshTimer = setTimeout(() => {
      this.refreshTimer = undefined;
      void this.run(this.lastSource, this.lastUseCache);
    }, 350);
  }

  private async run(source: string, useCache: boolean): Promise<void> {
    const seq = ++this.runSeq;
    this.lastSource = source;
    this.lastUseCache = useCache;
    void this.panel.webview.postMessage({ type: 'running' });
    let result: NoteQLResult;
    try {
      result = await this.indexer.runQuery(source, useCache);
    } catch (err) {
      result = { ok: false, error: String(err) };
    }
    if (seq !== this.runSeq) {
      return;
    }
    void this.panel.webview.postMessage({
      type: 'result',
      result,
      source,
      stats: this.indexer.queryStats()
    });
    if (!result.ok) {
      this.output.appendLine(`[noteql] ${result.error ?? '查询失败'}`);
    }
  }

  private async openFile(rel: string, line: number): Promise<void> {
    const uri = this.indexer.uriFor(rel);
    if (!uri) {
      vscode.window.showWarningMessage(`无法定位文件：${rel}`);
      return;
    }
    try {
      await vscode.workspace.fs.stat(uri);
    } catch {
      vscode.window.showWarningMessage(`文件不存在：${rel}`);
      return;
    }
    const doc = await vscode.workspace.openTextDocument(uri);
    const row = Math.max(0, (Number.isFinite(line) ? line : 1) - 1);
    const position = new vscode.Position(row, 0);
    await vscode.window.showTextDocument(doc, {
      preview: false,
      selection: new vscode.Selection(position, position)
    });
  }

  private setQuery(source: string): void {
    this.lastSource = source;
    if (this.ready) {
      void this.panel.webview.postMessage({ type: 'setQuery', source });
    }
  }

  private loadExamples(): QueryExample[] {
    const dir = path.join(this.context.extensionUri.fsPath, 'queries');
    try {
      return fs
        .readdirSync(dir)
        .filter((name) => name.toLowerCase().endsWith('.nql'))
        .sort()
        .map((name) => ({
          name: name.replace(/\.nql$/i, ''),
          source: fs.readFileSync(path.join(dir, name), 'utf8').trim()
        }));
    } catch {
      return [{ name: 'note-ranking', source: DEFAULT_QUERY }];
    }
  }

  public dispose(): void {
    QueryPanel.current = undefined;
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = undefined;
    }
    this.panel.dispose();
    for (const d of this.disposables) {
      d.dispose();
    }
    this.disposables.length = 0;
  }

  private getHtml(webview: vscode.Webview): string {
    const nonce = getNonce();
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.context.extensionUri, 'media', 'query.js')
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.context.extensionUri, 'media', 'query.css')
    );
    const csp = [
      "default-src 'none'",
      `style-src ${webview.cspSource} 'unsafe-inline'`,
      `font-src ${webview.cspSource}`,
      `script-src 'nonce-${nonce}'`
    ].join('; ');

    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta http-equiv="Content-Security-Policy" content="${csp}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="${styleUri}" />
<title>NoteQL</title>
</head>
<body>
<div id="app">
  <header id="bar">
    <div class="brand">
      <span class="logo" aria-hidden="true">⌘</span>
      <span class="title">NoteQL</span>
      <span class="sub">知识库查询</span>
    </div>
    <span class="grow"></span>
    <label class="check"><input id="auto" type="checkbox" checked /><span>自动刷新</span></label>
    <label class="check"><input id="cache" type="checkbox" checked /><span>使用缓存</span></label>
    <button id="run" class="primary" title="运行查询（Ctrl/Cmd + Enter）">运行</button>
  </header>
  <main id="main">
    <aside id="side">
      <section class="sec">
        <h4>示例查询</h4>
        <select id="examples" class="wide-select"></select>
        <p class="note">示例来自仓库的 <code>queries/</code> 目录。</p>
      </section>
      <section class="sec">
        <h4>内置关系</h4>
        <div id="relations" class="chips"></div>
      </section>
      <section class="sec">
        <h4>缓存</h4>
        <div id="stats" class="stats"></div>
        <button id="clear-cache" class="link-btn">清空查询缓存</button>
      </section>
      <p class="note">点击结果行可跳到对应文件与行号。查询在扩展宿主内的 MoonBit 内核执行。</p>
    </aside>
    <section id="work">
      <div class="editor-wrap">
        <textarea id="editor" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea>
      </div>
      <div id="status">
        <span id="status-text">就绪</span>
        <span id="badges" class="badges"></span>
      </div>
      <div id="error" class="error hidden"></div>
      <div id="results" class="results">
        <div class="empty">运行一条查询查看结果</div>
      </div>
    </section>
  </main>
</div>
<script nonce="${nonce}" src="${scriptUri}"></script>
</body>
</html>`;
  }
}
