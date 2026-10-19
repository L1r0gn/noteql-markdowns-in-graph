import * as vscode from 'vscode';
import { parseMarkdown, RawLink } from './markdownParser';
import { GraphData, GraphLink, GraphNode, GraphStats } from './types';

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

interface FileRecord {
  rel: string;
  dir: string;
  base: string;
  ext: string;
  /** byName 索引使用的键 */
  nameKey: string;
  kind: 'note' | 'attachment';
  tags: string[];
  links: RawLink[];
  mtime: number;
  size: number;
}

const posix = {
  dirname(p: string): string {
    const i = p.lastIndexOf('/');
    return i < 0 ? '' : p.slice(0, i);
  },
  basename(p: string): string {
    const i = p.lastIndexOf('/');
    return i < 0 ? p : p.slice(i + 1);
  },
  extname(p: string): string {
    const base = posix.basename(p);
    const i = base.lastIndexOf('.');
    return i <= 0 ? '' : base.slice(i).toLowerCase();
  },
  normalize(p: string): string {
    const parts: string[] = [];
    for (const seg of p.split('/')) {
      if (!seg || seg === '.') {
        continue;
      }
      if (seg === '..') {
        parts.pop();
        continue;
      }
      parts.push(seg);
    }
    return parts.join('/');
  }
};

function hasDotSegment(rel: string): boolean {
  return rel.split('/').some((seg) => seg.startsWith('.') && seg.length > 1);
}

/**
 * 扫描工作区、维护链接索引，并按需产出图谱数据。
 */
export class GraphIndexer implements vscode.Disposable {
  private readonly files = new Map<string, FileRecord>();
  private readonly byPath = new Map<string, string>();
  private readonly byName = new Map<string, string[]>();

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
    let n = 0;
    for (const rec of this.files.values()) {
      if (rec.kind === 'note') {
        n++;
      }
    }
    return n;
  }

  /** 供“文件夹图谱”命令使用：列出含笔记的目录（含父级），并统计各目录下的笔记数 */
  public listFolders(): Array<{ path: string; count: number }> {
    const counts = new Map<string, number>();
    for (const rec of this.files.values()) {
      if (rec.kind !== 'note') {
        continue;
      }
      const parts = rec.dir ? rec.dir.split('/') : [];
      let acc = '';
      for (const part of parts) {
        acc = acc ? `${acc}/${part}` : part;
        counts.set(acc, (counts.get(acc) ?? 0) + 1);
      }
    }
    return Array.from(counts.entries())
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => a.path.localeCompare(b.path));
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
    this.files.clear();
    this.byPath.clear();
    this.byName.clear();

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
    const records: FileRecord[] = [];
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
            const rec = await this.readRecord(uri);
            if (rec) {
              records.push(rec);
            }
          }
        })()
      );
    }
    await Promise.all(workers);

    for (const rec of records) {
      this.addRecord(rec);
    }
    this.initialized = true;
    this.output.appendLine(
      `[graph] 扫描完成：${this.fileCount} 篇笔记 / ${this.files.size} 个文件，用时 ${Date.now() - started}ms`
    );
  }

  private async readRecord(uri: vscode.Uri): Promise<FileRecord | undefined> {
    const rel = this.toRel(uri);
    if (!rel || hasDotSegment(rel)) {
      return undefined;
    }
    const ext = posix.extname(rel);
    const kind: 'note' | 'attachment' = NOTE_EXT.has(ext) ? 'note' : 'attachment';
    if (kind === 'attachment' && !ATTACHMENT_EXT.has(ext)) {
      return undefined;
    }

    let stat: vscode.FileStat;
    try {
      stat = await vscode.workspace.fs.stat(uri);
    } catch {
      return undefined;
    }

    const dir = posix.dirname(rel);
    const base = posix.basename(rel).replace(/\.[^.]+$/, '');
    let tags: string[] = [];
    let links: RawLink[] = [];

    if (kind === 'note') {
      const maxBytes =
        vscode.workspace.getConfiguration('markdownsInGraph').get<number>('maxFileSizeKb', 2048) * 1024;
      if (stat.size <= maxBytes) {
        try {
          const data = await vscode.workspace.fs.readFile(uri);
          const text = Buffer.from(data).toString('utf8');
          const parsed = parseMarkdown(text);
          tags = parsed.tags;
          links = parsed.links;
        } catch (err) {
          this.output.appendLine(`[graph] 读取失败 ${rel}: ${String(err)}`);
        }
      } else {
        this.output.appendLine(`[graph] 跳过超大文件 ${rel} (${stat.size} bytes)`);
      }
    }

    return {
      rel,
      dir,
      base,
      ext,
      nameKey: (kind === 'note' ? base : base + ext).toLowerCase(),
      kind,
      tags,
      links,
      mtime: stat.mtime,
      size: stat.size
    };
  }

  private addRecord(rec: FileRecord): void {
    this.files.set(rec.rel, rec);
    const lower = rec.rel.toLowerCase();
    this.byPath.set(lower, rec.rel);
    if (rec.kind === 'note') {
      this.byPath.set(lower.replace(/\.(md|markdown)$/, ''), rec.rel);
    }
    const list = this.byName.get(rec.nameKey);
    if (list) {
      if (!list.includes(rec.rel)) {
        list.push(rec.rel);
      }
    } else {
      this.byName.set(rec.nameKey, [rec.rel]);
    }
  }

  private removeRecord(rel: string): void {
    const rec = this.files.get(rel);
    if (!rec) {
      return;
    }
    this.files.delete(rel);
    const lower = rel.toLowerCase();
    if (this.byPath.get(lower) === rel) {
      this.byPath.delete(lower);
    }
    const noExt = lower.replace(/\.(md|markdown)$/, '');
    if (this.byPath.get(noExt) === rel) {
      this.byPath.delete(noExt);
    }
    const list = this.byName.get(rec.nameKey);
    if (list) {
      const i = list.indexOf(rel);
      if (i >= 0) {
        list.splice(i, 1);
      }
      if (list.length === 0) {
        this.byName.delete(rec.nameKey);
      }
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
    if (!rel) {
      return;
    }
    const rec = await this.readRecord(uri);
    this.removeRecord(rel);
    if (rec) {
      this.addRecord(rec);
    }
    this.notifySoon();
  }

  private handleDelete(uri: vscode.Uri): void {
    if (this.disposed) {
      return;
    }
    const rel = this.toRel(uri);
    if (!rel) {
      return;
    }
    this.removeRecord(rel);
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

  // ---------------------------------------------------------------- 解析链接

  /**
   * 按 Obsidian 的“最短路径优先”规则解析链接目标：
   * 1. 相对当前文件目录;
   * 2. 相对工作区根目录;
   * 3. 同名文件（优先同目录，其次层级最浅的）。
   */
  private resolveTarget(fromRel: string, rawTarget: string): FileRecord | undefined {
    let target = rawTarget.trim();
    if (!target) {
      return undefined;
    }
    target = target.replace(/\\/g, '/');
    try {
      target = decodeURIComponent(target);
    } catch {
      /* 保留原样 */
    }
    target = target.replace(/^<|>$/g, '').replace(/^\/+/, '');
    if (!target) {
      return undefined;
    }

    const lower = target.toLowerCase();
    const dir = posix.dirname(fromRel);
    const candidates: string[] = [];
    if (target.startsWith('./') || target.startsWith('../')) {
      candidates.push(posix.normalize(`${dir}/${lower}`));
    } else {
      candidates.push(posix.normalize(`${dir}/${lower}`));
      candidates.push(posix.normalize(lower));
    }
    for (const candidate of candidates) {
      const hit = this.byPath.get(candidate);
      if (hit) {
        return this.files.get(hit);
      }
    }

    const name = posix.basename(lower);
    const trimmed = name.replace(/\.(md|markdown)$/, '');
    const byName = this.byName.get(trimmed) ?? this.byName.get(name);
    if (byName && byName.length > 0) {
      if (byName.length === 1) {
        return this.files.get(byName[0]);
      }
      const sameDir = byName.find((rel) => posix.dirname(rel) === dir);
      if (sameDir) {
        return this.files.get(sameDir);
      }
      const shallowest = [...byName].sort(
        (a, b) => a.split('/').length - b.split('/').length || a.localeCompare(b)
      );
      return this.files.get(shallowest[0]);
    }

    return undefined;
  }

  // ---------------------------------------------------------------- 构图

  public buildGraph(): GraphData {
    const nodes = new Map<string, GraphNode>();
    const degrees = new Map<string, number>();
    const links: GraphLink[] = [];
    const seen = new Set<string>();
    const referencedAttachments = new Set<string>();
    const pending: Array<{ from: string; to: string; kind: GraphLink['kind'] }> = [];
    const ghosts = new Map<string, GraphNode>();

    const ensureNode = (rec: FileRecord): GraphNode => {
      const existing = nodes.get(rec.rel);
      if (existing) {
        return existing;
      }
      const node: GraphNode = {
        id: rec.rel,
        label: rec.base,
        path: rec.rel,
        kind: rec.kind,
        ext: rec.ext,
        folder: rec.dir,
        tags: rec.tags.slice(0, 16),
        size: rec.size,
        mtime: rec.mtime,
        degree: 0
      };
      nodes.set(rec.rel, node);
      return node;
    };

    const ensureGhost = (rawTarget: string): GraphNode => {
      const clean = rawTarget.trim() || '(空链接)';
      const id = `u:${clean.toLowerCase()}`;
      let node = ghosts.get(id);
      if (!node) {
        node = {
          id,
          label: posix.basename(clean.replace(/\\/g, '/')) || clean,
          path: clean,
          kind: 'unresolved',
          ext: '',
          folder: '',
          tags: [],
          size: 0,
          mtime: 0,
          degree: 0
        };
        ghosts.set(id, node);
      }
      return node;
    };

    const notes = Array.from(this.files.values())
      .filter((rec) => rec.kind === 'note')
      .sort((a, b) => a.rel.localeCompare(b.rel));

    for (const rec of notes) {
      ensureNode(rec);
      for (const link of rec.links) {
        const resolved = this.resolveTarget(rec.rel, link.target);
        if (resolved) {
          if (resolved.rel === rec.rel) {
            continue;
          }
          if (resolved.kind === 'attachment') {
            referencedAttachments.add(resolved.rel);
          }
          pending.push({ from: rec.rel, to: resolved.rel, kind: link.kind });
        } else {
          const ghost = ensureGhost(link.target);
          pending.push({ from: rec.rel, to: ghost.id, kind: link.kind });
        }
      }
    }

    // 只有被引用到的附件才进入图谱，避免附件目录喧宾夺主
    for (const rel of referencedAttachments) {
      const rec = this.files.get(rel);
      if (rec) {
        ensureNode(rec);
      }
    }
    for (const ghost of ghosts.values()) {
      nodes.set(ghost.id, ghost);
    }

    for (const edge of pending) {
      if (!nodes.has(edge.from) || !nodes.has(edge.to)) {
        continue;
      }
      // 同一对文件之间的多种写法（[[a]] 与 [a](a.md)）合并为一条边
      const key = `${edge.from}\u0000${edge.to}`;
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      links.push({ source: edge.from, target: edge.to, kind: edge.kind });
      degrees.set(edge.from, (degrees.get(edge.from) ?? 0) + 1);
      degrees.set(edge.to, (degrees.get(edge.to) ?? 0) + 1);
    }

    const nodeList = Array.from(nodes.values());
    for (const node of nodeList) {
      node.degree = degrees.get(node.id) ?? 0;
    }
    // 度数低的先画，枢纽节点绘制在上层
    nodeList.sort((a, b) => a.degree - b.degree || a.label.localeCompare(b.label));

    const stats: GraphStats = {
      notes: nodeList.filter((n) => n.kind === 'note').length,
      attachments: nodeList.filter((n) => n.kind === 'attachment').length,
      unresolved: nodeList.filter((n) => n.kind === 'unresolved').length,
      links: links.length
    };

    return {
      nodes: nodeList,
      links,
      stats,
      generatedAt: Date.now(),
      rootName: this.rootName
    };
  }
}
