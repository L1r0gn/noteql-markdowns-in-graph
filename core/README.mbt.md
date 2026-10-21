# Markdowns In Graph · Core Engine (MoonBit)

`markdowns-in-graph-core` 是 VS Code 扩展 **Markdowns In Graph** 的计算内核，
用 MoonBit 编写并编译为 WebAssembly（`wasm-gc`）与 JavaScript（`js`）两种产物。

它负责扩展里全部「脏活」：

| 包 | 职责 |
| --- | --- |
| `path` | POSIX 风格路径运算：`dirname` / `basename` / `extname` / `normalize` / URI 解码 |
| `mdparse` | Markdown 扫描器：双链 `[[a]]`、`![[a]]`、`[t](a.md)`、行内标签、Frontmatter 标签、代码围栏 |
| `vault` | 工作区索引、Obsidian「最短路径优先」链接解析、图谱构建与统计 |
| `layout` | Barnes-Hut 四叉树力导向布局 + 网格碰撞消解 |
| `query` | **NoteQL**：SQL 风格的图查询、关系物化、BFS/SCC、聚合、依赖感知缓存 |
| 根包 | 给宿主的 ABI：`#export_name` 导出的字符串 / 数值接口 |

## 构建

```bash
moon check --target wasm-gc
moon test  --target wasm-gc              # 41 个测试
moon build --target wasm-gc --release    # _build/wasm-gc/release/build/markdowns-in-graph-core.wasm
moon build --target js --release         # _build/js/release/build/markdowns-in-graph-core.js
```

在仓库根目录也可以：

```bash
npm run core:check
npm run core:test
npm run core:build
```

## 宿主协议

宿主（TypeScript）不解析任何 Markdown，也不维护链接索引，只做三件事：
读文件、把文本喂给内核、把内核吐出的 JSON 交给 Webview 渲染。

```text
vault_reset()
vault_add_note(rel, size, mtime, text)
vault_add_attachment(rel, size, mtime)
vault_build_graph(max_tags, generated_at, root_name) -> JSON
noteql_run(source, use_cache) -> JSON
```

数值接口的布局 API 让 Webview 每帧只做 2N 次 `layout_x / layout_y` 调用，
避免把整张图的坐标反复序列化成字符串。

## NoteQL

```text
note  file  link  tag  unresolved  ambiguous  orphan  cycle
distance  reachable  in_cycle  indegree  outdegree  degree
```

查询语言与语义见仓库的 `docs/NOTEQL.md`：
<https://github.com/L1r0gn/markdowns-in-graph-moonbit/blob/main/docs/NOTEQL.md>
