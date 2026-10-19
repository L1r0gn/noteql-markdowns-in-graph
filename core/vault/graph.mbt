// 图谱构建：把「文件 + 链接」压平成节点/边，并附带统计信息。
//
// 产物直接对应 Webview 需要的 `GraphData`：
//   { nodes, links, stats, generatedAt, rootName }
//
// 规则与重构前的 TypeScript 实现逐条对齐：
//   * 只有被引用到的附件才进入图谱；
//   * 同一对文件之间的多种写法（[[a]] 与 [a](a.md)）合并为一条边；
//   * 悬空链接生成 `u:` 前缀的幽灵节点；
//   * 节点按度数升序排列，枢纽节点绘制在上层。

///|
pub(all) struct GraphNode {
  id : String
  label : String
  path : String
  kind : String
  ext : String
  folder : String
  tags : Array[String]
  size : Int
  mtime : Double
  mut degree : Int
}

///|
pub(all) struct GraphLink {
  source : String
  target : String
  kind : String
}

///|
pub(all) struct GraphStats {
  notes : Int
  attachments : Int
  unresolved : Int
  links : Int
}

///|
pub(all) struct GraphPayload {
  nodes : Array[GraphNode]
  links : Array[GraphLink]
  stats : GraphStats
  generatedAt : Int
  rootName : String
}

///|
priv struct PendingEdge {
  from : String
  to : String
  kind : String
}

///|
/// 构建完整图谱。
/// `maxTags` 控制每个节点携带的标签数上限（Webview 侧只需要少量标签着色）。
pub fn Vault::build_graph(
  self : Vault,
  max_tags : Int,
  generated_at : Int,
  root_name : String,
) -> GraphPayload {
  let nodes : Array[GraphNode] = []
  let node_index : Map[String, Int] = Map([])
  let ghost_index : Map[String, Int] = Map([])
  let pending : Array[PendingEdge] = []
  let referenced : Array[String] = []
  let referenced_set : Map[String, Unit] = Map([])

  // 按路径字典序处理笔记，保证多次构建结果稳定
  let notes : Array[FileEntry] = []
  for rel in self.order {
    match self.files.get(rel) {
      Some(entry) =>
        if entry.kind == FileKind::Note {
          notes.push(entry)
        }
      None => ()
    }
  }
  notes.sort_by(fn(a, b) { a.rel.compare(b.rel) })

  for entry in notes {
    if !node_index.contains(entry.rel) {
      node_index[entry.rel] = nodes.length()
      nodes.push({
        id: entry.rel,
        label: entry.base,
        path: entry.rel,
        kind: "note",
        ext: entry.ext,
        folder: entry.dir,
        tags: take_tags(entry.tags, max_tags),
        size: entry.size,
        mtime: entry.mtime,
        degree: 0,
      })
    }
    for link in entry.links {
      match self.resolve_in_dir(entry.dir, link.target) {
        Some(target_rel) =>
          if target_rel != entry.rel {
            match self.files.get(target_rel) {
              Some(target) =>
                if target.kind == FileKind::Attachment && !referenced_set.contains(target_rel) {
                  referenced_set[target_rel] = ()
                  referenced.push(target_rel)
                }
              None => ()
            }
            pending.push({
              from: entry.rel,
              to: target_rel,
              kind: link.kind.label(),
            })
          }
        None => {
          let ghost_id = ghost_id_of(link.target)
          if !ghost_index.contains(ghost_id) {
            ghost_index[ghost_id] = nodes.length()
            nodes.push(ghost_node(ghost_id, link.target))
          }
          pending.push({
            from: entry.rel,
            to: ghost_id,
            kind: link.kind.label(),
          })
        }
      }
    }
  }

  // 只有被引用到的附件才入图
  for rel in referenced {
    if !node_index.contains(rel) {
      match self.files.get(rel) {
        Some(entry) => {
          node_index[rel] = nodes.length()
          nodes.push({
            id: entry.rel,
            label: entry.base,
            path: entry.rel,
            kind: "attachment",
            ext: entry.ext,
            folder: entry.dir,
            tags: take_tags(entry.tags, max_tags),
            size: entry.size,
            mtime: entry.mtime,
            degree: 0,
          })
        }
        None => ()
      }
    }
  }

  // 去重边并累计度数
  let links : Array[GraphLink] = []
  let seen : Map[String, Unit] = Map([])
  let degrees : Map[String, Int] = Map([])
  for edge in pending {
    if !node_index.contains(edge.from) {
      continue
    }
    if !(node_index.contains(edge.to) || ghost_index.contains(edge.to)) {
      continue
    }
    let key = edge.from + "\u{0000}" + edge.to
    if seen.contains(key) {
      continue
    }
    seen[key] = ()
    links.push({ source: edge.from, target: edge.to, kind: edge.kind })
    degrees[edge.from] = degrees.get_or_default(edge.from, 0) + 1
    degrees[edge.to] = degrees.get_or_default(edge.to, 0) + 1
  }

  for node in nodes {
    node.degree = degrees.get_or_default(node.id, 0)
  }
  // 度数低的先画，枢纽节点在上层
  nodes.sort_by(fn(a, b) {
    if a.degree != b.degree {
      a.degree - b.degree
    } else {
      a.label.compare(b.label)
    }
  })

  let mut note_count = 0
  let mut attachment_count = 0
  let mut unresolved_count = 0
  for node in nodes {
    if node.kind == "note" {
      note_count = note_count + 1
    } else if node.kind == "attachment" {
      attachment_count = attachment_count + 1
    } else {
      unresolved_count = unresolved_count + 1
    }
  }

  {
    nodes,
    links,
    stats: {
      notes: note_count,
      attachments: attachment_count,
      unresolved: unresolved_count,
      links: links.length(),
    },
    generatedAt: generated_at,
    rootName: root_name,
  }
}

///|
fn take_tags(tags : Array[String], max_tags : Int) -> Array[String] {
  let out : Array[String] = []
  let limit = if max_tags < 0 { 0 } else { max_tags }
  for i = 0; i < tags.length() && i < limit; i = i + 1 {
    out.push(tags[i])
  }
  out
}

///|
fn ghost_id_of(raw : String) -> String {
  let clean = if raw.trim() == "" { "(空链接)" } else { raw.trim().to_owned() }
  "u:" + clean.to_lower()
}

///|
fn ghost_node(id : String, raw : String) -> GraphNode {
  let clean = if raw.trim() == "" { "(空链接)" } else { raw.trim().to_owned() }
  let base = @path.basename(@path.decode_uri(clean))
  {
    id,
    label: if base == "" { clean } else { base },
    path: clean,
    kind: "unresolved",
    ext: "",
    folder: "",
    tags: [],
    size: 0,
    mtime: 0.0,
    degree: 0,
  }
}
