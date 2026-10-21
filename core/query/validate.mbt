// 语义检查：关系、列、函数、聚合与 GROUP BY 的一致性。
//
// 这一层不做完整静态类型推导，但会把「未知列」「聚合写在 WHERE 里」
// 「非分组列出现在 SELECT 里」这类会静默算错的查询直接拒绝。

///|
pub fn is_aggregate(name : String) -> Bool {
  name == "count" || name == "sum" || name == "avg" || name == "min" || name == "max"
}

///|
fn function_arity_ok(name : String, argc : Int) -> Bool {
  match name {
    "count" => argc == 0 || argc == 1
    "sum" | "avg" | "min" | "max" => argc == 1
    "lower" | "upper" | "length" | "abs" => argc == 1
    "coalesce" => argc >= 1
    "reachable" => argc == 3
    "distance" => argc == 2
    "in_cycle" | "indegree" | "outdegree" | "degree" => argc == 1
    "contains" | "like" | "startswith" | "endswith" => argc == 2
    _ => false
  }
}

///|
fn function_exists(name : String) -> Bool {
  is_aggregate(name) ||
  name == "lower" ||
  name == "upper" ||
  name == "length" ||
  name == "abs" ||
  name == "coalesce" ||
  name == "reachable" ||
  name == "distance" ||
  name == "in_cycle" ||
  name == "indegree" ||
  name == "outdegree" ||
  name == "degree" ||
  name == "contains" ||
  name == "like" ||
  name == "startswith" ||
  name == "endswith"
}

///|
fn col_key(_qualifier : String, column : String) -> String {
  // 单关系查询里限定符是冗余的，统一用列名做分组键。
  column
}

///|
/// 查询里是否出现聚合函数（SELECT / HAVING / ORDER BY）。
pub fn query_has_agg(query : Query) -> Bool {
  let mut found = false
  for item in query.items {
    if has_agg_expr(item.expr) {
      found = true
    }
  }
  match query.having {
    Some(e) =>
      if has_agg_expr(e) {
        found = true
      }
    None => ()
  }
  for order in query.order_by {
    if has_agg_expr(order.expr) {
      found = true
    }
  }
  found
}

///|
fn has_agg_expr(expr : Expr) -> Bool {
  match expr {
    EFunc(name, _, _) => is_aggregate(name)
    EBinary(_, a, b) => has_agg_expr(a) || has_agg_expr(b)
    EUnary(_, a) => has_agg_expr(a)
    EIsNull(a, _) => has_agg_expr(a)
    EList(items) => {
      let mut found = false
      for item in items {
        if has_agg_expr(item) {
          found = true
        }
      }
      found
    }
    _ => false
  }
}

///|
fn collect_cols(expr : Expr, out : Array[String]) -> Unit {
  match expr {
    ECol(q, c) => out.push(col_key(q, c))
    EFunc(name, args, _) =>
      if !is_aggregate(name) {
        for arg in args {
          collect_cols(arg, out)
        }
      }
    EBinary(_, a, b) => {
      collect_cols(a, out)
      collect_cols(b, out)
    }
    EUnary(_, a) => collect_cols(a, out)
    EIsNull(a, _) => collect_cols(a, out)
    EList(items) =>
      for item in items {
        collect_cols(item, out)
      }
    _ => ()
  }
}

///|
fn validate_expr(
  expr : Expr,
  schema : Array[String],
  rel_alias : String,
  allow_agg : Bool,
  in_where : Bool,
  inside_agg : Bool,
) -> String {
  match expr {
    ELit(_) => ""
    ECol(q, c) => {
      if q != "" && q != rel_alias {
        "未知关系别名 `" + q + "`，当前别名为 `" + rel_alias + "`"
      } else if !schema.contains(c) {
        "关系里没有列 `" + c + "`，可用列：" + schema.join(", ")
      } else {
        ""
      }
    }
    EFunc(name, args, distinct) => {
      if !function_exists(name) {
        "未知函数 `" + name + "`"
      } else if !function_arity_ok(name, args.length()) {
        "函数 `" + name + "` 的参数个数不正确"
      } else if is_aggregate(name) {
        if in_where {
          "聚合函数不能出现在 WHERE 中"
        } else if !allow_agg {
          "这里不能使用聚合函数"
        } else if inside_agg {
          "聚合函数不能嵌套"
        } else if distinct && name != "count" {
          "DISTINCT 只支持 count(DISTINCT ...)"
        } else if args.length() == 1 && (match args[0] { EStar => true; _ => false }) {
          if name == "count" {
            ""
          } else {
            "`*` 只能用于 count(*)"
          }
        } else {
          let mut err = ""
          for arg in args {
            if err == "" {
              err = validate_expr(arg, schema, rel_alias, true, false, true)
            }
          }
          err
        }
      } else {
        let mut err = ""
        if distinct {
          err = "DISTINCT 只能用于聚合函数"
        } else {
          for arg in args {
            if err == "" {
              match arg {
                EStar => err = "`*` 只能用于 count(*)"
                _ =>
                  err = validate_expr(arg, schema, rel_alias, allow_agg, in_where, inside_agg)
              }
            }
          }
        }
        err
      }
    }
    EBinary(_, a, b) => {
      let ea = validate_expr(a, schema, rel_alias, allow_agg, in_where, inside_agg)
      if ea != "" {
        ea
      } else {
        validate_expr(b, schema, rel_alias, allow_agg, in_where, inside_agg)
      }
    }
    EUnary(_, a) => validate_expr(a, schema, rel_alias, allow_agg, in_where, inside_agg)
    EIsNull(a, _) => validate_expr(a, schema, rel_alias, allow_agg, in_where, inside_agg)
    EList(items) => {
      let mut err = ""
      for item in items {
        if err == "" {
          err = validate_expr(item, schema, rel_alias, false, in_where, inside_agg)
        }
      }
      err
    }
    EStar => "`*` 只能用于 SELECT * 或 count(*)"
    EError => "表达式解析失败"
  }
}

///|
pub fn validate_query(query : Query) -> String {
  let relation = query.relation.to_lower()
  let schema = match relation_schema(relation) {
    Some(cols) => cols
    None => {
      return "未知关系 `" + query.relation + "`，可用关系：" +
      relation_names().join(", ")
    }
  }
  if query.items.length() == 0 {
    return "SELECT 至少需要一个列"
  }
  let has_agg = query_has_agg(query)
  let grouped = has_agg || query.group_by.length() > 0
  let aliases = query_aliases(query)

  // SELECT
  for item in query.items {
    match item.expr {
      EStar =>
        if grouped {
          return "SELECT * 不能与 GROUP BY 或聚合函数一起使用"
        }
      _ => {
        let err = validate_expr(
          item.expr,
          schema,
          query.rel_alias,
          true,
          false,
          false,
        )
        if err != "" {
          return err
        }
      }
    }
  }

  // WHERE
  match query.where_expr {
    Some(expr) => {
      let err = validate_expr(expr, schema, query.rel_alias, false, true, false)
      if err != "" {
        return err
      }
    }
    None => ()
  }

  // GROUP BY（2.1 只支持列）
  let group_keys : Array[String] = []
  for expr in query.group_by {
    match expr {
      ECol(q, c) => {
        let err = validate_expr(expr, schema, query.rel_alias, false, false, false)
        if err != "" {
          return err
        }
        group_keys.push(col_key(q, c))
      }
      _ => return "GROUP BY 目前只支持列，例如 GROUP BY n.folder"
    }
  }

  if grouped {
    for item in query.items {
      let cols : Array[String] = []
      collect_cols(item.expr, cols)
      for c in cols {
        if !group_keys.contains(c) {
          return "列 `" + c + "` 必须出现在 GROUP BY 中"
        }
      }
    }
    match query.having {
      Some(expr) => {
        let expanded = substitute_aliases(expr, aliases)
        let err = validate_expr(expanded, schema, query.rel_alias, true, false, false)
        if err != "" {
          return err
        }
        let cols : Array[String] = []
        collect_cols(expanded, cols)
        for c in cols {
          if !group_keys.contains(c) {
            return "HAVING 中的列 `" + c + "` 必须出现在 GROUP BY 中"
          }
        }
      }
      None => ()
    }
  } else {
    match query.having {
      Some(_) => return "HAVING 需要配合 GROUP BY 或聚合函数使用"
      None => ()
    }
  }

  // ORDER BY：先做别名替换，再按普通表达式校验
  for order in query.order_by {
    let expanded = substitute_aliases(order.expr, aliases)
    let err = validate_expr(
      expanded,
      schema,
      query.rel_alias,
      true,
      false,
      false,
    )
    if err != "" {
      return err
    }
    if grouped {
      let cols : Array[String] = []
      collect_cols(expanded, cols)
      for c in cols {
        if !group_keys.contains(c) {
          return "ORDER BY 中的列 `" + c + "` 必须出现在 GROUP BY 中"
        }
      }
    }
  }
  ""
}
