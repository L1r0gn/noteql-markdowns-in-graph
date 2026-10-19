#!/usr/bin/env node
/**
 * 一致性回归：逐文件比较「重构前的 TypeScript 解析器」与「MoonBit 内核」的输出。
 *
 *   node scripts/parity-check.js [目录]
 *
 * 默认比较 example-vault。任何链接目标、类型、行号或标签集合的差异都会报错，
 * 用于证明重构没有改变图谱语义。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const { MoonCore } = require(path.join(root, 'out', 'core', 'moonCore.js'));
const legacy = require(path.join(root, 'out', 'legacy', 'markdownParser.js'));

const target = process.argv[2] ? path.resolve(process.argv[2]) : path.join(root, 'example-vault');

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const abs = path.join(dir, name);
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) {
      walk(abs, out);
    } else if (/\.(md|markdown)$/i.test(name)) {
      out.push(abs);
    }
  }
  return out;
}

function normalizeLinks(links) {
  return links.map((l) => `${l.kind}\t${l.line}\t${l.target}\t${l.title || l.alias || ''}`);
}

(async () => {
  const core = await MoonCore.load({ mediaDir: path.join(root, 'media') });
  const files = walk(target);
  let failures = 0;

  for (const abs of files) {
    const text = fs.readFileSync(abs, 'utf8');
    const rel = path.relative(target, abs).replace(/\\/g, '/');

    const expected = legacy.parseMarkdown(text);
    const actual = core.parseMarkdown(text);

    const a = normalizeLinks(expected.links);
    const b = normalizeLinks(actual.links);
    const sameLinks = a.length === b.length && a.every((line, i) => line === b[i]);
    const sameTags =
      expected.tags.length === actual.tags.length &&
      expected.tags.every((tag, i) => tag === actual.tags[i]);

    if (sameLinks && sameTags) {
      continue;
    }
    failures++;
    console.error(`\n✗ ${rel}`);
    if (!sameLinks) {
      console.error('  期望链接:', JSON.stringify(a));
      console.error('  实际链接:', JSON.stringify(b));
    }
    if (!sameTags) {
      console.error('  期望标签:', JSON.stringify(expected.tags));
      console.error('  实际标签:', JSON.stringify(actual.tags));
    }
  }

  if (failures === 0) {
    console.log(`✓ ${files.length} 个文件解析结果完全一致（TypeScript ⇄ MoonBit）`);
    process.exit(0);
  }
  console.error(`\n${failures}/${files.length} 个文件存在差异`);
  process.exit(1);
})();
