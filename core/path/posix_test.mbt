///|
test "dirname / basename" {
  assert_eq(@path.dirname("a/b/c.md"), "a/b")
  assert_eq(@path.dirname("c.md"), "")
  assert_eq(@path.basename("a/b/c.md"), "c.md")
  assert_eq(@path.basename("c.md"), "c.md")
}

///|
test "extname" {
  assert_eq(@path.extname("a/b/c.MD"), ".md")
  assert_eq(@path.extname("a/b/c"), "")
  assert_eq(@path.extname(".gitignore"), "")
  assert_eq(@path.strip_ext("a/b/c.md"), "a/b/c")
  assert_eq(@path.strip_ext("a/b.c/d"), "a/b.c/d")
}

///|
test "normalize" {
  assert_eq(@path.normalize("./a/./b/../c.md"), "a/c.md")
  assert_eq(@path.normalize("//a//b"), "a/b")
  assert_eq(@path.normalize("../../x"), "x")
  assert_eq(@path.join("notes/daily", "../img/a.png"), "notes/img/a.png")
  assert_eq(@path.join("", "notes/a.md"), "notes/a.md")
}

///|
test "dot segment" {
  assert_true(@path.has_dot_segment(".obsidian/app.json"))
  // 与旧实现保持一致：隐藏文件同样跳过
  assert_true(@path.has_dot_segment("notes/.hidden.md"))
  assert_false(@path.has_dot_segment("notes/a.md"))
  assert_false(@path.has_dot_segment("notes/a.b/c.md"))
}

///|
test "depth" {
  assert_eq(@path.depth("a.md"), 1)
  assert_eq(@path.depth("a/b/c.md"), 3)
}

///|
test "decode_uri" {
  assert_eq(@path.decode_uri("notes/a%20b.md"), "notes/a b.md")
  assert_eq(@path.decode_uri("notes\\sub\\a.md"), "notes/sub/a.md")
}
