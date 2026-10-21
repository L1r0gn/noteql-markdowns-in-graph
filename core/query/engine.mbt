// 查询缓存与增量失效。
//
// 这一版不是完整的 Datalog delta 维护，而是**依赖感知的结果缓存**：
// 每条查询记录它依赖的关系（note/link/tag/...）以及图函数；
// vault 用 5 条独立的变更序列记录 note/link/tag/name/file 的变化。
// 只要查询依赖的序列都没有变，就直接复用上次结果；否则只重算这一条查询。
//
// 关键点是「文件名变化」与「链接变化」分开记账：新增/删除同名文件会
// 改变链接归属，所以依赖图的查询必须失效；只查标签的查询则不受影响。

///|
pub(all) struct CachedResult {
  result : QueryResult
  seq : Array[Int]
  deps : Array[String]
}

///|
pub(all) struct Engine {
  mut cache : Map[String, CachedResult]
  mut hits : Int
  mut misses : Int
}

///|
pub fn Engine::new() -> Engine {
  { cache: Map([]), hits: 0, misses: 0 }
}

///|
pub fn Engine::reset(self : Engine) -> Unit {
  self.cache.clear()
  self.hits = 0
  self.misses = 0
}

///|
fn expr_functions(expr : Expr, out : Array[String]) -> Unit {
  match expr {
    EFunc(name, args, _) => {
      out.push(name)
      for arg in args {
        expr_functions(arg, out)
      }
    }
    EBinary(_, a, b) => {
      expr_functions(a, out)
      expr_functions(b, out)
    }
    EUnary(_, a) => expr_functions(a, out)
    EIsNull(a, _) => expr_functions(a, out)
    EList(items) =>
      for item in items {
        expr_functions(item, out)
      }
    _ => ()
  }
}

///|
fn is_graph_func(name : String) -> Bool {
  name == "reachable" ||
  name == "distance" ||
  name == "in_cycle" ||
  name == "indegree" ||
  name == "outdegree" ||
  name == "degree"
}

///|
pub fn query_dependencies(query : Query) -> Array[String] {
  let deps : Array[String] = [query.relation.to_lower()]
  let funcs : Array[String] = []
  for item in query.items {
    expr_functions(item.expr, funcs)
  }
  match query.where_expr {
    Some(expr) => expr_functions(expr, funcs)
    None => ()
  }
  match query.having {
    Some(expr) => expr_functions(expr, funcs)
    None => ()
  }
  for order in query.order_by {
    expr_functions(order.expr, funcs)
  }
  for name in funcs {
    if is_graph_func(name) && !deps.contains("graph") {
      deps.push("graph")
    }
  }
  deps
}

///|
fn relation_slots(name : String) -> Array[Int] {
  match name {
    "note" => [@vault.change_note, @vault.change_link, @vault.change_tag, @vault.change_name]
    "file" => [@vault.change_file, @vault.change_name]
    "link" => [@vault.change_link, @vault.change_name]
    "tag" => [@vault.change_tag, @vault.change_name]
    "unresolved" => [@vault.change_link, @vault.change_name]
    "ambiguous" => [@vault.change_link, @vault.change_name]
    "orphan" => [@vault.change_link, @vault.change_name]
    "cycle" => [@vault.change_link, @vault.change_name]
    "graph" => [@vault.change_link, @vault.change_name]
    _ => []
  }
}

///|
fn dependency_slots(deps : Array[String]) -> Array[Int] {
  let slots : Array[Int] = []
  for dep in deps {
    for slot in relation_slots(dep) {
      if !slots.contains(slot) {
        slots.push(slot)
      }
    }
  }
  slots
}

///|
fn seq_matches(cached : Array[Int], current : Array[Int], slots : Array[Int]) -> Bool {
  for slot in slots {
    if slot < 0 || slot >= cached.length() || slot >= current.length() {
      return false
    }
    if cached[slot] != current[slot] {
      return false
    }
  }
  true
}

///|
pub(all) struct QueryResponse {
  result : QueryResult
  cached : Bool
  deps : Array[String]
}

///|
pub(all) enum EngineOutcome {
  EOk(QueryResponse)
  EErr(String)
}

///|
pub fn Engine::run(
  self : Engine,
  vault : @vault.Vault,
  source : String,
  use_cache : Bool,
) -> EngineOutcome {
  let query = match parse(source) {
    PErr(err) => return EErr(err)
    POk(q) => q
  }
  let deps = query_dependencies(query)
  let slots = dependency_slots(deps)
  let current = vault.change_snapshot()
  if use_cache {
    match self.cache.get(source) {
      Some(entry) =>
        if seq_matches(entry.seq, current, slots) {
          self.hits = self.hits + 1
          return EOk({ result: entry.result, cached: true, deps })
        }
      None => ()
    }
  }
  self.misses = self.misses + 1
  match run_query(vault, query) {
    ROk(result) => {
      if self.cache.length() >= 64 {
        self.cache.clear()
      }
      self.cache[source] = { result, seq: current, deps }
      EOk({ result, cached: false, deps })
    }
    RErr(err) => EErr(err)
  }
}

///|
pub fn Engine::stats_json(self : Engine, vault : @vault.Vault) -> String {
  let sb = StringBuilder(size_hint=256)
  sb.write_string("{\"hits\":")
  sb.write_string(self.hits.to_string())
  sb.write_string(",\"misses\":")
  sb.write_string(self.misses.to_string())
  sb.write_string(",\"cacheSize\":")
  sb.write_string(self.cache.length().to_string())
  sb.write_string(",\"revision\":")
  sb.write_string(vault.change_revision().to_string())
  sb.write_string(",\"changeSeq\":[")
  let seq = vault.change_snapshot()
  for i = 0; i < seq.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(seq[i].to_string())
  }
  sb.write_string("]}")
  sb.to_string()
}

///|
pub fn response_json(response : QueryResponse) -> String {
  let sb = StringBuilder(size_hint=1024)
  sb.write_string("{\"ok\":true,\"cached\":")
  sb.write_string(if response.cached { "true" } else { "false" })
  sb.write_string(",\"dependencies\":[")
  for i = 0; i < response.deps.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    @vault.write_json_string(sb, response.deps[i])
  }
  sb.write_string("],\"columns\":[")
  let result = response.result
  for i = 0; i < result.columns.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    @vault.write_json_string(sb, result.columns[i])
  }
  sb.write_string("],\"rows\":[")
  for i = 0; i < result.rows.length(); i = i + 1 {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_char('[')
    let row = result.rows[i]
    for j = 0; j < row.length(); j = j + 1 {
      if j > 0 {
        sb.write_char(',')
      }
      write_value_json(sb, row[j])
    }
    sb.write_char(']')
  }
  sb.write_string("],\"rowCount\":")
  sb.write_string(result.rows.length().to_string())
  sb.write_string(",\"totalRows\":")
  sb.write_string(result.total_rows.to_string())
  sb.write_string(",\"scanned\":")
  sb.write_string(result.scanned.to_string())
  sb.write_char('}')
  sb.to_string()
}

///|
pub fn error_json(message : String) -> String {
  let sb = StringBuilder(size_hint=128)
  sb.write_string("{\"ok\":false,\"error\":")
  @vault.write_json_string(sb, message)
  sb.write_char('}')
  sb.to_string()
}
