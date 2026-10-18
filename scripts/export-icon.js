/**
 * 将 resources/icon.svg 导出为多尺寸 PNG（保留透明通道）。
 * 用法：node scripts/export-icon.js
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

const svgUrl = 'file:///' + path.join(ROOT, 'resources', 'icon.svg').replace(/\\/g, '/');

const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body>
<div id="o256"></div>
<div id="o128"></div>
<div id="alpha"></div>
<script>
function exportAt(size) {
  return new Promise(function (resolve) {
    var img = new Image();
    img.onload = function () {
      var c = document.createElement('canvas');
      c.width = size; c.height = size;
      var ctx = c.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, size, size);
      var corner = ctx.getImageData(2, 2, 1, 1).data[3];
      resolve({ data: c.toDataURL('image/png'), corner: corner });
    };
    img.onerror = function () { resolve({ data: '', corner: -1 }); };
    img.src = ${JSON.stringify(svgUrl)};
  });
}
Promise.all([exportAt(256), exportAt(128)]).then(function (res) {
  document.getElementById('o256').setAttribute('data-png', res[0].data);
  document.getElementById('o128').setAttribute('data-png', res[1].data);
  document.getElementById('alpha').textContent = 'cornerAlpha256=' + res[0].corner + ' cornerAlpha128=' + res[1].corner;
});
</script>
</body></html>`;

const htmlPath = path.join(os.tmpdir(), 'icon-export.html');
fs.writeFileSync(htmlPath, html, 'utf8');

const dom = execFileSync(
  EDGE,
  [
    '--headless=new',
    '--disable-gpu',
    '--allow-file-access-from-files',
    '--virtual-time-budget=4000',
    '--dump-dom',
    'file:///' + htmlPath.replace(/\\/g, '/')
  ],
  { maxBuffer: 128 * 1024 * 1024 }
).toString('utf8');

const alphaMatch = /cornerAlpha256=(-?\d+) cornerAlpha128=(-?\d+)/.exec(dom);
console.log('角落透明度:', alphaMatch ? `256=${alphaMatch[1]} 128=${alphaMatch[2]}` : '未获取到');

for (const size of [256, 128]) {
  const id = 'o' + size;
  const re = new RegExp(`id="${id}"[^>]*data-png="data:image/png;base64,([^"]+)"`);
  const m = re.exec(dom);
  if (!m) {
    console.error(`未取到 ${size}px 导出结果`);
    process.exitCode = 1;
    continue;
  }
  // 128 直接作为 package.json 引用的正式图标，避免出现重复副本
  const name = size === 128 ? 'icon.png' : `icon-${size}.png`;
  const file = path.join(ROOT, 'resources', name);
  fs.writeFileSync(file, Buffer.from(m[1], 'base64'));
  console.log('已写入', file, fs.statSync(file).size, 'bytes');
}
