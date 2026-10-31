/**
 * MoonBit 核心引擎的加载器与类型化门面。
 *
 * 内核用 MoonBit 编写，同一份源码编译出两份产物：
 *   - `media/core.wasm`  wasm-gc，通过 WebAssembly 直接加载（首选）
 *   - `media/core.mjs`   js 后端，作为老运行时（不支持 WasmGC /
 *                        js-string builtins）的退路
 *
 * 两份产物导出的函数签名完全一致，因此上层代码不需要关心当前跑在哪个后端。
 *
 * 关于字符串互操作：wasm-gc 版本启用了 `use-js-builtin-string`，
 * MoonBit 的 `String` 会映射成 JS 字符串（`wasm:js-string` 内建指令），
 * 于是跨语言边界只剩下「字符串 + 数字」，不需要手写内存拷贝。
 * 模块字面量以 `_` 模块的 externref 全局变量形式导入，
 * 这里用一个 Proxy 把常量名本身当作字符串值提供给它。
 */

import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';

import type { GraphData, NoteQLResult, QueryRelation, QueryStats } from '../types';

/** 内核后端类型 */
export type CoreBackend = 'wasm' | 'js';

/** 内核导出函数的统一形状 */
export interface CoreExports {
  core_version(): string;
  core_selftest(): string;
  parse_markdown_json(text: string): string;

  vault_reset(): void;
  vault_add_note(rel: string, size: number, mtime: number, text: string): void;
  vault_add_attachment(rel: string, size: number, mtime: number): void;
  vault_remove(rel: string): void;
  vault_count(): number;
  vault_note_count(): number;
  vault_build_graph(maxTags: number, generatedAt: number, rootName: string): string;
  vault_folders(): string;
  vault_resolve(fromRel: string, target: string): string;

  noteql_run(source: string, useCache: number): string;
  noteql_relations(): string;
  noteql_stats(): string;
  noteql_reset_cache(): void;
  noteql_selftest(): string;

  layout_reset(): void;
  layout_add_node(degree: number, radius: number): void;
  layout_add_link(a: number, b: number): void;
  layout_seed(i: number, x: number, y: number): void;
  layout_pin(i: number, x: number, y: number): void;
  layout_unpin(i: number): void;
  layout_move(i: number, x: number, y: number): void;
  layout_step(alpha: number, rest: number, repulsion: number): void;
  layout_x(i: number): number;
  layout_y(i: number): number;
  layout_count(): number;
}

/** 解析器返回的原始链接 */
export interface CoreRawLink {
  target: string;
  raw: string;
  title: string;
  kind: 'wiki' | 'md' | 'embed';
  line: number;
}

/** 解析器返回结构 */
export interface CoreParsedMarkdown {
  links: CoreRawLink[];
  tags: string[];
}

/** 目录统计 */
export interface CoreFolderStat {
  path: string;
  count: number;
}

export interface LoadCoreOptions {
  /** 存放 core.wasm / core.mjs 的目录（绝对路径） */
  mediaDir: string;
  /** 日志输出 */
  log?: (message: string) => void;
}

/** 动态 import 的等价实现：绕过 TypeScript 把 import() 降级成 require() */
const dynamicImport = new Function('specifier', 'return import(specifier)') as (
  specifier: string
) => Promise<Record<string, unknown>>;

function makeStringConstants(): Record<string, string> {
  // 模块里所有字符串字面量都会变成 `_` 模块的 externref 全局变量，
  // 变量名就是字面量本身。
  return new Proxy({} as Record<string, string>, {
    get(target, key) {
      if (typeof key === 'symbol') {
        return undefined;
      }
      if (!(key in target)) {
        target[key] = key;
      }
      return target[key];
    },
    has() {
      return true;
    }
  });
}

/**
 * 内核门面：把底层导出包装成语义化的方法。
 */
export class MoonCore {
  private constructor(
    private readonly api: CoreExports,
    public readonly backend: CoreBackend,
    public readonly version: string
  ) {}

  /**
   * 加载内核。优先使用 wasm-gc，失败时退回 js 后端。
   */
  public static async load(options: LoadCoreOptions): Promise<MoonCore> {
    const log = options.log ?? (() => undefined);
    const wasmPath = path.join(options.mediaDir, 'core.wasm');
    const jsPath = path.join(options.mediaDir, 'core.mjs');

    let lastError: unknown;
    if (fs.existsSync(wasmPath)) {
      try {
        const api = loadWasm(wasmPath);
        const version = api.core_version();
        const probe = api.core_selftest();
        if (!probe.startsWith('ok:')) {
          throw new Error(`内核自检失败：${probe}`);
        }
        log(`[core] MoonBit 内核已加载 · wasm-gc · v${version}`);
        return new MoonCore(api, 'wasm', version);
      } catch (err) {
        lastError = err;
        log(`[core] wasm 后端不可用，退回 js 后端：${String(err)}`);
      }
    } else {
      log(`[core] 未找到 ${wasmPath}`);
    }

    if (!fs.existsSync(jsPath)) {
      throw new Error(
        `NoteQL - Markdowns In Graph 内核缺失：${wasmPath} 与 ${jsPath} 都不存在。请先运行 npm run core:build。`
      );
    }
    const mod = (await dynamicImport(pathToFileURL(jsPath).href)) as unknown as CoreExports;
    const version = mod.core_version();
    log(`[core] MoonBit 内核已加载 · js · v${version}`);
    if (lastError) {
      log(`[core] 原因：${String(lastError)}`);
    }
    return new MoonCore(mod, 'js', version);
  }

  // ------------------------------------------------------------ 解析 / 索引

  public resetVault(): void {
    this.api.vault_reset();
  }

  public addNote(rel: string, size: number, mtime: number, text: string): void {
    this.api.vault_add_note(rel, size, mtime, text);
  }

  public addAttachment(rel: string, size: number, mtime: number): void {
    this.api.vault_add_attachment(rel, size, mtime);
  }

  public remove(rel: string): void {
    this.api.vault_remove(rel);
  }

  public get fileCount(): number {
    return this.api.vault_count();
  }

  public get noteCount(): number {
    return this.api.vault_note_count();
  }

  public buildGraph(maxTags: number, generatedAt: number, rootName: string): GraphData {
    return JSON.parse(this.api.vault_build_graph(maxTags, generatedAt, rootName)) as GraphData;
  }

  public folders(): CoreFolderStat[] {
    return JSON.parse(this.api.vault_folders()) as CoreFolderStat[];
  }

  public resolve(fromRel: string, target: string): string | undefined {
    const hit = this.api.vault_resolve(fromRel, target);
    return hit === '' ? undefined : hit;
  }

  public parseMarkdown(text: string): CoreParsedMarkdown {
    return JSON.parse(this.api.parse_markdown_json(text)) as CoreParsedMarkdown;
  }

  // ------------------------------------------------------------ NoteQL

  /** 执行一条 NoteQL 查询；时间由宿主侧测量，便于把网络/加载开销算进去。 */
  public runQuery(source: string, useCache = true): NoteQLResult {
    const started = performance.now();
    const result = JSON.parse(
      this.api.noteql_run(source, useCache ? 1 : 0)
    ) as NoteQLResult;
    result.elapsedMs = performance.now() - started;
    return result;
  }

  public queryRelations(): QueryRelation[] {
    return JSON.parse(this.api.noteql_relations()) as QueryRelation[];
  }

  public queryStats(): QueryStats {
    return JSON.parse(this.api.noteql_stats()) as QueryStats;
  }

  public resetQueryCache(): void {
    this.api.noteql_reset_cache();
  }

  public querySelftest(): string {
    return this.api.noteql_selftest();
  }

  // ------------------------------------------------------------ 布局

  /** 布局内核（Webview 侧使用，扩展宿主侧仅用于基准测试） */
  public get layout() {
    const api = this.api;
    return {
      reset: () => api.layout_reset(),
      addNode: (degree: number, radius: number) => api.layout_add_node(degree, radius),
      addLink: (a: number, b: number) => api.layout_add_link(a, b),
      seed: (i: number, x: number, y: number) => api.layout_seed(i, x, y),
      pin: (i: number, x: number, y: number) => api.layout_pin(i, x, y),
      unpin: (i: number) => api.layout_unpin(i),
      move: (i: number, x: number, y: number) => api.layout_move(i, x, y),
      step: (alpha: number, rest: number, repulsion: number) =>
        api.layout_step(alpha, rest, repulsion),
      x: (i: number) => api.layout_x(i),
      y: (i: number) => api.layout_y(i),
      count: () => api.layout_count()
    };
  }
}

function loadWasm(wasmPath: string): CoreExports {
  const bytes = fs.readFileSync(wasmPath);
  // `builtins` / `importedStringConstants` 来自 WasmGC 的 JS 字符串内建提案，
  // 定义见同目录的 wasm.d.ts。
  const module = new WebAssembly.Module(bytes, {
    builtins: ['js-string'],
    importedStringConstants: '_'
  });
  const instance = new WebAssembly.Instance(module, { _: makeStringConstants() });
  return instance.exports as unknown as CoreExports;
}
