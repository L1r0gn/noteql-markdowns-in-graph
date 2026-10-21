// 内置关系（表）。
//
// 关系是查询语言的输入；图函数（reachable / distance / indegree ...）
// 则直接读 GraphIndex。两者共享同一套「自引用不计、重复边去重」语义。

///|
pub(all) struct Dataset {
  name : String
  columns : Array[String]
  rows : Array[Array[Value]]
}

///|
pub fn relation_names() -> Array[String] {
  ["note", "file", "link", "tag", "unresolved", "ambiguous", "orphan", "cycle"]
}

///|
pub fn relation_schema(name : String) -> Array[String]? {
  match name {
    "note" => Some(["path", "label", "folder", "ext", "size", "mtime", "degree", "tags", "in_degree", "out_degree"])
    "file" => Some(["path", "kind", "ext", "size", "mtime", "folder"])
    "link" => Some(["from", "to", "kind", "raw", "line", "title", "to_kind"])
    "tag" => Some(["note", "tag"])
    "unresolved" => Some(["from", "raw", "target", "line", "kind"])
    "ambiguous" => Some(["from", "raw", "target", "line", "candidates"])
    "orphan" => Some(["path", "degree"])
    "cycle" => Some(["path", "out_degree"])
    _ => None
  }
}

///|
pub fn build_relation(
  vault : @vault.Vault,
  graph : GraphIndex,
  name : String,
) -> Dataset? {
  match name {
    "note" => Some(build_notes(vault, graph))
    "file" => Some(build_files(vault))
    "link" => Some(build_links(vault))
    "tag" => Some(build_tags(vault))
    "unresolved" => Some(build_unresolved(vault))
    "ambiguous" => Some(build_ambiguous(vault))
    "orphan" => Some(build_orphans(vault, graph))
    "cycle" => Some(build_cycles(graph))
    _ => None
  }
}

///|
fn build_notes(vault : @vault.Vault, graph : GraphIndex) -> Dataset {
  let rows : Array[Array[Value]] = []
  for entry in vault.notes() {
    let in_degree = graph.in_deg.get_or_default(entry.rel, 0)
    let out_degree = graph.out_deg.get_or_default(entry.rel, 0)
    rows.push([
      VStr(entry.rel),
      VStr(entry.base),
      VStr(entry.dir),
      VStr(entry.ext),
      VInt(entry.size),
      VFloat(entry.mtime),
      VInt(in_degree + out_degree),
      VList(entry.tags),
      VInt(in_degree),
      VInt(out_degree),
    ])
  }
  {
    name: "note",
    columns: [
      "path", "label", "folder", "ext", "size", "mtime", "degree", "tags",
      "in_degree", "out_degree",
    ],
    rows,
  }
}

///|
fn build_files(vault : @vault.Vault) -> Dataset {
  let rows : Array[Array[Value]] = []
  for rel in vault.order {
    match vault.files.get(rel) {
      Some(entry) => {
        let kind = if entry.kind == @vault.FileKind::Note {
          "note"
        } else {
          "attachment"
        }
        rows.push([
          VStr(entry.rel),
          VStr(kind),
          VStr(entry.ext),
          VInt(entry.size),
          VFloat(entry.mtime),
          VStr(entry.dir),
        ])
      }
      None => ()
    }
  }
  { name: "file", columns: ["path", "kind", "ext", "size", "mtime", "folder"], rows }
}

///|
fn build_links(vault : @vault.Vault) -> Dataset {
  let rows : Array[Array[Value]] = []
  for entry in vault.notes() {
    for link in entry.links {
      match vault.resolve(entry.rel, link.target) {
        Some(target_rel) => {
          let to_kind = match vault.files.get(target_rel) {
            Some(target) =>
              if target.kind == @vault.FileKind::Note {
                "note"
              } else {
                "attachment"
              }
            None => "missing"
          }
          rows.push([
            VStr(entry.rel),
            VStr(target_rel),
            VStr(link.kind.label()),
            VStr(link.raw),
            VInt(link.line),
            VStr(link.title),
            VStr(to_kind),
          ])
        }
        None => ()
      }
    }
  }
  {
    name: "link",
    columns: ["from", "to", "kind", "raw", "line", "title", "to_kind"],
    rows,
  }
}

///|
fn build_tags(vault : @vault.Vault) -> Dataset {
  let rows : Array[Array[Value]] = []
  for entry in vault.notes() {
    for tag in entry.tags {
      rows.push([VStr(entry.rel), VStr(tag)])
    }
  }
  { name: "tag", columns: ["note", "tag"], rows }
}

///|
fn build_unresolved(vault : @vault.Vault) -> Dataset {
  let rows : Array[Array[Value]] = []
  for entry in vault.notes() {
    for link in entry.links {
      let resolved = match vault.resolve(entry.rel, link.target) {
        Some(_) => true
        None => false
      }
      if !resolved {
        rows.push([
          VStr(entry.rel),
          VStr(link.raw),
          VStr(link.target),
          VInt(link.line),
          VStr(link.kind.label()),
        ])
      }
    }
  }
  {
    name: "unresolved",
    columns: ["from", "raw", "target", "line", "kind"],
    rows,
  }
}

///|
fn build_ambiguous(vault : @vault.Vault) -> Dataset {
  let rows : Array[Array[Value]] = []
  for entry in vault.notes() {
    for link in entry.links {
      let candidates = vault.candidates(link.target)
      if candidates.length() > 1 {
        rows.push([
          VStr(entry.rel),
          VStr(link.raw),
          VStr(link.target),
          VInt(link.line),
          VList(candidates),
        ])
      }
    }
  }
  {
    name: "ambiguous",
    columns: ["from", "raw", "target", "line", "candidates"],
    rows,
  }
}

///|
fn build_orphans(vault : @vault.Vault, graph : GraphIndex) -> Dataset {
  let rows : Array[Array[Value]] = []
  for entry in vault.notes() {
    let degree = graph.in_deg.get_or_default(entry.rel, 0) +
      graph.out_deg.get_or_default(entry.rel, 0)
    if degree == 0 {
      rows.push([VStr(entry.rel), VInt(0)])
    }
  }
  { name: "orphan", columns: ["path", "degree"], rows }
}

///|
fn build_cycles(graph : GraphIndex) -> Dataset {
  let rows : Array[Array[Value]] = []
  for path in graph.cycle_nodes() {
    rows.push([
      VStr(path),
      VInt(graph.out_deg.get_or_default(path, 0)),
    ])
  }
  { name: "cycle", columns: ["path", "out_degree"], rows }
}

///|
pub fn relation_catalog_json() -> String {
  let sb = StringBuilder(size_hint=512)
  sb.write_char('[')
  let names = relation_names()
  for i = 0; i < names.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    let name = names[i]
    sb.write_string("{\"name\":")
    @vault.write_json_string(sb, name)
    sb.write_string(",\"columns\":[")
    match relation_schema(name) {
      Some(columns) =>
        for j = 0; j < columns.length(); j = j + 1 {
          if j > 0 {
            sb.write_char(',')
          }
          @vault.write_json_string(sb, columns[j])
        }
      None => ()
    }
    sb.write_string("]}")
  }
  sb.write_char(']')
  sb.to_string()
}
