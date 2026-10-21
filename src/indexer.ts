import * as vscode from 'vscode';
import * as path from 'path';

import { MoonCore } from './core/moonCore';
import { GraphData, NoteQLResult, QueryRelation, QueryStats } from './types';

const NOTE_EXT = new Set(['.md', '.markdown']);
/** 只枚举需要参与图谱的文件类型，避免在大型仓库里遍历所有源码 */
const FILE_GLOB =
  '**/*.{md,markdown,png,jpg,jpeg,gif,webp,svg,bmp,pdf,mp3,wav,mp4,webm,canvas}';
const ATTACHMENT_EXT = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
  '.bmp',
  '.pdf',
  '.mp3',
  '.wav',
  '.mp4',
  '.webm',
  '.canvas'
]);

/** 每个节点最多携带的标签数（Webview 只用首个标签着色） */
const MAX_TAGS_PER_NODE = 16;

const posix = {
  extname(p: string): string {
    const base = p.slice(p.lastIndexOf('/') + 1);
    const i = base.lastIndexOf('.');
    return i <= 0 ? '' : base.slice(i).toLowerCase();
  }
};

function hasDotSegment(rel: string): boolean {
  return rel.split('/').some((seg) => seg.startsWith('.') && seg.length > 1);
}

/**
 * 扫描工作区、维护链接索引，并按需产出图谱数据。
 *
 * 自 v2.0 起，**这里不再包含任何 Markdown 解析或图算法**：
 * 文本原样交给 MoonBit 内核（`MoonCore`），TS 只负责枚举文件、
 * 读取内容、监听变化，以及把内核吐出的 JSON 转发给 Webview。
 */
export class GraphIndexer implements vscode.Disposable {
  private core: MoonCore | undefined;
  private corePromise: Promise<MoonCore> | undefined;
  /** 已索引的文件（相对路径），用于增量更新与删除 */
  private readonly known = new Set<string>();

  private root: vscode.Uri | undefined;
  private rootName = '';
  private initialized = false;
  private initPromise: Promise<void> | undefined;
  private watchers: vscode.Disposable[] = [];
  private saveListener: vscode.Disposable | undefined;
  private fileTimers = new Map<string, NodeJS.Timeout>();
  private notifyTimer: NodeJS.Timeout | undefined;
  private disposed = false;

  private readonly changeEmitter = new vscode.EventEmitter<{ reason: string }>();
  public readonly onDidChange = this.changeEmitter.event;

  constructor(
    private readonly context: vscode.ExtensionContext,
    private readonly output: vscode.OutputChannel
  ) {
    this.context.subscriptions.push(
      vscode.workspace.onDidChangeConfiguration((e) => {
        if (
          e.affectsConfiguration('markdownsInGraph.exclude') ||
          e.affectsConfiguration('markdownsInGraph.maxFileSizeKb')
        ) {
          void this.refresh(true);
        } else if (e.affectsConfiguration('markdownsInGraph.realtimeUpdate')) {
          this.setupWatchers();
        }
      })
    );

    this.saveListener = vscode.workspace.onDidSaveTextDocument((doc) => {
      if (this.isSupported(doc.uri)) {
        this.scheduleFile(doc.uri);
      }
    });
    this.context.subscriptions.push(this.saveListener);
  }

  public get rootUri(): vscode.Uri | undefined {
    return this.root;
  }

  public get isReady(): boolean {
    return this.initialized;
  }

  public get fileCount(): number {
    return this.core?.noteCount ?? 0;
  }

  /** 当前内核后端（wasm / js）与版本，用于状态栏与日志 */
  public get coreInfo(): { backend: string; version: string } | undefined {
    if (!this.core) {
      return undefined;
    }
    return { backend: this.core.backend, version: this.core.version };
  }

  /** 供“文件夹图谱”命令使用：列出含笔记的目录（含父级），并统计各目录下的笔记数 */
  public listFolders(): Array<{ path: string; count: number }> {
    return this.core?.folders() ?? [];
  }

  /**
   * 加载 MoonBit 内核。内核是 wasm/JS 模块，加载是异步的，
   * 其余所有索引操作都排在这之后。
   */
  public async ensureCore(): Promise<MoonCore> {
    if (!this.corePromise) {
      const mediaDir = path.join(this.context.extensionUri.fsPath, 'media');
      this.corePromise = MoonCore.load({
        mediaDir,
        log: (message) => this.output.appendLine(message)
      });
    }
    this.core = await this.corePromise;
    return this.core;
  }

  public async ensureReady(): Promise<void> {
    if (!this.initPromise) {
      this.initPromise = this.initialize();
    }
    return this.initPromise;
  }

  private async initialize(): Promise<void> {
    await this.scanAll();
    this.setupWatchers();
  }

  public get displayRoot(): string {
    return this.rootName;
  }

  public async refresh(notify = true): Promise<void> {
    await this.scanAll();
    // 工作区可能在激活后才被打开，这里重新绑定监听
    this.setupWatchers();
    if (notify) {
      this.changeEmitter.fire({ reason: 'refresh' });
    }
  }

  public dispose(): void {
    this.disposed = true;
    for (const t of this.fileTimers.values()) {
      clearTimeout(t);
    }
    this.fileTimers.clear();
    if (this.notifyTimer) {
      clearTimeout(this.notifyTimer);
    }
    for (const w of this.watchers) {
      w.dispose();
    }
    this.watchers = [];
    this.changeEmitter.dispose();
  }

  // ---------------------------------------------------------------- 扫描

  private async scanAll(): Promise<void> {
    const started = Date.now();
    const core = await this.ensureCore();

    core.resetVault();
    this.known.clear();

    const folder = vscode.workspace.workspaceFolders?.[0];
    if (!folder) {
      this.root = undefined;
      this.rootName = '';
      this.initialized = true;
      this.output.appendLine('[graph] 没有打开的工作区文件夹');
      return;
    }
    this.root = folder.uri;
    this.rootName = folder.name;

    const cfg = vscode.workspace.getConfiguration('markdownsInGraph');
    const exclude = cfg.get<string[]>('exclude', []);
    const excludeGlob = exclude.length > 0 ? `{${exclude.join(',')}}` : undefined;

    let uris: vscode.Uri[] = [];
    try {
      uris = await vscode.workspace.findFiles(
        new vscode.RelativePattern(folder, FILE_GLOB),
        excludeGlob ?? undefined
      );
    } catch (err) {
      this.output.appendLine(`[graph] 扫描失败: ${String(err)}`);
    }

    const queue = uris.slice();
    const workerCount = Math.min(16, Math.max(1, queue.length));
    const workers: Promise<void>[] = [];
    for (let i = 0; i < workerCount; i++) {
      workers.push(
        (async () => {
          for (;;) {
            const uri = queue.pop();
            if (!uri) {
              return;
            }
            await this.ingest(uri);
          }
        })()
      );
    }
    await Promise.all(workers);

    this.initialized = true;
    const backend = this.core ? `${this.core.backend} v${this.core.version}` : 'n/a';
    this.output.appendLine(
      `[graph] 扫描完成：${this.fileCount} 篇笔记 / ${core.fileCount} 个文件，` +
        `用时 ${Date.now() - started}ms（MoonBit 内核 ${backend}）`
    );
  }

  /**
   * 把一个文件交给内核：笔记传全文，附件只传元信息。
   * 文本由 MoonBit 解析，TS 侧不再持有任何链接数据。
   */
  private async ingest(uri: vscode.Uri): Promise<void> {
    const rel = this.toRel(uri);
    if (rel === undefined || rel === '' || hasDotSegment(rel)) {
      return;
    }
    const ext = posix.extname(rel);
    const isNote = NOTE_EXT.has(ext);
    if (!isNote && !ATTACHMENT_EXT.has(ext)) {
      return;
    }

    let stat: vscode.FileStat;
    try {
      stat = await vscode.workspace.fs.stat(uri);
    } catch {
      return;
    }

    const core = await this.ensureCore();

    if (!isNote) {
      core.addAttachment(rel, stat.size, stat.mtime);
      this.known.add(rel);
      return;
    }

    const maxBytes =
      vscode.workspace.getConfiguration('markdownsInGraph').get<number>('maxFileSizeKb', 2048) *
      1024;
    if (stat.size > maxBytes) {
      // 超大文件只作为节点显示，不解析其链接
      core.addAttachment(rel, stat.size, stat.mtime);
      this.known.add(rel);
      this.output.appendLine(`[graph] 跳过超大文件 ${rel} (${stat.size} bytes)`);
      return;
    }

    try {
      const data = await vscode.workspace.fs.readFile(uri);
      const text = Buffer.from(data).toString('utf8');
      core.addNote(rel, stat.size, stat.mtime, text);
      this.known.add(rel);
    } catch (err) {
      this.output.appendLine(`[graph] 读取失败 ${rel}: ${String(err)}`);
    }
  }

  // ---------------------------------------------------------------- 监听

  private setupWatchers(): void {
    for (const w of this.watchers) {
      w.dispose();
    }
    this.watchers = [];

    const folder = vscode.workspace.workspaceFolders?.[0];
    if (!folder) {
      return;
    }
    const enabled = vscode.workspace
      .getConfiguration('markdownsInGraph')
      .get<boolean>('realtimeUpdate', true);
    if (!enabled) {
      return;
    }

    try {
      const watcher = vscode.workspace.createFileSystemWatcher(
        new vscode.RelativePattern(folder, FILE_GLOB)
      );
      this.watchers.push(
        watcher,
        watcher.onDidCreate((uri) => this.scheduleFile(uri)),
        watcher.onDidChange((uri) => this.scheduleFile(uri)),
        watcher.onDidDelete((uri) => this.handleDelete(uri))
      );
    } catch (err) {
      this.output.appendLine(`[graph] 文件监听初始化失败: ${String(err)}`);
    }
  }

  private isSupported(uri: vscode.Uri): boolean {
    const ext = posix.extname(uri.path);
    return NOTE_EXT.has(ext) || ATTACHMENT_EXT.has(ext);
  }

  private scheduleFile(uri: vscode.Uri): void {
    if (this.disposed || !this.isSupported(uri)) {
      return;
    }
    const rel = this.toRel(uri);
    if (!rel) {
      return;
    }
    const existing = this.fileTimers.get(rel);
    if (existing) {
      clearTimeout(existing);
    }
    this.fileTimers.set(
      rel,
      setTimeout(() => {
        this.fileTimers.delete(rel);
        void this.handleFileChange(uri);
      }, 120)
    );
  }

  private async handleFileChange(uri: vscode.Uri): Promise<void> {
    if (this.disposed) {
      return;
    }
    const rel = this.toRel(uri);
    if (rel === undefined) {
      return;
    }
    // 内核按 rel 覆盖写入，无需先删除旧记录
    await this.ingest(uri);
    this.notifySoon();
  }

  private handleDelete(uri: vscode.Uri): void {
    if (this.disposed) {
      return;
    }
    const rel = this.toRel(uri);
    if (rel === undefined) {
      return;
    }
    this.core?.remove(rel);
    this.known.delete(rel);
    this.notifySoon();
  }

  private notifySoon(): void {
    if (this.notifyTimer) {
      clearTimeout(this.notifyTimer);
    }
    this.notifyTimer = setTimeout(() => {
      this.notifyTimer = undefined;
      this.changeEmitter.fire({ reason: 'watch' });
    }, 220);
  }

  // ---------------------------------------------------------------- 路径

  public toRel(uri: vscode.Uri): string | undefined {
    if (!this.root) {
      return undefined;
    }
    const rootPath = this.root.fsPath.replace(/\\/g, '/').replace(/\/+$/, '');
    const filePath = uri.fsPath.replace(/\\/g, '/');
    if (filePath === rootPath) {
      return '';
    }
    const prefix = rootPath.toLowerCase() + '/';
    if (!filePath.toLowerCase().startsWith(prefix)) {
      return undefined;
    }
    return filePath.slice(rootPath.length + 1);
  }

  public uriFor(rel: string): vscode.Uri | undefined {
    if (!this.root) {
      return undefined;
    }
    return vscode.Uri.joinPath(this.root, ...rel.split('/'));
  }

  // ---------------------------------------------------------------- 构图

  /**
   * 图谱数据全部由 MoonBit 内核计算，这里只是把 JSON 反序列化后返回。
   */
  public buildGraph(): GraphData {
    if (!this.core) {
      return {
        nodes: [],
        links: [],
        stats: { notes: 0, attachments: 0, unresolved: 0, links: 0 },
        generatedAt: Date.now(),
        rootName: this.rootName
      };
    }
    return this.core.buildGraph(MAX_TAGS_PER_NODE, Date.now(), this.rootName);
  }

  /** 诊断：把链接目标解析成真实路径（供测试与问题排查使用） */
  public resolveLink(fromRel: string, target: string): string | undefined {
    return this.core?.resolve(fromRel, target);
  }

  // ---------------------------------------------------------------- NoteQL

  /** 查询由 MoonBit 内核执行；TS 只负责把结果交给 Webview。 */
  public async runQuery(source: string, useCache = true): Promise<NoteQLResult> {
    const core = await this.ensureCore();
    return core.runQuery(source, useCache);
  }

  public queryRelations(): QueryRelation[] {
    return this.core?.queryRelations() ?? [];
  }

  public queryStats(): QueryStats | undefined {
    return this.core?.queryStats();
  }

  public resetQueryCache(): void {
    this.core?.resetQueryCache();
  }
}
