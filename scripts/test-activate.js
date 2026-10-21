/**
 * 激活流程测试：用桩 vscode 模块执行 activate()，检查命令注册与索引预热。
 * 运行：NODE_PATH=/tmp/vscode-stub/node_modules node scripts/test-activate.js
 */
const path = require('path');
const vscode = require('vscode');
const root = path.resolve(__dirname, '..');
const ext = require(path.join(root, 'out/extension.js'));

const store = vscode.__store;
store.files.set('F:/ws/首页.md', '# 首页\n[[笔记 A]]\n');
store.files.set('F:/ws/笔记 A.md', '# A\n[[首页]]\n');

const context = { subscriptions: [], extensionUri: vscode.Uri.file(root), globalState: { get() {}, update() {} } };
const errors = [];

(async () => {
  try {
    await ext.activate(context);
  } catch (err) {
    errors.push('activate 抛错: ' + err.stack);
  }
  const registered = vscode.commands.__registered;
  console.log('已注册命令:', registered.join(', '));
  console.log('订阅数量:', context.subscriptions.length);

  const expected = [
    'markdownsInGraph.show',
    'markdownsInGraph.showLocal',
    'markdownsInGraph.showFolder',
    'markdownsInGraph.query',
    'markdownsInGraph.refresh'
  ];
  for (const id of expected) {
    const ok = registered.includes(id);
    console.log(`${ok ? 'PASS' : 'FAIL'}  注册 ${id}`);
    if (!ok) errors.push(id);
  }

  // 等待预热索引完成
  await new Promise((r) => setTimeout(r, 1600));
  const status = context.subscriptions.find((s) => s && s.text);
  console.log('状态栏文本:', status ? status.text : '(none)');

  console.log('错误:', errors.length ? errors : '无');
  process.exit(errors.length ? 1 : 0);
})();
