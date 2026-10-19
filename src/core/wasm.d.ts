/**
 * 最小化的 WebAssembly 类型声明。
 *
 * 扩展的 tsconfig 只引入 `ES2021`（不引入 DOM），因此没有 `WebAssembly` 命名空间。
 * 这里补上我们要用到的部分，并额外声明 WasmGC 的 JS 字符串内建提案里
 * 才有的 `builtins` / `importedStringConstants` 选项。
 */
declare namespace WebAssembly {
  type BufferSource = ArrayBuffer | ArrayBufferView;

  interface ModuleOptions {
    /** 启用的 JS 内建指令集，例如 `['js-string']` */
    builtins?: string[];
    /** 字符串字面量以全局变量形式从该模块导入 */
    importedStringConstants?: string;
  }

  class Module {
    constructor(bytes: BufferSource, options?: ModuleOptions);
  }

  class Instance {
    constructor(module: Module, imports?: Record<string, unknown>);
    readonly exports: Record<string, unknown>;
  }
}
