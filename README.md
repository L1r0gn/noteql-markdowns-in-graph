# Markdowns In Graph — VS Code 的 Markdown 关系图谱

把整个工作区的 Markdown 笔记变成一张可交互的知识网络：**解析 `[[双链]]` 与标准链接 → 力导向布局 → 缩放/平移/拖拽 → 点击跳转 → 实时更新 → 筛选、搜索、局部聚焦**。

界面与交互参照 Obsidian 的关系图谱（Graph View），纯 Canvas 2D 实现，不依赖任何第三方运行时库。

自 **v2.0** 起，插件的计算内核（Markdown 解析、链接解析、图谱构建、力导向布局）用
**MoonBit** 重写并编译为 WebAssembly，TypeScript 只保留 VS Code 适配层。

**v2.1** 在此基础上新增 **NoteQL**：一个面向知识图的查询与增量复用引擎。
它把笔记、链接、标签、断链、孤立节点与环变成可查询的关系，支持
`SELECT ... FROM ... WHERE ... GROUP BY ... ORDER BY ... LIMIT`，
以及 `distance` / `reachable` / `in_cycle` 等图函数。查询可以跑在 VS Code 面板里，
也可以作为 CLI 接入 CI（支持 JSON / CSV / SARIF 输出）。
详见 [NoteQL](#noteql-查询) 与 [`docs/NOTEQL.md`](docs/NOTEQL.md)。

> 界面截图位于仓库 `docs/` 目录，见 `docs/SCREENSHOTS.md`。



---

## 目录

- [功能特性](#功能特性)
- [界面预览](#界面预览)
- [安装](#安装)
- [快速开始](#快速开始)
- [使用说明](#使用说明)
- [支持的链接语法](#支持的链接语法)
- [快捷键](#快捷键)
- [命令](#命令)
- [配置项](#配置项)
- [NoteQL 查询](#noteql-查询)
- [MoonBit 内核](#moonbit-内核)
- [实现原理](#实现原理)
- [性能与已知限制](#性能与已知限制)
- [常见问题](#常见问题)
- [开发与调试](#开发与调试)
- [目录结构](#目录结构)
- [许可](#许可)

---

## 功能特性

| 能力     | 说明                                                         |
| ------ | ---------------------------------------------------------- |
| 双链解析   | `[[笔记]]`、`[[笔记\|别名]]`、`[[笔记#标题]]`、`[[笔记#^块]]`、`![[笔记]]`    |
| 标准链接   | `[文本](笔记.md)`、`[文本](../目录/笔记.md#锚点)`、`![图片](assets/a.png)` |
| 多种解析规则 | 相对当前文件 → 相对工作区根目录 → 同名文件（优先同目录、再按层级最浅）                     |
| 未解析节点  | 指向不存在文件的链接会生成虚线「幽灵节点」，提示你补全笔记                              |
| 力导向布局  | 弹簧力 + Barnes-Hut 四叉树排斥力 + 向心力 + 碰撞消解，O(n log n)            |
| 缩放     | 滚轮以光标为中心缩放（0.06× ~ 5×），带平滑过渡                               |
| 平移     | 拖拽空白处 / 中键拖拽 / Shift + 拖拽                                  |
| 节点拖拽   | 拖动节点改变布局，松手后自动回到自由状态（右键可固定）                                |
| 点击跳转   | 单击节点打开对应文件；Ctrl/Cmd + 单击在侧边打开                              |
| 悬停高亮   | 高亮相邻节点与连线，其余节点淡出，并显示信息浮层                                   |
| 实时更新   | 文件监听 + 保存事件，增量重解析并按 ID 保留节点位置                              |
| 搜索     | 按标题、路径、标签匹配，命中的节点加虚线环、其余淡出；Enter 定位第一个结果                   |
| 筛选     | 按文件夹、标签、孤立笔记、未解析链接、附件过滤，可只看搜索结果                            |
| 节点聚焦   | 右键「聚焦此节点」只看 1~2 层邻域；侧边栏可切换 1/2/3 层                         |
| 外观调节   | 节点大小、连线长度、排斥力、着色方式（文件夹/连接数/标签/单色）实时可调                      |
| 主题自适应  | 跟随 VS Code 深色 / 浅色 / 高对比主题                                 |
| 状态记忆   | 相机位置、节点坐标、筛选与外观设置在面板重开后恢复                                  |
| NoteQL 查询 | SQL 风格查询笔记、链接、标签、断链、孤立节点与环；结果可跳转到文件行号 |
| 图函数     | `distance` / `reachable` / `in_cycle` / `indegree` / `outdegree` / `degree` |
| 增量复用   | 按关系依赖缓存查询结果：只改链接时 `tag` 查询命中，只改标签时 `link` 查询命中 |
| CLI / CI   | `scripts/noteql.mjs` 输出 table / JSON / CSV / SARIF；`--fail-on-results` 可做体检闸门 |

## 界面预览

截图文件（随扩展一起安装，位于扩展目录的 `docs/` 下）：

| 文件                       | 内容                |
| ------------------------ | ----------------- |
| `docs/preview-dark.png`  | 深色主题 · 全局图谱       |
| `docs/preview-local.png` | 局部图谱 · 焦点节点 1 层邻域 |
| `docs/preview-panel.png` | 筛选面板与右键菜单         |
| `docs/preview-light.png` | 浅色主题              |
| `docs/preview-v2-core.png` | v2.0 · 布局由 MoonBit/Wasm 内核计算 |
| `docs/preview-query.png` | v2.1 · NoteQL 查询面板（查询在扩展宿主内执行） |

更多说明见 `docs/SCREENSHOTS.md`；图标设计与可复用提示词见 `docs/ICON.md`。

> 这张 v2.0 截图由 `npm run smoke` 同款流程生成：无头浏览器加载预览页，
> 内核自检通过（`window.__graphCore === 'wasm'`）后连续跑 6 秒布局再截图。
> 因为布局是确定性的，重复截图会得到像素级一致的结果。

---

## 安装

### 前置条件

- VS Code **1.75.0** 及以上
- Node.js **18+**（仅编译 / 打包时需要）
- 一个包含 Markdown 文件的文件夹（作为工作区打开）

### 方式一：从源码编译并在开发宿主中运行（最快试玩）

```bash
git clone <本仓库地址> markdowns-in-graph
cd markdowns-in-graph
npm install
npm run compile
```

然后用 VS Code 打开该目录，按 `F5`，会启动「扩展开发宿主」窗口。
在宿主窗口里 **打开 `example-vault` 文件夹**（或你自己的笔记库），按 `Ctrl+Alt+G` 即可看到图谱。

### 方式二：打包成 VSIX 并安装（日常使用推荐）

```bash
npm install
npm run package          # 产出 markdowns-in-graph-2.1.0.vsix
code --install-extension markdowns-in-graph-2.1.0.vsix
```

也可以在 VS Code 中：`扩展` 面板右上角 `...` → `从 VSIX 安装...`，选择生成的 `.vsix` 文件。

安装后重新加载窗口，打开任意笔记文件夹，按 `Ctrl+Alt+G`。

### 方式三：一条命令打包并安装

```bash
npm run install:vsix
```

> `install:vsix` 依赖 `code` 命令在 PATH 中（macOS 需先执行 “Shell Command: Install 'code' command in PATH”）。

---

## 快速开始

1. 用 VS Code 打开你的笔记文件夹（例如仓库内的 `example-vault`）。
2. 按 `Ctrl+Alt+G`（macOS：`Cmd+Alt+G`），或打开命令面板执行 `关系图谱: 打开全局关系图谱`。
3. 图谱会在侧边打开：滚轮缩放、拖拽空白平移、单击节点打开笔记。
4. 想只看某篇笔记的邻域：在该笔记里按 `Ctrl+Alt+L`，或右键节点选择「聚焦此节点（1 层）」。
5. 想查询知识库：按 `Ctrl+Alt+Q` 打开 NoteQL 面板，例如运行
   `SELECT n.path, indegree(n.path) AS refs FROM note n WHERE n.tags CONTAINS 'draft'`。

---

## 使用说明

### 画布交互

| 操作                        | 效果                      |
| ------------------------- | ----------------------- |
| 滚轮                        | 以光标为中心缩放                |
| 拖拽空白处 / 中键拖拽 / Shift + 拖拽 | 平移画布                    |
| 单击节点                      | 打开对应笔记（复用当前标签页）         |
| Ctrl/Cmd + 单击节点           | 在侧边新建标签页打开              |
| Alt + 单击节点                | 以该节点为焦点进入局部图谱           |
| 拖拽节点                      | 移动节点（拖动期间临时固定，松手恢复）     |
| 双击空白处                     | 适应视图（Fit）               |
| 右键节点                      | 打开操作菜单                  |
| 悬停节点                      | 高亮邻域 + 信息浮层（文件夹、连接数、标签） |

### 右键菜单

- 打开笔记 / 在侧边打开
- 聚焦此节点（1 层）/ 聚焦邻域（2 层）/ 取消聚焦
- 固定位置 / 取消固定
- 复制相对路径 / 复制双链
- 在资源管理器中显示

### 筛选面板（右上角 ⚙）

- **显示内容**：孤立笔记、未解析链接、附件、仅显示搜索结果
- **局部图谱**：显示当前焦点、一键重置、切换 1 / 2 / 3 层
- **文件夹**：点击标签按目录过滤（可多选，取并集）
- **标签**：按 `#标签` 过滤（取并集，按出现频次排序）
- **外观**：节点大小、连线长度、排斥力滑块；着色方式；是否显示文字标签；恢复默认布局

### 搜索

顶部搜索框支持标题、相对路径、标签的模糊匹配（不区分大小写）。

- 命中节点会加琥珀色虚线环，未命中的节点与连线淡出
- 勾选「仅显示搜索结果」可隐藏未命中节点
- 按 `Enter` 直接把视角移动到第一个命中节点
- 按 `Esc` 退出输入框

### 文件夹图谱

以「某个文件夹的整体状态」为展示范围，而不是围绕单篇笔记展开多级邻域：

1. 命令面板执行 `关系图谱: 打开指定文件夹的图谱`，在列表中选择目录（附笔记数量）；
2. 或在资源管理器中右键任意文件夹 → `打开指定文件夹的图谱`；
3. 图谱打开后，可在右侧面板顶部的「图谱范围」下拉里随时切换目录或回到整个工作区。

规则：

- 范围包含该目录的**所有子目录**；
- 只保留两端都在范围内的连线，指向范围外笔记的链接会被忽略；
- 文件夹内互不相连的簇、孤立笔记也会显示，只是没有连线（受「孤立笔记」开关控制，默认开启）；
- 与节点聚焦可叠加：在范围内再聚焦某个节点时，按该节点做 1~3 层邻域收窄。

### 局部图谱

三种进入方式：

1. 在 Markdown 笔记中按 `Ctrl+Alt+L`
2. 编辑器标题栏的图谱图标
3. 图谱中右键节点 →「聚焦此节点（1 层）」

深度由配置 `markdownsInGraph.localDepth` 决定默认值，进入后可在侧边栏切换 1/2/3 层。焦点节点外围会有一圈蓝色虚线环。

### 实时更新

- 监听工作区文件的新建 / 修改 / 删除（`FileSystemWatcher`）以及保存事件
- 单文件变更做 120ms 去抖，整体通知做 220ms 去抖，避免频繁重绘
- 图谱重建时按节点 ID 复用旧坐标，因此布局不会「跳一下」
- 新增节点会自动获得初始位置并参与布局
- 可在设置中关闭 `markdownsInGraph.realtimeUpdate`

---

## 支持的链接语法

| 类型                        | 图中表现           |
| ------------------------- | -------------- |
| 双链（含别名、标题锚点、块锚点）          | 实线             |
| 嵌入笔记 `![[...]]`           | 虚线             |
| 标准 Markdown 链接（同级 / 相对路径） | 实线             |
| 图片、PDF 等附件嵌入              | 虚线（附件节点，可筛选隐藏） |
| 指向不存在的笔记                  | 紫色虚线幽灵节点       |

具体写法（下方为纯文本示例）：

```text
[[知识管理]]
[[知识管理|KM]]
[[知识管理#方法]]
[[知识管理#^abc123]]
![[知识管理]]
[文本](知识管理.md)
[文本](../notes/知识管理.md#方法)
![图](assets/a.png)
[[还没写的笔记]]
```

**解析细节**

- 优先按「相对当前文件所在目录」解析，其次按「相对工作区根目录」，最后按「文件名」匹配；同名文件优先同目录，其次层级最浅。
- 链接目标会自动 URL 解码（例如把 `%20` 还原为空格）。
- 同一对文件之间的多种写法（双链与标准链接）在图中合并为一条边。
- 忽略：外部链接（`https:`、`mailto:`、纯锚点）、围栏代码块与行内代码中的内容。
- 标签来源：正文中的 `#标签` 与 Frontmatter 中的 `tags` / `tag` / `keywords`（支持 `[a, b]` 与 `- a` 两种写法）。
- 默认跳过以 `.` 开头的目录（如 `.obsidian`、`.git`）以及配置中 `exclude` 匹配的路径。

---

## 快捷键

### VS Code 命令快捷键

| 快捷键                        | 命令          | 条件              |
| -------------------------- | ----------- | --------------- |
| `Ctrl+Alt+G` / `Cmd+Alt+G` | 打开全局关系图谱    | 任意              |
| `Ctrl+Alt+L` / `Cmd+Alt+L` | 打开当前笔记的局部图谱 | 当前编辑器为 Markdown |
| `Ctrl+Alt+R` / `Cmd+Alt+R` | 重新扫描并刷新     | 图谱面板已打开         |
| `Ctrl+Alt+Q` / `Cmd+Alt+Q` | 打开 NoteQL 查询   | 任意              |

> 如与其它扩展冲突，可在 `键盘快捷方式` 中搜索 `markdownsInGraph` 重新绑定。

### 图谱内快捷键

| 快捷键                  | 作用                      |
| -------------------- | ----------------------- |
| `Ctrl/Cmd + F` 或 `/` | 聚焦搜索框                   |
| `Enter`（搜索框内）        | 定位到第一个匹配节点              |
| `+` / `=`            | 放大                      |
| `-` / `_`            | 缩小                      |
| `0`                  | 适应视图                    |
| `R`                  | 重新扫描工作区                 |
| `Esc`                | 依次关闭：右键菜单 → 侧边面板 → 取消选中 |
| `Shift + 拖拽`         | 平移画布                    |

## 命令

| 命令 ID                     | 标题                |
| ------------------------- | ----------------- |
| `markdownsInGraph.show`      | 关系图谱: 打开全局关系图谱    |
| `markdownsInGraph.showLocal` | 关系图谱: 打开当前笔记的局部图谱 |
| `markdownsInGraph.showFolder` | 关系图谱: 打开指定文件夹的图谱 |
| `markdownsInGraph.query`      | 关系图谱: 运行 NoteQL 查询  |
| `markdownsInGraph.refresh`   | 关系图谱: 重新扫描并刷新图谱   |

侧边栏还提供一个状态栏按钮（`$(type-hierarchy) 图谱`），点击即可打开全局图谱。

---

## 配置项

在 `设置` 中搜索 `markdownsInGraph`，或直接编辑 `settings.json`：

| 配置                              | 类型                                     | 默认值                           | 说明                            |
| ------------------------------- | -------------------------------------- | ----------------------------- | ----------------------------- |
| `markdownsInGraph.exclude`         | `string[]`                             | `["**/node_modules/**", ...]` | 扫描时忽略的 glob（相对工作区根目录）         |
| `markdownsInGraph.maxFileSizeKb`   | `number`                               | `2048`                        | 超过该体积的 Markdown 只作为节点显示，不解析链接 |
| `markdownsInGraph.showOrphans`     | `boolean`                              | `true`                        | 显示没有任何连接的孤立笔记                 |
| `markdownsInGraph.showUnresolved`  | `boolean`                              | `true`                        | 显示未解析双链生成的幽灵节点                |
| `markdownsInGraph.showAttachments` | `boolean`                              | `false`                       | 显示图片 / PDF 等附件节点              |
| `markdownsInGraph.colorMode`       | `folder` | `degree` | `tag` | `single` | `folder`                      | 节点着色依据                        |
| `markdownsInGraph.nodeScale`       | `number`                               | `1`                           | 节点半径缩放（0.5 ~ 2）               |
| `markdownsInGraph.linkDistance`    | `number`                               | `90`                          | 连线理想长度，越大越松散（20 ~ 240）        |
| `markdownsInGraph.repulsion`       | `number`                               | `1`                           | 排斥力强度（0.1 ~ 4）                |
| `markdownsInGraph.labelThreshold`  | `number`                               | `0.5`                         | 缩放低于该值隐藏普通标签（高连接度节点始终显示）      |
| `markdownsInGraph.localDepth`      | `number`                               | `1`                           | 局部图谱默认层数（1 ~ 5）               |
| `markdownsInGraph.openInNewTab`    | `boolean`                              | `false`                       | 点击节点时在侧边新标签页打开                |
| `markdownsInGraph.realtimeUpdate`  | `boolean`                              | `true`                        | 是否监听文件变化实时更新                  |

示例：

```json
{
  "markdownsInGraph.exclude": ["**/node_modules/**", "**/archive/**"],
  "markdownsInGraph.colorMode": "folder",
  "markdownsInGraph.linkDistance": 110,
  "markdownsInGraph.repulsion": 1.4,
  "markdownsInGraph.showAttachments": true
}
```

侧边栏中的滑块只影响当前会话的观感（并会被记忆），修改 VS Code 设置会同步覆盖。

---

## NoteQL 查询

NoteQL 是 v2.1 新增的查询层。它复用已索引的笔记与链接，把知识库当成一组关系：

| 关系 | 内容 |
| --- | --- |
| `note` | 笔记路径、标题、目录、大小、时间、度数、标签、入/出度 |
| `file` | 笔记与附件 |
| `link` | 已解析的原始链接（保留行号与重复） |
| `tag` | 笔记与标签的展开关系 |
| `unresolved` | 断链 |
| `ambiguous` | 同名文件导致的多候选链接 |
| `orphan` | 度数为 0 的孤立笔记 |
| `cycle` | 位于有向环上的笔记 |

### 打开方式

- 命令面板：`关系图谱: 运行 NoteQL 查询`
- 快捷键：`Ctrl+Alt+Q` / `Cmd+Alt+Q`
- 图谱工具栏的放大镜按钮

查询面板左侧有示例查询、关系列表与缓存统计；点击结果行会跳到对应文件行号。

### 查询示例

```sql
-- 断链清单
SELECT u.from AS path, u.line, u.raw, u.target
FROM unresolved u
ORDER BY u.from, u.line;

-- 带 #draft 但没有任何入链的笔记
SELECT n.path, indegree(n.path) AS refs
FROM note n
WHERE n.tags CONTAINS 'draft' AND indegree(n.path) = 0;

-- 从首页出发不可达的笔记
SELECT n.path, distance('首页.md', n.path) AS hops
FROM note n
WHERE distance('首页.md', n.path) < 0
ORDER BY n.path;

-- 目录级统计
SELECT n.folder, count(*) AS notes, sum(n.in_degree) AS inbound
FROM note n
GROUP BY n.folder
ORDER BY notes DESC;
```

支持 `WHERE`、`GROUP BY`、`HAVING`、`ORDER BY`、`LIMIT`、`DISTINCT`、聚合函数，
以及 `distance` / `reachable` / `in_cycle` / `indegree` / `outdegree` / `degree`。
完整语法、语义与限制见 [`docs/NOTEQL.md`](docs/NOTEQL.md)。

### 增量复用

内核给 `note` / `link` / `tag` / `name` / `file` 分别记账，查询保存依赖快照：

- 只改链接、标签不变 → `tag` 查询命中缓存；
- 只改标签、链接不变 → `link` 查询命中缓存；
- 改文件名 → 依赖图的查询失效（同名链接归属可能变化）。

这不是完整的 delta 维护，而是可测试的依赖感知缓存；测试会把缓存结果与全量重算逐单元格比较。

### 命令行与 CI

```bash
npm run core:build
node scripts/noteql.mjs --vault example-vault --queries queries
node scripts/noteql.mjs --vault example-vault \
  --file queries/unresolved.nql --format sarif > noteql.sarif
node scripts/noteql.mjs --vault example-vault \
  --file queries/unresolved.nql --fail-on-results
```

`--format` 支持 `table` / `json` / `csv` / `sarif`；`--fail-on-results` 在有结果行时返回退出码 2。

## MoonBit 内核

内核位于 `core/`，是一个独立的 MoonBit 模块（`l1r0gn/markdowns-in-graph-core`），
用同一条命令即可产出两份产物：

```bash
npm run core:build      # → media/core.wasm (wasm-gc) + media/core.mjs (js)
npm run core:test       # 41 个单元测试（moon test，含 NoteQL）
npm run parity          # 逐文件比对 TypeScript 旧实现与 MoonBit 内核的解析结果
npm run bench           # 解析 / 建索引 / 布局三组基准
```

| 包 | 职责 | 关键实现 |
| --- | --- | --- |
| `path` | POSIX 路径运算 | `dirname` / `normalize` / `extname` / URI 百分号解码 |
| `mdparse` | Markdown 扫描 | 单次 `Array[Char]` 转换后按区间滑动，无正则、无回溯；跳过围栏代码、行内代码、HTML 注释 |
| `vault` | 索引与构图 | `byPath` / `byName` 双索引；Obsidian「最短路径优先」解析；解析结果按目录缓存 |
| `layout` | 力导向模拟 | 扁平四叉树对象池（Barnes-Hut）+ 空间哈希碰撞消解 + 确定性 PRNG |
| `query` | NoteQL | 词法/语法、语义检查、关系物化、BFS/SCC、聚合、依赖感知缓存 |
| 根包 | 宿主 ABI | `#export_name` 导出 28 个函数，跨边界只有 `String` 与数值 |

**跨语言边界**

- 字符串：`use-js-builtin-string` 让 MoonBit 的 `String` 直接映射成 JS 字符串（`wasm:js-string` 内建指令），不需要手写内存拷贝；模块里的字符串字面量以 `_` 模块的 `externref` 全局变量导入，宿主用一个 `Proxy` 把「变量名」当作值喂进去。
- 坐标：布局接口全部是 `Int` / `Double`，Webview 每帧只做 `2N` 次坐标读取，不序列化整张图。
- 降级：若运行时缺少 WasmGC / js-string 支持，`MoonCore.load()` 会自动退回 `core.mjs`（js 后端），接口完全一致。

## 实现原理

```
工作区 .md 文件
     │  vscode.workspace.findFiles（并发读取，16 路）
     ▼
indexer.ts ────── 文本 ──────►  MoonBit 内核（core.wasm）
                                 ├─ mdparse  双链 / 标准链接 / 标签 / Frontmatter
                                 ├─ vault    索引 + 最短路径优先解析 + 构图
                                 ├─ layout   Barnes-Hut 力导向模拟
                                 └─ query    NoteQL 查询 / 图函数 / 增量缓存
     ◄──────────── JSON ─────────┘
     ▼
graphPanel.ts       单例 Webview 面板，postMessage 推送图谱数据与配置
queryPanel.ts       查询面板，noteql_run(source) -> 结果 JSON
     ▼
media/graph.js      Canvas 2D 绘制与交互；每帧把当前坐标交给 core.wasm 迭代
media/query.js      查询编辑器与结果表
```

TypeScript 侧不再包含任何解析或图算法，只剩三件事：枚举文件、读取内容、转发消息。

**布局算法**（`core/layout`）

1. **弹簧力**：每条边把两端拉向 `linkDistance`，力与距离差成正比；
2. **排斥力**：Barnes-Hut 四叉树近似万有斥力，θ² = 0.81，避免 O(n²)；
3. **向心力**：把整张图缓慢拉回原点，防止连通分量飘散；
4. **碰撞消解**：空间哈希网格保证节点圆不重叠；
5. **退火**：`alpha` 从 1 指数衰减到 0（约 300 帧），交互时局部重新加热。

内核版与 JS 版使用同一套系数，因此替换引擎后视觉效果保持一致；
区别在于四叉树节点来自预分配的对象池（每帧只重置计数器），
并且所有随机扰动都来自固定种子的 LCG —— **同样的输入永远得到同样的布局**。

**NoteQL 查询层**（`core/query`）

1. **关系物化**：`note` / `file` / `link` / `tag` / `unresolved` / `ambiguous` /
   `orphan` / `cycle`；
2. **图函数**：`distance` / `reachable` 用 BFS，结果按源节点缓存；
   `cycle` 用 Kosaraju SCC；`indegree` / `outdegree` / `degree` 直接查图索引；
3. **语义检查**：未知列、聚合写在 `WHERE`、分组不一致等查询直接拒绝；
4. **增量缓存**：vault 维护 `note/link/tag/name/file` 五条变更序列，
   查询保存依赖快照，只重算受影响的查询；
5. **按需建图**：只有 `note` / `orphan` / `cycle` 或图函数才构建完整 `GraphIndex`。

**渲染优化**

- 视口裁剪：完全在屏幕外的节点与连线不绘制
- 连线按「普通 / 高亮 / 虚线」分批描边，减少状态切换
- `devicePixelRatio` 适配、`ResizeObserver` 自适应面板尺寸
- 标签按缩放阈值与节点度数选择性绘制，带描边保证可读性

## 性能与已知限制

本机基准（Node 24 / Windows，`npm run bench`，1200 篇合成笔记 / 2.7 MB / 96000 条链接）：

| 场景 | 结果 |
| --- | --- |
| 端到端建索引（解析 + 解析链接 + 构图，全在 MoonBit 内） | ~0.3 s，约 3.4k 篇/秒 |
| 力导向布局（Barnes-Hut，1000 节点） | 1.2–1.4 ms/帧，约 700–800 帧/秒 |
| 解析一致性 | 12 篇示例笔记 + 全部文档，与旧 TS 实现逐字段相同（`npm run parity`） |

NoteQL 基准（Node 24 / Windows，JS 后端，1200 篇合成笔记 / 约 48,000 条链接，
`node scripts/noteql-bench.mjs 1200`）：

| 场景 | 结果 |
| --- | --- |
| 端到端建索引 | ~198 ms |
| `tag` 过滤冷查询 / 热缓存 | ~8.3 ms / ~0.22 ms |
| `indegree` 图查询（冷） | ~160 ms |
| 递归 `distance`（冷） | ~84 ms |
| 只改链接后 · `tag` 查询 | ~0.22 ms（缓存命中） |
| 改标签后 · `tag` 查询 | ~2.5 ms（重算） |

- 图谱交互推荐规模：**≤ 3000 篇笔记 / ≤ 20000 条链接**；NoteQL 基准使用 1200 篇 / 约 48k 链接，见上表。
- 仅索引工作区的**第一个文件夹**（多根工作区暂不支持跨根合并）。
- 只解析 `.md` / `.markdown`；`.mdx`、`.canvas` 不在索引范围内。
- 不解析 Frontmatter 中的链接（只从中提取标签）。
- 不解析 Markdown 预览中的 `[[ ]]`（本扩展只负责图谱视图，不改变预览渲染）。
- 悬浮预览（Hover Preview）、节点分组着色规则、图钉/画布文件等 Obsidian 高级功能未实现。
- 面板隐藏后仍保留上下文（`retainContextWhenHidden`），会占用少量内存。
- NoteQL 只支持单关系 `FROM`，没有 `JOIN` / 子查询 / `UNION`；`GROUP BY` 只支持列。
- NoteQL 的增量是结果级依赖失效，不是逐元组 delta 维护；递归视图在依赖变化时整体重算。
- NoteQL 不校验标题/块锚点是否存在，缓存上限 64 条查询。

---

## 常见问题

**图谱是空的？**
确认工作区里有 `.md` 文件，且没有被 `markdownsInGraph.exclude` 排除；查看输出面板 `Markdown Graph` 的扫描日志。

**某个双链没有连线？**

- 目标可能被解析到了别的同名文件（按「同目录 → 层级最浅」规则）；
- 链接可能写在代码块、行内代码或 Frontmatter 中，这些位置不解析；
- 检查输出面板日志，确认文件是否被扫描到。

**中文文件名 / 路径出现乱码？**
扩展统一按 UTF-8 读取，确保笔记保存为 UTF-8。文件名包含空格时，标准链接的路径需要用尖括号包起来或使用 `%20` 编码，双链不需要。

**点击节点没有跳转？**
文件可能已被删除（此时会提示“文件不存在”），按 `R` 或工具栏刷新即可同步。

**图谱太挤 / 太散？**
侧边栏拖动「连线长度」「排斥力」，或调整 `markdownsInGraph.linkDistance`、`markdownsInGraph.repulsion`。

**快捷键冲突？**
`Ctrl+Alt+G` / `Ctrl+Alt+L` / `Ctrl+Alt+R` / `Ctrl+Alt+Q` 可能与输入法或其它扩展冲突，在 `键盘快捷方式` 中搜索 `markdownsInGraph` 重新绑定。

---

## 开发与调试

```bash
npm install        # 安装依赖（typescript / @types/vscode / vsce）

# MoonBit 内核（需要先安装 moon 工具链，见 docs/MOONBIT.md）
npm run core:check # 内核类型检查
npm run core:test  # 内核单元测试（41 个，含 NoteQL）
npm run core:build # 编译 wasm-gc + js，产物写入 media/

# TypeScript 适配层
npm run compile    # 编译 src -> out
npm run watch      # 监听编译
npm run typecheck  # 仅类型检查

# 质量闸门
npm run parity     # TS 旧实现 ⇄ MoonBit 内核 逐文件一致性
npm run bench      # 解析 / 建索引 / 布局基准
npm run smoke      # 无头浏览器验证 Webview 真的用上了 wasm 内核

# NoteQL
npm run noteql         # 查询 CLI（参数见 docs/NOTEQL.md）
npm run noteql:test    # JS/CLI 冒烟测试
npm run noteql:bench   # 查询冷/热/增量基准
npm run preview:query  # 生成查询面板静态预览

npm run package    # 打包 vsix
```

调试：用 VS Code 打开项目，按 `F5`（已内置 `.vscode/launch.json` 与 `tasks.json`），在扩展开发宿主中打开 `example-vault` 目录即可。

仓库内还附带几个开发期脚本（不随扩展分发）：

```bash
node scripts/preview.js                      # 生成静态预览页 scripts/preview.html ~ 浅色版
node scripts/shot.js <url> <out.png> [ms]    # 用无头 Edge + CDP 截图（可视化调试）
node scripts/smoke-core.js                   # 断言 Webview 用的是 MoonBit 内核
node scripts/parity-check.js                 # 解析结果一致性
node scripts/bench-core.js [篇数]            # 内核基准
node scripts/build-core.js [--wasm|--js]     # 只构建其中一个后端
node scripts/smoke-webview.js                # jsdom 冒烟测试：渲染/搜索/筛选/聚焦/菜单
node scripts/noteql.mjs --help               # NoteQL CLI
node scripts/noteql-test.mjs                 # NoteQL JS/CLI 冒烟
node scripts/noteql-bench.mjs [篇数]          # NoteQL 冷/热/增量基准
node scripts/query-preview.js                # 生成 scripts/preview-query.html
NODE_PATH=/tmp/vscode-stub/node_modules node scripts/test-indexer.js   # 索引器单测
```

## 目录结构

```
markdowns-in-graph/
├── package.json           # 扩展清单：命令、快捷键、菜单、配置项
├── tsconfig.json          # TypeScript 编译配置（输出 out/）
├── .vscodeignore          # 打包时排除的文件
├── core/                  # MoonBit 内核（本项目的主要实现）
│   ├── moon.mod           # 模块清单
│   ├── moon.pkg           # 根包：对宿主的 ABI 与 wasm/js 导出配置
│   ├── abi.mbt            # 28 个导出函数的实现
│   ├── path/              # POSIX 路径运算
│   ├── mdparse/           # Markdown 双链 / 标签扫描器
│   ├── vault/             # 索引、链接解析、构图、JSON 序列化
│   ├── layout/            # Barnes-Hut 力导向布局
│   └── query/             # NoteQL：语法、求值、图函数、增量缓存
├── queries/               # 10 条 NoteQL 示例查询（.nql）
├── src/
│   ├── extension.ts       # 激活入口：注册命令、状态栏、事件转发
│   ├── indexer.ts         # 扫描工作区、把文本交给内核、转发 JSON
│   ├── core/moonCore.ts   # 内核加载器（wasm 优先，js 兜底）与类型化门面
│   ├── core/wasm.d.ts     # WebAssembly + WasmGC 字符串内建的最小类型声明
│   ├── legacy/            # 重构前的 TS 解析器，仅用于一致性回归与基准对比
│   ├── graphPanel.ts      # Webview 单例面板、消息协议、HTML 模板
│   ├── queryPanel.ts      # NoteQL 查询面板、结果跳转
│   └── types.ts           # GraphData / NoteQLResult / QueryRelation
├── media/
│   ├── core.wasm          # MoonBit 内核（构建产物，随扩展一起打包）
│   ├── core.mjs           # MoonBit 内核的 js 后端（兜底）
│   ├── graph.js           # 前端：绘制、交互、筛选；布局调用 core.wasm
│   ├── graph.css          # 跟随 VS Code 主题的界面样式
│   ├── query.js           # 查询面板：编辑器、结果表、行跳转
│   └── query.css          # 查询面板样式
├── docs/                  # 文档、截图与 NoteQL 语言参考
├── example-vault/         # 示例笔记库（用于试玩）
└── scripts/               # 开发辅助脚本（预览/截图/测试/NoteQL CLI）
```


```

### 消息协议（扩展 ⇄ Webview）

| 方向 | type | 说明 |
| --- | --- | --- |
| → 前端 | `graph` | `{ nodes, links, stats, rootName }`，`reset` 表示首次推送 |
| → 前端 | `config` | 配置项；`changed` 表示用户在设置中修改 |
| → 前端 | `focus` | 进入局部图谱（`path` + `depth`） |
| → 前端 | `activeFile` | 当前编辑器文件，用于绘制青色高亮环 |
| → 扩展 | `ready` | 前端就绪，请求首批数据 |
| → 扩展 | `openFile` | 打开文件（`path`、`newTab`） |
| → 扩展 | `refresh` | 重新扫描 |
| → 扩展 | `copy` / `revealFile` | 复制文本 / 在资源管理器中定位 |
| → 扩展 | `log` / `error` | 写入输出面板，便于排查 |

### NoteQL 查询面板消息

| 方向 | type | 说明 |
| --- | --- | --- |
| → 前端 | `init` | 示例查询、关系清单、缓存统计、初始查询 |
| → 前端 | `setQuery` | 用外部查询填充编辑器 |
| → 前端 | `running` / `result` | 运行状态 / `{ ok, columns, rows, cached, ... }` |
| → 扩展 | `ready` | 面板就绪 |
| → 扩展 | `run` | `{ source, useCache }` |
| → 扩展 | `autoRefresh` | 是否在文件变化后自动重跑 |
| → 扩展 | `openFile` | `{ path, line }` 跳到文件行号 |
| → 扩展 | `clearCache` | 清空查询缓存 |
| → 扩展 | `copy` / `log` | 剪贴板 / 输出面板 |

## 许可

MIT License，详见仓库中的 `LICENSE` 文件。
