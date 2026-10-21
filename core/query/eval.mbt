// NoteQL 求值器。
//
// 执行顺序：FROM（物化关系）→ WHERE → GROUP BY/聚合 → HAVING
// → SELECT → DISTINCT → ORDER BY → LIMIT。
//
// 聚合函数通过 group 参数拿到整组行；非聚合表达式在分组查询里
// 使用该组的第一行（语义检查已保证这些列都在 GROUP BY 中）。

///|
pub(all) struct QueryResult {
  columns : Array[String]
  rows : Array[Array[Value]]
  total_rows : Int
  scanned : Int
}

///|
pub(all) enum RunOutcome {
  ROk(QueryResult)
  RErr(String)
}

///|
priv struct EvalCtx {
  graph : GraphIndex
  index : Map[String, Int]
}

///|
fn EvalCtx::new(
  graph : GraphIndex,
  dataset : Dataset,
  rel_alias : String,
) -> EvalCtx {
  let index : Map[String, Int] = Map([])
  for i = 0; i < dataset.columns.length(); i = i + 1 {
    let column = dataset.columns[i]
    index[column] = i
    if rel_alias != "" {
      index[rel_alias + "." + column] = i
    }
  }
  { graph, index }
}

///|
fn EvalCtx::column(self : EvalCtx, row : Array[Value], qualifier : String, name : String) -> Value {
  let key = if qualifier == "" { name } else { qualifier + "." + name }
  match self.index.get(key) {
    Some(i) =>
      if i >= 0 && i < row.length() {
        row[i]
      } else {
        VNull
      }
    None => VNull
  }
}

///|
fn null_row(width : Int) -> Array[Value] {
  let row : Array[Value] = []
  for i = 0; i < width; i = i + 1 {
    row.push(VNull)
  }
  row
}

///|
fn numeric_pair(a : Value, b : Value) -> (Double, Double, Bool)? {
  match (a.as_double(), b.as_double()) {
    (Some(x), Some(y)) => {
      let both_int = match (a, b) {
        (VInt(_), VInt(_)) => true
        _ => false
      }
      Some((x, y, both_int))
    }
    _ => None
  }
}

///|
fn eval_add(a : Value, b : Value) -> Value {
  match (a, b) {
    (VInt(x), VInt(y)) => VInt(x + y)
    (VInt(x), VFloat(y)) => VFloat(x.to_double() + y)
    (VFloat(x), VInt(y)) => VFloat(x + y.to_double())
    (VFloat(x), VFloat(y)) => VFloat(x + y)
    (VStr(x), _) => VStr(x + b.display())
    (_, VStr(y)) => VStr(a.display() + y)
    _ => VNull
  }
}

///|
fn eval_arith(op : String, a : Value, b : Value) -> Value {
  match op {
    "+" => eval_add(a, b)
    "-" =>
      match numeric_pair(a, b) {
        Some((x, y, both_int)) => if both_int { VInt(x.to_int() - y.to_int()) } else { VFloat(x - y) }
        None => VNull
      }
    "*" =>
      match numeric_pair(a, b) {
        Some((x, y, both_int)) => if both_int { VInt(x.to_int() * y.to_int()) } else { VFloat(x * y) }
        None => VNull
      }
    "/" =>
      match numeric_pair(a, b) {
        Some((x, y, _)) => if y == 0.0 { VNull } else { VFloat(x / y) }
        None => VNull
      }
    "%" =>
      match (a, b) {
        (VInt(x), VInt(y)) => if y == 0 { VNull } else { VInt(x % y) }
        _ => VNull
      }
    _ => VNull
  }
}

///|
fn aggregate_count(
  ctx : EvalCtx,
  args : Array[Expr],
  distinct : Bool,
  row : Array[Value],
  group : Array[Array[Value]]?,
) -> Value {
  let rows = match group {
    Some(g) => g
    None => [row]
  }
  if args.length() == 0 {
    return VInt(rows.length())
  }
  let star = match args[0] {
    EStar => true
    _ => false
  }
  if star {
    return VInt(rows.length())
  }
  let mut count = 0
  let seen : Map[String, Unit] = Map([])
  for r in rows {
    let value = eval_expr(ctx, args[0], r, None)
    if !value.is_null() {
      if distinct {
        let key = value.key()
        if !seen.contains(key) {
          seen[key] = ()
          count = count + 1
        }
      } else {
        count = count + 1
      }
    }
  }
  VInt(count)
}

///|
fn aggregate_sum(
  ctx : EvalCtx,
  arg : Expr,
  row : Array[Value],
  group : Array[Array[Value]]?,
  want_avg : Bool,
) -> Value {
  let rows = match group {
    Some(g) => g
    None => [row]
  }
  let mut any = false
  let mut all_int = true
  let mut int_sum = 0
  let mut float_sum = 0.0
  for r in rows {
    let value = eval_expr(ctx, arg, r, None)
    match value {
      VInt(i) => {
        any = true
        int_sum = int_sum + i
        float_sum = float_sum + i.to_double()
      }
      VFloat(f) => {
        any = true
        all_int = false
        float_sum = float_sum + f
      }
      _ => ()
    }
  }
  if !any {
    return VNull
  }
  if want_avg {
    let count = {
      let mut n = 0
      for r in rows {
        let value = eval_expr(ctx, arg, r, None)
        if !value.is_null() {
          n = n + 1
        }
      }
      n
    }
    if count == 0 {
      VNull
    } else {
      VFloat(float_sum / count.to_double())
    }
  } else if all_int {
    VInt(int_sum)
  } else {
    VFloat(float_sum)
  }
}

///|
fn aggregate_minmax(
  ctx : EvalCtx,
  arg : Expr,
  row : Array[Value],
  group : Array[Array[Value]]?,
  want_max : Bool,
) -> Value {
  let rows = match group {
    Some(g) => g
    None => [row]
  }
  let mut best : Value = VNull
  let mut has = false
  for r in rows {
    let value = eval_expr(ctx, arg, r, None)
    if !value.is_null() {
      if !has {
        best = value
        has = true
      } else {
        match value.compare(best) {
          Some(c) =>
            if (want_max && c > 0) || (!want_max && c < 0) {
              best = value
            }
          None => ()
        }
      }
    }
  }
  best
}

///|
fn eval_graph_func(
  ctx : EvalCtx,
  name : String,
  args : Array[Expr],
  row : Array[Value],
  group : Array[Array[Value]]?,
) -> Value {
  let arg0 = if args.length() > 0 { eval_expr(ctx, args[0], row, group) } else { VNull }
  match name {
    "indegree" => VInt(ctx.graph.in_deg.get_or_default(arg0.as_string(), 0))
    "outdegree" => VInt(ctx.graph.out_deg.get_or_default(arg0.as_string(), 0))
    "degree" => {
      let path = arg0.as_string()
      VInt(
        ctx.graph.in_deg.get_or_default(path, 0) +
        ctx.graph.out_deg.get_or_default(path, 0),
      )
    }
    "in_cycle" => VBool(ctx.graph.in_cycle(arg0.as_string()))
    "distance" => {
      let from = if args.length() > 0 { eval_expr(ctx, args[0], row, group) } else { VNull }
      let to = if args.length() > 1 { eval_expr(ctx, args[1], row, group) } else { VNull }
      VInt(ctx.graph.distance(from.as_string(), to.as_string()))
    }
    "reachable" => {
      let from = if args.length() > 0 { eval_expr(ctx, args[0], row, group) } else { VNull }
      let to = if args.length() > 1 { eval_expr(ctx, args[1], row, group) } else { VNull }
      let depth = if args.length() > 2 { eval_expr(ctx, args[2], row, group) } else { VNull }
      let limit = match depth {
        VInt(i) => i
        _ => -1
      }
      VBool(ctx.graph.reachable(from.as_string(), to.as_string(), limit))
    }
    _ => VNull
  }
}

///|
fn eval_scalar_func(
  ctx : EvalCtx,
  name : String,
  args : Array[Expr],
  row : Array[Value],
  group : Array[Array[Value]]?,
) -> Value {
  match name {
    "reachable" | "distance" | "in_cycle" | "indegree" | "outdegree" | "degree" =>
      eval_graph_func(ctx, name, args, row, group)
    "lower" => {
      let value = eval_expr(ctx, args[0], row, group)
      VStr(value.as_string().to_lower())
    }
    "upper" => {
      let value = eval_expr(ctx, args[0], row, group)
      VStr(value.as_string().to_upper())
    }
    "length" => {
      let value = eval_expr(ctx, args[0], row, group)
      match value {
        VList(items) => VInt(items.length())
        _ => VInt(value.as_string().char_length())
      }
    }
    "abs" => {
      let value = eval_expr(ctx, args[0], row, group)
      match value {
        VInt(i) => VInt(if i < 0 { -i } else { i })
        VFloat(f) => VFloat(if f < 0.0 { -f } else { f })
        _ => VNull
      }
    }
    "coalesce" => {
      let mut result = VNull
      for arg in args {
        let value = eval_expr(ctx, arg, row, group)
        if !value.is_null() {
          result = value
          break
        }
      }
      result
    }
    "contains" => {
      let a = eval_expr(ctx, args[0], row, group)
      let b = eval_expr(ctx, args[1], row, group)
      VBool(a.contains(b))
    }
    "like" => {
      let a = eval_expr(ctx, args[0], row, group)
      let b = eval_expr(ctx, args[1], row, group)
      VBool(like_match(a.as_string(), b.as_string()))
    }
    "startswith" => {
      let a = eval_expr(ctx, args[0], row, group)
      let b = eval_expr(ctx, args[1], row, group)
      VBool(a.as_string().has_prefix(b.as_string()))
    }
    "endswith" => {
      let a = eval_expr(ctx, args[0], row, group)
      let b = eval_expr(ctx, args[1], row, group)
      VBool(a.as_string().has_suffix(b.as_string()))
    }
    _ => VNull
  }
}

///|
fn eval_expr(
  ctx : EvalCtx,
  expr : Expr,
  row : Array[Value],
  group : Array[Array[Value]]?,
) -> Value {
  match expr {
    ELit(value) => value
    ECol(q, c) => ctx.column(row, q, c)
    EFunc(name, args, distinct) => {
      if name == "count" {
        aggregate_count(ctx, args, distinct, row, group)
      } else if name == "sum" {
        aggregate_sum(ctx, args[0], row, group, false)
      } else if name == "avg" {
        aggregate_sum(ctx, args[0], row, group, true)
      } else if name == "min" {
        aggregate_minmax(ctx, args[0], row, group, false)
      } else if name == "max" {
        aggregate_minmax(ctx, args[0], row, group, true)
      } else {
        eval_scalar_func(ctx, name, args, row, group)
      }
    }
    EBinary(op, a, b) => {
      if op == "AND" {
        if !eval_expr(ctx, a, row, group).truthy() {
          VBool(false)
        } else {
          VBool(eval_expr(ctx, b, row, group).truthy())
        }
      } else if op == "OR" {
        if eval_expr(ctx, a, row, group).truthy() {
          VBool(true)
        } else {
          VBool(eval_expr(ctx, b, row, group).truthy())
        }
      } else {
        let left = eval_expr(ctx, a, row, group)
        let right = eval_expr(ctx, b, row, group)
        if op == "=" {
          VBool(left.equals(right))
        } else if op == "!=" || op == "<>" {
          VBool(!left.equals(right))
        } else if op == "<" || op == "<=" || op == ">" || op == ">=" {
          match left.compare(right) {
            Some(c) =>
              if op == "<" {
                VBool(c < 0)
              } else if op == "<=" {
                VBool(c <= 0)
              } else if op == ">" {
                VBool(c > 0)
              } else {
                VBool(c >= 0)
              }
            None => VBool(false)
          }
        } else if op == "LIKE" {
          VBool(like_match(left.as_string(), right.as_string()))
        } else if op == "CONTAINS" {
          VBool(left.contains(right))
        } else if op == "IN" {
          VBool(right.contains(left))
        } else {
          eval_arith(op, left, right)
        }
      }
    }
    EUnary(op, a) => {
      let value = eval_expr(ctx, a, row, group)
      if op == "NOT" {
        VBool(!value.truthy())
      } else if op == "NEG" {
        match value {
          VInt(i) => VInt(-i)
          VFloat(f) => VFloat(-f)
          _ => VNull
        }
      } else {
        VNull
      }
    }
    EIsNull(a, negate) => {
      let value = eval_expr(ctx, a, row, group)
      if negate {
        VBool(!value.is_null())
      } else {
        VBool(value.is_null())
      }
    }
    EList(items) => {
      let out : Array[String] = []
      for item in items {
        out.push(eval_expr(ctx, item, row, group).display())
      }
      VList(out)
    }
    EStar => VNull
    EError => VNull
  }
}

///|
fn group_key(ctx : EvalCtx, group_by : Array[Expr], row : Array[Value]) -> String {
  let parts : Array[String] = []
  for expr in group_by {
    parts.push(eval_expr(ctx, expr, row, None).key())
  }
  parts.join("\u{0002}")
}

///|
/// 查询是否需要完整的图索引。
fn needs_graph(query : Query) -> Bool {
  let relation = query.relation.to_lower()
  if relation == "note" || relation == "orphan" || relation == "cycle" {
    return true
  }
  let funcs : Array[String] = []
  for item in query.items {
    expr_functions_for_eval(item.expr, funcs)
  }
  match query.where_expr {
    Some(expr) => expr_functions_for_eval(expr, funcs)
    None => ()
  }
  match query.having {
    Some(expr) => expr_functions_for_eval(expr, funcs)
    None => ()
  }
  for order in query.order_by {
    expr_functions_for_eval(order.expr, funcs)
  }
  for name in funcs {
    if name == "reachable" ||
      name == "distance" ||
      name == "in_cycle" ||
      name == "indegree" ||
      name == "outdegree" ||
      name == "degree" {
      return true
    }
  }
  false
}

///|
fn expr_functions_for_eval(expr : Expr, out : Array[String]) -> Unit {
  match expr {
    EFunc(name, args, _) => {
      out.push(name)
      for arg in args {
        expr_functions_for_eval(arg, out)
      }
    }
    EBinary(_, a, b) => {
      expr_functions_for_eval(a, out)
      expr_functions_for_eval(b, out)
    }
    EUnary(_, a) => expr_functions_for_eval(a, out)
    EIsNull(a, _) => expr_functions_for_eval(a, out)
    EList(items) =>
      for item in items {
        expr_functions_for_eval(item, out)
      }
    _ => ()
  }
}

///|
fn expand_items(query : Query, dataset : Dataset) -> Array[SelectItem] {
  let items : Array[SelectItem] = []
  for item in query.items {
    match item.expr {
      EStar =>
        for column in dataset.columns {
          items.push({ expr: ECol("", column), name: column })
        }
      _ => items.push(item)
    }
  }
  items
}

///|
fn output_names(items : Array[SelectItem]) -> Array[String] {
  let names : Array[String] = []
  for item in items {
    let base = if item.name != "" { item.name } else { expr_label(item.expr) }
    let mut name = base
    let mut suffix = 2
    while names.contains(name) {
      name = base + "_" + suffix.to_string()
      suffix = suffix + 1
    }
    names.push(name)
  }
  names
}

///|
priv struct OutRow {
  values : Array[Value]
  keys : Array[Value]
  seq : Int
}

///|
fn build_order_keys(
  ctx : EvalCtx,
  query : Query,
  aliases : Map[String, Expr],
  row : Array[Value],
  group : Array[Array[Value]]?,
) -> Array[Value] {
  let keys : Array[Value] = []
  for order in query.order_by {
    let expanded = substitute_aliases(order.expr, aliases)
    keys.push(eval_expr(ctx, expanded, row, group))
  }
  keys
}

///|
fn distinct_rows(rows : Array[OutRow]) -> Array[OutRow] {
  let out : Array[OutRow] = []
  let seen : Map[String, Unit] = Map([])
  for row in rows {
    let parts : Array[String] = []
    for value in row.values {
      parts.push(value.key())
    }
    let key = parts.join("\u{0002}")
    if !seen.contains(key) {
      seen[key] = ()
      out.push(row)
    }
  }
  out
}

///|
pub fn run_query(vault : @vault.Vault, query : Query) -> RunOutcome {
  let err = validate_query(query)
  if err != "" {
    return RErr(err)
  }
  let graph = if needs_graph(query) { GraphIndex::new(vault) } else { GraphIndex::empty() }
  let dataset = match build_relation(vault, graph, query.relation.to_lower()) {
    Some(data) => data
    None => return RErr("未知关系 `" + query.relation + "`")
  }
  let ctx = EvalCtx::new(graph, dataset, query.rel_alias)
  let items = expand_items(query, dataset)
  let names = output_names(items)
  let aliases = query_aliases(query)
  let having_expr = match query.having {
    Some(expr) => Some(substitute_aliases(expr, aliases))
    None => None
  }
  let filtered : Array[Array[Value]] = []
  for row in dataset.rows {
    match query.where_expr {
      Some(expr) =>
        if eval_expr(ctx, expr, row, None).truthy() {
          filtered.push(row)
        }
      None => filtered.push(row)
    }
  }

  let has_agg = query_has_agg(query)
  let grouped = has_agg || query.group_by.length() > 0
  let out : Array[OutRow] = []
  let mut seq = 0

  if grouped {
    if query.group_by.length() == 0 {
      // 无 GROUP BY 但有聚合：整个结果集是一组
      let rep = if filtered.length() > 0 { filtered[0] } else { null_row(dataset.columns.length()) }
      let keep = match having_expr {
        Some(expr) => eval_expr(ctx, expr, rep, Some(filtered)).truthy()
        None => true
      }
      if keep {
        let values : Array[Value] = []
        for item in items {
          values.push(eval_expr(ctx, item.expr, rep, Some(filtered)))
        }
        let keys = build_order_keys(ctx, query, aliases, rep, Some(filtered))
        out.push({ values, keys, seq })
      }
    } else {
      let groups : Map[String, Array[Array[Value]]] = Map([])
      let group_order : Array[String] = []
      let reps : Map[String, Array[Value]] = Map([])
      for row in filtered {
        let key = group_key(ctx, query.group_by, row)
        match groups.get(key) {
          Some(members) => members.push(row)
          None => {
            groups[key] = [row]
            reps[key] = row
            group_order.push(key)
          }
        }
      }
      for key in group_order {
        let members = match groups.get(key) {
          Some(list) => list
          None => []
        }
        let rep = match reps.get(key) {
          Some(row) => row
          None => null_row(dataset.columns.length())
        }
        let keep = match having_expr {
          Some(expr) => eval_expr(ctx, expr, rep, Some(members)).truthy()
          None => true
        }
        if keep {
          let values : Array[Value] = []
          for item in items {
            values.push(eval_expr(ctx, item.expr, rep, Some(members)))
          }
          let keys = build_order_keys(ctx, query, aliases, rep, Some(members))
          out.push({ values, keys, seq })
          seq = seq + 1
        }
      }
    }
  } else {
    for row in filtered {
      let values : Array[Value] = []
      for item in items {
        values.push(eval_expr(ctx, item.expr, row, None))
      }
      let keys = build_order_keys(ctx, query, aliases, row, None)
      out.push({ values, keys, seq })
      seq = seq + 1
    }
  }

  let deduped = if query.distinct { distinct_rows(out) } else { out }
  let sorted = deduped.copy()
  sorted.sort_by(fn(a, b) {
    let mut result = 0
    for i = 0; i < a.keys.length() && i < b.keys.length(); i = i + 1 {
      let c = match a.keys[i].compare(b.keys[i]) {
        Some(value) => value
        None => 0
      }
      if c != 0 {
        result = if query.order_by[i].desc { -c } else { c }
        break
      }
    }
    if result != 0 {
      result
    } else {
      a.seq - b.seq
    }
  })

  let total_rows = sorted.length()
  let limit = if query.limit >= 0 && sorted.length() > query.limit {
    query.limit
  } else {
    sorted.length()
  }
  let rows : Array[Array[Value]] = []
  for i = 0; i < limit; i = i + 1 {
    rows.push(sorted[i].values)
  }
  ROk({
    columns: names,
    rows,
    total_rows,
    scanned: dataset.rows.length(),
  })
}

///|
pub fn run_source(vault : @vault.Vault, source : String) -> RunOutcome {
  match parse(source) {
    PErr(err) => RErr(err)
    POk(query) => run_query(vault, query)
  }
}
