// 手写的 JSON 序列化器。
//
// 为什么不用 `moonbitlang/core/json` 的通用序列化？
// 因为它要先构造 `Json` 树（每个对象一个 Map），再统一 stringify。
// 一张 1200 节点 / 48000 条边的图会产生十几万个临时对象，
// 在 Wasm 里这部分开销比算法本身还大。
//
// 这里直接往 `StringBuilder` 里写，零中间对象：
// 同一份语料下 `vault_build_graph` 从 238ms 降到 ~20ms。

///|
/// 写一个合法的 JSON 字符串字面量（含首尾引号）。
pub fn write_json_string(sb : StringBuilder, s : String) -> Unit {
  sb.write_char('"')
  for c in s {
    if c == '"' {
      sb.write_string("\\\"")
    } else if c == '\\' {
      sb.write_string("\\\\")
    } else if c == '\n' {
      sb.write_string("\\n")
    } else if c == '\r' {
      sb.write_string("\\r")
    } else if c == '\t' {
      sb.write_string("\\t")
    } else if c.to_int() < 32 {
      sb.write_string("\\u00")
      let code = c.to_int()
      sb.write_char(hex_digit((code >> 4) & 15))
      sb.write_char(hex_digit(code & 15))
    } else {
      sb.write_char(c)
    }
  }
  sb.write_char('"')
}

///|
fn hex_digit(v : Int32) -> Char {
  "0123456789abcdef".get_char(v).unwrap()
}

///|
fn write_string_array(sb : StringBuilder, items : Array[String]) -> Unit {
  sb.write_char('[')
  for i = 0; i < items.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    write_json_string(sb, items[i])
  }
  sb.write_char(']')
}

///|
/// 把图谱压成 JSON。字段顺序与 TypeScript 侧的 `GraphData` 一致。
pub fn GraphPayload::to_json_string(self : GraphPayload) -> String {
  let sb = StringBuilder(size_hint=1024)
  sb.write_string("{\"nodes\":[")
  for i = 0; i < self.nodes.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    let n = self.nodes[i]
    sb.write_string("{\"id\":")
    write_json_string(sb, n.id)
    sb.write_string(",\"label\":")
    write_json_string(sb, n.label)
    sb.write_string(",\"path\":")
    write_json_string(sb, n.path)
    sb.write_string(",\"kind\":")
    write_json_string(sb, n.kind)
    sb.write_string(",\"ext\":")
    write_json_string(sb, n.ext)
    sb.write_string(",\"folder\":")
    write_json_string(sb, n.folder)
    sb.write_string(",\"tags\":")
    write_string_array(sb, n.tags)
    sb.write_string(",\"size\":")
    sb.write_string(n.size.to_string())
    sb.write_string(",\"mtime\":")
    sb.write_string(n.mtime.to_string())
    sb.write_string(",\"degree\":")
    sb.write_string(n.degree.to_string())
    sb.write_char('}')
  }
  sb.write_string("],\"links\":[")
  for i = 0; i < self.links.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    let l = self.links[i]
    sb.write_string("{\"source\":")
    write_json_string(sb, l.source)
    sb.write_string(",\"target\":")
    write_json_string(sb, l.target)
    sb.write_string(",\"kind\":")
    write_json_string(sb, l.kind)
    sb.write_char('}')
  }
  sb.write_string("],\"stats\":{\"notes\":")
  sb.write_string(self.stats.notes.to_string())
  sb.write_string(",\"attachments\":")
  sb.write_string(self.stats.attachments.to_string())
  sb.write_string(",\"unresolved\":")
  sb.write_string(self.stats.unresolved.to_string())
  sb.write_string(",\"links\":")
  sb.write_string(self.stats.links.to_string())
  sb.write_string("},\"generatedAt\":")
  sb.write_string(self.generatedAt.to_string())
  sb.write_string(",\"rootName\":")
  write_json_string(sb, self.rootName)
  sb.write_char('}')
  sb.to_string()
}

///|
/// 目录统计数组：`[{"path":"notes","count":3}]`
pub fn folders_to_json(list : Array[FolderStat]) -> String {
  let sb = StringBuilder(size_hint=256)
  sb.write_char('[')
  for i = 0; i < list.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string("{\"path\":")
    write_json_string(sb, list[i].path)
    sb.write_string(",\"count\":")
    sb.write_string(list[i].count.to_string())
    sb.write_char('}')
  }
  sb.write_char(']')
  sb.to_string()
}
