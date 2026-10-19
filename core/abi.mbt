// 给宿主（TypeScript）用的 ABI。
//
// 设计原则：**宿主不解析 Markdown、不维护索引、不做图算法**。
// 全部复杂度都在 MoonBit 里，宿主的职责被压缩成：
//   1. 从磁盘读文本 -> `vault_add_note`
//   2. `vault_build_graph` 拿到一段 JSON -> 直接转发给 Webview
//
// 跨语言边界只有两种值：
//   * `String`  —— 参数与 JSON 返回值（wasm-gc 下由 js-string builtins 零拷贝映射）
//   * 数值      —— 布局接口用 `Int` / `Double` 传坐标，避免每帧序列化整张图

///|
/// 内核状态：整个扩展共享一份工作区索引。
let core_vault : @vault.Vault = @vault.Vault::new()

///|
/// 内核状态：Webview 的力导向布局。
let core_sim : @layout.Sim = @layout.Sim::new()

// ---------------------------------------------------------------- 元信息

///|
#export_name("core_version")
pub fn core_version() -> String {
  "0.1.0"
}

///|
/// 自检：跑一遍「解析 -> 建索引 -> 构图」，返回 "ok:<节点数>"。
/// 宿主用它判断当前运行时是否真的能把 Wasm 用起来。
#export_name("core_selftest")
pub fn core_selftest() -> String {
  let doc = @mdparse.parse_markdown("[[b]] #tag")
  if doc.links.length() != 1 || doc.tags.length() != 1 {
    return "fail:parse"
  }
  vault_reset()
  vault_add_note("a.md", 1, 0.0, "[[b]] #tag")
  vault_add_note("b.md", 1, 0.0, "")
  let payload = core_vault.build_graph(16, 0, "selftest")
  let nodes = payload.nodes.length()
  vault_reset()
  if nodes == 2 {
    "ok:2"
  } else {
    "fail:graph:" + nodes.to_string()
  }
}

// ---------------------------------------------------------------- 解析

///|
/// 解析单篇 Markdown，返回 `{ links: [...], tags: [...] }`。
/// 主要用于调试面板与契约测试。
#export_name("parse_markdown_json")
pub fn parse_markdown_json(text : String) -> String {
  let doc = @mdparse.parse_markdown(text)
  let sb = StringBuilder(size_hint=256)
  sb.write_string("{\"links\":[")
  for i = 0; i < doc.links.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    let link = doc.links[i]
    sb.write_string("{\"target\":")
    @vault.write_json_string(sb, link.target)
    sb.write_string(",\"raw\":")
    @vault.write_json_string(sb, link.raw)
    sb.write_string(",\"title\":")
    @vault.write_json_string(sb, link.title)
    sb.write_string(",\"kind\":")
    @vault.write_json_string(sb, link.kind.label())
    sb.write_string(",\"line\":")
    sb.write_string(link.line.to_string())
    sb.write_char('}')
  }
  sb.write_string("],\"tags\":[")
  for i = 0; i < doc.tags.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    @vault.write_json_string(sb, doc.tags[i])
  }
  sb.write_string("]}")
  sb.to_string()
}

// ---------------------------------------------------------------- 工作区索引

///|
#export_name("vault_reset")
pub fn vault_reset() -> Unit {
  core_vault.files.clear()
  core_vault.order.clear()
  core_vault.byPath.clear()
  core_vault.byName.clear()
  core_vault.cache.clear()
}

///|
/// 写入 / 更新一篇笔记（MoonBit 内部完成解析）。
#export_name("vault_add_note")
pub fn vault_add_note(rel : String, size : Int, mtime : Double, text : String) -> Unit {
  core_vault.upsert_note(rel, size, mtime, text)
}

///|
/// 写入 / 更新一个附件（不解析内容）。
#export_name("vault_add_attachment")
pub fn vault_add_attachment(rel : String, size : Int, mtime : Double) -> Unit {
  core_vault.upsert_attachment(rel, size, mtime)
}

///|
#export_name("vault_remove")
pub fn vault_remove(rel : String) -> Unit {
  core_vault.remove(rel)
}

///|
#export_name("vault_count")
pub fn vault_count() -> Int {
  core_vault.total()
}

///|
#export_name("vault_note_count")
pub fn vault_note_count() -> Int {
  core_vault.note_count()
}

///|
/// 构建图谱，产出与旧版 `GraphData` 完全一致的 JSON。
#export_name("vault_build_graph")
pub fn vault_build_graph(max_tags : Int, generated_at : Int, root_name : String) -> String {
  core_vault.build_graph(max_tags, generated_at, root_name).to_json_string()
}

///|
/// 目录列表：`[{ path, count }]`，供「文件夹图谱」命令使用。
#export_name("vault_folders")
pub fn vault_folders() -> String {
  @vault.folders_to_json(core_vault.folders())
}

///|
/// 诊断用：把链接目标解析成真实路径，解析失败返回空串。
#export_name("vault_resolve")
pub fn vault_resolve(from_rel : String, target : String) -> String {
  match core_vault.resolve(from_rel, target) {
    Some(rel) => rel
    None => ""
  }
}

// ---------------------------------------------------------------- 布局

///|
#export_name("layout_reset")
pub fn layout_reset() -> Unit {
  core_sim.reset()
}

///|
#export_name("layout_add_node")
pub fn layout_add_node(degree : Int, radius : Double) -> Unit {
  core_sim.add_node(degree, radius) |> ignore
}

///|
#export_name("layout_add_link")
pub fn layout_add_link(a : Int, b : Int) -> Unit {
  core_sim.add_link(a, b)
}

///|
#export_name("layout_seed")
pub fn layout_seed(i : Int, x : Double, y : Double) -> Unit {
  core_sim.seed_at(i, x, y)
}

///|
#export_name("layout_pin")
pub fn layout_pin(i : Int, x : Double, y : Double) -> Unit {
  core_sim.pin(i, x, y)
}

///|
#export_name("layout_unpin")
pub fn layout_unpin(i : Int) -> Unit {
  core_sim.unpin(i)
}

///|
#export_name("layout_move")
pub fn layout_move(i : Int, x : Double, y : Double) -> Unit {
  core_sim.move_to(i, x, y)
}

///|
#export_name("layout_step")
pub fn layout_step(alpha : Double, rest : Double, repulsion : Double) -> Unit {
  core_sim.step(alpha, rest, repulsion)
}

///|
#export_name("layout_x")
pub fn layout_x(i : Int) -> Double {
  core_sim.x(i)
}

///|
#export_name("layout_y")
pub fn layout_y(i : Int) -> Double {
  core_sim.y(i)
}

///|
#export_name("layout_count")
pub fn layout_count() -> Int {
  core_sim.nodes.length()
}
