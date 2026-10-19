// Markdown 链接 / 标签扫描器。
//
// 支持：
//   [[笔记]]、[[笔记|别名]]、[[笔记#标题]]、[[笔记#^block]]、![[笔记]]
//   [文本](笔记.md)、[文本](../dir/笔记.md#锚点)、![图片](assets/a.png)
//   #行内标签、Frontmatter 中的 tags / tag / keywords
//
// 忽略：围栏代码块、行内代码、单行 HTML 注释、外部协议链接。
//
// 实现说明：整篇文本只转换一次 `Array[Char]`，之后所有扫描都以
// `(数组, 起, 止)` 的形式进行，不再按行分配子串；只有真正命中的
// 链接/标签才会构造 String。这是内核里最热的路径，省下的分配
// 直接体现在打开大型笔记库的耗时上。

///|
pub(all) enum LinkKind {
  Wiki
  Md
  Embed
} derive(Eq, Debug)

///|
pub fn LinkKind::label(self : LinkKind) -> String {
  match self {
    Wiki => "wiki"
    Md => "md"
    Embed => "embed"
  }
}

///|
/// 一条解析出来的原始链接。
pub(all) struct RawLink {
  /// 去掉 `#锚点` 与 `|别名` 之后的目标文本
  target : String
  /// 原始匹配文本，便于调试与撤销
  raw : String
  /// `|` 之后的显示别名，没有则为空串
  title : String
  kind : LinkKind
  /// 1 基行号
  line : Int
}

///|
pub(all) struct ParsedDoc {
  links : Array[RawLink]
  tags : Array[String]
}

// ---------------------------------------------------------------- 字符分类

///|
fn is_space(c : Char) -> Bool {
  c == ' ' || c == '\t' || c == '\u{000B}' || c == '\u{000C}'
}

///|
fn is_blank_char(c : Char) -> Bool {
  is_space(c) || c == '\r'
}

///|
fn is_digit_char(c : Char) -> Bool {
  c >= '0' && c <= '9'
}

///|
fn is_alpha_char(c : Char) -> Bool {
  (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}

///|
/// 中文标点（全角符号、CJK 标点）不算标签字符。
fn is_cjk_punct(c : Char) -> Bool {
  (c >= '\u{3000}' && c <= '\u{303F}') ||
  (c >= '\u{FE30}' && c <= '\u{FE4F}') ||
  (c >= '\u{FF00}' && c <= '\u{FFEF}')
}

///|
/// 行内标签允许出现的字符集合。
/// 近似 JS 正则里的 `[\p{L}\p{N}_\-/]`：ASCII 字母数字 + 下划线/连字符/斜杠，
/// 以及所有非 ASCII 的字母文字（中日韩文字本身就是标签的常见写法）。
fn is_tag_char(c : Char) -> Bool {
  if is_alpha_char(c) || is_digit_char(c) || c == '_' || c == '-' || c == '/' {
    return true
  }
  c > '\u{007F}' && !is_cjk_punct(c)
}

///|
/// 标签前必须出现分隔符，避免把 `C#`、`a#b` 当成标签。
fn is_tag_boundary(c : Char) -> Bool {
  is_blank_char(c) ||
  c == '>' ||
  c == '|' ||
  c == '，' ||
  c == '。' ||
  c == '、' ||
  c == '；' ||
  c == '：' ||
  c == '！' ||
  c == '？' ||
  c == '）' ||
  c == '】' ||
  c == '》' ||
  c == '」' ||
  c == '』'
}

// ---------------------------------------------------------------- 小工具

///|
fn slice_to_string(cs : Array[Char], start : Int, end : Int) -> String {
  if end <= start {
    ""
  } else {
    String::from_array(cs[start:end])
  }
}

///|
fn trim_range(cs : Array[Char], start : Int, end : Int) -> (Int, Int) {
  let mut s = start
  let mut e = end
  while s < e && is_blank_char(cs[s]) {
    s = s + 1
  }
  while e > s && is_blank_char(cs[e - 1]) {
    e = e - 1
  }
  (s, e)
}

///|
fn trim_string(raw : String) -> String {
  let cs = raw.to_array()
  let (s, e) = trim_range(cs, 0, cs.length())
  slice_to_string(cs, s, e)
}

///|
/// 围栏标记：行首（最多 3 个空格）起，连续 3 个以上的反引号或波浪号。
/// 返回围栏字符串本身（如 "```"），没有则返回空串。
fn fence_marker(cs : Array[Char], start : Int, end : Int) -> String {
  let mut i = start
  while i < end && i - start < 3 && cs[i] == ' ' {
    i = i + 1
  }
  if i >= end {
    return ""
  }
  let c = cs[i]
  if c != '`' && c != '~' {
    return ""
  }
  let mut j = i
  while j < end && cs[j] == c {
    j = j + 1
  }
  if j - i < 3 {
    return ""
  }
  String::make(j - i, c)
}

///|
/// 把行内代码 `` `x` `` 覆盖成空格，避免其中的 `[[链接]]` 被误识别。
fn blank_inline_code(cs : Array[Char], start : Int, end : Int) -> Unit {
  let mut i = start
  while i < end {
    if cs[i] == '`' {
      let mut j = i + 1
      while j < end && cs[j] != '`' {
        j = j + 1
      }
      if j < end {
        for k = i; k <= j; k = k + 1 {
          cs[k] = ' '
        }
        i = j + 1
        continue
      }
      break
    }
    i = i + 1
  }
}

///|
fn is_html_comment(cs : Array[Char], start : Int, end : Int) -> Bool {
  let (s, e) = trim_range(cs, start, end)
  if e - s < 7 {
    return false
  }
  if !(cs[s] == '<' && cs[s + 1] == '!' && cs[s + 2] == '-' && cs[s + 3] == '-') {
    return false
  }
  let t = e - 3
  cs[t] == '-' && cs[t + 1] == '-' && cs[t + 2] == '>'
}

///|
fn is_blank_range(cs : Array[Char], start : Int, end : Int) -> Bool {
  for i = start; i < end; i = i + 1 {
    if !is_blank_char(cs[i]) {
      return false
    }
  }
  true
}

///|
/// 带协议的外链（`https://`、`mailto:`）、协议相对地址与纯锚点都不入图。
pub fn is_external(target : String) -> Bool {
  if target.has_prefix("//") || target.has_prefix("#") {
    return true
  }
  let cs = target.to_array()
  let n = cs.length()
  if n == 0 || !is_alpha_char(cs[0]) {
    return false
  }
  let mut i = 1
  while i < n {
    let c = cs[i]
    if c == ':' {
      return true
    }
    if !(is_alpha_char(c) || is_digit_char(c) || c == '+' || c == '.' || c == '-') {
      return false
    }
    i = i + 1
  }
  false
}

// ---------------------------------------------------------------- 标签

///|
/// 规范化一个标签：去掉引号、前导 `#`、首尾空白；纯数字不算标签。
fn normalize_tag(raw : String) -> String {
  let cs = raw.to_array()
  let (s0, e0) = trim_range(cs, 0, cs.length())
  let mut s = s0
  let mut e = e0
  if s < e && (cs[s] == '"' || cs[s] == '\'') {
    s = s + 1
  }
  if e > s && (cs[e - 1] == '"' || cs[e - 1] == '\'') {
    e = e - 1
  }
  let (s1, e1) = trim_range(cs, s, e)
  let mut s2 = s1
  if s2 < e1 && cs[s2] == '#' {
    s2 = s2 + 1
  }
  let (s3, e3) = trim_range(cs, s2, e1)
  let value = slice_to_string(cs, s3, e3)
  if value == "" {
    return ""
  }
  let mut all_digits = true
  for c in value.to_array() {
    if !is_digit_char(c) {
      all_digits = false
      break
    }
  }
  if all_digits {
    return ""
  }
  value
}

///|
/// 去重用的标签收集器：`seen` 负责 O(1) 判重，`order` 保留出现顺序。
priv struct TagSink {
  seen : Map[String, Unit]
  order : Array[String]
}

///|
fn TagSink::new() -> TagSink {
  { seen: Map([]), order: [] }
}

///|
fn TagSink::add(self : TagSink, raw : String) -> Unit {
  let value = normalize_tag(raw)
  if value == "" {
    return
  }
  if self.seen.contains(value) {
    return
  }
  self.seen[value] = ()
  self.order.push(value)
}

// ---------------------------------------------------------------- 链接

///|
/// 收集一行里的双链与标准 Markdown 链接。
fn scan_line_links(
  cs : Array[Char],
  start : Int,
  end : Int,
  line_no : Int,
  out : Array[RawLink],
) -> Unit {
  // 第一遍：[[wikilink]] / ![[embed]]
  let mut i = start
  while i < end - 1 {
    if cs[i] == '[' && cs[i + 1] == '[' {
      let mut j = i + 2
      while j < end && cs[j] != '[' && cs[j] != ']' {
        j = j + 1
      }
      if j + 1 < end && cs[j] == ']' && cs[j + 1] == ']' {
        let embed = i > start && cs[i - 1] == '!'
        let raw_start = if embed { i - 1 } else { i }
        match parse_wiki_target(slice_to_string(cs, i + 2, j)) {
          Some((target, title)) =>
            out.push({
              target,
              raw: slice_to_string(cs, raw_start, j + 2),
              title,
              kind: if embed { LinkKind::Embed } else { LinkKind::Wiki },
              line: line_no,
            })
          None => ()
        }
        i = j + 2
        continue
      }
    }
    i = i + 1
  }
  // 第二遍：[text](target)
  let mut k = start
  while k < end - 1 {
    if cs[k] == '[' {
      let mut j = k + 1
      while j < end && cs[j] != ']' {
        j = j + 1
      }
      if j + 1 < end && cs[j] == ']' && cs[j + 1] == '(' {
        let mut m = j + 2
        while m < end && cs[m] != ')' {
          m = m + 1
        }
        if m < end {
          match parse_md_target(cs, j + 2, m) {
            Some(target) =>
              if target != "" && !is_external(target) {
                let embed = k > start && cs[k - 1] == '!'
                let raw_start = if embed { k - 1 } else { k }
                out.push({
                  target,
                  raw: slice_to_string(cs, raw_start, m + 1),
                  title: "",
                  kind: if embed { LinkKind::Embed } else { LinkKind::Md },
                  line: line_no,
                })
              }
            None => ()
          }
          k = m + 1
          continue
        }
      }
    }
    k = k + 1
  }
}

///|
/// 拆解 `[[...]]` 内部文本：先按 `|` 取别名，再按 `#` 去掉锚点。
fn parse_wiki_target(inner : String) -> (String, String)? {
  let cs = inner.to_array()
  let n = cs.length()
  let mut pipe = -1
  let mut hash = -1
  for i = 0; i < n; i = i + 1 {
    if cs[i] == '|' && pipe < 0 {
      pipe = i
    } else if cs[i] == '#' && hash < 0 {
      hash = i
    }
  }
  let target_end = if pipe >= 0 { pipe } else { n }
  let raw_target = if hash >= 0 && hash < target_end {
    slice_to_string(cs, 0, hash)
  } else {
    slice_to_string(cs, 0, target_end)
  }
  let target = trim_string(raw_target)
  if target == "" {
    // [[#标题]] 是同文件锚点，不构成节点间连线
    return None
  }
  let title = if pipe >= 0 {
    trim_string(slice_to_string(cs, pipe + 1, n))
  } else {
    ""
  }
  Some((target, title))
}

///|
/// 拆解 `[text](...)` 括号内的目标：跳过空白与 `<`，取到空白或 `>` 为止，
/// 再去掉 `#锚点` 与 `?查询`。
fn parse_md_target(cs : Array[Char], start : Int, end : Int) -> String? {
  let (s, e) = trim_range(cs, start, end)
  let mut i = s
  if i < e && cs[i] == '<' {
    i = i + 1
  }
  let mut j = i
  while j < e && !is_blank_char(cs[j]) && cs[j] != '>' && cs[j] != ')' {
    j = j + 1
  }
  if j <= i {
    return Some("")
  }
  let mut cut = j
  for k = i; k < j; k = k + 1 {
    if cs[k] == '#' || cs[k] == '?' {
      cut = k
      break
    }
  }
  let (ts, te) = trim_range(cs, i, cut)
  let target = slice_to_string(cs, ts, te)
  if target == "." {
    return Some("")
  }
  Some(target)
}

///|
/// 收集行内 `#标签`。
fn scan_line_tags(cs : Array[Char], start : Int, end : Int, sink : TagSink) -> Unit {
  let mut i = start
  while i < end {
    if cs[i] == '#' && (i == start || is_tag_boundary(cs[i - 1])) {
      let mut j = i + 1
      while j < end && is_tag_char(cs[j]) {
        j = j + 1
      }
      if j > i + 1 {
        sink.add(slice_to_string(cs, i + 1, j))
      }
      i = j
      continue
    }
    i = i + 1
  }
}

// ---------------------------------------------------------------- Frontmatter

///|
/// 解析 Frontmatter 中的 tags / tag / keywords，支持三种写法：
///   tags: [a, b]
///   tags: a, b
///   tags:
///     - a
fn scan_frontmatter(
  cs : Array[Char],
  spans : Array[(Int, Int)],
  from : Int,
  to : Int,
  sink : TagSink,
) -> Unit {
  let mut in_list = false
  for idx = from; idx < to; idx = idx + 1 {
    let (ls, le) = spans[idx]
    let (s, e) = trim_range(cs, ls, le)
    match match_frontmatter_key(cs, s, e) {
      Some(value_start) => {
        let (vs, ve) = trim_range(cs, value_start, e)
        let value = slice_to_string(cs, vs, ve)
        in_list = value == ""
        if value == "" {
          continue
        }
        let body = if value.has_prefix("[") {
          let inner = value[1:].to_owned()
          if inner.has_suffix("]") {
            inner[0:inner.length() - 1].to_owned()
          } else {
            inner
          }
        } else {
          value
        }
        for part in body.split(",") {
          sink.add(part.to_owned())
        }
        continue
      }
      None => ()
    }
    if in_list {
      if s < e && cs[s] == '-' && s + 1 < e && is_blank_char(cs[s + 1]) {
        let (item_s, item_e) = trim_range(cs, s + 1, e)
        sink.add(slice_to_string(cs, item_s, item_e))
        continue
      }
      if s >= e {
        continue
      }
      in_list = false
    }
  }
}

///|
/// 匹配 `^\s*(tags?|keywords)\s*:`，返回值的起始下标。
fn match_frontmatter_key(cs : Array[Char], s : Int, e : Int) -> Int? {
  let names : Array[String] = ["tags", "tag", "keywords"]
  for name in names {
    let nc = name.to_array()
    let len = nc.length()
    if s + len <= e {
      let mut ok = true
      for i = 0; i < len; i = i + 1 {
        if cs[s + i].to_ascii_lowercase() != nc[i] {
          ok = false
          break
        }
      }
      if ok {
        let mut p = s + len
        while p < e && is_space(cs[p]) {
          p = p + 1
        }
        if p < e && cs[p] == ':' {
          return Some(p + 1)
        }
      }
    }
  }
  None
}

// ---------------------------------------------------------------- 入口

///|
/// 解析一篇 Markdown，产出全部链接与标签。
pub fn parse_markdown(text : String) -> ParsedDoc {
  let cs = text.to_array()
  let total = cs.length()
  let mut offset = 0
  // 去掉 UTF-8 BOM，否则 Frontmatter 起止符无法识别
  if total > 0 && cs[0] == '\u{FEFF}' {
    offset = 1
  }

  // 行切分：`\n`、`\r\n`、单独的 `\r` 都算换行
  let spans : Array[(Int, Int)] = []
  let mut line_start = offset
  let mut i = offset
  while i < total {
    let c = cs[i]
    if c == '\n' {
      spans.push((line_start, i))
      line_start = i + 1
    } else if c == '\r' {
      spans.push((line_start, i))
      if i + 1 < total && cs[i + 1] == '\n' {
        i = i + 1
      }
      line_start = i + 1
    }
    i = i + 1
  }
  if line_start <= total {
    spans.push((line_start, total))
  }

  let sink = TagSink::new()
  let links : Array[RawLink] = []
  let line_count = spans.length()

  let mut start = 0
  if line_count > 0 {
    let (fs, fe) = trim_range(cs, spans[0].0, spans[0].1)
    if fe - fs == 3 && cs[fs] == '-' && cs[fs + 1] == '-' && cs[fs + 2] == '-' {
      let limit = if line_count < 400 { line_count } else { 400 }
      let mut end = -1
      for k = 1; k < limit; k = k + 1 {
        let (s, e) = trim_range(cs, spans[k].0, spans[k].1)
        if e - s == 3 {
          let first = cs[s]
          let ok = (first == '-' && cs[s + 1] == '-' && cs[s + 2] == '-') ||
            (first == '.' && cs[s + 1] == '.' && cs[s + 2] == '.')
          if ok {
            end = k
            break
          }
        }
      }
      if end > 0 {
        scan_frontmatter(cs, spans, 1, end, sink)
        start = end + 1
      }
    }
  }

  let mut fence = ""
  for idx = start; idx < line_count; idx = idx + 1 {
    let (ls, le) = spans[idx]
    let marker = fence_marker(cs, ls, le)
    if fence != "" {
      if marker != "" &&
        marker.char_length() >= fence.char_length() &&
        marker.to_array()[0] == fence.to_array()[0] {
        fence = ""
      }
      continue
    }
    if marker != "" {
      fence = marker
      continue
    }
    blank_inline_code(cs, ls, le)
    if is_blank_range(cs, ls, le) {
      continue
    }
    if is_html_comment(cs, ls, le) {
      continue
    }
    scan_line_links(cs, ls, le, idx + 1, links)
    scan_line_tags(cs, ls, le, sink)
  }

  { links, tags: sink.order }
}
