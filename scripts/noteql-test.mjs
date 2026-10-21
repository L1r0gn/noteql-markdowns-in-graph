#!/usr/bin/env node
/**
 * NoteQL 的 JS 后端与 CLI 冒烟测试。
 *
 *   node scripts/noteql-test.mjs
 */
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
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
assert.ok(sarif.runs[0].results.length >= 1);
assert.ok(sarif.runs[0].results[0].locations[0].physicalLocation.region.startLine >= 1);

console.log('NoteQL JS/CLI 冒烟测试通过');
