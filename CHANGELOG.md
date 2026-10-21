# Changelog

## 2.1.0 — 2026-10-21

### 新增：NoteQL 查询与增量复用引擎

在 v2.0 的解析/布局底座之上新增 `core/query`，把知识库变成可查询、可增量复用的关系层。

- **查询语言**：`SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT`
  - 支持 `DISTINCT`、别名、`AND/OR/NOT`、`LIKE`、`CONTAINS`、`IN`、`IS NULL`
  - 聚合：`count(*)` / `count(DISTINCT ...)` / `sum` / `avg` / `min` / `max`
  - 标量：`lower` / `upper` / `length` / `abs` / `coalesce` / `startswith` / `endswith`
- **内置关系**：`note` / `file` / `link` / `tag` / `unresolved` / `ambiguous` /
  `orphan` / `cycle`
- **图函数**：`distance` / `reachable` / `in_cycle` / `indegree` / `outdegree` / `degree`
  - BFS 按源节点缓存结果；环检测使用 Kosaraju SCC
- **语义检查**：未知关系/列、聚合写在 `WHERE`、分组不一致、聚合嵌套等查询直接拒绝
- **增量缓存**：`vault` 维护 `note/link/tag/name/file` 五条变更序列，查询保存依赖快照；
  只改链接时 `tag` 查询命中，只改标签时 `link` 查询命中
- **按需建图**：只有 `note` / `orphan` / `cycle` 或图函数才构建完整图索引

### 新增：CLI 与 CI

- `scripts/noteql.mjs`：`--vault`、`--file`、`--queries`、`--format table|json|csv|sarif`、
  `--no-cache`、`--fail-on-results`、`--list-relations`、`--stats`
- `queries/`：10 条示例查询（断链、歧义、孤立、环、草稿体检、枢纽、目录统计、可达性、标签）
- `--format sarif` 可接 GitHub code scanning；`--fail-on-results` 可作为 CI 闸门

### 新增：VS Code 查询面板

- 命令 `关系图谱: 运行 NoteQL 查询`，快捷键 `Ctrl+Alt+Q` / `Cmd+Alt+Q`
- 图谱工具栏放大镜按钮
- 查询编辑器、示例查询、关系清单、结果表、缓存统计
- 点击结果行跳到文件行号；编辑文件后自动重跑（可关闭）
- `media/query.js` / `media/query.css`，静态预览：`npm run preview:query`

### 内核

- 新增 `noteql_run` / `noteql_relations` / `noteql_stats` / `noteql_reset_cache` /
  `noteql_selftest` ABI
- `core_version` 提升到 `2.1.0`
- 新增 `vault` 细粒度变更序列与 `candidates()` 歧义候选查询
- MoonBit 单元测试从 33 增至 41；新增 JS/CLI 冒烟测试与查询基准

### 性能（本机 Node 24 / Windows，1200 篇 / 约 48,000 条链接）

- 建索引 ~198 ms
- `tag` 冷查询 ~8.3 ms，热缓存 ~0.22 ms
- `indegree` 图查询冷 ~160 ms
- 递归 `distance` 冷 ~84 ms
- 只改链接后 `tag` 查询 ~0.22 ms（命中）；改标签后 ~2.5 ms（重算）

### 兼容性

- 图谱命令、快捷键、配置项与消息协议保持不变
- 解析/构图/布局语义不变，`npm run parity` 继续通过
- NoteQL 是附加能力，不改变预览渲染或图谱写实
- 已知限制：单关系 `FROM`、无 `JOIN`/子查询/`UNION`、`GROUP BY` 只支持列、
  增量是结果级依赖失效、缓存上限 64 条

## 2.0.0 — 2026-10-20

### 重构：计算内核迁移到 MoonBit + WebAssembly

插件的全部纯计算逻辑改用 **MoonBit** 实现，编译为 wasm-gc 模块，
TypeScript 只保留 VS Code 适配层（枚举文件、读取内容、转发消息）。

- 新增独立 MoonBit 模块 `core/`（`l1r0gn/markdowns-in-graph-core`）：
  - `path` —— POSIX 路径运算与 URI 百分号解码
  - `mdparse` —— 双链 / 标准链接 / 行内标签 / Frontmatter 标签扫描（字符级单遍，无正则回溯）
  - `vault` —— 文件索引、Obsidian「最短路径优先」链接解析、图谱构建与统计
  - `layout` —— Barnes-Hut 四叉树力导向布局（扁平对象池 + 确定性 PRNG）
- 新增 `src/core/moonCore.ts`：wasm 优先、js 兜底的双后端加载器，
  通过 `use-js-builtin-string` 让 MoonBit 的 `String` 直接映射为 JS 字符串
- 新增 33 个 MoonBit 单元测试、TS ⇄ MoonBit 逐文件一致性回归、内核基准、
  Webview 内核冒烟测试
- `src/markdownParser.ts` 移入 `src/legacy/`，仅作为一致性回归与基准的参照实现
- 版本号提升到 2.0.0；产物 `media/core.wasm` 与 `media/core.mjs` 随扩展分发

### 兼容性

- 图谱语义（节点、连线、度数、幽灵节点、附件规则、解析优先级）与 1.3.1 完全一致，
  由 `npm run parity` 逐文件校验
- 布局系数与 1.3.1 相同，视觉表现连续；差异是布局现在**可复现**
- 所有命令、快捷键、配置项与消息协议保持不变


## 1.3.1 — 2026-10-19

### 修复

- 初始节点半径减半（含未解析节点），整体更接近 Obsidian 的点状图谱
- 标签淡出改为按**节点屏幕半径**判定（约 1.8px 起渐隐、0.7px 完全隐藏）：
  节点变小后标签会在缩放的更早阶段消失，修复“缩小视图时文字隐藏过晚”
- 同步下调绘制与拾取的最小像素（2.2 → 1.1），保证小节点依然可点；
  碰撞间距由 5 补偿到 8，布局密度与改动前基本一致

### 兼容性

- 缩放范围（6%~500%）、滚轮锚点、适应视图、文件夹范围、搜索与聚焦行为均未改动
- `labelThreshold` 仍用于调节标签淡出早晚，数值越大越早淡出
- 深色 / 浅色主题与高亮、数据持久化逻辑不受影响

## 1.3.0 — 2026-10-19

### 新增

- **文件夹级图谱**：新增命令 `打开指定文件夹的图谱`，可从命令面板选择目录，
  或在资源管理器中右键文件夹直接打开；以该目录及子目录为展示范围，
  范围外的连线被忽略，互不相连的簇与孤立节点照常显示
- 侧边栏新增「图谱范围」下拉，可在“整个工作区”与任意文件夹之间随时切换
- **标签随缩放平滑淡出**：标签透明度按节点屏幕尺寸在阈值区间内做 smoothstep 过渡，
  缩小时逐渐透明直至完全隐藏，大节点（连接多、半径大）的标签保留更久

### 变更

- `markdownsInGraph.labelThreshold` 语义由“低于该值直接隐藏”调整为“淡出阈值”，
  数值越大标签越早淡出
- 移除“高连接度节点标签始终显示”的硬编码，改由节点尺寸自然决定

### 修复

- 修复缩小图谱时标签在阈值处突然消失（或始终显示）的问题

## 1.2.0 — 2026-10-19

### 新增

- 扩展图标：深色圆角底板 + 中心「笔记」节点 + 五个卫星节点与八条连线，与图谱配色一致；
  提供 SVG 源文件与 128 / 256 / 1024 三种 PNG，128 尺寸接入 `package.json` 的 `icon` 字段
- `docs/ICON.md`：图标定位、设计决策、配色表与可复用的英文生成提示词
- `scripts/export-icon.js`：修改 SVG 后一键重新导出各尺寸，保留透明通道

### 变更

- 打包时排除图标中间产物，仅分发 `resources/icon.png` 与 `resources/icon.svg`
- README / 截图文档补充图标说明

## 1.1.0 — 2026-10-18

### 修复

- 悬停（或选中）某个节点时，**与它没有连接的其他节点标签现在会同步变暗**；
  此前只有节点圆点淡出、标签仍保持全亮，破坏了 Obsidian 式的聚焦观感
- 根因是标签色使用 `rgba()` 字符串，透明度工具函数对非十六进制颜色直接原样返回；
  改为十六进制色值后，标签可随高亮层级正确计算 alpha
- 修复 README 中链接语法与 FAQ 表格因多余空行导致的渲染断裂

### 验证

- 冒烟测试新增「悬停标签透明度」断言：高亮标签与变暗标签同时存在、悬停节点自身保持高亮
- 深色 / 浅色主题下重新截图核对悬停效果

## 1.0.0 — 2026-10-18

首个版本，完整复刻 Obsidian 关系图谱的核心体验。

### 新增

- **链接解析**：`[[双链]]`（含别名、标题、块锚点、嵌入）与标准 Markdown 链接；自动索引 `#标签`
- **图谱构建**：按“相对目录 → 工作区根 → 同名文件”的规则解析目标，未解析链接生成虚线幽灵节点
- **力导向布局**：弹簧力 + Barnes-Hut 四叉树排斥力 + 向心力 + 碰撞消解，带退火与局部加热
- **画布交互**：滚轮以光标为中心缩放、拖拽/中键/Shift 平移、节点拖拽、双击适应视图
- **跳转**：单击打开笔记，Ctrl/Cmd + 单击侧边打开，Alt + 单击聚焦
- **悬停高亮**：相邻节点与连线高亮，其余淡出，附信息浮层
- **实时更新**：文件监听 + 保存事件，去抖增量重解析，按 ID 保留节点位置
- **搜索**：标题/路径/标签匹配，命中环 + 淡出，Enter 定位
- **筛选**：文件夹、标签、孤立笔记、未解析链接、附件、仅显示搜索结果
- **局部图谱**：1/2/3 层邻域聚焦，焦点节点带虚线环
- **外观调节**：节点大小、连线长度、排斥力、四种着色模式、标签开关
- **主题自适应**：深色 / 浅色 / 高对比，状态栏入口，输出面板日志
- **状态记忆**：相机、坐标、筛选与外观设置在面板重开后恢复
- 中文 README、示例笔记库 `example-vault`、VSIX 打包脚本

### 已知限制

- 仅索引工作区第一个文件夹
- 不解析 Frontmatter 中的链接
- 不提供悬浮预览、节点分组规则等 Obsidian 进阶功能
