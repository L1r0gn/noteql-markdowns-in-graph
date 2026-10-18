# Markdowns In Graph — VS Code 的 Markdown 关系图谱

把整个工作区的 Markdown 笔记变成一张可交互的知识网络：**解析 `[[双链]]` 与标准链接 → 力导向布局 → 缩放/平移/拖拽 → 点击跳转 → 实时更新 → 筛选、搜索、局部聚焦**。

界面与交互参照 Obsidian 的关系图谱（Graph View），纯 Canvas 2D 实现，不依赖任何第三方运行时库。

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

## 界面预览

截图文件（随扩展一起安装，位于扩展目录的 `docs/` 下）：

| 文件                       | 内容                |
| ------------------------ | ----------------- |
| `docs/preview-dark.png`  | 深色主题 · 全局图谱       |
| `docs/preview-local.png` | 局部图谱 · 焦点节点 1 层邻域 |
| `docs/preview-panel.png` | 筛选面板与右键菜单         |
| `docs/preview-light.png` | 浅色主题              |

更多说明见 `docs/SCREENSHOTS.md`；图标设计与可复用提示词见 `docs/ICON.md`。

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
npm run package          # 产出 markdowns-in-graph-1.2.0.vsix
code --install-extension markdowns-in-graph-1.2.0.vsix
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

## 实现原理

```
工作区 .md 文件
     │  vscode.workspace.findFiles（并发读取，16 路）
     ▼
markdownParser.ts   逐行解析：跳过代码块/行内代码，抽取 [[双链]]、[链接](...)、#标签
     ▼
indexer.ts          建立 byPath / byName 索引 → 解析目标 → 去重 → 生成 nodes/links/degree
     ▼
graphPanel.ts       单例 Webview 面板，postMessage 推送图谱数据与配置
     ▼
media/graph.js      Canvas 2D：力导向模拟 → 绘制 → 交互 → 筛选/搜索/聚焦
```

**布局算法**（`media/graph.js`）

1. **弹簧力**：每条边把两端拉向 `linkDistance`，力与距离差成正比；
2. **排斥力**：Barnes-Hut 四叉树近似万有斥力，θ = 0.9，避免 O(n²)；
3. **向心力**：把整张图缓慢拉回原点，防止连通分量飘散；
4. **碰撞消解**：空间哈希网格保证节点圆不重叠；
5. **退火**：`alpha` 从 1 指数衰减到 0（约 300 帧），交互时局部重新加热。

**渲染优化**

- 视口裁剪：完全在屏幕外的节点与连线不绘制
- 连线按「普通 / 高亮 / 虚线」分批 `Path2D` 式描边，减少状态切换
- `devicePixelRatio` 适配、`ResizeObserver` 自适应面板尺寸
- 标签按缩放阈值与节点度数选择性绘制，带描边保证可读性

## 性能与已知限制

- 推荐规模：**≤ 3000 篇笔记 / ≤ 20000 条链接** 时交互流畅；再大建议用 `exclude` 缩小范围。
- 仅索引工作区的**第一个文件夹**（多根工作区暂不支持跨根合并）。
- 只解析 `.md` / `.markdown`；`.mdx`、`.canvas` 不在索引范围内。
- 不解析 Frontmatter 中的链接（只从中提取标签）。
- 不解析 Markdown 预览中的 `[[ ]]`（本扩展只负责图谱视图，不改变预览渲染）。
- 悬浮预览（Hover Preview）、节点分组着色规则、图钉/画布文件等 Obsidian 高级功能未实现。
- 面板隐藏后仍保留上下文（`retainContextWhenHidden`），会占用少量内存。

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
`Ctrl+Alt+G` / `Ctrl+Alt+L` / `Ctrl+Alt+R` 可能与输入法或其它扩展冲突，在 `键盘快捷方式` 中搜索 `markdownsInGraph` 重新绑定。

---

## 开发与调试

```bash
npm install        # 安装依赖（typescript / @types/vscode / vsce）
npm run compile    # 编译 src -> out
npm run watch      # 监听编译
npm run typecheck  # 仅类型检查
npm run package    # 打包 vsix
```

调试：用 VS Code 打开项目，按 `F5`（已内置 `.vscode/launch.json` 与 `tasks.json`），在扩展开发宿主中打开 `example-vault` 目录即可。

仓库内还附带几个开发期脚本（不随扩展分发）：

```bash
node scripts/preview.js                      # 生成静态预览页 scripts/preview.html ~ 浅色版
node scripts/shot.js <url> <out.png> [ms]    # 用无头 Edge + CDP 截图（可视化调试）
node scripts/smoke-webview.js                # jsdom 冒烟测试：渲染/搜索/筛选/聚焦/菜单
NODE_PATH=/tmp/vscode-stub/node_modules node scripts/test-indexer.js   # 索引器单测
```

## 目录结构

```
markdowns-in-graph/
├── package.json           # 扩展清单：命令、快捷键、菜单、配置项
├── tsconfig.json          # TypeScript 编译配置（输出 out/）
├── .vscodeignore          # 打包时排除的文件
├── src/
│   ├── extension.ts       # 激活入口：注册命令、状态栏、事件转发
│   ├── indexer.ts         # 扫描工作区、链接索引与解析、构图
│   ├── markdownParser.ts  # 双链/标准链接/标签解析
│   ├── graphPanel.ts      # Webview 单例面板、消息协议、HTML 模板
│   └── types.ts           # GraphNode / GraphLink / GraphData
├── media/
│   ├── graph.js           # 前端：力导向模拟、绘制、交互、筛选
│   └── graph.css          # 跟随 VS Code 主题的界面样式
├── docs/                  # 文档截图
├── example-vault/         # 示例笔记库（用于试玩）
└── scripts/               # 开发辅助脚本（预览/截图/测试）
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

## 许可

MIT License，详见仓库中的 `LICENSE` 文件。
