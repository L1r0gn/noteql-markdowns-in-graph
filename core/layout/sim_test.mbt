// layout 包测试：弹簧收敛、排斥、固定点与可复现性。

///|
fn settle(sim : @layout.Sim, steps : Int) -> Unit {
  let mut alpha = 1.0
  for i = 0; i < steps; i = i + 1 {
    sim.step(alpha, 90.0, 1.0)
    alpha = alpha * 0.982
    if alpha < 0.006 {
      alpha = 0.006
    }
  }
}

///|
test "linked nodes settle near the spring length" {
  let sim = @layout.Sim::new()
  sim.add_node(1, 3.0) |> ignore
  sim.add_node(1, 3.0) |> ignore
  sim.add_link(0, 1)
  sim.seed_at(0, 0.0, 0.0)
  sim.seed_at(1, 10.0, 0.0)
  settle(sim, 400)
  let dx = sim.x(1) - sim.x(0)
  let dy = sim.y(1) - sim.y(0)
  let dist = (dx * dx + dy * dy).sqrt()
  // 弹簧与排斥力平衡后的实际距离会略大于理想长度
  assert_true(dist > 40.0 && dist < 400.0)
}

///|
test "unlinked nodes push each other apart" {
  let sim = @layout.Sim::new()
  sim.add_node(1, 3.0) |> ignore
  sim.add_node(1, 3.0) |> ignore
  sim.seed_at(0, 1.0, 0.0)
  sim.seed_at(1, 2.0, 0.0)
  settle(sim, 120)
  let dx = sim.x(1) - sim.x(0)
  let dy = sim.y(1) - sim.y(0)
  assert_true((dx * dx + dy * dy).sqrt() > 15.0)
}

///|
test "pinned node never moves" {
  let sim = @layout.Sim::new()
  sim.add_node(1, 3.0) |> ignore
  sim.add_node(1, 3.0) |> ignore
  sim.add_link(0, 1)
  sim.seed_at(0, 5.0, 5.0)
  sim.seed_at(1, 40.0, 40.0)
  sim.pin(0, 5.0, 5.0)
  settle(sim, 60)
  assert_eq(sim.x(0), 5.0)
  assert_eq(sim.y(0), 5.0)
}

///|
test "layout is deterministic" {
  let a = @layout.Sim::new()
  let b = @layout.Sim::new()
  for sim in [a, b] {
    sim.add_node(1, 3.0) |> ignore
    sim.add_node(2, 4.0) |> ignore
    sim.add_node(1, 3.0) |> ignore
    sim.add_link(0, 1)
    sim.add_link(1, 2)
    sim.seed_at(0, 0.0, 0.0)
    sim.seed_at(1, 0.5, 0.0)
    sim.seed_at(2, 0.0, 0.5)
    settle(sim, 80)
  }
  for i in 0..<3 {
    assert_eq(a.x(i), b.x(i))
    assert_eq(a.y(i), b.y(i))
  }
}

///|
test "collision resolution keeps circles apart" {
  let sim = @layout.Sim::new()
  // 8 个节点全部堆在原点附近，半径很大
  for i in 0..<8 {
    sim.add_node(1, 20.0) |> ignore
    sim.seed_at(i, 0.0, 0.0)
  }
  settle(sim, 200)
  let mut overlap = 0
  for i in 0..<8 {
    for j in 0..<8 {
      if i < j {
        let dx = sim.x(j) - sim.x(i)
        let dy = sim.y(j) - sim.y(i)
        if (dx * dx + dy * dy).sqrt() < 1.0 {
          overlap = overlap + 1
        }
      }
    }
  }
  assert_eq(overlap, 0)
}
