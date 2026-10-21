/* ============================================================
 * NoteQL 查询面板
 * 编辑器 + 结果表；查询在扩展宿主内执行，这里只负责交互与渲染。
 * ============================================================ */
(function () {
  'use strict';

  var vscode = acquireVsCodeApi();
  var MAX_RENDER_ROWS = 500;

  var editorEl = document.getElementById('editor');
  var runEl = document.getElementById('run');
  var autoEl = document.getElementById('auto');
  var cacheEl = document.getElementById('cache');
  var examplesEl = document.getElementById('examples');
  var relationsEl = document.getElementById('relations');
  var statsEl = document.getElementById('stats');
  var statusTextEl = document.getElementById('status-text');
  var badgesEl = document.getElementById('badges');
  var errorEl = document.getElementById('error');
  var resultsEl = document.getElementById('results');
  var clearCacheEl = document.getElementById('clear-cache');

  var saved = null;
  try {
    saved = vscode.getState();
  } catch (err) {
    saved = null;
  }

  function post(message) {
    vscode.postMessage(message);
  }

  function persist() {
    try {
      vscode.setState({
        source: editorEl.value,
        auto: autoEl.checked,
        cache: cacheEl.checked
      });
    } catch (err) {
      /* 忽略持久化失败 */
    }
  }

  function run() {
    var source = editorEl.value.trim();
    if (!source) {
      showError('查询不能为空');
      return;
    }
    persist();
    post({ type: 'run', source: source, useCache: cacheEl.checked });
  }

  function showError(message) {
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
  }

  function clearError() {
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
  }

  function setStatus(text, badges) {
    statusTextEl.textContent = text;
    badgesEl.textContent = badges || '';
  }

  function renderRelations(relations) {
    relationsEl.textContent = '';
    if (!relations || relations.length === 0) {
      relationsEl.textContent = '索引尚未就绪';
      return;
    }
    relations.forEach(function (relation) {
      var chip = document.createElement('button');
      chip.className = 'chip';
      chip.type = 'button';
      chip.textContent = relation.name;
      chip.title = (relation.columns || []).join(', ');
      chip.addEventListener('click', function () {
        editorEl.value = 'SELECT * FROM ' + relation.name + ' LIMIT 10';
        examplesEl.value = '';
        editorEl.focus();
        persist();
      });
      relationsEl.appendChild(chip);
    });
  }

  function renderStats(stats) {
    statsEl.textContent = '';
    if (!stats) {
      statsEl.textContent = '暂无统计';
      return;
    }
    var row = document.createElement('div');
    row.className = 'stat-row';
    var parts = [
      ['命中', stats.hits],
      ['未命中', stats.misses],
      ['缓存条目', stats.cacheSize]
    ];
    parts.forEach(function (pair) {
      var item = document.createElement('span');
      item.className = 'stat';
      item.textContent = pair[0] + ' ' + pair[1];
      row.appendChild(item);
    });
    statsEl.appendChild(row);
  }

  function renderExamples(examples) {
    examplesEl.textContent = '';
    var custom = document.createElement('option');
    custom.value = '';
    custom.textContent = '自定义查询';
    examplesEl.appendChild(custom);
    (examples || []).forEach(function (example, index) {
      var option = document.createElement('option');
      option.value = String(index);
      option.textContent = example.name;
      examplesEl.appendChild(option);
    });
    examplesEl.value = '';
    examplesEl.addEventListener('change', function () {
      if (examplesEl.value === '') return;
      var item = (examples || [])[Number(examplesEl.value)];
      if (item) {
        editorEl.value = item.source;
        editorEl.focus();
        persist();
      }
    });
  }

  function cellText(value) {
    if (value === null || value === undefined) return 'null';
    if (Array.isArray(value)) return value.join(', ');
    return String(value);
  }

  function isNull(value) {
    return value === null || value === undefined;
  }

  function columnIndex(columns, names) {
    for (var i = 0; i < columns.length; i++) {
      if (names.indexOf(columns[i]) >= 0) return i;
    }
    return -1;
  }

  function renderResult(result) {
    clearError();
    resultsEl.textContent = '';

    if (!result || !result.ok) {
      setStatus('查询失败', '');
      showError((result && result.error) || '未知错误');
      return;
    }

    var columns = result.columns || [];
    var rows = result.rows || [];
    var pathIndex = columnIndex(columns, ['path', 'from', 'note']);
    var lineIndex = columnIndex(columns, ['line']);

    if (rows.length === 0) {
      resultsEl.innerHTML = '<div class="empty">没有匹配结果</div>';
    } else {
      var table = document.createElement('table');
      var thead = document.createElement('thead');
      var headRow = document.createElement('tr');
      columns.forEach(function (column) {
        var th = document.createElement('th');
        th.textContent = column;
        headRow.appendChild(th);
      });
      thead.appendChild(headRow);
      table.appendChild(thead);

      var tbody = document.createElement('tbody');
      var limit = Math.min(rows.length, MAX_RENDER_ROWS);
      for (var i = 0; i < limit; i++) {
        var tr = document.createElement('tr');
        if (pathIndex >= 0) {
          tr.className = 'clickable';
          tr.title = '点击打开文件';
          tr.dataset.path = String(rows[i][pathIndex]);
          tr.dataset.line = lineIndex >= 0 ? String(rows[i][lineIndex]) : '1';
          tr.addEventListener('click', function () {
            post({
              type: 'openFile',
              path: this.dataset.path,
              line: Number(this.dataset.line) || 1
            });
          });
        }
        for (var j = 0; j < columns.length; j++) {
          var td = document.createElement('td');
          var value = rows[i][j];
          if (isNull(value)) {
            td.textContent = 'null';
            td.className = 'null';
          } else if (Array.isArray(value)) {
            value.forEach(function (item) {
              var chip = document.createElement('span');
              chip.className = 'cell-chip';
              chip.textContent = item;
              td.appendChild(chip);
            });
            if (value.length === 0) {
              td.textContent = '[]';
              td.className = 'null';
            }
          } else if (typeof value === 'boolean') {
            td.textContent = value ? 'true' : 'false';
            td.className = value ? 'bool-true' : 'bool-false';
          } else if (typeof value === 'number') {
            td.textContent = String(value);
            td.className = 'number';
          } else {
            td.textContent = value;
          }
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      resultsEl.appendChild(table);
      if (rows.length > MAX_RENDER_ROWS) {
        var more = document.createElement('div');
        more.className = 'more';
        more.textContent = '仅显示前 ' + MAX_RENDER_ROWS + ' 行，共 ' + rows.length + ' 行';
        resultsEl.appendChild(more);
      }
    }

    var badges = [];
    badges.push(result.cached ? '缓存命中' : '重新计算');
    if (typeof result.elapsedMs === 'number') {
      badges.push(result.elapsedMs.toFixed(2) + ' ms');
    }
    if (typeof result.scanned === 'number') {
      badges.push('扫描 ' + result.scanned);
    }
    var deps = result.dependencies || [];
    if (deps.length) {
      badges.push('依赖 ' + deps.join(' + '));
    }
    setStatus(
      (result.rowCount || 0) + ' 行' +
        (typeof result.totalRows === 'number' && result.totalRows !== result.rowCount
          ? '（共 ' + result.totalRows + ' 行）'
          : ''),
      badges.join(' · ')
    );
  }

  runEl.addEventListener('click', run);
  autoEl.addEventListener('change', function () {
    post({ type: 'autoRefresh', value: autoEl.checked });
    persist();
  });
  cacheEl.addEventListener('change', persist);
  clearCacheEl.addEventListener('click', function () {
    post({ type: 'clearCache' });
  });

  editorEl.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      run();
      return;
    }
    if (event.key === 'Tab') {
      event.preventDefault();
      var start = editorEl.selectionStart;
      var end = editorEl.selectionEnd;
      editorEl.value = editorEl.value.slice(0, start) + '  ' + editorEl.value.slice(end);
      editorEl.selectionStart = editorEl.selectionEnd = start + 2;
      persist();
    }
  });
  editorEl.addEventListener('input', persist);

  window.addEventListener('message', function (event) {
    var msg = event.data;
    if (!msg || typeof msg.type !== 'string') return;
    if (msg.type === 'init') {
      if (!editorEl.value) {
        editorEl.value = msg.source || (saved && saved.source) || '';
      }
      if (saved && typeof saved.auto === 'boolean') {
        autoEl.checked = saved.auto;
        post({ type: 'autoRefresh', value: autoEl.checked });
      }
      if (saved && typeof saved.cache === 'boolean') {
        cacheEl.checked = saved.cache;
      }
      renderExamples(msg.examples);
      renderRelations(msg.relations);
      renderStats(msg.stats);
    } else if (msg.type === 'setQuery') {
      editorEl.value = msg.source || '';
      editorEl.focus();
      persist();
    } else if (msg.type === 'running') {
      clearError();
      setStatus('运行中…', '');
    } else if (msg.type === 'result') {
      renderResult(msg.result);
      renderStats(msg.stats);
    }
  });

  // 恢复上次编辑的查询
  if (saved && typeof saved.source === 'string' && saved.source.trim()) {
    editorEl.value = saved.source;
  }
  if (saved && typeof saved.auto === 'boolean') {
    autoEl.checked = saved.auto;
  }
  if (saved && typeof saved.cache === 'boolean') {
    cacheEl.checked = saved.cache;
  }

  post({ type: 'ready' });
})();
