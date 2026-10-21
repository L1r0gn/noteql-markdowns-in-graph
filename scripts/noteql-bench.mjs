#!/usr/bin/env node
/**
 * NoteQL 基准：冷查询、热缓存、无关编辑后的缓存命中、相关编辑后的重算。
 *
 *   node scripts/noteql-bench.mjs [笔记数量]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const corePath = path.join(root, 'media', 'core.mjs');
const count = Number(process.argv[2] || 2000);

if (!fs.existsSync(corePath)) {
  console.error(`找不到 ${corePath}，请先运行 npm run core:build`);
  process.exit(1);
}
const core = await import(pathToFileURL(corePath).href);

function makeNote(i) {
  const lines = [
    '---',
    `tags: [topic-${i % 40}, cluster-${i % 7}]`,
    '---',
    `# 笔记 ${i}`,
    ''
  ];
  for (let k = 0; k < 40; k++) {
    const target = (i + k * 37 + 1) % count;
    lines.push(`- 关联 [[笔记 ${target}]] 与 [[笔记 ${target}|别名]] #tag-${k % 12}`);
  }
  return lines.join('\n');
}

function relOf(i) {
  return `notes/group-${i % 25}/笔记 ${i}.md`;
}

function ms(fn) {
  const t0 = process.hrtime.bigint();
  const value = fn();
  return { ms: Number(process.hrtime.bigint() - t0) / 1e6, value };
}

function run(source, useCache = 1) {
  const result = JSON.parse(core.noteql_run(source, useCache));
  if (!result.ok) {
    throw new Error(result.error || 'query failed');
  }
  return result;
}

const t0 = process.hrtime.bigint();
core.vault_reset();
for (let i = 0; i < count; i++) {
  const text = makeNote(i);
  core.vault_add_note(relOf(i), Buffer.byteLength(text), i, text);
}
const indexMs = Number(process.hrtime.bigint() - t0) / 1e6;

const tagQuery =
  "SELECT t.note, t.tag FROM tag t WHERE t.tag = 'topic-3' ORDER BY t.note";
const graphQuery =
  "SELECT n.path, indegree(n.path) AS refs FROM note n " +
  "WHERE indegree(n.path) = 0 ORDER BY n.path LIMIT 200";
const reachQuery = `SELECT n.path, distance('${relOf(0)}', n.path) AS hops FROM note n ` +
  `WHERE distance('${relOf(0)}', n.path) >= 0 ORDER BY hops, n.path LIMIT 100`;

const index = { ms: indexMs };
const tagCold = ms(() => run(tagQuery, 1));
const tagWarm = ms(() => run(tagQuery, 1));
const graphCold = ms(() => run(graphQuery, 1));
const reachCold = ms(() => run(reachQuery, 1));

// 只改链接、不改标签：tag 查询应命中缓存。
core.vault_add_note(relOf(1), 1, 1, `${makeNote(1)}\n[[笔记 2]]`);
const tagAfterLinkEdit = ms(() => run(tagQuery, 1));
const graphAfterLinkEdit = ms(() => run(graphQuery, 1));

// 改标签：tag 查询必须重算。
core.vault_add_note(relOf(2), 1, 1, `${makeNote(2)}\n#extra`);
const tagAfterTagEdit = ms(() => run(tagQuery, 1));

function line(name, value, extra = '') {
  console.log(`  ${name.padEnd(30)} ${value.toFixed(2).padStart(9)} ms  ${extra}`);
}

console.log(`语料：${count} 篇笔记 / 约 ${(count * 40).toLocaleString()} 条链接\n`);
line('端到端建索引', index.ms);
console.log('\n查询');
line('tag 过滤 · 冷', tagCold.ms, `${tagCold.value.rowCount} 行`);
line('tag 过滤 · 热缓存', tagWarm.ms, tagWarm.value.cached ? '缓存命中' : '未命中');
line('图函数 indegree · 冷', graphCold.ms, `${graphCold.value.rowCount} 行`);
line('递归 distance · 冷', reachCold.ms, `${reachCold.value.rowCount} 行`);
console.log('\n增量');
line('仅改链接后 · tag 查询', tagAfterLinkEdit.ms, tagAfterLinkEdit.value.cached ? '缓存命中' : '未命中');
line('仅改链接后 · 图查询', graphAfterLinkEdit.ms, graphAfterLinkEdit.value.cached ? '缓存命中' : '未命中（依赖链接）');
line('改标签后 · tag 查询', tagAfterTagEdit.ms, tagAfterTagEdit.value.cached ? '缓存命中' : '重算');
console.log('\n缓存统计');
console.log('  ' + core.noteql_stats());
