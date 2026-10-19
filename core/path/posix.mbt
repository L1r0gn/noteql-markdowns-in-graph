// POSIX 风格的路径运算。
//
// 扩展里的路径全部来自 VS Code 的 URI（已转成正斜杠、相对工作区根目录），
// 所以这里只需要处理 `a/b/c` 这种形式，不涉及盘符与反斜杠。

///|
/// 取目录部分；根目录下的文件返回空串。
pub fn dirname(p : String) -> String {
  match p.rev_find("/") {
    Some(i) => p[0:i].to_owned()
    None => ""
  }
}

///|
/// 取最后一段文件名（含扩展名）。
pub fn basename(p : String) -> String {
  match p.rev_find("/") {
    Some(i) => p[i + 1:].to_owned()
    None => p
  }
}

///|
/// 取小写扩展名，带前导点；没有扩展名时返回空串。
pub fn extname(p : String) -> String {
  let base = basename(p)
  match base.rev_find(".") {
    Some(i) =>
      if i <= 0 {
        ""
      } else {
        base[i:].to_owned().to_lower()
      }
    None => ""
  }
}

///|
/// 去掉末尾扩展名。`a/b.md` -> `a/b`
pub fn strip_ext(p : String) -> String {
  let base = basename(p)
  match base.rev_find(".") {
    Some(i) =>
      if i <= 0 {
        p
      } else {
        let cut = p.length() - (base.length() - i)
        p[0:cut].to_owned()
      }
    None => p
  }
}

///|
/// 归一化：折叠 `.`、`..` 与重复的 `/`；结果不含前导斜杠。
pub fn normalize(p : String) -> String {
  let parts : Array[String] = []
  for seg in p.split("/") {
    let s = seg.to_owned()
    if s == "" || s == "." {
      continue
    }
    if s == ".." {
      if parts.length() > 0 {
        parts.pop() |> ignore
      }
      continue
    }
    parts.push(s)
  }
  parts.join("/")
}

///|
/// 把 `rel` 接到 `dir` 之后再归一化。
pub fn join(dir : String, rel : String) -> String {
  if dir == "" {
    normalize(rel)
  } else {
    normalize(dir + "/" + rel)
  }
}

///|
/// 是否包含隐藏目录段（`.git`、`.workbuddy` 等，但不含单纯的 `.`）。
pub fn has_dot_segment(rel : String) -> Bool {
  for seg in rel.split("/") {
    if seg.char_length() > 1 && seg.has_prefix(".") {
      return true
    }
  }
  false
}

///|
/// 路径层级深度：`a/b/c.md` -> 3
pub fn depth(p : String) -> Int {
  let mut n = 0
  for seg in p.split("/") {
    if seg.char_length() > 0 {
      n = n + 1
    }
  }
  n
}

///|
/// 解码 URL 中的百分号转义，并把反斜杠统一成正斜杠。
/// Obsidian 的双链里经常出现 `%20`，不解码就匹配不到真实文件。
pub fn decode_uri(raw : String) -> String {
  let s = raw.replace_all(old="\\", new="/")
  @percent.decode_lossy(s)
}
