/**
 * 生成 dev 预览页：把 Webview 的 DOM/CSS/JS 抽出来做静态渲染，便于截图检查视觉效果。
 * 用法：node scripts/preview.js  ->  scripts/preview.html
 */
const fs = require('fs');
const path = require('path');

const root = 'F:/markdowns_in_graph';
const src = fs.readFileSync(path.join(root, 'src/graphPanel.ts'), 'utf8');
const bodyStart = src.indexOf('<body>') + '<body>'.length;
const bodyEnd = src.indexOf('<script nonce');
const body = src.slice(bodyStart, bodyEnd);

// 构造一个贴近真实使用场景的示例知识库
const notes = [
  ['首页', '', ['moc'], ['知识管理', '图谱视图', 'MOC 索引']],
  ['MOC 索引', '', ['moc', 'index'], ['知识管理', '双链笔记', '图谱视图', '力导向布局', '卡片盒笔记法', '周复盘模板']],
  ['知识管理', 'notes', ['方法论', 'pkm'], ['双链笔记', '卡片盒笔记法', '图谱视图', '每日笔记']],
  ['双链笔记', 'notes', ['方法论'], ['知识管理', '图谱视图', 'Markdown 语法', '反向链接']],
  ['卡片盒笔记法', 'notes', ['方法论', 'pkm'], ['知识管理', '双链笔记', '原子化笔记']],
  ['原子化笔记', 'notes', ['方法论'], ['卡片盒笔记法']],
  ['反向链接', 'notes', ['pkm'], ['双链笔记', '图谱视图']],
  ['图谱视图', 'notes/graph', ['obsidian'], ['力导向布局', '双链笔记', '节点聚焦', '知识管理']],
  ['力导向布局', 'notes/graph', ['可视化'], ['图谱视图', 'Barnes-Hut 算法']],
  ['Barnes-Hut 算法', 'notes/graph', ['可视化', '算法'], ['力导向布局']],
  ['节点聚焦', 'notes/graph', ['obsidian'], ['图谱视图', '局部图谱']],
  ['局部图谱', 'notes/graph', ['obsidian'], ['节点聚焦', '图谱视图']],
  ['Markdown 语法', 'notes/writing', ['写作'], ['双链笔记', '写作工作流']],
  ['写作工作流', 'notes/writing', ['写作'], ['Markdown 语法', '周复盘模板', '每日笔记']],
  ['每日笔记', 'journal', ['journal'], ['知识管理', '写作工作流']],
  ['周复盘模板', 'journal', ['journal', '模板'], ['写作工作流', '知识管理']],
  ['项目 A 复盘', 'projects', ['项目'], ['知识管理', '写作工作流']],
  ['项目 B 计划', 'projects', ['项目', '草稿'], ['项目 A 复盘']],
  ['读书笔记：深度工作', 'reading', ['reading'], ['知识管理', '卡片盒笔记法', '原子化笔记']],
  ['读书笔记：卡片笔记写作法', 'reading', ['reading'], ['卡片盒笔记法', '原子化笔记']],
  ['读书笔记：思考快与慢', 'reading', ['reading'], ['原子化笔记']],
  ['待整理', 'inbox', ['inbox'], ['知识管理']],
  ['剪藏：图谱可视化实践', 'inbox', ['inbox', '可视化'], ['图谱视图', '力导向布局']],
  ['演讲提纲', 'projects', ['草稿'], ['图谱视图', '写作工作流']]
];

const nodes = [];
const links = [];
const byLabel = new Map();
notes.forEach(([label, folder, tags, targets], i) => {
  const id = (folder ? folder + '/' : '') + label + '.md';
  byLabel.set(label, id);
  nodes.push({
    id, label, path: id, kind: 'note', ext: '.md', folder, tags,
    size: 900 + i * 13, mtime: 1700000000000 + i, degree: 0
  });
});
notes.forEach(([label, , , targets]) => {
  targets.forEach((t) => {
    const to = byLabel.get(t);
    if (to) links.push({ source: byLabel.get(label), target: to, kind: 'wiki' });
  });
});

// 两篇未创建的笔记 + 一张图片附件
['待写：知识图谱综述', '待写：向量检索'].forEach((t) => {
  nodes.push({ id: 'u:' + t, label: t, path: t, kind: 'unresolved', ext: '', folder: '', tags: [], size: 0, mtime: 0, degree: 0 });
});
links.push({ source: byLabel.get('图谱视图'), target: 'u:待写：知识图谱综述', kind: 'wiki' });
links.push({ source: byLabel.get('力导向布局'), target: 'u:待写：向量检索', kind: 'wiki' });

nodes.push({ id: 'assets/graph-demo.png', label: 'graph-demo', path: 'assets/graph-demo.png', kind: 'attachment', ext: '.png', folder: 'assets', tags: [], size: 204800, mtime: 0, degree: 0 });
links.push({ source: byLabel.get('图谱视图'), target: 'assets/graph-demo.png', kind: 'embed' });

const data = {
  nodes, links,
  stats: { notes: notes.length, attachments: 1, unresolved: 2, links: links.length },
  generatedAt: Date.now(),
  rootName: 'demo-vault'
};

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<title>预览</title>
<meta name="core-wasm" content="../media/core.wasm" />
<link rel="stylesheet" href="../media/graph.css" />
<style>
  /* 模拟 VS Code Dark+ 主题变量，便于脱离编辑器截图 */
  :root {
    --vscode-editor-background: #1e1e1e;
    --vscode-foreground: #cccccc;
    --vscode-descriptionForeground: #9d9d9d;
    --vscode-panel-border: #2b2b2b;
    --vscode-editorWidget-background: #252526;
    --vscode-input-background: #313131;
    --vscode-input-foreground: #cccccc;
    --vscode-input-border: #3c3c3c;
    --vscode-input-placeholderForeground: #8f8f8f;
    --vscode-focusBorder: #0078d4;
    --vscode-textLink-foreground: #3794ff;
    --vscode-toolbar-hoverBackground: rgba(90, 93, 94, 0.31);
    --vscode-scrollbarSlider-background: rgba(121, 121, 121, 0.4);
    --vscode-dropdown-background: #313131;
    --vscode-dropdown-foreground: #cccccc;
    --vscode-dropdown-border: #3c3c3c;
    --vscode-menu-selectionBackground: #04395e;
    --vscode-menu-selectionForeground: #ffffff;
    --vscode-notifications-background: #252526;
    --vscode-notifications-foreground: #cccccc;
    --vscode-icon-foreground: #cccccc;
    --vscode-errorForeground: #f48771;
    --vscode-font-family: "Segoe UI", "Microsoft YaHei", system-ui, sans-serif;
    --vscode-font-size: 13px;
    --vscode-editor-font-family: Consolas, monospace;
  }
  html, body { height: 100%; }
</style>
</head>
<body class="vscode-dark">
${body}
<script>
window.acquireVsCodeApi = function () {
  return {
    postMessage: function (m) { console.log('postMessage', m); },
    setState: function () {},
    getState: function () { return undefined; }
  };
};
// 无头截图环境下 rAF 不触发，用定时器模拟
window.__rafCount = 0;
window.requestAnimationFrame = function (cb) {
  window.__rafCount++;
  return setTimeout(function () { cb(performance.now()); }, 16);
};
window.setTimeout(function () {
  var c = document.getElementById('graph');
  document.title = 'canvas=' + c.width + 'x' + c.height + ' raf=' + window.__rafCount;
}, 3000);
</script>
<script src="../media/graph.js"></script>
<script>
setTimeout(function () {
  window.dispatchEvent(new MessageEvent('message', { data: { type: 'config', changed: false, config: {
    showOrphans: true, showUnresolved: true, showAttachments: true,
    colorMode: 'folder', nodeScale: 1, linkDistance: 90, repulsion: 1,
    labelThreshold: 0.5, openInNewTab: false
  } } }));
  window.dispatchEvent(new MessageEvent('message', { data: { type: 'graph', data: ${JSON.stringify(data)}, reset: true } }));
}, 20);
</script>
</body>
</html>`;

fs.writeFileSync(path.join(root, 'scripts/preview.html'), html);

// 浅色主题预览
const lightVars = `  :root {
    --vscode-editor-background: #ffffff;
    --vscode-foreground: #3b3b3b;
    --vscode-descriptionForeground: #717171;
    --vscode-panel-border: #e2e2e2;
    --vscode-editorWidget-background: #f8f8f8;
    --vscode-input-background: #ffffff;
    --vscode-input-foreground: #3b3b3b;
    --vscode-input-border: #cecece;
    --vscode-input-placeholderForeground: #767676;
    --vscode-focusBorder: #0090f1;
    --vscode-textLink-foreground: #006ab1;
    --vscode-toolbar-hoverBackground: rgba(184,184,184,0.31);
    --vscode-scrollbarSlider-background: rgba(100,100,100,0.4);
    --vscode-dropdown-background: #ffffff;
    --vscode-dropdown-foreground: #3b3b3b;
    --vscode-dropdown-border: #cecece;
    --vscode-menu-selectionBackground: #0060c0;
    --vscode-menu-selectionForeground: #ffffff;
    --vscode-notifications-background: #f8f8f8;
    --vscode-notifications-foreground: #3b3b3b;
    --vscode-icon-foreground: #424242;
    --vscode-errorForeground: #a1260d;
  }`;
const lightHtml = html
  .replace('class="vscode-dark"', 'class="vscode-light"')
  .replace('</head>', '<style>' + lightVars + '</style></head>');
fs.writeFileSync(path.join(root, 'scripts/preview-light.html'), lightHtml);
console.log('preview.html 已生成，节点', nodes.length, '连线', links.length);
