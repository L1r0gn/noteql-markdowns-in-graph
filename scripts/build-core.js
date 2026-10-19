#!/usr/bin/env node
/**
 * 构建 MoonBit 内核并把产物复制到 media/ 下。
 *
 *   node scripts/build-core.js           # wasm-gc + js 两份产物
 *   node scripts/build-core.js --wasm    # 只构建 wasm-gc
 *   node scripts/build-core.js --js      # 只构建 js
 *
 * 产物：
 *   media/core.wasm   首选后端（WebAssembly + js-string builtins）
 *   media/core.mjs    退路后端（老运行时没有 WasmGC 时使用）
 *
 * Windows 提示：如果 `moonc` 因为 `\\?\` 前缀报 `Sys_error("\\\\?")`，
 * 先设置环境变量 MOONC_OVERRIDE 指向一个去掉该前缀的包装器
 * （见 docs/MOONBIT.md）。
 */
'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const coreDir = path.join(root, 'core');
const mediaDir = path.join(root, 'media');

const args = process.argv.slice(2);
const onlyWasm = args.includes('--wasm');
const onlyJs = args.includes('--js');

function moon(buildArgs) {
  const exe = process.env.MOON_EXE || 'moon';
  // Windows 下 shell: true 才能解析 .cmd 包装器
  const needsShell = process.platform === 'win32' && /\.(cmd|bat)$/i.test(exe);
  const result = spawnSync(exe, ['-C', coreDir, ...buildArgs], {
    stdio: 'inherit',
    shell: needsShell,
    env: process.env
  });
  return result.status === 0 || result.status === null;
}

function copy(from, to) {
  if (!fs.existsSync(from)) {
    console.error(`[core] 找不到构建产物：${from}`);
    process.exitCode = 1;
    return false;
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
  const kb = (fs.statSync(to).size / 1024).toFixed(1);
  console.log(`[core] ${path.relative(root, to)}  (${kb} KB)`);
  return true;
}

const targets = [];
if (!onlyJs) {
  targets.push({ target: 'wasm-gc', ext: '.wasm', out: 'core.wasm' });
}
if (!onlyWasm) {
  targets.push({ target: 'js', ext: '.js', out: 'core.mjs' });
}

let ok = true;
for (const item of targets) {
  console.log(`[core] moon build --target ${item.target} --release`);
  if (!moon(['build', '--target', item.target, '--release'])) {
    console.error(`[core] 构建 ${item.target} 失败`);
    ok = false;
    continue;
  }
  const buildDir = path.join(coreDir, '_build', item.target, 'release', 'build');
  const artifact = path.join(buildDir, `markdowns-in-graph-core${item.ext}`);
  ok = copy(artifact, path.join(mediaDir, item.out)) && ok;
}

process.exit(ok ? 0 : 1);
