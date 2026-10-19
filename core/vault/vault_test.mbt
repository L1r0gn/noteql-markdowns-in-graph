// vault 包测试：链接解析规则与图谱构建结果。

///|
fn build_sample() -> @vault.Vault {
  let v = @vault.Vault::new()
  v.upsert_note("index.md", 100, 1.0, "# 首页\n[[notes/a]] 与 [[notes/b|B 篇]]")
  v.upsert_note(
    "notes/a.md",
    200,
    2.0,
    "---\ntags: [alpha]\n---\n指向 [[b]]、[[daily/c#小节]]、![[assets/pic.png]]、[[missing]]",
  )
  v.upsert_note("notes/b.md", 300, 3.0, "回到 [[index]]，再看 [c](../notes/daily/c.md)")
  v.upsert_note("notes/daily/c.md", 400, 4.0, "只连 [[a]]")
  v.upsert_attachment("assets/pic.png", 1024, 5.0)
  v.upsert_attachment("assets/unused.png", 2048, 6.0)
  v
}

///|
test "resolve: relative path wins over root path" {
  let v = build_sample()
  assert_eq(v.resolve("notes/b.md", "../notes/daily/c.md"), Some("notes/daily/c.md"))
  // 相对当前目录优先
  assert_eq(v.resolve("notes/a.md", "b"), Some("notes/b.md"))
  assert_eq(v.resolve("notes/a.md", "b.md"), Some("notes/b.md"))
}

///|
test "resolve: absolute-style target is rooted at workspace" {
  let v = build_sample()
  assert_eq(v.resolve("notes/daily/c.md", "/notes/a.md"), Some("notes/a.md"))
  assert_eq(v.resolve("notes/daily/c.md", "notes/a.md"), Some("notes/a.md"))
}

///|
test "resolve: by unique file name, then same dir, then shallowest" {
  let v = @vault.Vault::new()
  v.upsert_note("a/x.md", 1, 1.0, "")
  v.upsert_note("b/c/x.md", 1, 1.0, "")
  // 同名多份：优先同目录
  assert_eq(v.resolve("b/c/z.md", "x"), Some("b/c/x.md"))
  // 不同目录：取层级最浅的一份
  assert_eq(v.resolve("a/z.md", "x"), Some("a/x.md"))
  assert_eq(v.resolve("q/z.md", "x"), Some("a/x.md"))
}

///|
test "resolve: attachments use base+ext as key" {
  let v = build_sample()
  assert_eq(v.resolve("notes/a.md", "assets/pic.png"), Some("assets/pic.png"))
  // 只写文件名也能命中附件
  assert_eq(v.resolve("notes/a.md", "pic.png"), Some("assets/pic.png"))
}

///|
test "resolve: percent-encoded and quarantined targets" {
  let v = @vault.Vault::new()
  v.upsert_note("notes/空 格.md", 1, 1.0, "")
  assert_eq(v.resolve("notes/a.md", "空%20格"), Some("notes/空 格.md"))
  assert_eq(v.resolve("notes/a.md", ""), None)
  assert_eq(v.resolve("notes/a.md", "   "), None)
}

///|
test "resolve: rename keeps index consistent" {
  let v = @vault.Vault::new()
  v.upsert_note("a.md", 1, 1.0, "")
  v.upsert_note("b.md", 1, 1.0, "")
  v.remove("a.md")
  assert_eq(v.resolve("c.md", "a"), None)
  assert_eq(v.resolve("c.md", "b"), Some("b.md"))
  assert_eq(v.note_count(), 1)
}

///|
test "graph: nodes, links, degrees and stats" {
  let v = build_sample()
  let g = v.build_graph(16, 0, "sample")
  assert_eq(g.stats.notes, 4)
  // 只有被引用的附件入图
  assert_eq(g.stats.attachments, 1)
  // [[missing]] 生成一个幽灵节点
  assert_eq(g.stats.unresolved, 1)
  let mut index = 0
  for node in g.nodes {
    if node.id == "notes/b.md" {
      // index -> b、a -> b（[[b]]）、b 自身两条出边
      index = node.degree
    }
  }
  assert_eq(index, 4)
  // 节点按度数升序，枢纽节点在末尾
  assert_true(g.nodes[g.nodes.length() - 1].degree >= g.nodes[0].degree)
}

///|
test "graph: duplicate links collapse into one edge" {
  let v = @vault.Vault::new()
  v.upsert_note("a.md", 1, 1.0, "[[b]] 和 [b](b.md) 以及 [[b|别名]]")
  v.upsert_note("b.md", 1, 1.0, "")
  let g = v.build_graph(16, 0, "r")
  assert_eq(g.links.length(), 1)
  assert_eq(g.links[0].source, "a.md")
  assert_eq(g.links[0].target, "b.md")
}

///|
test "graph: self link is ignored" {
  let v = @vault.Vault::new()
  v.upsert_note("a.md", 1, 1.0, "[[a]] 自引用")
  let g = v.build_graph(16, 0, "r")
  assert_eq(g.links.length(), 0)
  assert_eq(g.stats.unresolved, 0)
}

///|
test "graph: tags are clipped to max_tags" {
  let v = @vault.Vault::new()
  v.upsert_note("a.md", 1, 1.0, "#one #two #three")
  let g = v.build_graph(2, 0, "r")
  assert_eq(g.nodes[0].tags.join(","), "one,two")
}

///|
test "graph: unresolved ghost nodes dedupe by lower case" {
  let v = @vault.Vault::new()
  v.upsert_note("a.md", 1, 1.0, "[[Missing]] [[missing]]")
  let g = v.build_graph(16, 0, "r")
  assert_eq(g.stats.unresolved, 1)
  assert_eq(g.links.length(), 1)
}

///|
test "folders: counts include parents" {
  let v = build_sample()
  let folders = v.folders()
  let mut found = ""
  for f in folders {
    if f.path == "notes" {
      found = f.count.to_string()
    }
  }
  assert_eq(found, "3")
}
