// NoteQL 单元测试：语法、语义、图递归、缓存失效与差分一致性。

///|
fn sample_vault() -> @vault.Vault {
  let v = @vault.Vault::new()
  v.upsert_note("index.md", 100, 1.0, "[[a]] [[b]] #hub")
  v.upsert_note("a.md", 200, 2.0, "[[b]] #draft")
  v.upsert_note("b.md", 300, 3.0, "[[a]] #draft")
  v.upsert_note("c.md", 400, 4.0, "[[missing]] #done")
  v.upsert_note("notes/a.md", 500, 5.0, "[[b]] #other")
  v.upsert_attachment("assets/pic.png", 1024, 6.0)
  v
}

///|
fn run_ok(vault : @vault.Vault, source : String) -> @query.QueryResult {
  match @query.run_source(vault, source) {
    @query.ROk(result) => result
    // 返回空结果；调用方的断言会把真正的失败暴露出来。
    @query.RErr(_) => { columns: [], rows: [], total_rows: 0, scanned: 0 }
  }
}

///|
fn cell(result : @query.QueryResult, row : Int, column : Int) -> String {
  result.rows[row][column].display()
}

///|
test "query: filter, order and limit" {
  let result = run_ok(
    sample_vault(),
    "SELECT n.path FROM note n WHERE n.tags CONTAINS 'draft' ORDER BY n.path LIMIT 1",
  )
  assert_eq(result.rows.length(), 1)
  assert_eq(cell(result, 0, 0), "a.md")
  assert_eq(result.total_rows, 2)
  assert_eq(result.scanned, 5)
}

///|
test "query: unresolved and ambiguous are first-class relations" {
  let v = sample_vault()
  let unresolved = run_ok(v, "SELECT u.from, u.line FROM unresolved u")
  assert_eq(unresolved.rows.length(), 1)
  assert_eq(cell(unresolved, 0, 0), "c.md")
  assert_eq(cell(unresolved, 0, 1), "1")

  let ambiguous = run_ok(
    v,
    "SELECT a.from, a.candidates FROM ambiguous a WHERE a.from = 'index.md'",
  )
  assert_eq(ambiguous.rows.length(), 1)
  assert_eq(cell(ambiguous, 0, 0), "index.md")
  assert_eq(ambiguous.rows[0][1].display(), "a.md, notes/a.md")
}

///|
test "query: cycle, orphan and reachability" {
  let v = sample_vault()
  let cycles = run_ok(v, "SELECT c.path FROM cycle c ORDER BY c.path")
  assert_eq(cycles.rows.length(), 2)
  assert_eq(cell(cycles, 0, 0), "a.md")
  assert_eq(cell(cycles, 1, 0), "b.md")

  let orphans = run_ok(v, "SELECT o.path FROM orphan o ORDER BY o.path")
  assert_eq(orphans.rows.length(), 1)
  assert_eq(cell(orphans, 0, 0), "c.md")

  let reached = run_ok(
    v,
    "SELECT n.path, distance('index.md', n.path) AS d FROM note n WHERE distance('index.md', n.path) >= 0 ORDER BY d, n.path",
  )
  // index 自身 + index -> a/b；notes/a 没有入链，c 只有断链
  assert_eq(reached.rows.length(), 3)
  let not_reached = run_ok(
    v,
    "SELECT n.path FROM note n WHERE reachable('index.md', n.path, 2) = false ORDER BY n.path",
  )
  assert_eq(not_reached.rows.length(), 2)
  assert_eq(cell(not_reached, 0, 0), "c.md")
  assert_eq(cell(not_reached, 1, 0), "notes/a.md")
}

///|
test "query: group by, having alias and aggregate functions" {
  let result = run_ok(
    sample_vault(),
    "SELECT n.folder, count(*) AS c FROM note n GROUP BY n.folder HAVING c >= 2 ORDER BY c DESC, n.folder",
  )
  assert_eq(result.rows.length(), 1)
  assert_eq(cell(result, 0, 0), "")
  assert_eq(cell(result, 0, 1), "4")

  let sums = run_ok(
    sample_vault(),
    "SELECT count(*) AS total, sum(n.size) AS bytes, avg(n.size) AS avg FROM note n",
  )
  assert_eq(cell(sums, 0, 0), "5")
  assert_eq(cell(sums, 0, 1), "1500")
  assert_eq(cell(sums, 0, 2), "300")
}

///|
test "query: distinct, select star and case-insensitive keywords" {
  let result = run_ok(
    sample_vault(),
    "select distinct n.folder from note n order by n.folder",
  )
  assert_eq(result.rows.length(), 2)
  assert_eq(cell(result, 0, 0), "")
  assert_eq(cell(result, 1, 0), "notes")

  let star = run_ok(sample_vault(), "SELECT * FROM file f ORDER BY f.path")
  assert_eq(star.columns.length(), 6)
  assert_eq(star.columns[0], "path")
  assert_eq(star.rows.length(), 6)
}

///|
test "query: invalid queries are rejected" {
  let v = sample_vault()
  let unknown_column = @query.run_source(v, "SELECT n.nope FROM note n")
  match unknown_column {
    @query.RErr(_) => assert_true(true)
    @query.ROk(_) => assert_true(false)
  }
  let agg_in_where = @query.run_source(
    v,
    "SELECT n.path FROM note n WHERE count(*) > 1",
  )
  match agg_in_where {
    @query.RErr(_) => assert_true(true)
    @query.ROk(_) => assert_true(false)
  }
  let bad_group = @query.run_source(
    v,
    "SELECT n.path, n.tags FROM note n GROUP BY n.path",
  )
  match bad_group {
    @query.RErr(_) => assert_true(true)
    @query.ROk(_) => assert_true(false)
  }
}

///|
fn same_result(a : @query.QueryResult, b : @query.QueryResult) -> Bool {
  if a.rows.length() != b.rows.length() {
    return false
  }
  for i = 0; i < a.rows.length(); i = i + 1 {
    if a.rows[i].length() != b.rows[i].length() {
      return false
    }
    for j = 0; j < a.rows[i].length(); j = j + 1 {
      if !a.rows[i][j].equals(b.rows[i][j]) {
        return false
      }
    }
  }
  true
}

///|
test "cache: hits on unrelated edits and invalidates on related edits" {
  let v = sample_vault()
  let engine = @query.Engine::new()
  let source = "SELECT t.note, t.tag FROM tag t ORDER BY t.note, t.tag"
  let first = match engine.run(v, source, true) {
    @query.EOk(response) => response
    @query.EErr(_) => {
      assert_true(false)
      { result: { columns: [], rows: [], total_rows: 0, scanned: 0 }, cached: false, deps: [] }
    }
  }
  assert_true(!first.cached)

  let second = match engine.run(v, source, true) {
    @query.EOk(response) => response
    @query.EErr(_) => {
      assert_true(false)
      { result: { columns: [], rows: [], total_rows: 0, scanned: 0 }, cached: false, deps: [] }
    }
  }
  assert_true(second.cached)

  // 只改链接、不改标签：tag 查询不应失效
  v.upsert_note("a.md", 201, 7.0, "[[b]] [[c]] #draft")
  let after_link_edit = match engine.run(v, source, true) {
    @query.EOk(response) => response
    @query.EErr(_) => {
      assert_true(false)
      { result: { columns: [], rows: [], total_rows: 0, scanned: 0 }, cached: false, deps: [] }
    }
  }
  assert_true(after_link_edit.cached)

  // 改标签：tag 查询必须失效，且结果与全新引擎一致
  v.upsert_note("a.md", 201, 8.0, "[[b]] [[c]] #draft #urgent")
  let after_tag_edit = match engine.run(v, source, true) {
    @query.EOk(response) => response
    @query.EErr(_) => {
      assert_true(false)
      { result: { columns: [], rows: [], total_rows: 0, scanned: 0 }, cached: false, deps: [] }
    }
  }
  assert_true(!after_tag_edit.cached)

  let fresh = sample_vault()
  fresh.upsert_note("a.md", 201, 8.0, "[[b]] [[c]] #draft #urgent")
  let expected = run_ok(fresh, source)
  assert_true(same_result(after_tag_edit.result, expected))
}

///|
test "cache: link queries hit on tag-only edits" {
  let v = sample_vault()
  let engine = @query.Engine::new()
  let source = "SELECT l.from, l.to FROM link l ORDER BY l.from, l.to"
  let _ = match engine.run(v, source, true) {
    @query.EOk(response) => response
    @query.EErr(_) => {
      assert_true(false)
      { result: { columns: [], rows: [], total_rows: 0, scanned: 0 }, cached: false, deps: [] }
    }
  }
  v.upsert_note("c.md", 401, 9.0, "[[missing]] #done #changed")
  let after = match engine.run(v, source, true) {
    @query.EOk(response) => response
    @query.EErr(_) => {
      assert_true(false)
      { result: { columns: [], rows: [], total_rows: 0, scanned: 0 }, cached: false, deps: [] }
    }
  }
  assert_true(after.cached)
}
