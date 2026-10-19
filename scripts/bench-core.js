#!/usr/bin/env node
/**
 * 内核基准测试。
 *
 *   node scripts/bench-core.js [笔记数量]
 *
 * 1. 解析吞吐：重构前的 TS 解析器 vs MoonBit 内核（内核侧包含 JSON 序列化，
 *    属于"偏保守"的对比）。
 * 2. 端到端建索引：MoonBit 内核完成「解析 + 路径解析 + 构图」的总耗时。
 * 3. 力导向布局：1000 个节点的每帧耗时（Barnes-Hut 全在 MoonBit 里跑）。
 */
'use strict';

const path = require('path');

const root = path.resolve(__dirname, '..');
const { MoonCore } = require(path.join(root, 'out', 'core', 'moonCore.js'));
const legacy = require(path.join(root, 'out', 'legacy', 'markdownParser.js'));

const count = Number(process.argv[2] || 2000);

function makeNote(i) {
  const lines = ['---', `tags: [topic-${i % 40}, cluster-${i % 7}]`, '---', '', `# 笔记 ${i}`, ''];
  for (let k = 0; k < 40; k++) {
    const target = (i + k * 37 + 1) % count;
    lines.push(`- 关联 [[笔记 ${target}]] 与 [[笔记 ${target}|别名]] #tag-${k % 12}`);
  }
  lines.push('', '```js', 'const x = "[[不该被解析]]";', '```', '');
  return lines.join('\n');
}

function time(label, fn) {
  const t0 = process.hrtime.bigint();
  const value = fn();
  const ms = Number(process.hrtime.bigint() - t0) / 1e6;
  return { label, ms, value };
}

(async () => {
  const files = [];
  for (let i = 0; i < count; i++) {
    files.push({ rel: `notes/group-${i % 25}/笔记 ${i}.md`, text: makeNote(i) });
  }
  const bytes = files.reduce((sum, f) => sum + Buffer.byteLength(f.text, 'utf8'), 0);
  console.log(`语料：${count} 篇笔记，${(bytes / 1024 / 1024).toFixed(1)} MB\n`);

  const core = await MoonCore.load({ mediaDir: path.join(root, 'media') });

  // ---------------------------------------------------------------- 解析
  const legacyParse = time('legacy', () => {
    let links = 0;
    for (const f of files) {
      links += legacy.parseMarkdown(f.text).links.length;
    }
    return links;
  });
  const coreParse = time('core', () => {
    let links = 0;
    for (const f of files) {
      links += core.parseMarkdown(f.text).links.length;
    }
    return links;
  });
  console.log('解析（含 JSON）');
  console.log(`  TypeScript  ${legacyParse.ms.toFixed(0)} ms   ${((legacyParse.ms / count) * 1000).toFixed(1)} µs/篇`);
  console.log(`  MoonBit     ${coreParse.ms.toFixed(0)} ms   ${((coreParse.ms / count) * 1000).toFixed(1)} µs/篇`);
  console.log(`  链接数一致：${legacyParse.value === coreParse.value} (${coreParse.value})\n`);

  // ---------------------------------------------------------------- 建索引
  core.resetVault();
  const index = time('index', () => {
    for (const f of files) {
      core.addNote(f.rel, Buffer.byteLength(f.text, 'utf8'), 0, f.text);
    }
    return core.buildGraph(16, Date.now(), 'bench');
  });
  console.log('端到端建索引（解析 + 解析链接 + 构图，全在 MoonBit 内）');
  console.log(
    `  ${index.ms.toFixed(0)} ms   节点 ${index.value.nodes.length} / 连线 ${index.value.links.length} / 未解析 ${index.value.stats.unresolved}`
  );
  console.log(`  吞吐 ${((count / index.ms) * 1000).toFixed(0)} 篇/秒\n`);

  // ---------------------------------------------------------------- 布局
  const N = 1000;
  core.layout.reset();
  for (let i = 0; i < N; i++) {
    core.layout.addNode(3, 5);
    core.layout.seed(i, Math.cos(i) * 300, Math.sin(i) * 300);
  }
  for (let i = 0; i < N; i++) {
    core.layout.addLink(i, (i * 7 + 13) % N);
  }
  const frames = 120;
  const layoutTime = time('layout', () => {
    let alpha = 1;
    for (let f = 0; f < frames; f++) {
      core.layout.step(alpha, 90, 1);
      alpha *= 0.99;
    }
    return core.layout.x(0);
  });
  console.log('力导向布局（Barnes-Hut，1000 节点）');
  console.log(
    `  ${frames} 帧 ${layoutTime.ms.toFixed(0)} ms   ${(layoutTime.ms / frames).toFixed(2)} ms/帧   ${((frames / layoutTime.ms) * 1000).toFixed(0)} 帧/秒`
  );
})();
