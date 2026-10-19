/* ============================================================
 * Obsidian Graph — Webview 前端
 * 纯 Canvas 2D 实现：力导向布局 + 缩放平移 + 悬停高亮 + 局部聚焦
 * 不依赖任何第三方库
 * ============================================================ */
(function () {
  'use strict';

  var vscode = acquireVsCodeApi();

  // ------------------------------------------------------------ 常量

  var PALETTE_DARK = [
    '#7aa2f7', '#9ece6a', '#e0af68', '#bb9af7', '#7dcfff',
    '#f7768e', '#73daca', '#ff9e64', '#a9b1d6', '#c0caf5'
  ];
  var PALETTE_LIGHT = [
    '#3b6fd4', '#3f8f3f', '#b17a12', '#7c4dbe', '#1f7fa8',
    '#c2415a', '#1a8f7a', '#c2622a', '#5a6577', '#445066'
  ];

  var THEME = {
    dark: {
      link: 'rgba(152,165,192,0.22)',
      linkHl: 'rgba(140,180,255,0.62)',
      label: '#e4e9f4',
      labelDim: 'rgba(228,233,244,0.14)',
      halo: 'rgba(16,18,22,0.82)',
      dot: 'rgba(255,255,255,0.045)',
      ghost: 'rgba(196,146,255,0.62)',
      ring: '#8ab4ff',
      matchRing: '#e0af68',
      stroke: 'rgba(10,12,16,0.5)',
      activeRing: '#73daca'
    },
    light: {
      link: 'rgba(88,102,128,0.22)',
      linkHl: 'rgba(40,100,200,0.55)',
      label: '#202632',
      labelDim: 'rgba(32,38,50,0.14)',
      halo: 'rgba(255,255,255,0.88)',
      dot: 'rgba(0,0,0,0.05)',
      ghost: 'rgba(140,90,200,0.65)',
      ring: '#2f6fd0',
      matchRing: '#a86400',
      stroke: 'rgba(255,255,255,0.7)',
      activeRing: '#0f8f7a'
    }
  };

  var DEFAULTS = {
    showOrphans: true,
    showUnresolved: true,
    showAttachments: false,
    colorMode: 'folder',
    nodeScale: 1,
    linkDistance: 90,
    repulsion: 1,
    labelThreshold: 0.5,
    showLabels: true
  };

  // ------------------------------------------------------------ 状态

  var state = {
    rawNodes: [],
    rawLinks: [],
    rawById: new Map(),
    nodes: [],
    links: [],
    byId: new Map(),

    ctx: null,
    W: 1,
    H: 1,
    dpr: 1,
    font: 'system-ui, sans-serif',

    view: { k: 1, x: 0, y: 0 },
    target: null,

    alpha: 0,
    running: false,
    dirty: true,

    hoverId: null,
    selectedId: null,
    activeId: null,
    drag: null,
    pan: null,

    filters: {
      query: '',
      showOrphans: true,
      showUnresolved: true,
      showAttachments: false,
      matchesOnly: false,
      folders: [],
      tags: [],
      depth: 0,
      focus: null,
      folderScope: null
    },
    settings: Object.assign({}, DEFAULTS),
    openInNewTab: false,

    pinned: new Set(),
    savedPositions: null,
    matches: new Set(),
    colorCache: new Map(),
    theme: 'dark',
    initialized: false,
    fromSaved: false,
    hasSavedView: false,
    hoverCache: { id: null, neighbors: null }
  };

  // ------------------------------------------------------------ DOM

  function $(sel) {
    return document.querySelector(sel);
  }

  var canvas = $('#graph');
  var stage = $('#stage');
  var statsEl = $('#stats');
  var legendEl = $('#legend');
  var hintEl = $('#hint');
  var loadingEl = $('#loading');
  var emptyEl = $('#empty');
  var panelEl = $('#panel');
  var tipEl = $('#tip');
  var menuEl = $('#menu');
  var toastEl = $('#toast');
  var searchEl = $('#search');
  var searchClearEl = $('#search-clear');
  var zoomLabelEl = $('#zoom-label');
  var folderChipsEl = $('#folder-chips');
  var tagChipsEl = $('#tag-chips');
  var focusNameEl = $('#focus-name');
  var scopeSelectEl = $('#s-scope');
  var depthGroupEl = $('#depth-group');

  state.ctx = canvas.getContext('2d');

  // ------------------------------------------------------------ 工具

  function clamp(v, min, max) {
    return v < min ? min : v > max ? max : v;
  }

  function post(msg) {
    try {
      vscode.postMessage(msg);
    } catch (err) {
      /* ignore */
    }
  }

  function hashCode(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function withAlpha(hex, alpha) {
    if (!hex || hex.charAt(0) !== '#' || hex.length < 7) {
      return hex;
    }
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  function theme() {
    return THEME[state.theme];
  }

  function detectTheme() {
    var cl = document.body.classList;
    state.theme = cl.contains('vscode-light') || cl.contains('vscode-high-contrast-light')
      ? 'light'
      : 'dark';
  }

  function localPoint(e) {
    var rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  // ------------------------------------------------------------ 尺寸与相机

  function resize() {
    var rect = canvas.getBoundingClientRect();
    state.dpr = window.devicePixelRatio || 1;
    state.W = Math.max(1, Math.round(rect.width));
    state.H = Math.max(1, Math.round(rect.height));
    canvas.width = Math.round(state.W * state.dpr);
    canvas.height = Math.round(state.H * state.dpr);
    state.dirty = true;
  }

  function updateZoomLabel() {
    zoomLabelEl.textContent = Math.round(state.view.k * 100) + '%';
  }

  function setCamera(k, x, y, animate) {
    k = clamp(k, 0.06, 5);
    if (animate) {
      state.target = { k: k, x: x, y: y };
    } else {
      state.target = null;
      state.view.k = k;
      state.view.x = x;
      state.view.y = y;
      updateZoomLabel();
    }
    state.dirty = true;
  }

  function smoothCamera() {
    var t = state.target;
    if (!t) {
      return;
    }
    var v = state.view;
    v.k += (t.k - v.k) * 0.32;
    v.x += (t.x - v.x) * 0.32;
    v.y += (t.y - v.y) * 0.32;
    if (Math.abs(t.k - v.k) < 0.0008 && Math.abs(t.x - v.x) < 0.4 && Math.abs(t.y - v.y) < 0.4) {
      v.k = t.k;
      v.x = t.x;
      v.y = t.y;
      state.target = null;
    }
    updateZoomLabel();
    state.dirty = true;
  }

  function zoomAt(px, py, factor) {
    var base = state.target || state.view;
    var k2 = clamp(base.k * factor, 0.06, 5);
    var wx = (px - base.x) / base.k;
    var wy = (py - base.y) / base.k;
    setCamera(k2, px - wx * k2, py - wy * k2, true);
  }

  function zoomCenter(factor) {
    zoomAt(state.W / 2, state.H / 2, factor);
  }

  function fitView(animate) {
    if (!state.nodes.length) {
      return;
    }
    var minX = Infinity;
    var minY = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    for (var i = 0; i < state.nodes.length; i++) {
      var n = state.nodes[i];
      if (n.x < minX) minX = n.x;
      if (n.y < minY) minY = n.y;
      if (n.x > maxX) maxX = n.x;
      if (n.y > maxY) maxY = n.y;
    }
    var pad = 90;
    var bw = Math.max(maxX - minX, 60);
    var bh = Math.max(maxY - minY, 60);
    var k = clamp(
      Math.min((state.W - pad * 2) / bw, (state.H - pad * 2) / bh),
      0.06,
      2
    );
    var cx = (minX + maxX) / 2;
    var cy = (minY + maxY) / 2;
    setCamera(k, state.W / 2 - cx * k, state.H / 2 - cy * k, animate !== false);
  }

  function reheat(alpha) {
    state.alpha = Math.max(state.alpha, alpha);
    state.running = true;
    state.dirty = true;
  }

  // ------------------------------------------------------------ 图谱构建

  function initialPosition(index, total) {
    var count = Math.max(total, 12);
    var radius = 34 * Math.sqrt(count) + 90;
    var angle = index * 2.399963229728653;
    var r = Math.sqrt((index + 0.5) / count) * radius;
    return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
  }

  function createNode(raw, index, total) {
    var saved = state.savedPositions ? state.savedPositions[raw.id] : null;
    var p = saved && typeof saved[0] === 'number' ? { x: saved[0], y: saved[1] } : initialPosition(index, total);
    return {
      id: raw.id,
      label: raw.label,
      path: raw.path,
      kind: raw.kind,
      ext: raw.ext,
      folder: raw.folder || '',
      tags: raw.tags || [],
      degree: raw.degree || 0,
      x: p.x,
      y: p.y,
      vx: 0,
      vy: 0,
      radius: 5,
      color: '#888888',
      fixed: false
    };
  }

  function computeColor(node) {
    if (node.kind === 'unresolved') {
      return theme().ghost;
    }
    var mode = state.settings.colorMode;
    var key = mode + '|' + state.theme + '|' + node.id + '|' + node.degree;
    var cached = state.colorCache.get(key);
    if (cached) {
      return cached;
    }
    var pal = state.theme === 'light' ? PALETTE_LIGHT : PALETTE_DARK;
    var color;
    if (mode === 'single') {
      color = state.theme === 'light' ? '#4a7bd0' : '#7aa2f7';
    } else if (mode === 'degree') {
      var idx = Math.min(pal.length - 1, Math.floor(Math.sqrt(node.degree || 0)));
      color = pal[idx % pal.length];
    } else if (mode === 'tag') {
      color = pal[hashCode(node.tags[0] || node.folder || node.label) % pal.length];
    } else {
      color = pal[hashCode(node.folder || '(root)') % pal.length];
    }
    state.colorCache.set(key, color);
    return color;
  }

  function radiusFor(node) {
    var base = 3 + Math.min(7.5, Math.sqrt(node.degree || 0) * 1.55);
    if (node.kind === 'unresolved') {
      return Math.max(2.8, base * 0.7);
    }
    return base * state.settings.nodeScale;
  }

  function rebuild() {
    var prev = state.byId;
    var q = state.filters.query.trim().toLowerCase();

    state.matches = new Set();
    if (q) {
      for (var i = 0; i < state.rawNodes.length; i++) {
        var rn = state.rawNodes[i];
        var hit =
          rn.label.toLowerCase().indexOf(q) >= 0 ||
          rn.path.toLowerCase().indexOf(q) >= 0 ||
          (rn.tags || []).some(function (t) {
            return t.toLowerCase().indexOf(q) >= 0;
          });
        if (hit) {
          state.matches.add(rn.id);
        }
      }
    }

    var allowed = new Set();
    for (var j = 0; j < state.rawNodes.length; j++) {
      var n = state.rawNodes[j];
      if (n.kind === 'unresolved' && !state.filters.showUnresolved) continue;
      if (n.kind === 'attachment' && !state.filters.showAttachments) continue;
      if (state.filters.folders.length && state.filters.folders.indexOf(n.folder || '') < 0) continue;
      if (state.filters.folderScope) {
        var scopeDir = n.folder || '';
        if (scopeDir !== state.filters.folderScope && scopeDir.indexOf(state.filters.folderScope + '/') !== 0) continue;
      }
      if (state.filters.tags.length) {
        var hasTag = (n.tags || []).some(function (t) {
          return state.filters.tags.indexOf(t) >= 0;
        });
        if (!hasTag) continue;
      }
      if (state.filters.matchesOnly && q && !state.matches.has(n.id)) continue;
      allowed.add(n.id);
    }

    var degree = new Map();
    var linkPool = [];
    for (var l = 0; l < state.rawLinks.length; l++) {
      var link = state.rawLinks[l];
      if (!allowed.has(link.source) || !allowed.has(link.target)) continue;
      linkPool.push(link);
      degree.set(link.source, (degree.get(link.source) || 0) + 1);
      degree.set(link.target, (degree.get(link.target) || 0) + 1);
    }

    if (!state.filters.showOrphans) {
      allowed.forEach(function (id) {
        if (!degree.get(id)) {
          allowed.delete(id);
        }
      });
    }

    // 局部图谱：以焦点节点为中心做 BFS
    if (state.filters.focus && state.filters.depth > 0 && allowed.has(state.filters.focus)) {
      var adj = new Map();
      for (var m = 0; m < linkPool.length; m++) {
        var lk = linkPool[m];
        if (!adj.has(lk.source)) adj.set(lk.source, []);
        if (!adj.has(lk.target)) adj.set(lk.target, []);
        adj.get(lk.source).push(lk.target);
        adj.get(lk.target).push(lk.source);
      }
      var keep = new Set([state.filters.focus]);
      var frontier = [state.filters.focus];
      for (var d = 0; d < state.filters.depth; d++) {
        var next = [];
        for (var f = 0; f < frontier.length; f++) {
          var nbs = adj.get(frontier[f]) || [];
          for (var b = 0; b < nbs.length; b++) {
            if (!keep.has(nbs[b])) {
              keep.add(nbs[b]);
              next.push(nbs[b]);
            }
          }
        }
        frontier = next;
      }
      allowed.forEach(function (id) {
        if (!keep.has(id)) {
          allowed.delete(id);
        }
      });
    }

    var total = allowed.size;
    var nodes = [];
    var nextById = new Map();
    var index = 0;
    allowed.forEach(function (id) {
      var raw = state.rawById.get(id);
      if (!raw) {
        return;
      }
      var node = prev.get(id);
      if (!node) {
        node = createNode(raw, index, total);
      } else {
        node.label = raw.label;
        node.path = raw.path;
        node.kind = raw.kind;
        node.folder = raw.folder || '';
        node.tags = raw.tags || [];
      }
      node.degree = degree.get(id) || 0;
      node.radius = radiusFor(node);
      node.color = computeColor(node);
      node.fixed = state.pinned.has(id) || (!!state.drag && state.drag.id === id);
      nodes.push(node);
      nextById.set(id, node);
      index++;
    });

    var linkObjs = [];
    for (var p = 0; p < linkPool.length; p++) {
      var pl = linkPool[p];
      var s = nextById.get(pl.source);
      var t = nextById.get(pl.target);
      if (!s || !t) continue;
      linkObjs.push({ source: pl.source, target: pl.target, s: s, t: t, kind: pl.kind });
    }

    state.nodes = nodes;
    state.links = linkObjs;
    state.byId = nextById;
    state.hoverCache = { id: null, neighbors: null };
    if (state.colorCache.size > 8000) {
      state.colorCache.clear();
    }
    state.dirty = true;
    updateStats();
  }

  // ------------------------------------------------------------ 力导向模拟

  function makeQuad(x0, y0, x1, y1) {
    return { x0: x0, y0: y0, x1: x1, y1: y1, mass: 0, cx: 0, cy: 0, body: null, children: null };
  }

  function buildTree(nodes) {
    if (!nodes.length) {
      return null;
    }
    var minX = Infinity;
    var minY = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.x < minX) minX = n.x;
      if (n.y < minY) minY = n.y;
      if (n.x > maxX) maxX = n.x;
      if (n.y > maxY) maxY = n.y;
    }
    var size = Math.max(maxX - minX, maxY - minY, 1) + 2;
    var root = makeQuad(minX - 1, minY - 1, minX - 1 + size, minY - 1 + size);
    for (var k = 0; k < nodes.length; k++) {
      insertQuad(root, nodes[k], 0);
    }
    return root;
  }

  function splitQuad(q) {
    var mx = (q.x0 + q.x1) / 2;
    var my = (q.y0 + q.y1) / 2;
    q.children = [
      makeQuad(q.x0, q.y0, mx, my),
      makeQuad(mx, q.y0, q.x1, my),
      makeQuad(q.x0, my, mx, q.y1),
      makeQuad(mx, my, q.x1, q.y1)
    ];
  }

  function insertQuad(q, n, depth) {
    if (depth > 22) {
      var m0 = q.mass + 1;
      q.cx = (q.cx * q.mass + n.x) / m0;
      q.cy = (q.cy * q.mass + n.y) / m0;
      q.mass = m0;
      q.body = null;
      return;
    }
    if (!q.children) {
      if (!q.body) {
        q.body = n;
        q.mass = 1;
        q.cx = n.x;
        q.cy = n.y;
        return;
      }
      var old = q.body;
      splitQuad(q);
      q.body = null;
      q.mass = 0;
      q.cx = 0;
      q.cy = 0;
      insertChild(q, old, depth + 1);
      insertChild(q, n, depth + 1);
      return;
    }
    insertChild(q, n, depth + 1);
  }

  function insertChild(q, n, depth) {
    var mx = (q.x0 + q.x1) / 2;
    var my = (q.y0 + q.y1) / 2;
    var idx = (n.x >= mx ? 1 : 0) + (n.y >= my ? 2 : 0);
    insertQuad(q.children[idx], n, depth);
    var m = q.mass + 1;
    q.cx = (q.cx * q.mass + n.x) / m;
    q.cy = (q.cy * q.mass + n.y) / m;
    q.mass = m;
  }

  function applyRepulsion(q, n, charge, out) {
    if (!q || q.mass === 0) {
      return;
    }
    var dx = q.cx - n.x;
    var dy = q.cy - n.y;
    var d2 = dx * dx + dy * dy;
    if (!q.children) {
      if (!q.body || q.body === n) {
        return;
      }
      if (d2 < 9) d2 = 9;
      var f = charge / d2;
      out.x -= dx * f;
      out.y -= dy * f;
      return;
    }
    var w = q.x1 - q.x0;
    if ((w * w) / (d2 || 1) < 0.81) {
      if (d2 < 9) d2 = 9;
      var fa = (charge * q.mass) / d2;
      out.x -= dx * fa;
      out.y -= dy * fa;
      return;
    }
    for (var i = 0; i < 4; i++) {
      applyRepulsion(q.children[i], n, charge, out);
    }
  }

  function resolveCollisions(nodes) {
    var cell = 48;
    var grid = new Map();
    var i;
    for (i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var key = Math.floor(n.x / cell) + ',' + Math.floor(n.y / cell);
      var bucket = grid.get(key);
      if (bucket) {
        bucket.push(n);
      } else {
        grid.set(key, [n]);
      }
    }
    for (i = 0; i < nodes.length; i++) {
      var a = nodes[i];
      var gx = Math.floor(a.x / cell);
      var gy = Math.floor(a.y / cell);
      for (var ox = -1; ox <= 1; ox++) {
        for (var oy = -1; oy <= 1; oy++) {
          var arr = grid.get(gx + ox + ',' + (gy + oy));
          if (!arr) continue;
          for (var j = 0; j < arr.length; j++) {
            var b = arr[j];
            if (b === a || b.id <= a.id) continue;
            var dx = b.x - a.x;
            var dy = b.y - a.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            var minDist = a.radius + b.radius + 5;
            if (dist >= minDist) continue;
            if (dist < 0.001) {
              dx = (Math.random() - 0.5) * 0.8;
              dy = (Math.random() - 0.5) * 0.8;
              dist = 0.6;
            }
            var push = ((minDist - dist) / dist) * 0.5;
            if (!a.fixed) {
              a.x -= dx * push;
              a.y -= dy * push;
            }
            if (!b.fixed) {
              b.x += dx * push;
              b.y += dy * push;
            }
          }
        }
      }
    }
  }

  function step() {
    var nodes = state.nodes;
    if (!nodes.length) {
      state.running = false;
      return;
    }
    var a = state.alpha;
    var rest = state.settings.linkDistance;
    var charge = 105 * state.settings.repulsion;
    var i;

    // 1) 弹簧力
    for (i = 0; i < state.links.length; i++) {
      var l = state.links[i];
      var s = l.s;
      var t = l.t;
      var dx = t.x - s.x;
      var dy = t.y - s.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 0.01) {
        dx = (Math.random() - 0.5) * 0.6;
        dy = (Math.random() - 0.5) * 0.6;
        dist = 0.6;
      }
      var kk = ((dist - rest) / dist) * 0.045 * a;
      var fx = dx * kk;
      var fy = dy * kk;
      s.vx += fx;
      s.vy += fy;
      t.vx -= fx;
      t.vy -= fy;
    }

    // 2) 排斥力（Barnes-Hut 四叉树）
    var tree = buildTree(nodes);
    if (tree) {
      for (i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        var out = { x: 0, y: 0 };
        applyRepulsion(tree, n, charge * a, out);
        n.vx += clamp(out.x, -12, 12);
        n.vy += clamp(out.y, -12, 12);
        n.vx -= n.x * 0.0013 * a;
        n.vy -= n.y * 0.0013 * a;
      }
    }

    // 3) 阻尼积分
    var vmax = 12;
    for (i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.fixed) {
        node.vx = 0;
        node.vy = 0;
        continue;
      }
      node.vx *= 0.58;
      node.vy *= 0.58;
      var speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
      if (speed > vmax) {
        node.vx = (node.vx / speed) * vmax;
        node.vy = (node.vy / speed) * vmax;
      }
      node.x += node.vx;
      node.y += node.vy;
    }

    // 4) 碰撞消解
    resolveCollisions(nodes);

    state.alpha = a * 0.982;
    if (state.alpha < 0.006) {
      state.alpha = 0;
      state.running = false;
      persistSoon();
    }
    state.dirty = true;
  }

  // ------------------------------------------------------------ 绘制

  function drawDots() {
    var k = state.view.k;
    if (k < 0.28) {
      return;
    }
    var spacing = 34 * k;
    if (spacing < 13) {
      return;
    }
    var ctx = state.ctx;
    var offX = state.view.x % spacing;
    var offY = state.view.y % spacing;
    if (offX < 0) offX += spacing;
    if (offY < 0) offY += spacing;
    ctx.fillStyle = theme().dot;
    var size = k > 1.3 ? 1.1 : 0.9;
    for (var x = offX; x < state.W; x += spacing) {
      for (var y = offY; y < state.H; y += spacing) {
        ctx.fillRect(x, y, size, size);
      }
    }
  }

  function strokeLinks(list, color, width, dash) {
    if (!list.length) {
      return;
    }
    var ctx = state.ctx;
    var k = state.view.k;
    var ox = state.view.x;
    var oy = state.view.y;
    ctx.beginPath();
    for (var i = 0; i < list.length; i++) {
      var l = list[i];
      ctx.moveTo(l.s.x * k + ox, l.s.y * k + oy);
      ctx.lineTo(l.t.x * k + ox, l.t.y * k + oy);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash(dash || []);
    ctx.stroke();
    if (dash) {
      ctx.setLineDash([]);
    }
  }

  function labelOf(node) {
    var text = node.label || node.path || '';
    if (text.length > 24) {
      text = text.slice(0, 23) + '…';
    }
    return text;
  }

  /**
   * 标签透明度：随节点在屏幕上的尺寸平滑淡出。
   * 缩放越大 → 节点越大 → 标签越清晰；缩到阈值以下逐渐透明直至完全隐藏。
   * 大节点（连接多）的淡出窗口更靠后，因此标签保留更久。
   */
  function labelOpacity(node, k, emphasis) {
    if (!state.settings.showLabels) {
      return 0;
    }
    var base = Math.max(0.1, state.settings.labelThreshold);
    var sizeBonus = clamp((node.radius - 4) / 12, 0, 0.18);
    var fadeStart = base + sizeBonus;
    var fadeEnd = base * 0.55 + sizeBonus;
    var t = (k - fadeEnd) / Math.max(0.001, fadeStart - fadeEnd);
    if (emphasis) {
      t = Math.max(t, 0.92);
    }
    t = clamp(t, 0, 1);
    return t * t * (3 - 2 * t); // smoothstep，避免线性淡出的生硬感
  }

  function draw() {
    var ctx = state.ctx;
    var k = state.view.k;
    var ox = state.view.x;
    var oy = state.view.y;
    var th = theme();
    var hasQuery = state.filters.query.trim().length > 0;
    var focusId = state.hoverId || state.selectedId;
    var neighbors = focusId ? neighborsOf(focusId) : null;

    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    ctx.clearRect(0, 0, state.W, state.H);
    drawDots();

    var pad = 90;
    var wx0 = (-ox - pad) / k;
    var wy0 = (-oy - pad) / k;
    var wx1 = (state.W - ox + pad) / k;
    var wy1 = (state.H - oy + pad) / k;

    var solid = [];
    var dashed = [];
    var hlSolid = [];
    var hlDashed = [];
    var i;

    for (i = 0; i < state.links.length; i++) {
      var l = state.links[i];
      var s = l.s;
      var t = l.t;
      if (!s || !t) continue;
      if ((s.x < wx0 && t.x < wx0) || (s.x > wx1 && t.x > wx1)) continue;
      if ((s.y < wy0 && t.y < wy0) || (s.y > wy1 && t.y > wy1)) continue;
      var isEmbed = l.kind === 'embed';
      if (hasQuery) {
        var sm = state.matches.has(l.source);
        var tm = state.matches.has(l.target);
        if (!sm && !tm) continue;
        if (sm && tm) {
          if (isEmbed) hlDashed.push(l);
          else hlSolid.push(l);
        } else if (isEmbed) {
          dashed.push(l);
        } else {
          solid.push(l);
        }
        continue;
      }
      var adjacent = focusId && (l.source === focusId || l.target === focusId);
      if (adjacent) {
        if (isEmbed) hlDashed.push(l);
        else hlSolid.push(l);
      } else if (isEmbed) {
        dashed.push(l);
      } else {
        solid.push(l);
      }
    }

    ctx.lineCap = 'round';
    strokeLinks(solid, th.link, Math.max(0.5, Math.min(1.5, 0.9 * k + 0.2)), null);
    strokeLinks(dashed, th.link, Math.max(0.5, Math.min(1.4, 0.9 * k + 0.2)), [3 * Math.max(k, 0.6), 4 * Math.max(k, 0.6)]);
    strokeLinks(hlSolid, th.linkHl, Math.max(1, Math.min(2.6, 1.1 * k + 0.5)), null);
    strokeLinks(hlDashed, th.linkHl, Math.max(1, Math.min(2.4, 1.1 * k + 0.5)), [3 * Math.max(k, 0.6), 4 * Math.max(k, 0.6)]);

    state.ctx.font = '11px ' + state.font;
    state.ctx.textAlign = 'center';
    state.ctx.textBaseline = 'top';

    var emphasized = null;
    for (i = 0; i < state.nodes.length; i++) {
      var n = state.nodes[i];
      var sx = n.x * k + ox;
      var sy = n.y * k + oy;
      var r = Math.max(2.2, n.radius * k);
      if (sx < -r - 120 || sx > state.W + r + 120 || sy < -r - 60 || sy > state.H + r + 60) {
        continue;
      }

      var alpha = 1;
      var isNeighbor = neighbors ? neighbors.has(n.id) : true;
      if (hasQuery) {
        alpha = state.matches.has(n.id) ? 1 : 0.14;
      } else if (focusId && !isNeighbor && n.id !== focusId) {
        alpha = 0.32;
      }

      if (n.id === focusId || n.id === state.selectedId) {
        emphasized = n;
      }

      var isGhost = n.kind === 'unresolved';
      var fillColor = isGhost ? withAlpha('#bb9af7', 0.1 * alpha) : withAlpha(n.color, alpha);
      var strokeColor = isGhost ? th.ghost : withAlpha(n.color, Math.min(1, alpha * 0.95));

      ctx.beginPath();
      ctx.arc(sx, sy, r, 0, Math.PI * 2);
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.lineWidth = isGhost ? 1.3 : Math.max(0.8, 1.1 * Math.min(k, 1.4));
      ctx.strokeStyle = strokeColor;
      if (isGhost) {
        ctx.setLineDash([3, 3]);
      }
      ctx.stroke();
      if (isGhost) {
        ctx.setLineDash([]);
      }

      // 匹配标记
      if (hasQuery && state.matches.has(n.id)) {
        ctx.beginPath();
        ctx.arc(sx, sy, r + 3.5, 0, Math.PI * 2);
        ctx.strokeStyle = th.matchRing;
        ctx.lineWidth = 1.4;
        ctx.setLineDash([2.5, 2.5]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      if (state.filters.focus && state.filters.focus === n.id) {
        ctx.beginPath();
        ctx.arc(sx, sy, r + 5, 0, Math.PI * 2);
        ctx.strokeStyle = th.ring;
        ctx.globalAlpha = 0.8;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
      }

      var emphasis = n.id === focusId || n.id === state.selectedId;
      var fade = labelOpacity(n, k, emphasis);
      if (fade > 0.02) {
        var labelAlpha = 0.92;
        if (hasQuery && !state.matches.has(n.id)) {
          labelAlpha = 0.14;
        } else if (focusId && !isNeighbor && n.id !== focusId) {
          // 与焦点节点无连接：标签跟随节点一起淡出
          labelAlpha = 0.26;
        }
        labelAlpha *= fade;
        if (labelAlpha > 0.02) {
          var text = labelOf(n);
          var ly = sy + r + 4;
          ctx.font = (n.id === focusId ? '600 12px ' : '11px ') + state.font;
          ctx.globalAlpha = labelAlpha;
          ctx.lineWidth = 3;
          ctx.strokeStyle = th.halo;
          ctx.strokeText(text, sx, ly);
          ctx.fillStyle = th.label;
          ctx.fillText(text, sx, ly);
          ctx.globalAlpha = 1;
        }
      }
    }

    // 当前编辑文件 / 选中节点的高亮环
    var activeNode = state.activeId ? state.byId.get(state.activeId) : null;
    if (activeNode && activeNode.x !== undefined) {
      var ax = activeNode.x * k + ox;
      var ay = activeNode.y * k + oy;
      var ar = Math.max(3, activeNode.radius * k) + 6;
      ctx.beginPath();
      ctx.arc(ax, ay, ar, 0, Math.PI * 2);
      ctx.strokeStyle = th.activeRing;
      ctx.globalAlpha = 0.75;
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    if (emphasized) {
      var ex = emphasized.x * k + ox;
      var ey = emphasized.y * k + oy;
      var er = Math.max(3, emphasized.radius * k) + 4;
      ctx.beginPath();
      ctx.arc(ex, ey, er, 0, Math.PI * 2);
      ctx.strokeStyle = th.ring;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  function neighborsOf(id) {
    if (state.hoverCache.id === id && state.hoverCache.neighbors) {
      return state.hoverCache.neighbors;
    }
    var set = new Set();
    for (var i = 0; i < state.links.length; i++) {
      var l = state.links[i];
      if (l.source === id) set.add(l.target);
      else if (l.target === id) set.add(l.source);
    }
    state.hoverCache = { id: id, neighbors: set };
    return set;
  }

  // ------------------------------------------------------------ 帧循环

  function frame() {
    window.requestAnimationFrame(frame);
    var wasRunning = state.running;
    if (state.running && state.alpha > 0.002) {
      step();
    }
    if (state.target) {
      smoothCamera();
    }
    if (state.dirty) {
      state.dirty = false;
      draw();
    }
    if (wasRunning && !state.running) {
      persistSoon();
    }
  }

  // ------------------------------------------------------------ 拾取与交互

  function pickNode(sx, sy) {
    var k = state.view.k;
    var wx = (sx - state.view.x) / k;
    var wy = (sy - state.view.y) / k;
    var best = null;
    var bestD = Infinity;
    for (var i = state.nodes.length - 1; i >= 0; i--) {
      var n = state.nodes[i];
      var dx = n.x - wx;
      var dy = n.y - wy;
      var d2 = dx * dx + dy * dy;
      var r = n.radius + 5 / k;
      if (d2 <= r * r && d2 < bestD) {
        best = n;
        bestD = d2;
      }
    }
    return best;
  }

  function select(id) {
    if (state.selectedId === id) {
      return;
    }
    state.selectedId = id;
    state.dirty = true;
  }

  function openNode(node, newTab) {
    if (!node) {
      return;
    }
    if (node.kind === 'unresolved') {
      toast('未找到文件：' + node.path);
      return;
    }
    post({ type: 'openFile', path: node.path, newTab: !!newTab || state.openInNewTab });
  }

  function focusNode(node) {
    if (!node) {
      return;
    }
    state.filters.focus = node.id;
    if (!state.filters.depth) {
      state.filters.depth = 1;
    }
    rebuild();
    reheat(0.9);
    refreshFocusUI();
    var self = state;
    window.setTimeout(function () {
      fitView(true);
      if (!self.byId.has(node.id)) {
        toast('该节点在当前的筛选条件下不可见');
      }
    }, 40);
    toast('已聚焦「' + node.label + '」· ' + state.filters.depth + ' 层邻域');
  }

  function togglePin(node) {
    if (state.pinned.has(node.id)) {
      state.pinned.delete(node.id);
      node.fixed = false;
      toast('已取消固定');
    } else {
      state.pinned.add(node.id);
      node.fixed = true;
      toast('已固定位置');
    }
    reheat(0.4);
    persistSoon();
  }

  function onPointerDown(e) {
    if (e.button === 2) {
      return;
    }
    hideMenu();
    hideTip();
    var p = localPoint(e);
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch (err) {
      /* ignore */
    }

    if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
      startPan(p);
      return;
    }
    if (e.button !== 0) {
      return;
    }

    var hit = pickNode(p.x, p.y);
    if (hit) {
      select(hit.id);
      var wx = (p.x - state.view.x) / state.view.k;
      var wy = (p.y - state.view.y) / state.view.k;
      state.drag = {
        id: hit.id,
        dx: hit.x - wx,
        dy: hit.y - wy,
        sx: p.x,
        sy: p.y,
        moved: false
      };
      hit.fixed = true;
      reheat(0.7);
      canvas.classList.add('dragging');
      hintEl.classList.add('fade');
    } else {
      select(null);
      startPan(p);
    }
  }

  function startPan(p) {
    state.target = null;
    state.pan = { sx: p.x, sy: p.y, ox: state.view.x, oy: state.view.y, moved: false };
    canvas.classList.add('dragging');
  }

  function onPointerMove(e) {
    var p = localPoint(e);

    if (state.drag) {
      var node = state.byId.get(state.drag.id);
      if (node) {
        node.x = (p.x - state.view.x) / state.view.k + state.drag.dx;
        node.y = (p.y - state.view.y) / state.view.k + state.drag.dy;
        node.vx = 0;
        node.vy = 0;
      }
      if (Math.abs(p.x - state.drag.sx) > 3 || Math.abs(p.y - state.drag.sy) > 3) {
        state.drag.moved = true;
      }
      reheat(0.45);
      state.dirty = true;
      return;
    }

    if (state.pan) {
      var dx = p.x - state.pan.sx;
      var dy = p.y - state.pan.sy;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        state.pan.moved = true;
      }
      state.view.x = state.pan.ox + dx;
      state.view.y = state.pan.oy + dy;
      state.dirty = true;
      return;
    }

    var hit = pickNode(p.x, p.y);
    var id = hit ? hit.id : null;
    if (id !== state.hoverId) {
      state.hoverId = id;
      state.dirty = true;
      updateTooltip(hit, p);
    } else if (hit) {
      positionTooltip(p);
    }
    canvas.classList.toggle('pointing', !!hit);
  }

  function onPointerUp(e) {
    if (state.drag) {
      var drag = state.drag;
      var node = state.byId.get(drag.id);
      state.drag = null;
      canvas.classList.remove('dragging');
      if (node) {
        node.fixed = state.pinned.has(node.id);
        if (!drag.moved) {
          if (e.altKey) {
            focusNode(node);
          } else {
            openNode(node, e.ctrlKey || e.metaKey);
          }
        }
      }
      reheat(0.3);
      persistSoon();
    }
    if (state.pan) {
      state.pan = null;
      canvas.classList.remove('dragging');
      persistSoon();
    }
    try {
      canvas.releasePointerCapture(e.pointerId);
    } catch (err) {
      /* ignore */
    }
  }

  function onWheel(e) {
    e.preventDefault();
    var p = localPoint(e);
    var delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
    var factor = Math.exp(-clamp(delta, -260, 260) * 0.0016);
    zoomAt(p.x, p.y, factor);
    hideTip();
    hintEl.classList.add('fade');
  }

  function onDoubleClick(e) {
    var p = localPoint(e);
    if (!pickNode(p.x, p.y)) {
      fitView(true);
    }
  }

  function onContextMenu(e) {
    e.preventDefault();
    var p = localPoint(e);
    var hit = pickNode(p.x, p.y);
    if (!hit) {
      hideMenu();
      return;
    }
    select(hit.id);
    hideTip();
    showMenu(p.x, p.y, hit);
  }

  // ------------------------------------------------------------ 悬浮提示

  function updateTooltip(node, p) {
    if (!node) {
      hideTip();
      return;
    }
    tipEl.innerHTML = '';
    var title = document.createElement('div');
    title.className = 'tip-title';
    title.textContent = node.label;
    tipEl.appendChild(title);

    var meta = document.createElement('div');
    meta.className = 'tip-meta';
    if (node.kind === 'unresolved') {
      meta.textContent = '未解析的链接 · 目标文件不存在';
    } else if (node.kind === 'attachment') {
      meta.textContent = (node.folder || '根目录') + ' · 附件 · ' + node.degree + ' 条连接';
    } else {
      meta.textContent = (node.folder || '根目录') + ' · ' + node.degree + ' 条连接';
    }
    tipEl.appendChild(meta);

    if (node.tags && node.tags.length) {
      var tags = document.createElement('div');
      tags.className = 'tip-tags';
      tags.textContent = node.tags.slice(0, 6).map(function (t) {
        return '#' + t;
      }).join(' ');
      tipEl.appendChild(tags);
    }

    if (node.kind === 'unresolved') {
      var warn = document.createElement('div');
      warn.className = 'tip-warn';
      warn.textContent = '点击查看提示';
      tipEl.appendChild(warn);
    }

    tipEl.classList.remove('hidden');
    positionTooltip(p);
  }

  function positionTooltip(p) {
    var rect = tipEl.getBoundingClientRect();
    var x = p.x + 16;
    var y = p.y + 16;
    if (x + rect.width > state.W - 8) {
      x = p.x - rect.width - 12;
    }
    if (y + rect.height > state.H - 8) {
      y = p.y - rect.height - 12;
    }
    tipEl.style.left = Math.max(6, x) + 'px';
    tipEl.style.top = Math.max(6, y) + 'px';
  }

  function hideTip() {
    tipEl.classList.add('hidden');
  }

  // ------------------------------------------------------------ 右键菜单

  function showMenu(x, y, node) {
    menuEl.innerHTML = '';
    var isGhost = node.kind === 'unresolved';

    function item(label, action, disabled) {
      var div = document.createElement('div');
      div.className = 'menu-item' + (disabled ? ' disabled' : '');
      div.textContent = label;
      div.addEventListener('click', function () {
        hideMenu();
        action();
      });
      menuEl.appendChild(div);
    }

    function sep() {
      var div = document.createElement('div');
      div.className = 'menu-sep';
      menuEl.appendChild(div);
    }

    item('打开笔记', function () {
      openNode(node, false);
    }, isGhost);
    item('在侧边打开', function () {
      openNode(node, true);
    }, isGhost);
    sep();
    if (state.filters.focus === node.id) {
      item('取消聚焦', function () {
        clearFocus();
      });
    } else {
      item('聚焦此节点（1 层）', function () {
        state.filters.focus = node.id;
        state.filters.depth = 1;
        rebuild();
        reheat(0.9);
        refreshFocusUI();
        window.setTimeout(function () {
          fitView(true);
        }, 40);
      });
      item('聚焦邻域（2 层）', function () {
        state.filters.focus = node.id;
        state.filters.depth = 2;
        rebuild();
        reheat(0.9);
        refreshFocusUI();
        window.setTimeout(function () {
          fitView(true);
        }, 40);
      });
    }
    sep();
    item(state.pinned.has(node.id) ? '取消固定位置' : '固定位置', function () {
      togglePin(node);
    });
    item('复制相对路径', function () {
      post({ type: 'copy', text: node.path });
    });
    item(isGhost ? '复制链接文本' : '复制双链', function () {
      post({ type: 'copy', text: isGhost ? node.path : '[[' + node.label + ']]' });
    });
    if (!isGhost) {
      item('在资源管理器中显示', function () {
        post({ type: 'revealFile', path: node.path });
      });
    }

    menuEl.classList.remove('hidden');
    var rect = menuEl.getBoundingClientRect();
    var left = x + 2;
    var top = y + 2;
    if (left + rect.width > state.W - 6) {
      left = Math.max(6, x - rect.width - 2);
    }
    if (top + rect.height > state.H - 6) {
      top = Math.max(6, y - rect.height - 2);
    }
    menuEl.style.left = left + 'px';
    menuEl.style.top = top + 'px';
  }

  function hideMenu() {
    menuEl.classList.add('hidden');
  }

  // ------------------------------------------------------------ Toast

  var toastTimer = 0;
  function toast(message) {
    toastEl.textContent = message;
    toastEl.classList.remove('hidden');
    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastTimer = window.setTimeout(function () {
      toastEl.classList.add('hidden');
    }, 2200);
  }

  // ------------------------------------------------------------ 统计 / 图例

  function updateStats() {
    var visible = state.nodes.length;
    var query = state.filters.query.trim();
    var text = visible + ' 个节点 · ' + state.links.length + ' 条连线';
    if (query) {
      text += ' · ' + state.matches.size + ' 个匹配';
    }
    statsEl.textContent = text;

    var ghost = 0;
    for (var i = 0; i < state.nodes.length; i++) {
      if (state.nodes[i].kind === 'unresolved') ghost++;
    }
    var th = theme();
    var html = '<span><i class="dot" style="background:' + th.ring + '"></i>可见 ' + visible + ' 节点</span>' +
      '<span>连线 ' + state.links.length + '</span>';
    if (ghost) {
      html += '<span><i class="dot" style="background:' + th.ghost + '"></i>未解析 ' + ghost + '</span>';
    }
    if (state.filters.focus) {
      html += '<span>局部图谱</span>';
    }
    if (state.filters.folderScope) {
      html += '<span>范围 ' + escapeHtml(state.filters.folderScope) + '</span>';
    }
    legendEl.innerHTML = html;
  }

  // ------------------------------------------------------------ 筛选面板

  function refreshChips() {
    var folderCount = new Map();
    var tagCount = new Map();
    for (var i = 0; i < state.rawNodes.length; i++) {
      var n = state.rawNodes[i];
      if (n.kind === 'attachment') continue;
      var folder = n.folder || '';
      folderCount.set(folder, (folderCount.get(folder) || 0) + 1);
      var tags = n.tags || [];
      for (var t = 0; t < tags.length; t++) {
        tagCount.set(tags[t], (tagCount.get(tags[t]) || 0) + 1);
      }
    }

    var folders = Array.from(folderCount.entries()).sort(function (a, b) {
      return a[0].localeCompare(b[0], 'zh-CN');
    });
    folderChipsEl.innerHTML = '';
    if (!folders.length) {
      folderChipsEl.innerHTML = '<span class="chip" style="pointer-events:none;opacity:.5">暂无文件夹</span>';
    }
    folders.forEach(function (entry) {
      folderChipsEl.appendChild(makeChip(entry[0] || '根目录', entry[1], state.filters.folders.indexOf(entry[0]) >= 0, function () {
        toggleFilter(state.filters.folders, entry[0]);
      }, entry[0] || '根目录'));
    });

    var tags = Array.from(tagCount.entries())
      .sort(function (a, b) {
        return b[1] - a[1] || a[0].localeCompare(b[0], 'zh-CN');
      })
      .slice(0, 40);
    tagChipsEl.innerHTML = '';
    if (!tags.length) {
      tagChipsEl.innerHTML = '<span class="chip" style="pointer-events:none;opacity:.5">暂无标签</span>';
    }
    tags.forEach(function (entry) {
      tagChipsEl.appendChild(makeChip('#' + entry[0], entry[1], state.filters.tags.indexOf(entry[0]) >= 0, function () {
        toggleFilter(state.filters.tags, entry[0]);
      }, entry[0]));
    });
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"]/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch];
    });
  }

  /** 收集所有可作为展示范围的文件夹（含父级目录），按路径排序 */
  function collectScopeFolders() {
    var set = new Set();
    for (var i = 0; i < state.rawNodes.length; i++) {
      var node = state.rawNodes[i];
      if (node.kind !== 'note') continue;
      var folder = node.folder || '';
      if (!folder) continue;
      var parts = folder.split('/');
      var acc = '';
      for (var j = 0; j < parts.length; j++) {
        acc = acc ? acc + '/' + parts[j] : parts[j];
        set.add(acc);
      }
    }
    return Array.from(set).sort(function (a, b) {
      return a.localeCompare(b, 'zh-CN');
    });
  }

  function folderInScope(folder) {
    var target = state.filters.folderScope;
    if (!target) return true;
    var dir = folder || '';
    return dir === target || dir.indexOf(target + '/') === 0;
  }

  function refreshScopeOptions() {
    if (!scopeSelectEl) return;
    var folders = collectScopeFolders();
    var current = state.filters.folderScope || '';
    if (current && folders.indexOf(current) < 0) {
      // 目录被删除或改名后，自动回落到整个工作区
      state.filters.folderScope = null;
      current = '';
    }
    scopeSelectEl.innerHTML = '';
    var rootOption = document.createElement('option');
    rootOption.value = '';
    rootOption.textContent = '整个工作区';
    scopeSelectEl.appendChild(rootOption);
    folders.forEach(function (folder) {
      var option = document.createElement('option');
      option.value = folder;
      option.textContent = folder;
      scopeSelectEl.appendChild(option);
    });
    scopeSelectEl.value = current;
    scopeSelectEl.title = current ? '当前范围：' + current : '当前范围：整个工作区（含全部笔记）';
  }

  function applyScope(folder) {
    var next = folder || null;
    if (state.filters.folderScope === next) {
      refreshScopeOptions();
      return;
    }
    state.filters.folderScope = next;
    // 范围切换后，原来的节点聚焦可能已经不在范围内
    state.filters.focus = null;
    state.filters.depth = 0;
    rebuild();
    refreshScopeOptions();
    refreshFocusUI();
    reheat(0.9);
    fitView(true);
    persistSoon();
    if (next) {
      toast(
        state.nodes.length
          ? '已切换到「' + next + '」· ' + state.nodes.length + ' 个节点'
          : '「' + next + '」下没有可显示的笔记'
      );
    } else {
      toast('范围：整个工作区');
    }
  }

  function makeChip(label, count, active, onClick, title) {
    var btn = document.createElement('button');
    btn.className = 'chip' + (active ? ' active' : '');
    btn.title = title || label;
    var text = document.createElement('span');
    text.textContent = label;
    btn.appendChild(text);
    var badge = document.createElement('span');
    badge.className = 'count';
    badge.textContent = String(count);
    btn.appendChild(badge);
    btn.addEventListener('click', onClick);
    return btn;
  }

  function toggleFilter(list, value) {
    var i = list.indexOf(value);
    if (i >= 0) {
      list.splice(i, 1);
    } else {
      list.push(value);
    }
    rebuild();
    reheat(0.7);
    refreshChips();
    persistSoon();
  }

  function refreshFocusUI() {
    var focus = state.filters.focus;
    var node = focus ? state.rawById.get(focus) : null;
    focusNameEl.textContent = node ? node.label : focus ? focus : '全部笔记';
    focusNameEl.title = focus || '';

    var buttons = depthGroupEl.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      var depth = Number(buttons[i].getAttribute('data-depth'));
      buttons[i].classList.toggle('active', !!focus && depth === state.filters.depth);
    }
  }

  function clearFocus() {
    state.filters.focus = null;
    state.filters.depth = 0;
    rebuild();
    reheat(0.8);
    refreshFocusUI();
    fitView(true);
  }

  function syncControls() {
    $('#f-orphans').checked = state.filters.showOrphans;
    $('#f-unresolved').checked = state.filters.showUnresolved;
    $('#f-attachments').checked = state.filters.showAttachments;
    $('#f-matches').checked = state.filters.matchesOnly;

    searchEl.value = state.filters.query;
    searchClearEl.classList.toggle('hidden', !state.filters.query);

    var s = state.settings;
    $('#s-scale').value = String(s.nodeScale);
    $('#v-scale').textContent = s.nodeScale.toFixed(2) + '×';
    $('#s-dist').value = String(s.linkDistance);
    $('#v-dist').textContent = String(Math.round(s.linkDistance));
    $('#s-repel').value = String(s.repulsion);
    $('#v-repel').textContent = s.repulsion.toFixed(1) + '×';
    $('#s-color').value = s.colorMode;
    $('#s-labels').checked = s.showLabels;

    refreshScopeOptions();
    updateStats();
    refreshFocusUI();
  }

  // ------------------------------------------------------------ 消息处理

  function applyGraph(data, reset) {
    if (!data) {
      return;
    }
    state.rawNodes = data.nodes || [];
    state.rawLinks = data.links || [];
    state.rawById = new Map();
    for (var i = 0; i < state.rawNodes.length; i++) {
      state.rawById.set(state.rawNodes[i].id, state.rawNodes[i]);
    }
    state.rootName = data.rootName || '';

    loadingEl.classList.add('hidden');
    var isEmpty = state.rawNodes.length === 0;
    emptyEl.classList.toggle('hidden', !isEmpty);

    if (isEmpty) {
      state.nodes = [];
      state.links = [];
      state.byId = new Map();
      state.dirty = true;
      updateStats();
      return;
    }

    // 文件夹被删除/改名后，范围回到整个工作区
    if (state.filters.folderScope) {
      var scopeAlive = state.rawNodes.some(function (item) {
        return item.kind === 'note' && folderInScope(item.folder || '');
      });
      if (!scopeAlive) {
        state.filters.folderScope = null;
      }
    }

    var first = !state.initialized;
    rebuild();
    refreshChips();
    refreshScopeOptions();
    refreshFocusUI();

    if (first || reset) {
      if (first && !state.hasSavedView) {
        fitView(false);
      }
    }
    state.initialized = true;
    state.savedPositions = null;
    reheat(first ? 1 : 0.5);
  }

  function applyConfig(cfg, changed) {
    if (!cfg) {
      return;
    }
    state.openInNewTab = !!cfg.openInNewTab;
    if (changed || !state.fromSaved) {
      state.settings.showOrphans = cfg.showOrphans !== false;
      state.settings.showUnresolved = cfg.showUnresolved !== false;
      state.settings.showAttachments = !!cfg.showAttachments;
      state.settings.colorMode = cfg.colorMode || 'folder';
      state.settings.nodeScale = typeof cfg.nodeScale === 'number' ? cfg.nodeScale : 1;
      state.settings.linkDistance = typeof cfg.linkDistance === 'number' ? cfg.linkDistance : 70;
      state.settings.repulsion = typeof cfg.repulsion === 'number' ? cfg.repulsion : 1;
      state.settings.labelThreshold =
        typeof cfg.labelThreshold === 'number' ? cfg.labelThreshold : 0.5;

      state.filters.showOrphans = state.settings.showOrphans;
      state.filters.showUnresolved = state.settings.showUnresolved;
      state.filters.showAttachments = state.settings.showAttachments;
    }
    syncControls();
    if (state.initialized) {
      rebuild();
      reheat(0.5);
    }
  }

  function focusByPath(path, depth) {
    if (!path) {
      return;
    }
    if (!state.rawById.has(path)) {
      toast('图谱中未找到该笔记：' + path);
    }
    state.filters.focus = path;
    state.filters.depth = depth || 1;
    rebuild();
    reheat(0.9);
    refreshFocusUI();
    window.setTimeout(function () {
      fitView(true);
    }, 40);
  }

  window.addEventListener('message', function (event) {
    var msg = event.data;
    if (!msg || typeof msg.type !== 'string') {
      return;
    }
    switch (msg.type) {
      case 'graph':
        applyGraph(msg.data, msg.reset);
        break;
      case 'config':
        applyConfig(msg.config, msg.changed);
        break;
      case 'focus':
        focusByPath(msg.path, msg.depth);
        break;
      case 'scope':
        applyScope(msg.folder || null);
        break;
      case 'activeFile':
        state.activeId = msg.path;
        state.dirty = true;
        break;
      default:
        break;
    }
  });

  // ------------------------------------------------------------ 状态持久化

  var persistTimer = 0;

  function persistSoon() {
    if (persistTimer) {
      clearTimeout(persistTimer);
    }
    persistTimer = window.setTimeout(persist, 600);
  }

  function persist() {
    if (!state.initialized) {
      return;
    }
    var positions = {};
    var count = 0;
    state.byId.forEach(function (n) {
      if (count >= 4000) {
        return;
      }
      positions[n.id] = [Math.round(n.x), Math.round(n.y)];
      count++;
    });
    try {
      vscode.setState({
        view: { k: state.view.k, x: state.view.x, y: state.view.y },
        filters: state.filters,
        settings: state.settings,
        positions: positions,
        pinned: Array.from(state.pinned)
      });
    } catch (err) {
      /* 忽略持久化失败 */
    }
  }

  function restoreState() {
    var saved = null;
    try {
      saved = vscode.getState();
    } catch (err) {
      saved = null;
    }
    if (!saved) {
      return;
    }
    if (saved.filters) {
      var f = saved.filters;
      if (typeof f.query === 'string') state.filters.query = f.query;
      if (typeof f.showOrphans === 'boolean') state.filters.showOrphans = f.showOrphans;
      if (typeof f.showUnresolved === 'boolean') state.filters.showUnresolved = f.showUnresolved;
      if (typeof f.showAttachments === 'boolean') state.filters.showAttachments = f.showAttachments;
      if (typeof f.matchesOnly === 'boolean') state.filters.matchesOnly = f.matchesOnly;
      if (Array.isArray(f.folders)) state.filters.folders = f.folders.slice();
      if (Array.isArray(f.tags)) state.filters.tags = f.tags.slice();
      if (typeof f.depth === 'number') state.filters.depth = f.depth;
      if (typeof f.focus === 'string') state.filters.focus = f.focus;
      if (typeof f.folderScope === 'string') state.filters.folderScope = f.folderScope;
    }
    if (saved.settings) {
      Object.keys(DEFAULTS).forEach(function (key) {
        if (saved.settings[key] !== undefined) {
          state.settings[key] = saved.settings[key];
        }
      });
    }
    if (saved.view && typeof saved.view.k === 'number') {
      state.view = {
        k: clamp(saved.view.k, 0.06, 5),
        x: Number(saved.view.x) || 0,
        y: Number(saved.view.y) || 0
      };
      state.hasSavedView = true;
    }
    if (saved.positions && typeof saved.positions === 'object') {
      state.savedPositions = saved.positions;
    }
    if (Array.isArray(saved.pinned)) {
      state.pinned = new Set(saved.pinned);
    }
    state.fromSaved = !!(saved.settings || saved.filters);
  }

  // ------------------------------------------------------------ 快捷键

  function zoomCenterBy(factor) {
    zoomAt(state.W / 2, state.H / 2, factor);
  }

  window.addEventListener('keydown', function (e) {
    var tag = e.target && e.target.tagName ? e.target.tagName : '';
    var typing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

    if ((e.ctrlKey || e.metaKey) && (e.key === 'f' || e.key === 'F')) {
      e.preventDefault();
      searchEl.focus();
      searchEl.select();
      return;
    }

    if (typing) {
      if (e.key === 'Escape') {
        searchEl.blur();
      }
      return;
    }

    switch (e.key) {
      case '+':
      case '=':
        e.preventDefault();
        zoomCenterBy(1.25);
        break;
      case '-':
      case '_':
        e.preventDefault();
        zoomCenterBy(1 / 1.25);
        break;
      case '0':
        e.preventDefault();
        fitView(true);
        break;
      case '/':
        e.preventDefault();
        searchEl.focus();
        break;
      case 'r':
      case 'R':
        post({ type: 'refresh' });
        break;
      case 'Escape':
        if (!menuEl.classList.contains('hidden')) {
          hideMenu();
        } else if (!panelEl.classList.contains('hidden')) {
          panelEl.classList.add('hidden');
        } else {
          select(null);
        }
        break;
      default:
        break;
    }
  });

  // ------------------------------------------------------------ UI 绑定

  function bindUi() {
    $('#btn-zoom-in').addEventListener('click', function () {
      zoomCenterBy(1.25);
    });
    $('#btn-zoom-out').addEventListener('click', function () {
      zoomCenterBy(1 / 1.25);
    });
    $('#btn-fit').addEventListener('click', function () {
      fitView(true);
    });
    $('#btn-refresh').addEventListener('click', function () {
      post({ type: 'refresh' });
    });
    $('#btn-panel').addEventListener('click', function () {
      panelEl.classList.toggle('hidden');
    });
    $('#panel-close').addEventListener('click', function () {
      panelEl.classList.add('hidden');
    });

    searchEl.addEventListener('input', function () {
      state.filters.query = searchEl.value;
      searchClearEl.classList.toggle('hidden', !state.filters.query);
      rebuild();
      reheat(0.4);
      persistSoon();
    });
    searchEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        var ids = Array.from(state.matches);
        if (!ids.length) {
          toast('没有匹配的笔记');
          return;
        }
        var node = state.byId.get(ids[0]);
        if (!node) {
          toast('匹配项当前不可见');
          return;
        }
        select(node.id);
        var k = Math.max(state.view.k, 1);
        setCamera(k, state.W / 2 - node.x * k, state.H / 2 - node.y * k, true);
      } else if (e.key === 'Escape') {
        searchEl.blur();
      }
    });
    if (scopeSelectEl) {
      scopeSelectEl.addEventListener('change', function () {
        applyScope(scopeSelectEl.value || null);
      });
    }

    searchClearEl.addEventListener('click', function () {
      searchEl.value = '';
      state.filters.query = '';
      searchClearEl.classList.add('hidden');
      rebuild();
      reheat(0.4);
      searchEl.focus();
    });

    $('#f-orphans').addEventListener('change', function (e) {
      state.filters.showOrphans = e.target.checked;
      rebuild();
      reheat(0.8);
      persistSoon();
    });
    $('#f-unresolved').addEventListener('change', function (e) {
      state.filters.showUnresolved = e.target.checked;
      rebuild();
      reheat(0.8);
      persistSoon();
    });
    $('#f-attachments').addEventListener('change', function (e) {
      state.filters.showAttachments = e.target.checked;
      rebuild();
      reheat(0.8);
      persistSoon();
    });
    $('#f-matches').addEventListener('change', function (e) {
      state.filters.matchesOnly = e.target.checked;
      rebuild();
      reheat(0.8);
      persistSoon();
    });

    $('#focus-clear').addEventListener('click', clearFocus);
    depthGroupEl.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('button[data-depth]') : null;
      if (!btn) {
        return;
      }
      var depth = Number(btn.getAttribute('data-depth')) || 1;
      state.filters.depth = depth;
      if (!state.filters.focus) {
        if (state.selectedId) {
          state.filters.focus = state.selectedId;
        } else {
          toast('请先在图中选择一个节点，或右键选择「聚焦此节点」');
          refreshFocusUI();
          return;
        }
      }
      rebuild();
      reheat(0.9);
      refreshFocusUI();
      window.setTimeout(function () {
        fitView(true);
      }, 40);
    });

    $('#s-scale').addEventListener('input', function (e) {
      state.settings.nodeScale = Number(e.target.value) || 1;
      $('#v-scale').textContent = state.settings.nodeScale.toFixed(2) + '×';
      for (var i = 0; i < state.nodes.length; i++) {
        state.nodes[i].radius = radiusFor(state.nodes[i]);
      }
      state.dirty = true;
      persistSoon();
    });
    $('#s-dist').addEventListener('input', function (e) {
      state.settings.linkDistance = Number(e.target.value) || 70;
      $('#v-dist').textContent = String(Math.round(state.settings.linkDistance));
      reheat(0.8);
      persistSoon();
    });
    $('#s-repel').addEventListener('input', function (e) {
      state.settings.repulsion = Number(e.target.value) || 1;
      $('#v-repel').textContent = state.settings.repulsion.toFixed(1) + '×';
      reheat(0.8);
      persistSoon();
    });
    $('#s-color').addEventListener('change', function (e) {
      state.settings.colorMode = e.target.value;
      state.colorCache.clear();
      for (var i = 0; i < state.nodes.length; i++) {
        state.nodes[i].color = computeColor(state.nodes[i]);
      }
      state.dirty = true;
      persistSoon();
    });
    $('#s-labels').addEventListener('change', function (e) {
      state.settings.showLabels = e.target.checked;
      state.dirty = true;
      persistSoon();
    });
    $('#s-reset').addEventListener('click', function () {
      state.settings.nodeScale = DEFAULTS.nodeScale;
      state.settings.linkDistance = DEFAULTS.linkDistance;
      state.settings.repulsion = DEFAULTS.repulsion;
      state.settings.labelThreshold = DEFAULTS.labelThreshold;
      state.settings.showLabels = true;
      for (var i = 0; i < state.nodes.length; i++) {
        state.nodes[i].radius = radiusFor(state.nodes[i]);
      }
      syncControls();
      reheat(1);
      toast('已恢复默认布局参数');
      persistSoon();
    });

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.addEventListener('dblclick', onDoubleClick);
    canvas.addEventListener('contextmenu', onContextMenu);
    canvas.addEventListener('pointerleave', function () {
      if (!state.drag && !state.pan) {
        state.hoverId = null;
        hideTip();
        state.dirty = true;
      }
    });

    stage.addEventListener('pointerdown', function (e) {
      if (e.target === stage) {
        hideMenu();
      }
    });

    window.addEventListener('resize', function () {
      resize();
    });
    if (window.ResizeObserver) {
      new ResizeObserver(function () {
        resize();
      }).observe(stage);
    }

    // 主题切换时刷新配色
    if (window.MutationObserver) {
      new MutationObserver(function () {
        var prev = state.theme;
        detectTheme();
        if (prev !== state.theme) {
          state.colorCache.clear();
          rebuild();
          state.dirty = true;
        }
      }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }
  }

  // ------------------------------------------------------------ 启动

  function boot() {
    detectTheme();
    state.font = getComputedStyle(document.body).fontFamily || 'system-ui, sans-serif';
    restoreState();
    resize();
    bindUi();
    syncControls();
    updateZoomLabel();
    window.requestAnimationFrame(frame);
    post({ type: 'ready' });

    window.setTimeout(function () {
      hintEl.classList.add('fade');
    }, 9000);

    window.addEventListener('error', function (event) {
      post({ type: 'error', message: String(event.message || event.error || 'unknown') });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
