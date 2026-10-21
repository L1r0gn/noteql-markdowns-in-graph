// NoteQL 语法树。
//
// 刻意保持很小的核心：单关系 FROM、布尔条件、聚合、分组、排序、LIMIT，
// 以及一组图函数（reachable / distance / in_cycle / indegree / outdegree）。
// JOIN 与子查询留给后续版本，避免 2.1 变成一个半成品 SQL 实现。

///|
pub(all) enum Expr {
  ELit(Value)
  /// (qualifier, column)；qualifier 为空表示不限关系别名
  ECol(String, String)
  /// (函数名, 参数, 是否 DISTINCT)
  EFunc(String, Array[Expr], Bool)
  EBinary(String, Expr, Expr)
  EUnary(String, Expr)
  EIsNull(Expr, Bool)
  EList(Array[Expr])
  EStar
  EError
} derive(Debug)

///|
pub(all) struct SelectItem {
  expr : Expr
  name : String
} derive(Debug)

///|
pub(all) struct OrderItem {
  expr : Expr
  desc : Bool
} derive(Debug)

///|
pub(all) struct Query {
  distinct : Bool
  items : Array[SelectItem]
  relation : String
  rel_alias : String
  where_expr : Expr?
  group_by : Array[Expr]
  having : Expr?
  order_by : Array[OrderItem]
  /// -1 表示没有 LIMIT
  limit : Int
} derive(Debug)

///|
pub(all) enum ParseResult {
  POk(Query)
  PErr(String)
} derive(Debug)

///|
/// SELECT 里显式命名的别名 -> 表达式。HAVING / ORDER BY 会先做别名替换。
pub fn query_aliases(query : Query) -> Map[String, Expr] {
  let aliases : Map[String, Expr] = Map([])
  for item in query.items {
    if item.name != "" {
      aliases[item.name] = item.expr
    }
  }
  aliases
}

///|
pub fn substitute_aliases(expr : Expr, aliases : Map[String, Expr]) -> Expr {
  match expr {
    ECol(q, c) => {
      if q == "" {
        match aliases.get(c) {
          Some(replacement) => replacement
          None => ECol(q, c)
        }
      } else {
        ECol(q, c)
      }
    }
    EFunc(name, args, distinct) => {
      let next : Array[Expr] = []
      for arg in args {
        next.push(substitute_aliases(arg, aliases))
      }
      EFunc(name, next, distinct)
    }
    EBinary(op, a, b) =>
      EBinary(op, substitute_aliases(a, aliases), substitute_aliases(b, aliases))
    EUnary(op, a) => EUnary(op, substitute_aliases(a, aliases))
    EIsNull(a, negate) => EIsNull(substitute_aliases(a, aliases), negate)
    EList(items) => {
      let next : Array[Expr] = []
      for item in items {
        next.push(substitute_aliases(item, aliases))
      }
      EList(next)
    }
    ELit(_) => expr
    EStar => EStar
    EError => EError
  }
}

///|
/// 没有显式别名时，列在结果表里显示的名字。
pub fn expr_label(expr : Expr) -> String {
  match expr {
    ELit(_) => "value"
    ECol(_, col) => col
    EFunc(name, _, _) => name
    EBinary(op, _, _) => op.to_lower()
    EUnary(op, _) => op.to_lower()
    EIsNull(_, _) => "is_null"
    EList(_) => "list"
    EStar => "*"
    EError => "error"
  }
}
