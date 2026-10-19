#!/usr/bin/env node
/**
 * Webview × MoonBit 内核冒烟测试。
 *
 *   node scripts/smoke-core.js [url]
 *
 * 默认打开 scripts/preview.html（需要先跑 `node scripts/preview.js`，
 * 并用静态服务器托管仓库根目录）。脚本用 Edge/Chrome 的 CDP 检查：
 *   1. 页面没有抛异常；
 *   2. Webview 成功把 MoonBit 编译的 core.wasm 跑起来（window.__graphCore === 'wasm'）；
 *   3. canvas 上有实际绘制（非空白）。
 */
'use strict';

const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const BROWSERS = [
  process.env.EDGE_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe'
].filter(Boolean);

const browser = BROWSERS.find((p) => fs.existsSync(p));
if (!browser) {
  console.error('找不到 Edge/Chrome，跳过冒烟测试');
  process.exit(0);
}

const url = process.argv[2] || 'http://127.0.0.1:8765/scripts/preview.html';
const port = 9344;
const userDir = path.join(os.tmpdir(), 'graph-smoke-' + Date.now());

const child = spawn(
  browser,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--window-size=1400,900',
    '--remote-debugging-port=' + port,
    '--user-data-dir=' + userDir,
    'about:blank'
  ],
  { stdio: 'ignore' }
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getTarget() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const list = await res.json();
      const page = list.find((t) => t.type === 'page');
      if (page && page.webSocketDebuggerUrl) {
        return page;
      }
    } catch {
      /* retry */
    }
    await sleep(200);
  }
  throw new Error('无法连接 CDP');
}

(async () => {
  const target = await getTarget();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  const exceptions = [];
  const logs = [];

  const send = (method, params) =>
    new Promise((resolve, reject) => {
      const msgId = ++id;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params: params || {} }));
    });

  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const p = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) {
        p.reject(new Error(JSON.stringify(msg.error)));
      } else {
        p.resolve(msg.result);
      }
      return;
    }
    if (msg.method === 'Runtime.exceptionThrown') {
      exceptions.push(msg.params.exceptionDetails.text || 'exception');
    }
    if (msg.method === 'Runtime.consoleAPICalled') {
      logs.push(msg.params.args.map((a) => String(a.value)).join(' '));
    }
  });

  await new Promise((r) => ws.addEventListener('open', r));
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Page.navigate', { url });
  await sleep(5000);

  const engine = await send('Runtime.evaluate', {
    expression: 'window.__graphCore || "pending"',
    returnByValue: true
  });
  const painted = await send('Runtime.evaluate', {
    expression:
      '(function(){var c=document.querySelector("canvas");if(!c)return 0;' +
      'var x=c.getContext("2d");var d=x.getImageData(0,0,c.width,c.height).data;' +
      'var n=0;for(var i=3;i<d.length;i+=4){if(d[i]>8)n++;}return n;})()',
    returnByValue: true
  });

  const backend = engine.result.value;
  const pixels = painted.result.value;

  console.log('引擎：', backend);
  console.log('已绘制像素：', pixels);
  if (logs.length) {
    console.log('控制台：', logs.slice(-3).join(' | '));
  }

  child.kill();
  try {
    fs.rmSync(userDir, { recursive: true, force: true });
  } catch {
    /* Windows 上浏览器进程可能还没完全退出，临时目录留给系统清理 */
  }

  const ok = exceptions.length === 0 && backend === 'wasm' && pixels > 1000;
  if (!ok) {
    console.error('异常：', exceptions);
    process.exit(1);
  }
  console.log('✓ Webview 正在使用 MoonBit 内核');
})();
