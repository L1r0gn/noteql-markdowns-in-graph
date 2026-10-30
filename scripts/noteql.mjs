#!/usr/bin/env node
/**
 * NoteQL 命令行。
 *
 *   node scripts/noteql.mjs "SELECT n.path FROM note n LIMIT 5"
 *   node scripts/noteql.mjs --vault example-vault --queries queries
 *   node scripts/noteql.mjs --file queries/unresolved.nql --format json
 *
 * 退出码：
 *   0  查询成功（或没有命中行）
 *   1  查询/解析失败
 *   2  --fail-on-results 且查询返回了行
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const corePath = path.join(root, 'media', 'core.mjs');

const NOTE_EXT = new Set(['.md', '.markdown']);
const ATTACHMENT_EXT = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp', '.pdf',
  '.mp3', '.wav', '.mp4', '.webm', '.canvas'
]);

function parseArgs(argv) {
  const options = {
    vault: '',
    format: 'table',
    file: '',
    queries: '',
    useCache: true,
    failOnResults: false,
    listRelations: false,
    stats: false,
    query: ''
  };
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--vault') {
      options.vault = argv[++i] ?? '';
    } else if (arg === '--format') {
      options.format = (argv[++i] ?? 'table').toLowerCase();
    } else if (arg === '--file' || arg === '-f') {
      options.file = argv[++i] ?? '';
    } else if (arg === '--queries' || arg === '-q') {
      options.queries = argv[++i] ?? '';
    } else if (arg === '--no-cache') {
      options.useCache = false;
    } else if (arg === '--fail-on-results') {
      options.failOnResults = true;
    } else if (arg === '--list-relations') {
      options.listRelations = true;
    } else if (arg === '--stats') {
      options.stats = true;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg.startsWith('--')) {
      throw new Error(`未知选项：${arg}`);
    } else {
      positional.push(arg);
    }
  }
  options.query = positional.join(' ').trim();
  return options;
}

function usage() {
  console.log(`NoteQL · Markdown 知识图查询

用法：
  node scripts/noteql.mjs [查询] [选项]

选项：
  --vault <目录>        要索引的笔记目录（默认 example-vault，不存在则当前目录）
  --file, -f <文件>     从文件读取查询
  --queries, -q <目录>  批量执行目录下所有 .nql 文件
  --format <格式>       table | json | csv | sarif（默认 table）
  --no-cache            关闭查询结果缓存
  --fail-on-results     有结果行时退出码为 2（适合 CI 体检）
  --list-relations      列出内置关系与列
  --stats               在 stderr 输出缓存统计
  --help, -h            显示帮助

示例：
  node scripts/noteql.mjs "SELECT n.path FROM note n ORDER BY n.path LIMIT 5"
  node scripts/noteql.mjs --queries queries --format json
  node scripts/noteql.mjs --file queries/unresolved.nql --format sarif
`);
}

function walkVault(dir, files) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkVault(full, files);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (NOTE_EXT.has(ext) || ATTACHMENT_EXT.has(ext)) {
        files.push(full);
      }
    }
  }
}

function toRel(base, full) {
  return path.relative(base, full).split(path.sep).join('/');
}

function loadVault(core, vaultDir) {
  const files = [];
  walkVault(vaultDir, files);
  files.sort((a, b) => toRel(vaultDir, a).localeCompare(toRel(vaultDir, b)));
  core.vault_reset();
  let notes = 0;
  for (const full of files) {
    const rel = toRel(vaultDir, full);
    const stat = fs.statSync(full);
    const ext = path.extname(rel).toLowerCase();
    if (NOTE_EXT.has(ext)) {
      core.vault_add_note(rel, stat.size, stat.mtimeMs, fs.readFileSync(full, 'utf8'));
      notes++;
    } else {
      core.vault_add_attachment(rel, stat.size, stat.mtimeMs);
    }
  }
  return { files: files.length, notes };
}

function displayValue(value) {
  if (value === null || value === undefined) return '';
  if (Array.isArray(value)) return value.join(' | ');
  return String(value);
}

function truncate(text, width) {
  if (text.length <= width) return text;
  return `${text.slice(0, Math.max(0, width - 1))}…`;
}

function formatTable(result) {
  const columns = result.columns ?? [];
  const rows = result.rows ?? [];
  const widths = columns.map((column) => Math.max(column.length, 4));
  const cells = rows.map((row) =>
    row.map((value) => truncate(displayValue(value), 48))
  );
  for (const row of cells) {
    for (let i = 0; i < row.length; i++) {
      widths[i] = Math.max(widths[i], row[i].length);
    }
  }
  const line = (values) =>
    values.map((value, i) => value.padEnd(widths[i] ?? 0)).join('  ');
  const out = [];
  out.push(line(columns));
  out.push(widths.map((width) => '-'.repeat(width)).join('  '));
  for (const row of cells) {
    out.push(line(row));
  }
  return out.join('\n');
}

function csvEscape(text) {
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function formatCsv(result) {
  const columns = result.columns ?? [];
  const lines = [columns.map(csvEscape).join(',')];
  for (const row of result.rows ?? []) {
    lines.push(row.map((value) => csvEscape(displayValue(value))).join(','));
  }
  return lines.join('\n');
}

function sarifRuleId(name) {
  const base = String(name || '').replace(/\.nql$/i, '').trim();
  return base ? `noteql/${base}` : 'noteql';
}

const LOCATION_COLUMNS = ['path', 'from', 'note', 'file'];

function findRepoRoot(startDir) {
  let dir = path.resolve(startDir);
  for (;;) {
    if (fs.existsSync(path.join(dir, '.git'))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

// GitHub code scanning 要求仓库根相对、URI 编码的路径；定位不到真实文件时返回 null。
function resolveSarifUri(row, columns, { vaultDir, repoRoot }) {
  const locatorIndex = LOCATION_COLUMNS
    .map((column) => columns.indexOf(column))
    .find((index) => index >= 0 && row[index] != null && String(row[index]).trim() !== '');
  if (locatorIndex === undefined) return null;
  const absPath = path.resolve(vaultDir, String(row[locatorIndex]));
  let stat;
  try {
    stat = fs.statSync(absPath);
  } catch {
    return null;
  }
  if (!stat.isFile()) return null;
  let relative = null;
  if (repoRoot) {
    const candidate = path.relative(repoRoot, absPath);
    if (candidate && !candidate.startsWith('..') && !path.isAbsolute(candidate)) {
      relative = candidate;
    }
  }
  if (!relative) {
    const candidate = path.relative(vaultDir, absPath);
    if (!candidate || candidate.startsWith('..') || path.isAbsolute(candidate)) return null;
    relative = candidate;
  }
  return relative.split(path.sep).map(encodeURIComponent).join('/');
}

function sarifRegion(row, columns) {
  const lineIndex = columns.findIndex((column) => column === 'line');
  let startLine = 1;
  if (lineIndex >= 0) {
    const value = Number(row[lineIndex]);
    if (Number.isInteger(value) && value > 0) startLine = value;
  }
  return { startLine, startColumn: 1, endLine: startLine, endColumn: 2 };
}

function buildSarifRun(entries, context) {
  const rules = [];
  const results = [];
  const omitted = [];
  for (const { result, query, name } of entries) {
    const columns = result.columns ?? [];
    const ruleId = sarifRuleId(name);
    const ruleIndex = rules.length;
    rules.push({
      id: ruleId,
      name: name ? `NoteQLQuery:${String(name).replace(/\.nql$/i, '')}` : 'NoteQLQuery',
      shortDescription: {
        text: name ? `NoteQL query ${name}` : 'NoteQL query result'
      },
      help: { text: query }
    });
    let skipped = 0;
    for (const row of result.rows ?? []) {
      const uri = resolveSarifUri(row, columns, context);
      if (!uri) {
        skipped += 1;
        continue;
      }
      const message = columns.map((column, i) => `${column}=${displayValue(row[i])}`).join(' · ');
      results.push({
        ruleId,
        ruleIndex,
        level: 'warning',
        message: { text: message || 'NoteQL result' },
        locations: [
          {
            physicalLocation: {
              artifactLocation: { uri },
              region: sarifRegion(row, columns)
            }
          }
        ]
      });
    }
    if (skipped > 0) omitted.push({ name: name || 'query', count: skipped });
  }
  return {
    run: {
      tool: {
        driver: {
          name: 'NoteQL',
          informationUri: 'https://github.com/L1r0gn/markdowns-in-graph-moonbit',
          version: '2.1.0',
          rules
        }
      },
      results
    },
    omitted
  };
}

// GitHub code scanning 拒绝同一 category 的多个 run，批量查询必须合并进单个 run。
function sarifLog(runs) {
  return JSON.stringify(
    {
      $schema: 'https://json.schemastore.org/sarif-2.1.0.json',
      version: '2.1.0',
      runs
    },
    null,
    2
  );
}

function reportOmitted(omitted) {
  for (const { name, count } of omitted) {
    console.error(
      `[${name}] ${count} 条结果没有可定位的仓库内文件，未写入 SARIF（table / json / csv 输出不受影响）`
    );
  }
}

function formatSarif(result, query, context, name) {
  return buildSarifRun([{ result, query, name }], context);
}

function printResult(result, query, options, context, name) {
  if (options.format === 'json') {
    console.log(JSON.stringify(result, null, 2));
  } else if (options.format === 'csv') {
    console.log(formatCsv(result));
  } else if (options.format === 'sarif') {
    const { run, omitted } = formatSarif(result, query, context, name);
    console.log(sarifLog([run]));
    reportOmitted(omitted);
  } else {
    console.log(formatTable(result));
    const cacheState = result.cached ? 'warm' : 'cold';
    console.log(
      `\n${result.rowCount} row(s) · ${cacheState} · scanned ${result.scanned} · ` +
        `deps ${(result.dependencies ?? []).join(', ')}`
    );
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    usage();
    return;
  }
  if (!fs.existsSync(corePath)) {
    throw new Error(`找不到 ${corePath}，请先运行 npm run core:build`);
  }
  const core = await import(pathToFileURL(corePath).href);

  if (options.listRelations) {
    console.log(JSON.stringify(JSON.parse(core.noteql_relations()), null, 2));
    return;
  }

  const vaultDir = path.resolve(
    options.vault || (fs.existsSync(path.join(root, 'example-vault')) ? path.join(root, 'example-vault') : process.cwd())
  );
  if (!fs.existsSync(vaultDir) || !fs.statSync(vaultDir).isDirectory()) {
    throw new Error(`笔记目录不存在：${vaultDir}`);
  }
  const locationContext = { vaultDir, repoRoot: findRepoRoot(vaultDir) };
  const started = process.hrtime.bigint();
  const loaded = loadVault(core, vaultDir);
  const indexMs = Number(process.hrtime.bigint() - started) / 1e6;

  const sources = [];
  if (options.queries) {
    const dir = path.resolve(options.queries);
    const files = fs
      .readdirSync(dir)
      .filter((name) => name.toLowerCase().endsWith('.nql'))
      .sort();
    for (const name of files) {
      sources.push({ name, source: fs.readFileSync(path.join(dir, name), 'utf8') });
    }
  } else if (options.file) {
    const file = path.resolve(options.file);
    sources.push({ name: path.basename(file), source: fs.readFileSync(file, 'utf8') });
  } else if (options.query) {
    sources.push({ name: 'query', source: options.query });
  } else {
    usage();
    process.exitCode = 1;
    return;
  }

  if (options.format === 'table' && sources.length > 1) {
    console.log(
      `索引 ${loaded.notes} 篇笔记 / ${loaded.files} 个文件（${indexMs.toFixed(1)} ms）`
    );
  }

  let totalRows = 0;
  let failed = false;
  const batchJson = [];
  const batchEntries = [];
  for (const { name, source } of sources) {
    if (sources.length > 1 && (options.format === 'table' || options.format === 'csv')) {
      console.log(`\n# ${name}`);
    }
    const t0 = process.hrtime.bigint();
    const raw = core.noteql_run(source, options.useCache ? 1 : 0);
    const elapsed = Number(process.hrtime.bigint() - t0) / 1e6;
    const parsed = JSON.parse(raw);
    if (!parsed.ok) {
      console.error(`[${name}] ${parsed.error}`);
      failed = true;
      continue;
    }
    totalRows += parsed.rowCount ?? 0;
    if (sources.length > 1 && options.format === 'json') {
      batchJson.push({ query: name, ...parsed });
      continue;
    }
    if (sources.length > 1 && options.format === 'sarif') {
      batchEntries.push({ result: parsed, query: source, name });
      continue;
    }
    printResult(parsed, source, options, locationContext, sources.length > 1 ? name : '');
    if (options.format === 'table') {
      console.log(`耗时 ${elapsed.toFixed(2)} ms`);
    }
  }

  if (batchJson.length > 0) {
    console.log(JSON.stringify(batchJson, null, 2));
  }
  if (batchEntries.length > 0) {
    const { run, omitted } = buildSarifRun(batchEntries, locationContext);
    console.log(sarifLog([run]));
    reportOmitted(omitted);
  }

  if (options.stats) {
    console.error(core.noteql_stats());
  }
  if (failed) {
    process.exitCode = 1;
  } else if (options.failOnResults && totalRows > 0) {
    process.exitCode = 2;
  }
}

main().catch((err) => {
  console.error(String(err?.stack ?? err));
  process.exitCode = 1;
});
