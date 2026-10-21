// NoteQL 词法分析。
//
// 关键字不单独设 token，解析器把标识符按大写形式比较，
// 这样列名 `count` 与关键字 `COUNT` 不会互相污染。

///|
pub(all) enum TokKind {
  TIdent
  TString
  TInt
  TFloat
  TComma
  TDot
  TStar
  TLParen
  TRParen
  TLBracket
  TRBracket
  TOp
  TEof
} derive(Eq, Debug)

///|
pub(all) struct Token {
  kind : TokKind
  text : String
  pos : Int
} derive(Debug)

///|
pub(all) struct LexOutcome {
  tokens : Array[Token]
  error : String
}

///|
fn is_space_char(c : Char) -> Bool {
  c == ' ' || c == '\t' || c == '\n' || c == '\r'
}

///|
fn is_alpha_char(c : Char) -> Bool {
  (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}

///|
fn is_digit_char(c : Char) -> Bool {
  c >= '0' && c <= '9'
}

///|
fn is_ident_start(c : Char) -> Bool {
  is_alpha_char(c) || c == '_' || c == '$'
}

///|
fn is_ident_char(c : Char) -> Bool {
  is_ident_start(c) || is_digit_char(c)
}

///|
fn hex_value(c : Char) -> Int {
  if c >= '0' && c <= '9' {
    c.to_int() - '0'.to_int()
  } else if c >= 'a' && c <= 'f' {
    c.to_int() - 'a'.to_int() + 10
  } else if c >= 'A' && c <= 'F' {
    c.to_int() - 'A'.to_int() + 10
  } else {
    -1
  }
}

///|
fn decode_string(cs : Array[Char], start : Int, stop : Int) -> String {
  let sb = StringBuilder(size_hint=32)
  let mut i = start
  while i < stop {
    let c = cs[i]
    if c == '\\' && i + 1 < stop {
      let next = cs[i + 1]
      if next == 'n' {
        sb.write_char('\n')
        i = i + 2
      } else if next == 'r' {
        sb.write_char('\r')
        i = i + 2
      } else if next == 't' {
        sb.write_char('\t')
        i = i + 2
      } else if next == '\\' {
        sb.write_char('\\')
        i = i + 2
      } else if next == '\'' {
        sb.write_char('\'')
        i = i + 2
      } else if next == '"' {
        sb.write_char('"')
        i = i + 2
      } else if next == 'u' && i + 5 < stop && cs[i + 2] == '{' && cs[i + 6] == '}' {
        let mut code = 0
        let mut ok = true
        for k = 3; k < 6; k = k + 1 {
          let h = hex_value(cs[i + k])
          if h < 0 {
            ok = false
          } else {
            code = code * 16 + h
          }
        }
        if ok {
          sb.write_char(code.unsafe_to_char())
          i = i + 7
        } else {
          sb.write_char(c)
          i = i + 1
        }
      } else {
        sb.write_char(next)
        i = i + 2
      }
    } else {
      sb.write_char(c)
      i = i + 1
    }
  }
  sb.to_string()
}

///|
pub fn lex(source : String) -> LexOutcome {
  let cs = source.to_array()
  let n = cs.length()
  let tokens : Array[Token] = []
  let mut i = 0
  let mut error = ""
  while i < n {
    let c = cs[i]
    if is_space_char(c) {
      i = i + 1
    } else if c == '-' && i + 1 < n && cs[i + 1] == '-' {
      // SQL 风格行注释
      while i < n && cs[i] != '\n' {
        i = i + 1
      }
    } else if c == '/' && i + 1 < n && cs[i + 1] == '/' {
      while i < n && cs[i] != '\n' {
        i = i + 1
      }
    } else if c == ';' {
      i = i + 1
    } else if c == '\'' || c == '"' {
      let quote = c
      let start = i + 1
      let mut j = start
      let mut closed = false
      while j < n {
        if cs[j] == '\\' && j + 1 < n {
          j = j + 2
        } else if cs[j] == quote {
          closed = true
          break
        } else {
          j = j + 1
        }
      }
      if !closed {
        error = "字符串没有闭合（位置 " + i.to_string() + "）"
        i = n
      } else {
        tokens.push({ kind: TString, text: decode_string(cs, start, j), pos: i })
        i = j + 1
      }
    } else if is_digit_char(c) {
      let start = i
      let mut seen_dot = false
      while i < n {
        if is_digit_char(cs[i]) {
          i = i + 1
        } else if cs[i] == '.' && !seen_dot && i + 1 < n && is_digit_char(cs[i + 1]) {
          seen_dot = true
          i = i + 1
        } else {
          break
        }
      }
      let text = String::from_array(cs[start:i])
      tokens.push({
        kind: if seen_dot { TFloat } else { TInt },
        text,
        pos: start,
      })
    } else if is_ident_start(c) {
      let start = i
      while i < n && is_ident_char(cs[i]) {
        i = i + 1
      }
      tokens.push({
        kind: TIdent,
        text: String::from_array(cs[start:i]),
        pos: start,
      })
    } else if c == ',' {
      tokens.push({ kind: TComma, text: ",", pos: i })
      i = i + 1
    } else if c == '.' {
      tokens.push({ kind: TDot, text: ".", pos: i })
      i = i + 1
    } else if c == '*' {
      tokens.push({ kind: TStar, text: "*", pos: i })
      i = i + 1
    } else if c == '(' {
      tokens.push({ kind: TLParen, text: "(", pos: i })
      i = i + 1
    } else if c == ')' {
      tokens.push({ kind: TRParen, text: ")", pos: i })
      i = i + 1
    } else if c == '[' {
      tokens.push({ kind: TLBracket, text: "[", pos: i })
      i = i + 1
    } else if c == ']' {
      tokens.push({ kind: TRBracket, text: "]", pos: i })
      i = i + 1
    } else {
      // 双字符运算符优先
      if i + 1 < n {
        let two = String::from_array(cs[i:i + 2])
        if two == "!=" || two == "<>" || two == "<=" || two == ">=" {
          tokens.push({ kind: TOp, text: two, pos: i })
          i = i + 2
          continue
        }
      }
      if c == '=' || c == '<' || c == '>' || c == '+' || c == '-' || c == '/' || c == '%' {
        tokens.push({ kind: TOp, text: c.to_string(), pos: i })
        i = i + 1
      } else {
        error = "无法识别的字符 `" + c.to_string() + "`（位置 " + i.to_string() + "）"
        i = n
      }
    }
  }
  tokens.push({ kind: TEof, text: "", pos: n })
  { tokens, error }
}
