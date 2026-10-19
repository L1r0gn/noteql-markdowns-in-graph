// mdparse 包的测试：覆盖双链、标准链接、标签、Frontmatter 与忽略规则。
// 这些用例与 TypeScript 版 `markdownParser.ts` 的行为一一对应，
// 保证重构前后图谱数据完全一致。

///|
fn targets(doc : @mdparse.ParsedDoc) -> Array[String] {
  doc.links.map(fn(l) { l.target })
}

///|
test "wiki links: basic / alias / anchor / embed" {
  let doc = @mdparse.parse_markdown(
    "见 [[笔记A]]、[[笔记B|别名]]、[[笔记C#小节]]、![[图片.png]]、[[#本页标题]]",
  )
  assert_eq(
    targets(doc).join(","),
    "笔记A,笔记B,笔记C,图片.png",
  )
  assert_eq(doc.links[1].title, "别名")
  assert_eq(doc.links[3].kind, @mdparse.LinkKind::Embed)
  assert_eq(doc.links[0].line, 1)
}

///|
test "markdown links: relative, anchor, query, external" {
  let doc = @mdparse.parse_markdown(
    "# 标题\n[相对](./daily/a.md#x) [根](/notes/b.md?y=1) [外链](https://example.com) [锚点](#top)",
  )
  assert_eq(targets(doc).join(","), "./daily/a.md,/notes/b.md")
  assert_eq(doc.links[0].line, 2)
}

///|
test "markdown image becomes embed link" {
  let doc = @mdparse.parse_markdown("![图](assets/a.png)")
  assert_eq(doc.links.length(), 1)
  assert_eq(doc.links[0].kind, @mdparse.LinkKind::Embed)
  assert_eq(doc.links[0].target, "assets/a.png")
}

///|
test "inline code and fences are ignored" {
  let text = "正文 `[[不该出现]]`\n\n```md\n[[代码里的链接]]\n#notatag\n```\n\n[[真链接]]"
  let doc = @mdparse.parse_markdown(text)
  assert_eq(targets(doc).join(","), "真链接")
  assert_eq(doc.tags.join(","), "")
}

///|
test "tilde fence and nested fence length" {
  let text = "~~~\n[[a]]\n~~~~\n[[b]]"
  let doc = @mdparse.parse_markdown(text)
  // `~~~~` 长度 >= 3 且同为 `~`，关闭围栏
  assert_eq(targets(doc).join(","), "b")
}

///|
test "inline tags" {
  let doc = @mdparse.parse_markdown("今天读 #技术/moonbit 和 #阅读，顺便 #2024 #c#")
  assert_eq(doc.tags.join(","), "技术/moonbit,阅读,c")
}

///|
test "frontmatter: inline array / comma list / block list" {
  let a = @mdparse.parse_markdown("---\ntags: [alpha, beta]\n---\n正文")
  assert_eq(a.tags.join(","), "alpha,beta")

  let b = @mdparse.parse_markdown("---\ntags: gamma, delta\n---\n正文")
  assert_eq(b.tags.join(","), "gamma,delta")

  let c = @mdparse.parse_markdown("---\ntags:\n  - one\n  - \"two\"\nkeywords: three\n---\n正文")
  assert_eq(c.tags.join(","), "one,two,three")
}

///|
test "frontmatter is not scanned for links" {
  let doc = @mdparse.parse_markdown("---\ntitle: \"[[not a link]]\"\n---\n[[real]]")
  assert_eq(targets(doc).join(","), "real")
}

///|
test "cjk tags survive" {
  let doc = @mdparse.parse_markdown("随手一记 #读书笔记 与 #moonbit-lang")
  assert_eq(doc.tags.join(","), "读书笔记,moonbit-lang")
}

///|
test "crlf and bom" {
  let doc = @mdparse.parse_markdown("\u{FEFF}---\r\ntags: [x]\r\n---\r\n[[a]]\r\n")
  assert_eq(doc.tags.join(","), "x")
  assert_eq(targets(doc).join(","), "a")
}
