/**
 * 索引器测试：用桩 vscode 模块验证扫描、双链解析、别名、未解析节点与统计。
 * 运行：NODE_PATH=/tmp/vscode-stub/node_modules node scripts/test-indexer.js
 */
const path = require('path');
const vscode = require('vscode');
const root = path.resolve(__dirname, '..');
const { GraphIndexer } = require(path.join(root, 'out/indexer.js'));

const store = vscode.__store;
const base = 'F:/ws';

store.files.set(base + '/根目录.md', [
  '---',
  'tags: [moc]',
  '---',
  '[[notes/a]] [[b|别名]] [[不存在的笔记]]',
  '![](' + 'assets/pic.png)'
].join('\n'));
store.files.set(base + '/notes/a.md', '# A\n[[根目录]] [b](b.md) [[sub/deep]] [[b]]\n[[b]]\n');
store.files.set(base + '/notes/b.md', '# B\n[[a]]\n');
store.files.set(base + '/notes/sub/deep.md', '# Deep\n[[a]] #层级/深\n');
store.files.set(base + '/other/c.md', '# 孤立笔记\n');
store.files.set(base + '/assets/pic.png', 'PNG');

const output = { appendLine: (s) => console.log('   log>', s) };
const context = { subscriptions: [], extensionUri: { fsPath: path.resolve(__dirname, '..') } };

(async () => {
  const indexer = new GraphIndexer(context, output);
  await indexer.ensureReady();
  const graph = indexer.buildGraph();

  console.log('节点:');
  graph.nodes.forEach((n) => console.log(`  ${n.kind.padEnd(10)} ${n.id}  (degree=${n.degree}, tags=${n.tags.join('|') || '-'})`));
  console.log('连线:');
  graph.links.forEach((l) => console.log(`  ${l.source} -> ${l.target}  [${l.kind}]`));
  console.log('统计:', graph.stats);
  console.log('toRel ->', indexer.toRel(vscode.Uri.file(base + '/notes/a.md')));
  console.log('uriFor ->', indexer.uriFor('notes/b.md').fsPath);

  const queryResult = await indexer.runQuery(
    'SELECT count(*) AS n FROM note n',
    true
  );
  const checks = [
    ['笔记数量为 5', graph.stats.notes === 5],
    ['附件仅 1 个', graph.stats.attachments === 1],
    ['未解析 1 个', graph.stats.unresolved === 1],
    ['连线 9 条', graph.stats.links === 9],
    ['索引到标签', !!graph.nodes.find((n) => n.id === 'notes/sub/deep.md' && n.tags.includes('层级/深'))],
    ['未解析节点标签正确', !!graph.nodes.find((n) => n.id === 'u:不存在的笔记')],
    ['附件被引用进入图谱', !!graph.nodes.find((n) => n.id === 'assets/pic.png')],
    ['孤立笔记存在', !!graph.nodes.find((n) => n.id === 'other/c.md' && n.degree === 0)],
    ['NoteQL 查询可用', queryResult.ok === true && queryResult.rows?.[0]?.[0] === 5]
  ];
  let failed = 0;
  for (const [name, ok] of checks) {
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`);
    if (!ok) failed++;
  }
  indexer.dispose();
  process.exit(failed ? 1 : 0);
})();
