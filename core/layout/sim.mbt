// Barnes-Hut 力导向布局。
//
// 与重构前 `media/graph.js` 里的实现相比，这里有两点关键改动：
//
// 1. **四叉树用扁平数组池**（`Array[Quad]`），每帧只重置计数器而不重新分配，
//    避免 JS 版每步创建上千个小对象导致的 GC 抖动；
// 2. **确定性伪随机**替代 `Math.random()`，同样的输入永远得到同样的布局，
//    便于单元测试与截图回归。
//
// 数值参数（弹簧系数、阻尼、速度上限）与旧实现保持一致，
// 因此替换内核后视觉效果不会突变。

///|
pub(all) struct SimNode {
  mut x : Double
  mut y : Double
  mut vx : Double
  mut vy : Double
  mut radius : Double
  mut degree : Int
  mut fixed : Bool
}

///|
pub(all) struct Sim {
  mut nodes : Array[SimNode]
  mut links : Array[(Int, Int)]
  /// 线性同余随机数种子，保证可复现
  mut seed : UInt64
}

///|
pub fn Sim::new() -> Sim {
  { nodes: [], links: [], seed: 0x2545F4914F6CDD1DUL }
}

///|
pub fn Sim::reset(self : Sim) -> Unit {
  self.nodes.clear()
  self.links.clear()
}

///|
pub fn Sim::add_node(self : Sim, degree : Int, radius : Double) -> Int {
  self.nodes.push({
    x: 0.0,
    y: 0.0,
    vx: 0.0,
    vy: 0.0,
    radius,
    degree,
    fixed: false,
  })
  self.nodes.length() - 1
}

///|
pub fn Sim::add_link(self : Sim, a : Int, b : Int) -> Unit {
  if a >= 0 && b >= 0 && a != b && a < self.nodes.length() && b < self.nodes.length() {
    self.links.push((a, b))
  }
}

///|
pub fn Sim::seed_at(self : Sim, i : Int, x : Double, y : Double) -> Unit {
  if i >= 0 && i < self.nodes.length() {
    self.nodes[i].x = x
    self.nodes[i].y = y
  }
}

///|
pub fn Sim::pin(self : Sim, i : Int, x : Double, y : Double) -> Unit {
  if i >= 0 && i < self.nodes.length() {
    let n = self.nodes[i]
    n.x = x
    n.y = y
    n.vx = 0.0
    n.vy = 0.0
    n.fixed = true
  }
}

///|
pub fn Sim::unpin(self : Sim, i : Int) -> Unit {
  if i >= 0 && i < self.nodes.length() {
    self.nodes[i].fixed = false
  }
}

///|
/// 拖拽时直接改坐标，保持 pinned 状态由宿主控制。
pub fn Sim::move_to(self : Sim, i : Int, x : Double, y : Double) -> Unit {
  if i >= 0 && i < self.nodes.length() {
    let n = self.nodes[i]
    n.x = x
    n.y = y
    n.vx = 0.0
    n.vy = 0.0
  }
}

///|
pub fn Sim::x(self : Sim, i : Int) -> Double {
  if i >= 0 && i < self.nodes.length() {
    self.nodes[i].x
  } else {
    0.0
  }
}

///|
pub fn Sim::y(self : Sim, i : Int) -> Double {
  if i >= 0 && i < self.nodes.length() {
    self.nodes[i].y
  } else {
    0.0
  }
}

// ---------------------------------------------------------------- 四叉树

///|
priv struct Quad {
  mut x0 : Double
  mut y0 : Double
  mut x1 : Double
  mut y1 : Double
  mut mass : Double
  mut cx : Double
  mut cy : Double
  /// 叶子节点持有的 body 下标，-1 表示空
  mut body : Int
  /// 子节点在池里的起始下标，-1 表示未分裂
  mut child : Int
}

///|
fn Quad::new() -> Quad {
  {
    x0: 0.0,
    y0: 0.0,
    x1: 0.0,
    y1: 0.0,
    mass: 0.0,
    cx: 0.0,
    cy: 0.0,
    body: -1,
    child: -1,
  }
}

///|
/// 扁平四叉树：节点全部放在 `pool` 里，分裂时追加 4 个连续槽位。
priv struct Tree {
  pool : Array[Quad]
  mut used : Int
  /// 每个节点在树里的位置 -> 便于把力回写到节点
  nodes : Array[SimNode]
}

///|
fn Tree::new(nodes : Array[SimNode]) -> Tree {
  { pool: [], used: 0, nodes }
}

///|
fn Tree::acquire(self : Tree) -> Int {
  if self.used < self.pool.length() {
    let i = self.used
    self.used = self.used + 1
    let q = self.pool[i]
    q.mass = 0.0
    q.cx = 0.0
    q.cy = 0.0
    q.body = -1
    q.child = -1
    i
  } else {
    let i = self.pool.length()
    self.pool.push(Quad::new())
    self.used = i + 1
    i
  }
}

///|
fn Tree::build(self : Tree) -> Int {
  let nodes = self.nodes
  let count = nodes.length()
  if count == 0 {
    return -1
  }
  self.used = 0
  let mut min_x = nodes[0].x
  let mut min_y = nodes[0].y
  let mut max_x = min_x
  let mut max_y = min_y
  for i = 1; i < count; i = i + 1 {
    let n = nodes[i]
    if n.x < min_x {
      min_x = n.x
    }
    if n.y < min_y {
      min_y = n.y
    }
    if n.x > max_x {
      max_x = n.x
    }
    if n.y > max_y {
      max_y = n.y
    }
  }
  let mut size = max_x - min_x
  let dy = max_y - min_y
  if dy > size {
    size = dy
  }
  if size < 1.0 {
    size = 1.0
  }
  size = size + 2.0
  let root = self.acquire()
  let q = self.pool[root]
  q.x0 = min_x - 1.0
  q.y0 = min_y - 1.0
  q.x1 = min_x - 1.0 + size
  q.y1 = min_y - 1.0 + size
  for i = 0; i < count; i = i + 1 {
    self.insert(root, i, 0)
  }
  root
}

///|
fn Tree::insert(self : Tree, qi : Int, body : Int, depth : Int) -> Unit {
  let node = self.nodes[body]
  let q = self.pool[qi]
  if depth > 22 {
    let m = q.mass + 1.0
    q.cx = (q.cx * q.mass + node.x) / m
    q.cy = (q.cy * q.mass + node.y) / m
    q.mass = m
    q.body = -1
    return
  }
  if q.child < 0 {
    if q.body < 0 {
      q.body = body
      q.mass = 1.0
      q.cx = node.x
      q.cy = node.y
      return
    }
    let old = q.body
    self.split(qi)
    q.body = -1
    q.mass = 0.0
    q.cx = 0.0
    q.cy = 0.0
    self.insert_child(qi, old, depth + 1)
    self.insert_child(qi, body, depth + 1)
    return
  }
  self.insert_child(qi, body, depth + 1)
}

///|
fn Tree::split(self : Tree, qi : Int) -> Unit {
  let q = self.pool[qi]
  let mx = (q.x0 + q.x1) / 2.0
  let my = (q.y0 + q.y1) / 2.0
  let base = self.acquire()
  // 再补三个，保证四个槽位连续
  self.acquire() |> ignore
  self.acquire() |> ignore
  self.acquire() |> ignore
  q.child = base
  let c0 = self.pool[base]
  c0.x0 = q.x0
  c0.y0 = q.y0
  c0.x1 = mx
  c0.y1 = my
  let c1 = self.pool[base + 1]
  c1.x0 = mx
  c1.y0 = q.y0
  c1.x1 = q.x1
  c1.y1 = my
  let c2 = self.pool[base + 2]
  c2.x0 = q.x0
  c2.y0 = my
  c2.x1 = mx
  c2.y1 = q.y1
  let c3 = self.pool[base + 3]
  c3.x0 = mx
  c3.y0 = my
  c3.x1 = q.x1
  c3.y1 = q.y1
}

///|
fn Tree::insert_child(self : Tree, qi : Int, body : Int, depth : Int) -> Unit {
  let q = self.pool[qi]
  let node = self.nodes[body]
  let mx = (q.x0 + q.x1) / 2.0
  let my = (q.y0 + q.y1) / 2.0
  let idx = (if node.x >= mx { 1 } else { 0 }) + (if node.y >= my { 2 } else { 0 })
  self.insert(q.child + idx, body, depth)
  let m = q.mass + 1.0
  q.cx = (q.cx * q.mass + node.x) / m
  q.cy = (q.cy * q.mass + node.y) / m
  q.mass = m
}

///|
/// Barnes-Hut 近似：当象限尺度足够小（w²/d² < 0.81）时把整块当成一个质点。
fn Tree::repulse(self : Tree, qi : Int, target : Int, charge : Double, out : Array[Double]) -> Unit {
  if qi < 0 {
    return
  }
  let q = self.pool[qi]
  if q.mass == 0.0 {
    return
  }
  let n = self.nodes[target]
  let dx = q.cx - n.x
  let dy = q.cy - n.y
  let mut d2 = dx * dx + dy * dy
  if q.child < 0 {
    if q.body < 0 || q.body == target {
      return
    }
    if d2 < 9.0 {
      d2 = 9.0
    }
    let f = charge / d2
    out[0] = out[0] - dx * f
    out[1] = out[1] - dy * f
    return
  }
  let w = q.x1 - q.x0
  let denom = if d2 == 0.0 { 1.0 } else { d2 }
  if w * w / denom < 0.81 {
    if d2 < 9.0 {
      d2 = 9.0
    }
    let f = charge * q.mass / d2
    out[0] = out[0] - dx * f
    out[1] = out[1] - dy * f
    return
  }
  for i = 0; i < 4; i = i + 1 {
    self.repulse(q.child + i, target, charge, out)
  }
}

// ---------------------------------------------------------------- 单步

///|
/// 确定性伪随机：仅用于极小概率的退化情形（两点完全重合）。
fn Sim::next_random(self : Sim) -> Double {
  self.seed = self.seed * 6364136223846793005UL + 1442695040888963407UL
  let bits = (self.seed >> 11).to_int()
  (bits % 1000).to_double() / 1000.0
}

///|
/// 推进一帧。
/// * `alpha`   —— 冷却系数（宿主从 1.0 逐步衰减到 0）
/// * `rest`    —— 弹簧理想长度
/// * `repulsion` —— 排斥力强度倍率
pub fn Sim::step(self : Sim, alpha : Double, rest : Double, repulsion : Double) -> Unit {
  let nodes = self.nodes
  let count = nodes.length()
  if count == 0 {
    return
  }
  let charge = 105.0 * repulsion

  // 1) 弹簧力
  for link in self.links {
    let s = nodes[link.0]
    let t = nodes[link.1]
    let mut dx = t.x - s.x
    let mut dy = t.y - s.y
    let mut dist = (dx * dx + dy * dy).sqrt()
    if dist < 0.01 {
      dx = (self.next_random() - 0.5) * 0.6
      dy = (self.next_random() - 0.5) * 0.6
      dist = 0.6
    }
    let kk = (dist - rest) / dist * 0.045 * alpha
    let fx = dx * kk
    let fy = dy * kk
    s.vx = s.vx + fx
    s.vy = s.vy + fy
    t.vx = t.vx - fx
    t.vy = t.vy - fy
  }

  // 2) 排斥力（Barnes-Hut）
  let tree = Tree::new(nodes)
  let root = tree.build()
  if root >= 0 {
    let out : Array[Double] = [0.0, 0.0]
    for i = 0; i < count; i = i + 1 {
      out[0] = 0.0
      out[1] = 0.0
      tree.repulse(root, i, charge * alpha, out)
      let n = nodes[i]
      n.vx = n.vx + clamp_d(out[0], -12.0, 12.0)
      n.vy = n.vy + clamp_d(out[1], -12.0, 12.0)
      n.vx = n.vx - n.x * 0.0013 * alpha
      n.vy = n.vy - n.y * 0.0013 * alpha
    }
  }

  // 3) 阻尼积分
  let vmax = 12.0
  for i = 0; i < count; i = i + 1 {
    let node = nodes[i]
    if node.fixed {
      node.vx = 0.0
      node.vy = 0.0
      continue
    }
    node.vx = node.vx * 0.58
    node.vy = node.vy * 0.58
    let speed = (node.vx * node.vx + node.vy * node.vy).sqrt()
    if speed > vmax {
      node.vx = node.vx / speed * vmax
      node.vy = node.vy / speed * vmax
    }
    node.x = node.x + node.vx
    node.y = node.y + node.vy
  }

  // 4) 碰撞消解
  self.resolve_collisions()
}

///|
fn clamp_d(v : Double, lo : Double, hi : Double) -> Double {
  if v < lo {
    lo
  } else if v > hi {
    hi
  } else {
    v
  }
}

///|
/// 网格法碰撞消解：格子边长 48，只看 3x3 邻域，
/// 比全量 O(n²) 便宜，也比四叉树查询好写。
fn Sim::resolve_collisions(self : Sim) -> Unit {
  let nodes = self.nodes
  let count = nodes.length()
  if count < 2 {
    return
  }
  let cell = 48.0
  let grid : Map[Int, Array[Int]] = Map([])
  for i = 0; i < count; i = i + 1 {
    let n = nodes[i]
    let key = cell_key((n.x / cell).floor(), (n.y / cell).floor())
    match grid.get(key) {
      Some(bucket) => bucket.push(i)
      None => grid[key] = [i]
    }
  }
  for i = 0; i < count; i = i + 1 {
    let a = nodes[i]
    let gx = (a.x / cell).floor()
    let gy = (a.y / cell).floor()
    for ox = -1; ox <= 1; ox = ox + 1 {
      for oy = -1; oy <= 1; oy = oy + 1 {
        match grid.get(cell_key(gx + ox.to_double(), gy + oy.to_double())) {
          Some(bucket) =>
            for j in bucket {
              if j <= i {
                continue
              }
              let b = nodes[j]
              let mut dx = b.x - a.x
              let mut dy = b.y - a.y
              let mut dist = (dx * dx + dy * dy).sqrt()
              let min_dist = a.radius + b.radius + 8.0
              if dist >= min_dist {
                continue
              }
              if dist < 0.001 {
                dx = (self.next_random() - 0.5) * 0.8
                dy = (self.next_random() - 0.5) * 0.8
                dist = 0.6
              }
              let push = (min_dist - dist) / dist * 0.5
              if !a.fixed {
                a.x = a.x - dx * push
                a.y = a.y - dy * push
              }
              if !b.fixed {
                b.x = b.x + dx * push
                b.y = b.y + dy * push
              }
            }
          None => ()
        }
      }
    }
  }
}

///|
fn cell_key(gx : Double, gy : Double) -> Int {
  let x = gx.to_int()
  let y = gy.to_int()
  (x * 73856093) ^ (y * 19349663)
}
