#!/usr/bin/env node
/**
 * NoteQL 的 JS 后端与 CLI 冒烟测试。
 *
 *   node scripts/noteql-test.mjs
 */
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const corePath = path.join(root, 'media', 'core.mjs');

if (!fs.existsSync(corePath)) {
  console.error(`找不到 ${corePath}，请先运行 npm run core:build`);
  process.exit(1);
}

const core = await import(pathToFileURL(corePath).href);

assert.equal(core.core_version(), '2.1.0');
assert.match(core.noteql_selftest(), /^ok:/);

core.vault_reset();
core.vault_add_note('a.md', 10, 1, '[[b]] #draft');
core.vault_add_note('b.md', 10, 2, '[[a]] #draft');
core.vault_add_note('c.md', 10, 3, '[[missing]] #done');

const first = JSON.parse(core.noteql_run(
  "SELECT n.path FROM note n WHERE n.tags CONTAINS 'draft' ORDER BY n.path",
  1
));
assert.equal(first.ok, true);
assert.equal(first.cached, false);
assert.deepEqual(first.rows.map((row) => row[0]), ['a.md', 'b.md']);
assert.equal(first.dependencies[0], 'note');

const second = JSON.parse(core.noteql_run(
  "SELECT n.path FROM note n WHERE n.tags CONTAINS 'draft' ORDER BY n.path",
  1
));
assert.equal(second.cached, true, '相同查询应命中缓存');

const tagQuery = "SELECT t.note, t.tag FROM tag t ORDER BY t.note, t.tag";
const tagFirst = JSON.parse(core.noteql_run(tagQuery, 1));
assert.equal(tagFirst.cached, false);
core.vault_add_note('a.md', 11, 4, '[[b]] [[c]] #draft');
const tagWarm = JSON.parse(core.noteql_run(tagQuery, 1));
assert.equal(tagWarm.cached, true, '只改链接不应让 tag 查询失效');
core.vault_add_note('a.md', 12, 5, '[[b]] [[c]] #draft #urgent');
const tagInvalid = JSON.parse(core.noteql_run(tagQuery, 1));
assert.equal(tagInvalid.cached, false, '改标签应让 tag 查询失效');

const unresolved = JSON.parse(core.noteql_run(
  'SELECT u.from, u.line FROM unresolved u ORDER BY u.from',
  1
));
assert.deepEqual(unresolved.rows, [['c.md', 1]]);

const cycles = JSON.parse(core.noteql_run('SELECT c.path FROM cycle c ORDER BY c.path', 1));
assert.deepEqual(cycles.rows.map((row) => row[0]), ['a.md', 'b.md']);

const invalid = JSON.parse(core.noteql_run('SELECT n.nope FROM note n', 1));
assert.equal(invalid.ok, false);
assert.match(invalid.error, /没有列/);

// CLI 端到端：example-vault 的 note 数
const cli = path.join(root, 'scripts', 'noteql.mjs');
const jsonOut = execFileSync(
  process.execPath,
  [cli, '--vault', path.join(root, 'example-vault'), '--format', 'json',
    'SELECT count(*) AS n FROM note n'],
  { encoding: 'utf8' }
);
const cliResult = JSON.parse(jsonOut);
assert.equal(cliResult.ok, true);
assert.equal(cliResult.rows[0][0], 12);

const sarifOut = execFileSync(
  process.execPath,
  [cli, '--vault', path.join(root, 'example-vault'), '--format', 'sarif',
    'SELECT u.from AS path, u.line, u.raw FROM unresolved u'],
  { encoding: 'utf8' }
);
const sarif = JSON.parse(sarifOut);
assert.equal(sarif.version, '2.1.0');
assert.equal(sarif.$schema, 'https://json.schemastore.org/sarif-2.1.0.json');
assert.equal(sarif.runs.length, 1);
assert.ok(sarif.runs[0].results.length >= 1);
for (const entry of sarif.runs[0].results) {
  const physical = entry.locations?.[0]?.physicalLocation;
  assert.ok(physical, '每条 SARIF result 都必须有物理位置');
  assert.ok(physical.artifactLocation.uri.startsWith('example-vault/'));
  assert.ok(!physical.artifactLocation.uri.includes('\\'));
  assert.ok(!physical.artifactLocation.uri.startsWith('/'));
  assert.ok(physical.region.startLine >= 1);
  assert.ok(
    fs.existsSync(path.join(root, decodeURIComponent(physical.artifactLocation.uri))),
    'SARIF URI 必须指向仓库内真实文件'
  );
}

const exampleVault = path.join(root, 'example-vault');

// 批量查询必须合并为单个 run，否则 GitHub code scanning 拒绝同一 category 的多个 run
const batch = spawnSync(
  process.execPath,
  [cli, '--vault', exampleVault, '--queries', path.join(root, 'queries'), '--format', 'sarif'],
  { encoding: 'utf8' }
);
assert.equal(batch.status, 0);
const batchSarif = JSON.parse(batch.stdout);
assert.equal(batchSarif.runs.length, 1, '批量 SARIF 只能有一个 run');
const batchRun = batchSarif.runs[0];
const queryCount = fs
  .readdirSync(path.join(root, 'queries'))
  .filter((name) => name.endsWith('.nql')).length;
assert.equal(batchRun.tool.driver.rules.length, queryCount, '每条查询应生成一条 rule');
assert.equal(
  new Set(batchRun.tool.driver.rules.map((rule) => rule.id)).size,
  queryCount,
  'rule id 必须唯一'
);
assert.ok(batchRun.results.length >= 1);
for (const entry of batchRun.results) {
  assert.equal(batchRun.tool.driver.rules[entry.ruleIndex].id, entry.ruleId);
  const physical = entry.locations?.[0]?.physicalLocation;
  assert.ok(physical, '批量 SARIF 的每条 result 都必须有物理位置');
  assert.ok(physical.artifactLocation.uri.startsWith('example-vault/'));
  assert.ok(!physical.artifactLocation.uri.includes('\\'));
  assert.ok(!physical.artifactLocation.uri.startsWith('/'));
  assert.ok(physical.region.startLine >= 1);
  assert.ok(
    fs.existsSync(path.join(root, decodeURIComponent(physical.artifactLocation.uri))),
    '批量 SARIF 的 URI 必须指向仓库内真实文件'
  );
}
assert.ok(batchRun.results.some((entry) => entry.ruleId === 'noteql/unresolved'));
const resultsByRule = new Map();
for (const entry of batchRun.results) {
  resultsByRule.set(entry.ruleId, (resultsByRule.get(entry.ruleId) ?? 0) + 1);
}
for (const aggregate of ['noteql/folder_summary', 'noteql/tag_usage']) {
  assert.equal(resultsByRule.get(aggregate) ?? 0, 0, `${aggregate} 没有文件位置，不应写入 SARIF`);
}
assert.match(batch.stderr, /folder_summary.*未写入 SARIF/);
assert.match(batch.stderr, /tag_usage.*未写入 SARIF/);

// 完全无法定位的聚合查询：不生成非法 SARIF result，但必须显式提示
const aggregate = spawnSync(
  process.execPath,
  [cli, '--vault', exampleVault, '--format', 'sarif', 'SELECT count(*) AS n FROM note n'],
  { encoding: 'utf8' }
);
assert.equal(aggregate.status, 0);
const aggregateSarif = JSON.parse(aggregate.stdout);
assert.equal(aggregateSarif.runs.length, 1);
assert.equal(aggregateSarif.runs[0].results.length, 0);
assert.match(aggregate.stderr, /1 条结果没有可定位的仓库内文件，未写入 SARIF/);

// --fail-on-results 仍以退出码 2 表示“有结果行”
const gate = spawnSync(
  process.execPath,
  [cli, '--vault', exampleVault, '--file', path.join(root, 'queries', 'unresolved.nql'),
    '--fail-on-results'],
  { encoding: 'utf8' }
);
assert.equal(gate.status, 2);

console.log('NoteQL JS/CLI 冒烟测试通过');
