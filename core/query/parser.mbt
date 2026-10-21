// NoteQL 递归下降解析器。
//
// 语法（大小写不敏感）：
//   SELECT [DISTINCT] item [AS alias], ...
//   FROM relation [AS alias]
//   [WHERE expr]
//   [GROUP BY expr, ...]
//   [HAVING expr]
//   [ORDER BY expr [ASC|DESC], ...]
//   [LIMIT n]

///|
priv struct Parser {
  tokens : Array[Token]
  mut pos : Int
  mut error : String
}

///|
fn Parser::new(tokens : Array[Token]) -> Parser {
  { tokens, pos: 0, error: "" }
}

///|
fn Parser::peek(self : Parser) -> Token {
  self.tokens[self.pos]
}

///|
fn Parser::advance(self : Parser) -> Token {
  let t = self.tokens[self.pos]
  if self.pos + 1 < self.tokens.length() {
    self.pos = self.pos + 1
  }
  t
}

///|
fn Parser::fail(self : Parser, message : String) -> Unit {
  if self.error == "" {
    self.error = message + "（位置 " + self.peek().pos.to_string() + "）"
  }
}

///|
fn Parser::is_kw(self : Parser, word : String) -> Bool {
  let t = self.peek()
  t.kind == TIdent && t.text.to_lower() == word
}

///|
fn Parser::eat_kw(self : Parser, word : String) -> Bool {
  if self.is_kw(word) {
    self.advance() |> ignore
    true
  } else {
    false
  }
}

///|
fn Parser::expect_kw(self : Parser, word : String) -> Bool {
  if self.eat_kw(word) {
    true
  } else {
    self.fail("期望关键字 " + word.to_upper())
    false
  }
}

///|
fn Parser::expect_kind(self : Parser, kind : TokKind, what : String) -> Bool {
  if self.peek().kind == kind {
    self.advance() |> ignore
    true
  } else {
    self.fail("期望" + what)
    false
  }
}

///|
fn Parser::expect_ident(self : Parser, what : String) -> String? {
  if self.peek().kind == TIdent {
    Some(self.advance().text)
  } else {
    self.fail("期望" + what)
    None
  }
}

///|
fn is_clause_word(text : String) -> Bool {
  let lower = text.to_lower()
  lower == "where" ||
  lower == "group" ||
  lower == "having" ||
  lower == "order" ||
  lower == "limit" ||
  lower == "from" ||
  lower == "join" ||
  lower == "left" ||
  lower == "inner" ||
  lower == "union"
}

///|
fn parse_int_text(text : String) -> Int {
  let cs = text.to_array()
  let mut value = 0
  for c in cs {
    if c >= '0' && c <= '9' {
      value = value * 10 + (c.to_int() - '0'.to_int())
    }
  }
  value
}

///|
fn parse_float_text(text : String) -> Double {
  let cs = text.to_array()
  let mut value = 0.0
  let mut i = 0
  while i < cs.length() && cs[i] != '.' {
    if cs[i] >= '0' && cs[i] <= '9' {
      value = value * 10.0 + (cs[i].to_int() - '0'.to_int()).to_double()
    }
    i = i + 1
  }
  if i < cs.length() && cs[i] == '.' {
    i = i + 1
    let mut scale = 1.0
    while i < cs.length() {
      if cs[i] >= '0' && cs[i] <= '9' {
        scale = scale * 10.0
        value = value + (cs[i].to_int() - '0'.to_int()).to_double() / scale
      }
      i = i + 1
    }
  }
  value
}

///|
fn is_cmp_op(text : String) -> Bool {
  text == "=" || text == "!=" || text == "<>" || text == "<" ||
  text == "<=" || text == ">" || text == ">="
}

///|
fn Parser::parse_query(self : Parser) -> Query {
  if !self.expect_kw("select") {
    return {
      distinct: false,
      items: [],
      relation: "",
      rel_alias: "",
      where_expr: None,
      group_by: [],
      having: None,
      order_by: [],
      limit: -1,
    }
  }
  let distinct = self.eat_kw("distinct")
  let items = self.parse_select_items()
  if !self.expect_kw("from") {
    // 继续解析只会制造更多噪音，直接返回当前结果。
    return {
      distinct,
      items,
      relation: "",
      rel_alias: "",
      where_expr: None,
      group_by: [],
      having: None,
      order_by: [],
      limit: -1,
    }
  }
  let relation = match self.expect_ident("关系名") {
    Some(name) => name
    None => ""
  }
  let rel_alias = if self.eat_kw("as") {
    match self.expect_ident("关系别名") {
      Some(name) => name
      None => relation
    }
  } else if self.peek().kind == TIdent && !is_clause_word(self.peek().text) {
    self.advance().text
  } else {
    relation
  }
  let where_expr = if self.eat_kw("where") {
    Some(self.parse_expr())
  } else {
    None
  }
  let group_by = if self.eat_kw("group") {
    if self.expect_kw("by") {
      self.parse_expr_list()
    } else {
      []
    }
  } else {
    []
  }
  let having = if self.eat_kw("having") {
    Some(self.parse_expr())
  } else {
    None
  }
  let order_by = if self.eat_kw("order") {
    if self.expect_kw("by") {
      self.parse_order_items()
    } else {
      []
    }
  } else {
    []
  }
  let limit = if self.eat_kw("limit") {
    let t = self.peek()
    if t.kind == TInt {
      self.advance() |> ignore
      parse_int_text(t.text)
    } else {
      self.fail("LIMIT 需要一个整数")
      -1
    }
  } else {
    -1
  }
  if self.peek().kind != TEof && self.error == "" {
    self.fail("查询结尾有多余内容")
  }
  {
    distinct,
    items,
    relation,
    rel_alias: rel_alias,
    where_expr,
    group_by,
    having,
    order_by,
    limit,
  }
}

///|
fn Parser::parse_select_items(self : Parser) -> Array[SelectItem] {
  let items : Array[SelectItem] = []
  if self.peek().kind == TStar {
    self.advance() |> ignore
    items.push({ expr: EStar, name: "" })
    return items
  }
  items.push(self.parse_select_item())
  while self.peek().kind == TComma {
    self.advance() |> ignore
    items.push(self.parse_select_item())
  }
  items
}

///|
fn Parser::parse_select_item(self : Parser) -> SelectItem {
  let expr = self.parse_expr()
  let rel_alias = if self.eat_kw("as") {
    match self.expect_ident("列别名") {
      Some(name) => name
      None => ""
    }
  } else if self.peek().kind == TIdent && !is_clause_word(self.peek().text) {
    self.advance().text
  } else {
    ""
  }
  { expr, name: rel_alias }
}

///|
fn Parser::parse_order_items(self : Parser) -> Array[OrderItem] {
  let items : Array[OrderItem] = []
  items.push(self.parse_order_item())
  while self.peek().kind == TComma {
    self.advance() |> ignore
    items.push(self.parse_order_item())
  }
  items
}

///|
fn Parser::parse_order_item(self : Parser) -> OrderItem {
  let expr = self.parse_expr()
  let desc = if self.eat_kw("desc") {
    true
  } else {
    self.eat_kw("asc") |> ignore
    false
  }
  { expr, desc }
}

///|
fn Parser::parse_expr_list(self : Parser) -> Array[Expr] {
  let items : Array[Expr] = []
  items.push(self.parse_expr())
  while self.peek().kind == TComma {
    self.advance() |> ignore
    items.push(self.parse_expr())
  }
  items
}

///|
fn Parser::parse_expr(self : Parser) -> Expr {
  self.parse_or()
}

///|
fn Parser::parse_or(self : Parser) -> Expr {
  let mut left = self.parse_and()
  while self.eat_kw("or") {
    let right = self.parse_and()
    left = EBinary("OR", left, right)
  }
  left
}

///|
fn Parser::parse_and(self : Parser) -> Expr {
  let mut left = self.parse_not()
  while self.eat_kw("and") {
    let right = self.parse_not()
    left = EBinary("AND", left, right)
  }
  left
}

///|
fn Parser::parse_not(self : Parser) -> Expr {
  if self.eat_kw("not") {
    EUnary("NOT", self.parse_not())
  } else {
    self.parse_cmp()
  }
}

///|
fn Parser::parse_cmp(self : Parser) -> Expr {
  let left = self.parse_add()
  if self.eat_kw("is") {
    let negate = self.eat_kw("not")
    if self.expect_kw("null") {
      return EIsNull(left, negate)
    }
    return EError
  }
  if self.eat_kw("in") {
    self.expect_kind(TLParen, " `(`") |> ignore
    let items = self.parse_expr_list()
    self.expect_kind(TRParen, " `)`") |> ignore
    return EBinary("IN", left, EList(items))
  }
  if self.eat_kw("like") {
    return EBinary("LIKE", left, self.parse_add())
  }
  if self.eat_kw("contains") {
    return EBinary("CONTAINS", left, self.parse_add())
  }
  let t = self.peek()
  if t.kind == TOp && is_cmp_op(t.text) {
    self.advance() |> ignore
    EBinary(t.text, left, self.parse_add())
  } else {
    left
  }
}

///|
fn Parser::parse_add(self : Parser) -> Expr {
  let mut left = self.parse_mul()
  while true {
    let t = self.peek()
    if t.kind == TOp && (t.text == "+" || t.text == "-") {
      self.advance() |> ignore
      left = EBinary(t.text, left, self.parse_mul())
    } else {
      break
    }
  }
  left
}

///|
fn Parser::parse_mul(self : Parser) -> Expr {
  let mut left = self.parse_unary()
  while true {
    let t = self.peek()
    if (t.kind == TOp && (t.text == "/" || t.text == "%")) || t.kind == TStar {
      self.advance() |> ignore
      let op = if t.kind == TStar { "*" } else { t.text }
      left = EBinary(op, left, self.parse_unary())
    } else {
      break
    }
  }
  left
}

///|
fn Parser::parse_unary(self : Parser) -> Expr {
  let t = self.peek()
  if t.kind == TOp && t.text == "-" {
    self.advance() |> ignore
    EUnary("NEG", self.parse_unary())
  } else if t.kind == TOp && t.text == "+" {
    self.advance() |> ignore
    self.parse_unary()
  } else {
    self.parse_primary()
  }
}

///|
fn Parser::parse_primary(self : Parser) -> Expr {
  let t = self.peek()
  match t.kind {
    TInt => {
      self.advance() |> ignore
      ELit(VInt(parse_int_text(t.text)))
    }
    TFloat => {
      self.advance() |> ignore
      ELit(VFloat(parse_float_text(t.text)))
    }
    TString => {
      self.advance() |> ignore
      ELit(VStr(t.text))
    }
    TLParen => {
      self.advance() |> ignore
      let inner = self.parse_expr()
      self.expect_kind(TRParen, " `)`") |> ignore
      inner
    }
    TLBracket => {
      self.advance() |> ignore
      let items = self.parse_expr_list()
      self.expect_kind(TRBracket, " `]`") |> ignore
      EList(items)
    }
    TStar => {
      self.advance() |> ignore
      EStar
    }
    TIdent => {
      self.advance() |> ignore
      let lower = t.text.to_lower()
      if lower == "true" {
        ELit(VBool(true))
      } else if lower == "false" {
        ELit(VBool(false))
      } else if lower == "null" {
        ELit(VNull)
      } else if self.peek().kind == TLParen {
        self.parse_call(t.text)
      } else if self.peek().kind == TDot {
        self.advance() |> ignore
        let col = match self.expect_ident("列名") {
          Some(name) => name
          None => ""
        }
        ECol(t.text, col)
      } else {
        ECol("", t.text)
      }
    }
    _ => {
      self.fail("期望表达式")
      EError
    }
  }
}

///|
fn Parser::parse_call(self : Parser, name : String) -> Expr {
  self.expect_kind(TLParen, " `(`") |> ignore
  let distinct = self.eat_kw("distinct")
  let args : Array[Expr] = []
  if self.peek().kind == TStar {
    self.advance() |> ignore
    args.push(EStar)
  } else if self.peek().kind != TRParen {
    args.push(self.parse_expr())
    while self.peek().kind == TComma {
      self.advance() |> ignore
      args.push(self.parse_expr())
    }
  }
  self.expect_kind(TRParen, " `)`") |> ignore
  EFunc(name.to_lower(), args, distinct)
}

///|
pub fn parse(source : String) -> ParseResult {
  let lexed = lex(source)
  if lexed.error != "" {
    return PErr(lexed.error)
  }
  let parser = Parser::new(lexed.tokens)
  let query = parser.parse_query()
  if parser.error != "" {
    PErr(parser.error)
  } else {
    POk(query)
  }
}
