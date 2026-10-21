// 查询用的图索引。
//
// 与 `vault.build_graph` 保持同一套边语义：自引用不计入边，同一对节点
// 的重复链接只算一条边。BFS 距离按源节点缓存；环检测用 Kosaraju SCC，
// 只在第一次需要时计算。

///|
pub(all) struct GraphIndex {
  nodes : Array[String]
  edges : Map[String, Array[String]]
  reverse : Map[String, Array[String]]
  in_deg : Map[String, Int]
  out_deg : Map[String, Int]
  mut cycle_set : Map[String, Unit]
  mut cycles_ready : Bool
  mut dist_cache : Map[String, Map[String, Int]]
}

///|
/// 空图：给只查 tag / file / link 的查询使用，避免无谓的建图。
pub fn GraphIndex::empty() -> GraphIndex {
  {
    nodes: [],
    edges: Map([]),
    reverse: Map([]),
    in_deg: Map([]),
    out_deg: Map([]),
    cycle_set: Map([]),
    cycles_ready: true,
    dist_cache: Map([]),
  }
}

///|
pub fn GraphIndex::new(vault : @vault.Vault) -> GraphIndex {
  let nodes : Array[String] = []
  let edges : Map[String, Array[String]] = Map([])
  let reverse : Map[String, Array[String]] = Map([])
  let in_deg : Map[String, Int] = Map([])
  let out_deg : Map[String, Int] = Map([])
  for entry in vault.notes() {
    nodes.push(entry.rel)
    edges[entry.rel] = []
    reverse[entry.rel] = []
    in_deg[entry.rel] = 0
    out_deg[entry.rel] = 0
  }
  for entry in vault.notes() {
    let seen : Map[String, Unit] = Map([])
    for link in entry.links {
      match vault.resolve(entry.rel, link.target) {
        Some(target_rel) =>
          if target_rel != entry.rel && !seen.contains(target_rel) {
            match vault.files.get(target_rel) {
              Some(target) =>
                if target.kind == @vault.FileKind::Note {
                  seen[target_rel] = ()
                  edges.get_or_default(entry.rel, []).push(target_rel)
                  reverse.get_or_default(target_rel, []).push(entry.rel)
                  out_deg[entry.rel] = out_deg.get_or_default(entry.rel, 0) + 1
                  in_deg[target_rel] = in_deg.get_or_default(target_rel, 0) + 1
                }
              None => ()
            }
          }
        None => ()
      }
    }
  }
  {
    nodes,
    edges,
    reverse,
    in_deg,
    out_deg,
    cycle_set: Map([]),
    cycles_ready: false,
    dist_cache: Map([]),
  }
}

///|
pub fn GraphIndex::distance(self : GraphIndex, from : String, to : String) -> Int {
  if from == to {
    return 0
  }
  let cached = match self.dist_cache.get(from) {
    Some(map) => Some(map)
    None => {
      let map = self.bfs(from)
      self.dist_cache[from] = map
      Some(map)
    }
  }
  match cached {
    Some(map) => map.get_or_default(to, -1)
    None => -1
  }
}

///|
fn GraphIndex::bfs(self : GraphIndex, from : String) -> Map[String, Int] {
  let dist : Map[String, Int] = Map([])
  let queue : Array[String] = []
  dist[from] = 0
  queue.push(from)
  let mut head = 0
  while head < queue.length() {
    let node = queue[head]
    head = head + 1
    let d = dist.get_or_default(node, 0)
    for next in self.edges.get_or_default(node, []) {
      if !dist.contains(next) {
        dist[next] = d + 1
        queue.push(next)
      }
    }
  }
  dist
}

///|
pub fn GraphIndex::reachable(
  self : GraphIndex,
  from : String,
  to : String,
  max_depth : Int,
) -> Bool {
  let d = self.distance(from, to)
  if d < 0 {
    false
  } else if max_depth < 0 {
    true
  } else {
    d <= max_depth
  }
}

///|
fn GraphIndex::ensure_cycles(self : GraphIndex) -> Unit {
  if self.cycles_ready {
    return
  }
  let visited : Map[String, Unit] = Map([])
  let order : Array[String] = []
  // 第一遍：迭代 DFS 求完成顺序
  for start in self.nodes {
    if visited.contains(start) {
      continue
    }
    let stack : Array[String] = [start]
    let index_stack : Array[Int] = [0]
    visited[start] = ()
    while stack.length() > 0 {
      let top = stack.length() - 1
      let node = stack[top]
      let neighbors = self.edges.get_or_default(node, [])
      let i = index_stack[top]
      if i < neighbors.length() {
        index_stack[top] = i + 1
        let next = neighbors[i]
        if !visited.contains(next) {
          visited[next] = ()
          stack.push(next)
          index_stack.push(0)
        }
      } else {
        order.push(node)
        stack.pop() |> ignore
        index_stack.pop() |> ignore
      }
    }
  }
  // 第二遍：在反向图上按完成顺序的逆序划分 SCC
  let comp : Map[String, Int] = Map([])
  let mut comp_id = 0
  for k = order.length() - 1; k >= 0; k = k - 1 {
    let start = order[k]
    if comp.contains(start) {
      continue
    }
    let members : Array[String] = []
    let stack : Array[String] = [start]
    comp[start] = comp_id
    while stack.length() > 0 {
      let node = stack[stack.length() - 1]
      stack.pop() |> ignore
      members.push(node)
      for prev in self.reverse.get_or_default(node, []) {
        if !comp.contains(prev) {
          comp[prev] = comp_id
          stack.push(prev)
        }
      }
    }
    if members.length() > 1 {
      for node in members {
        self.cycle_set[node] = ()
      }
    }
    comp_id = comp_id + 1
  }
  self.cycles_ready = true
}

///|
pub fn GraphIndex::in_cycle(self : GraphIndex, path : String) -> Bool {
  self.ensure_cycles()
  self.cycle_set.contains(path)
}

///|
pub fn GraphIndex::cycle_nodes(self : GraphIndex) -> Array[String] {
  self.ensure_cycles()
  let out : Array[String] = []
  for node in self.nodes {
    if self.cycle_set.contains(node) {
      out.push(node)
    }
  }
  out
}
