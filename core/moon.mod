// Markdowns In Graph 核心引擎
//
// 这个模块是整个 VS Code 扩展的「计算内核」：解析 Markdown 双链与标签、
// 维护工作区文件索引、按 Obsidian 的规则解析链接、构建图谱数据结构，
// 以及运行 Barnes-Hut 力导向布局。
//
// 它会被编译成两种宿主可直接调用的产物：
//   * wasm-gc —— 供 VS Code 扩展宿主（Node）与 Webview（Chromium）加载
//   * js      —— 当宿主不支持 WasmGC / js-string builtins 时的退路
//
// 参考资料：
//   https://docs.moonbitlang.com/en/latest/toolchain/moon/package.html

name = "l1r0gn/markdowns-in-graph-core"

version = "0.1.0"

readme = "README.mbt.md"

license = "MIT"

keywords = [
  "markdown",
  "wikilink",
  "knowledge-graph",
  "force-directed",
  "vscode",
  "wasm",
]

description = "MoonBit core engine for Markdowns In Graph: wikilink parsing, vault indexing, link resolution, graph building and Barnes-Hut force layout."

preferred_target = "wasm-gc"
