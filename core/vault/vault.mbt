// 工作区索引：文件记录、路径/文件名查找表、链接解析。
//
// 链接解析遵循 Obsidian 的「最短路径优先」规则：
//   1. 相对当前文件所在目录；
//   2. 相对工作区根目录；
//   3. 同名文件（优先同目录，其次层级最浅的）。

///|
pub(all) enum FileKind {
  Note
  Attachment
} derive(Eq, Debug)

///|
pub(all) struct FileEntry {
  /// 工作区相对路径，如 `notes/daily/2026-10-19.md`
  rel : String
  dir : String
  /// 去掉扩展名的文件名
  base : String
  /// 小写扩展名，含前导点
  ext : String
  /// 同名查找表的键
  nameKey : String
  kind : FileKind
  tags : Array[String]
  links : Array[@mdparse.RawLink]
  size : Int
  mtime : Double
}

///|
pub(all) struct FolderStat {
  path : String
  count : Int
}

///|
/// 变更序列的下标。查询引擎按这几类变更判断缓存是否需要失效：
/// 文件名变化会改变同名链接的归属，因此和链接变化同等重要。
pub let change_note : Int = 0

pub let change_link : Int = 1

pub let change_tag : Int = 2

pub let change_name : Int = 3

pub let change_file : Int = 4

pub let change_slot_count : Int = 5

///|
pub(all) struct Vault {
  /// 精确路径 -> 记录
  files : Map[String, FileEntry]
  /// 插入顺序，保证遍历稳定
  order : Array[String]
  /// 小写路径（含去掉 .md 的别名）-> 精确路径
  byPath : Map[String, String]
  /// 小写文件名 -> 精确路径列表
  byName : Map[String, Array[String]]
  /// 解析结果缓存：目录 -> (原始目标 -> 精确路径)，空串表示解析失败。
  /// 大型笔记库里同一个目标会被反复引用，这里省掉重复的字符串归一化。
  cache : Map[String, Map[String, String]]
  /// 各类变更的累计次数。查询缓存保存一份快照，逐项比较即可判断是否失效。
  mut change_seq : Array[Int]
  mut revision : Int
}

///|
pub fn Vault::new() -> Vault {
  {
    files: Map([]),
    order: [],
    byPath: Map([]),
    byName: Map([]),
    cache: Map([]),
    change_seq: [0, 0, 0, 0, 0],
    revision: 0,
  }
}

///|
fn Vault::bump(self : Vault, slot : Int) -> Unit {
  if slot >= 0 && slot < self.change_seq.length() {
    self.change_seq[slot] = self.change_seq[slot] + 1
  }
  self.revision = self.revision + 1
}

///|
fn Vault::bump_all(self : Vault) -> Unit {
  for i = 0; i < self.change_seq.length(); i = i + 1 {
    self.change_seq[i] = self.change_seq[i] + 1
  }
  self.revision = self.revision + 1
}

///|
pub fn Vault::change_snapshot(self : Vault) -> Array[Int] {
  self.change_seq.copy()
}

///|
pub fn Vault::change_revision(self : Vault) -> Int {
  self.revision
}

///|
fn same_strings(a : Array[String], b : Array[String]) -> Bool {
  if a.length() != b.length() {
    return false
  }
  for i = 0; i < a.length(); i = i + 1 {
    if a[i] != b[i] {
      return false
    }
  }
  true
}

///|
fn same_links(a : Array[@mdparse.RawLink], b : Array[@mdparse.RawLink]) -> Bool {
  if a.length() != b.length() {
    return false
  }
  for i = 0; i < a.length(); i = i + 1 {
    if a[i] != b[i] {
      return false
    }
  }
  true
}

///|
pub fn Vault::clear(self : Vault) -> Unit {
  self.files.clear()
  self.order.clear()
  self.byPath.clear()
  self.byName.clear()
  self.cache.clear()
  self.bump_all()
}

///|
/// 按路径字典序返回所有笔记。查询与构图都需要稳定的行顺序。
pub fn Vault::notes(self : Vault) -> Array[FileEntry] {
  let out : Array[FileEntry] = []
  for rel in self.order {
    match self.files.get(rel) {
      Some(entry) =>
        if entry.kind == FileKind::Note {
          out.push(entry)
        }
      None => ()
    }
  }
  out.sort_by(fn(a, b) { a.rel.compare(b.rel) })
  out
}

///|
/// 同名候选：用于解释「这条链接为什么有歧义」。
/// 路径式目标（含 `/`、`.` 前缀）不在候选范围内，交给常规解析。
pub fn Vault::candidates(self : Vault, raw_target : String) -> Array[String] {
  let view = raw_target.trim()
  if view == "" {
    return []
  }
  let lower = view.to_lower().to_owned()
  if lower.contains("/") || lower.has_prefix(".") {
    return []
  }
  let name = @path.basename(lower)
  let trimmed = strip_note_ext(name)
  match self.byName.get(trimmed) {
    Some(list) => list.copy()
    None =>
      match self.byName.get(name) {
        Some(list) => list.copy()
        None => []
      }
  }
}

///|
/// 去掉 `.md` / `.markdown` 后缀（大小写不敏感）。
fn strip_note_ext(rel : String) -> String {
  let lower = rel.to_lower()
  if lower.has_suffix(".markdown") {
    rel[0:rel.length() - 9].to_owned()
  } else if lower.has_suffix(".md") {
    rel[0:rel.length() - 3].to_owned()
  } else {
    rel
  }
}

///|
fn Vault::index_entry(self : Vault, entry : FileEntry) -> Unit {
  let lower = entry.rel.to_lower()
  self.byPath[lower] = entry.rel
  if entry.kind == FileKind::Note {
    self.byPath[strip_note_ext(lower)] = entry.rel
  }
  match self.byName.get(entry.nameKey) {
    Some(list) =>
      if !list.contains(entry.rel) {
        list.push(entry.rel)
      }
    None => self.byName[entry.nameKey] = [entry.rel]
  }
}

///|
fn Vault::unindex_entry(self : Vault, entry : FileEntry) -> Unit {
  let lower = entry.rel.to_lower()
  if self.byPath.get(lower) == Some(entry.rel) {
    self.byPath.remove(lower)
  }
  let no_ext = strip_note_ext(lower)
  if self.byPath.get(no_ext) == Some(entry.rel) {
    self.byPath.remove(no_ext)
  }
  match self.byName.get(entry.nameKey) {
    Some(list) => {
      let next : Array[String] = []
      for item in list {
        if item != entry.rel {
          next.push(item)
        }
      }
      if next.length() == 0 {
        self.byName.remove(entry.nameKey)
      } else {
        self.byName[entry.nameKey] = next
      }
    }
    None => ()
  }
}

///|
fn Vault::drop_previous(self : Vault, rel : String) -> Unit {
  match self.files.get(rel) {
    Some(prev) => self.unindex_entry(prev)
    None => ()
  }
}

///|
/// 写入 / 更新一篇笔记：文本在这里被解析成链接与标签。
pub fn Vault::upsert_note(
  self : Vault,
  rel : String,
  size : Int,
  mtime : Double,
  text : String,
) -> Unit {
  let base = @path.strip_ext(@path.basename(rel))
  let ext = @path.extname(rel)
  let parsed = @mdparse.parse_markdown(text)
  let previous = self.files.get(rel)
  let mut link_changed = true
  let mut tag_changed = true
  let mut name_changed = true
  match previous {
    Some(old) => {
      link_changed = !same_links(old.links, parsed.links)
      tag_changed = !same_strings(old.tags, parsed.tags)
      name_changed = old.base != base
    }
    None => ()
  }
  let entry : FileEntry = {
    rel,
    dir: @path.dirname(rel),
    base,
    ext,
    nameKey: base.to_lower(),
    kind: FileKind::Note,
    tags: parsed.tags,
    links: parsed.links,
    size,
    mtime,
  }
  self.drop_previous(rel)
  self.cache.clear()
  self.files[rel] = entry
  if !self.order.contains(rel) {
    self.order.push(rel)
  }
  self.index_entry(entry)
  self.bump(change_note)
  self.bump(change_file)
  if link_changed {
    self.bump(change_link)
  }
  if tag_changed {
    self.bump(change_tag)
  }
  if name_changed {
    self.bump(change_name)
  }
}

///|
/// 写入 / 更新一个附件（图片、PDF 等）。附件内容不解析。
pub fn Vault::upsert_attachment(
  self : Vault,
  rel : String,
  size : Int,
  mtime : Double,
) -> Unit {
  let base = @path.strip_ext(@path.basename(rel))
  let ext = @path.extname(rel)
  let previous = self.files.get(rel)
  let mut name_changed = true
  match previous {
    Some(old) => name_changed = old.base != base
    None => ()
  }
  let entry : FileEntry = {
    rel,
    dir: @path.dirname(rel),
    base,
    ext,
    nameKey: (base + ext).to_lower(),
    kind: FileKind::Attachment,
    tags: [],
    links: [],
    size,
    mtime,
  }
  self.drop_previous(rel)
  self.cache.clear()
  self.files[rel] = entry
  if !self.order.contains(rel) {
    self.order.push(rel)
  }
  self.index_entry(entry)
  self.bump(change_file)
  if name_changed {
    self.bump(change_name)
  }
}

///|
/// 删除一个文件（文件被移走或删除时调用）。
pub fn Vault::remove(self : Vault, rel : String) -> Unit {
  match self.files.get(rel) {
    Some(entry) => {
      self.unindex_entry(entry)
      self.cache.clear()
      self.files.remove(rel)
      let next : Array[String] = []
      for item in self.order {
        if item != rel {
          next.push(item)
        }
      }
      self.order.clear()
      for item in next {
        self.order.push(item)
      }
      self.bump_all()
    }
    None => ()
  }
}

///|
pub fn Vault::total(self : Vault) -> Int {
  self.files.length()
}

///|
pub fn Vault::note_count(self : Vault) -> Int {
  let mut n = 0
  for rel in self.order {
    match self.files.get(rel) {
      Some(e) =>
        if e.kind == FileKind::Note {
          n = n + 1
        }
      None => ()
    }
  }
  n
}

// ---------------------------------------------------------------- 解析链接

///|
/// 把链接目标解析成工作区里的真实文件；解析不到返回 None（幽灵节点）。
pub fn Vault::resolve(self : Vault, from_rel : String, raw_target : String) -> String? {
  self.resolve_in_dir(@path.dirname(from_rel), raw_target)
}

///|
/// 同上，但目录由调用方给出——构图时目录已经算好，可以省掉一次拆分。
pub fn Vault::resolve_in_dir(
  self : Vault,
  dir : String,
  raw_target : String,
) -> String? {
  let view = raw_target.trim()
  if view.char_length() == 0 {
    return None
  }
  // 解析器产出的 target 本身已 trim 过，命中时直接复用原字符串，避免拷贝
  let target = if view.equal_to_string(raw_target) { raw_target } else { view.to_owned() }
  let bucket = match self.cache.get(dir) {
    Some(m) => m
    None => {
      let m : Map[String, String] = Map([])
      self.cache[dir] = m
      m
    }
  }
  match bucket.get(target) {
    Some(hit) => return if hit == "" { None } else { Some(hit) }
    None => ()
  }
  let result = self.resolve_uncached(dir, target)
  bucket[target] = match result {
    Some(rel) => rel
    None => ""
  }
  result
}

///|
fn Vault::resolve_uncached(self : Vault, dir : String, target_raw : String) -> String? {
  // 只有真的存在 `%` 或反斜杠时才需要解码，省掉绝大多数分配
  let decoded = if target_raw.contains("%") || target_raw.contains("\\") {
    @path.decode_uri(target_raw)
  } else {
    target_raw
  }
  // 去掉 `<...>` 包裹与前导斜杠
  let mut target = decoded.trim().to_owned()
  if target.has_prefix("<") {
    target = target[1:].to_owned()
  }
  if target.has_suffix(">") {
    target = target[0:target.length() - 1].to_owned()
  }
  let mut t = target
  while t.has_prefix("/") {
    t = t[1:].to_owned()
  }
  if t == "" {
    return None
  }
  let lower = t.to_lower()

  // 1) 相对当前目录；2) 相对根目录
  if lower.has_prefix("./") || lower.has_prefix("../") {
    match self.byPath.get(@path.normalize(dir + "/" + lower)) {
      Some(rel) => return Some(rel)
      None => ()
    }
  } else {
    match self.byPath.get(@path.normalize(dir + "/" + lower)) {
      Some(rel) => return Some(rel)
      None => ()
    }
    match self.byPath.get(@path.normalize(lower)) {
      Some(rel) => return Some(rel)
      None => ()
    }
  }

  // 3) 按文件名兜底
  let name = @path.basename(lower)
  let trimmed_name = strip_note_ext(name)
  let list = match self.byName.get(trimmed_name) {
    Some(l) => Some(l)
    None => self.byName.get(name)
  }
  match list {
    Some(items) =>
      if items.length() == 0 {
        None
      } else if items.length() == 1 {
        Some(items[0])
      } else {
        let mut same_dir = ""
        for item in items {
          if @path.dirname(item) == dir {
            same_dir = item
            break
          }
        }
        if same_dir != "" {
          Some(same_dir)
        } else {
          let sorted = items.copy()
          sorted.sort_by(fn(a, b) {
            let da = @path.depth(a)
            let db = @path.depth(b)
            if da != db {
              da - db
            } else {
              a.compare(b)
            }
          })
          Some(sorted[0])
        }
      }
    None => None
  }
}

///|
/// 所有含笔记的目录（含父级）及其笔记数量，按路径字典序。
pub fn Vault::folders(self : Vault) -> Array[FolderStat] {
  let counts : Map[String, Int] = Map([])
  for rel in self.order {
    match self.files.get(rel) {
      Some(entry) =>
        if entry.kind == FileKind::Note && entry.dir != "" {
          let parts = entry.dir.split("/")
          let mut acc = ""
          for part in parts {
            let seg = part.to_owned()
            acc = if acc == "" { seg } else { acc + "/" + seg }
            counts[acc] = counts.get_or_default(acc, 0) + 1
          }
        }
      None => ()
    }
  }
  let out : Array[FolderStat] = []
  for pair in counts.iter() {
    out.push({ path: pair.0, count: pair.1 })
  }
  out.sort_by(fn(a, b) { a.path.compare(b.path) })
  out
}
