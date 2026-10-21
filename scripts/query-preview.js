#!/usr/bin/env node
/**
 * 生成 NoteQL 查询面板的静态预览（带 mock vscode API）。
 * 仅用于开发/截图，不随扩展分发。
 *
 *   node scripts/query-preview.js
 *   # 用浏览器打开 scripts/preview-query.html
 */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const panelSrc = fs.readFileSync(path.join(root, 'src/queryPanel.ts'), 'utf8');
const bodyStart = panelSrc.indexOf('<body>') + '<body>'.length;
const bodyEnd = panelSrc.indexOf('<script nonce');
if (bodyStart < 0 || bodyEnd < 0) {
  throw new Error('无法从 queryPanel.ts 提取 body');
}
const bodyHtml = panelSrc.slice(bodyStart, bodyEnd);

const examples = fs
  .readdirSync(path.join(root, 'queries'))
  .filter((name) => name.endsWith('.nql'))
  .sort()
  .map((name) => ({
    name: name.replace(/\.nql$/, ''),
    source: fs.readFileSync(path.join(root, 'queries', name), 'utf8').trim()
  }));

const relations = [
  { name: 'note', columns: ['path', 'label', 'folder', 'ext', 'size', 'mtime', 'degree', 'tags', 'in_degree', 'out_degree'] },
  { name: 'file', columns: ['path', 'kind', 'ext', 'size', 'mtime', 'folder'] },
  { name: 'link', columns: ['from', 'to', 'kind', 'raw', 'line', 'title', 'to_kind'] },
  { name: 'tag', columns: ['note', 'tag'] },
  { name: 'unresolved', columns: ['from', 'raw', 'target', 'line', 'kind'] },
  { name: 'ambiguous', columns: ['from', 'raw', 'target', 'line', 'candidates'] },
  { name: 'orphan', columns: ['path', 'degree'] },
  { name: 'cycle', columns: ['path', 'out_degree'] }
];

const stats = { hits: 3, misses: 1, cacheSize: 4, revision: 42, changeSeq: [8, 8, 8, 8, 8] };

const noteResult = {
  ok: true,
  cached: false,
  dependencies: ['note', 'graph'],
  columns: ['path', 'degree', 'in_deg', 'out_deg'],
  rows: [
    ['知识管理.md', 12, 8, 4],
    ['双链笔记.md', 10, 6, 4],
    ['图谱视图.md', 10, 6, 4],
    ['卡片盒笔记法.md', 6, 3, 3],
    ['首页.md', 4, 0, 4],
    ['未完成的想法.md', 0, 0, 0]
  ],
  rowCount: 6,
  totalRows: 6,
  scanned: 12,
  elapsedMs: 0.72
};

const unresolvedResult = {
  ok: true,
  cached: true,
  dependencies: ['unresolved'],
  columns: ['path', 'line', 'raw', 'target'],
  rows: [['知识管理.md', 11, '[[每日笔记]]', '每日笔记']],
  rowCount: 1,
  totalRows: 1,
  scanned: 1,
  elapsedMs: 0.18
};

const tagResult = {
  ok: true,
  cached: false,
  dependencies: ['tag'],
  columns: ['note', 'tag'],
  rows: [
    ['双链笔记.md', ['方法论']],
    ['卡片盒笔记法.md', ['方法论', 'pkm']],
    ['知识管理.md', ['方法论', 'pkm']],
    ['图谱视图.md', ['obsidian', '可视化']]
  ],
  rowCount: 4,
  totalRows: 4,
  scanned: 17,
  elapsedMs: 0.31
};

const mock = `
<script>
window.__messages = [];
window.__state = null;
window.acquireVsCodeApi = function () {
  return {
    postMessage: function (msg) {
      window.__messages.push(msg);
      if (msg.type === 'ready') {
        setTimeout(function () {
          window.postMessage({
            type: 'init',
            examples: ${JSON.stringify(examples)},
            relations: ${JSON.stringify(relations)},
            stats: ${JSON.stringify(stats)},
            source: "SELECT n.path, n.degree, indegree(n.path) AS in_deg, outdegree(n.path) AS out_deg\\nFROM note n\\nORDER BY n.degree DESC, n.path\\nLIMIT 20",
            autoRefresh: true
          }, '*');
          setTimeout(function () {
            window.postMessage({ type: 'result', result: ${JSON.stringify(noteResult)}, stats: ${JSON.stringify(stats)} }, '*');
          }, 40);
        }, 20);
      } else if (msg.type === 'run') {
        var source = String(msg.source || '');
        var result = source.indexOf('unresolved') >= 0
          ? ${JSON.stringify(unresolvedResult)}
          : ${JSON.stringify(tagResult)};
        setTimeout(function () {
          window.postMessage({ type: 'result', result: result, stats: ${JSON.stringify(stats)} }, '*');
        }, 60);
      } else if (msg.type === 'clearCache') {
        setTimeout(function () {
          window.postMessage({ type: 'result', result: ${JSON.stringify(noteResult)}, stats: ${JSON.stringify({ ...stats, hits: 0, misses: 0, cacheSize: 0 })} }, '*');
        }, 30);
      }
    },
    getState: function () { return null; },
    setState: function (state) { window.__state = state; }
  };
};
</script>`;

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="../media/query.css" />
<title>NoteQL 预览</title>
</head>
<body class="vscode-dark">
${bodyHtml}
${mock}
<script src="../media/query.js"></script>
</body>
</html>`;

const out = path.join(root, 'scripts', 'preview-query.html');
fs.writeFileSync(out, html, 'utf8');
console.log(`已生成 ${path.relative(root, out)}`);
