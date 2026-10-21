// NoteQL 的值模型。
//
// 查询语言的列值只有六种：null、bool、int、float、string、string list。
// 不做隐式字符串到数字的转换；比较时 int/float 会统一成 double。

///|
pub(all) enum Value {
  VNull
  VBool(Bool)
  VInt(Int)
  VFloat(Double)
  VStr(String)
  VList(Array[String])
} derive(Debug)

///|
pub fn Value::is_null(self : Value) -> Bool {
  match self {
    VNull => true
    _ => false
  }
}

///|
pub fn Value::truthy(self : Value) -> Bool {
  match self {
    VBool(b) => b
    VInt(i) => i != 0
    VFloat(f) => f != 0.0
    VStr(s) => s != ""
    VList(xs) => xs.length() > 0
    VNull => false
  }
}

///|
pub fn Value::display(self : Value) -> String {
  match self {
    VNull => ""
    VBool(b) => if b { "true" } else { "false" }
    VInt(i) => i.to_string()
    VFloat(f) => f.to_string()
    VStr(s) => s
    VList(xs) => xs.join(", ")
  }
}

///|
pub fn Value::as_string(self : Value) -> String {
  match self {
    VStr(s) => s
    _ => self.display()
  }
}

///|
pub fn Value::as_double(self : Value) -> Double? {
  match self {
    VInt(i) => Some(i.to_double())
    VFloat(f) => Some(f)
    _ => None
  }
}

///|
/// 用于分组、去重与缓存键。类型前缀避免 `1` 与 `"1"` 撞键。
pub fn Value::key(self : Value) -> String {
  match self {
    VNull => "n:"
    VBool(b) => if b { "b:1" } else { "b:0" }
    VInt(i) => "i:" + i.to_string()
    VFloat(f) => "f:" + f.to_string()
    VStr(s) => "s:" + s
    VList(xs) => "l:" + xs.join("\u{0001}")
  }
}

///|
fn compare_double(a : Double, b : Double) -> Int {
  if a < b {
    -1
  } else if a > b {
    1
  } else {
    0
  }
}

///|
/// 返回 None 表示两者不可比较（比如 null 与数字）。
pub fn Value::compare(self : Value, other : Value) -> Int? {
  match (self, other) {
    (VNull, VNull) => Some(0)
    (VNull, _) => None
    (_, VNull) => None
    (VBool(a), VBool(b)) => Some(if a == b { 0 } else if a { 1 } else { -1 })
    (VInt(a), VInt(b)) => Some(if a < b { -1 } else if a > b { 1 } else { 0 })
    (VInt(a), VFloat(b)) => Some(compare_double(a.to_double(), b))
    (VFloat(a), VInt(b)) => Some(compare_double(a, b.to_double()))
    (VFloat(a), VFloat(b)) => Some(compare_double(a, b))
    (VStr(a), VStr(b)) => Some(a.compare(b))
    (VList(a), VList(b)) => Some(a.join("\u{0001}").compare(b.join("\u{0001}")))
    _ => None
  }
}

///|
pub fn Value::equals(self : Value, other : Value) -> Bool {
  match self.compare(other) {
    Some(0) => true
    _ => false
  }
}

///|
pub fn Value::contains(self : Value, needle : Value) -> Bool {
  match self {
    VList(items) => {
      let target = needle.as_string()
      items.contains(target)
    }
    VStr(haystack) => haystack.contains(needle.as_string())
    _ => false
  }
}

///|
/// SQL 风格的 `LIKE`：`%` 匹配任意长度，`_` 匹配单个字符。
pub fn like_match(text : String, pattern : String) -> Bool {
  let t = text.to_array()
  let p = pattern.to_array()
  let n = t.length()
  let m = p.length()
  let dp : Array[Array[Bool]] = []
  for i = 0; i <= n; i = i + 1 {
    let row : Array[Bool] = []
    for j = 0; j <= m; j = j + 1 {
      row.push(false)
    }
    dp.push(row)
  }
  dp[0][0] = true
  for j = 1; j <= m; j = j + 1 {
    if p[j - 1] == '%' {
      dp[0][j] = dp[0][j - 1]
    }
  }
  for i = 1; i <= n; i = i + 1 {
    for j = 1; j <= m; j = j + 1 {
      let pc = p[j - 1]
      if pc == '%' {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
      } else if pc == '_' || pc == t[i - 1] {
        dp[i][j] = dp[i - 1][j - 1]
      }
    }
  }
  dp[n][m]
}

///|
pub fn write_value_json(sb : StringBuilder, value : Value) -> Unit {
  match value {
    VNull => sb.write_string("null")
    VBool(b) => sb.write_string(if b { "true" } else { "false" })
    VInt(i) => sb.write_string(i.to_string())
    VFloat(f) => {
      // JSON 不接受 NaN / Infinity；查询里出现时退化成一个明确的字符串。
      if f != f || f == 1.0 / 0.0 || f == -1.0 / 0.0 {
        @vault.write_json_string(sb, f.to_string())
      } else {
        sb.write_string(f.to_string())
      }
    }
    VStr(s) => @vault.write_json_string(sb, s)
    VList(xs) => {
      sb.write_char('[')
      for i = 0; i < xs.length(); i = i + 1 {
        if i > 0 {
          sb.write_char(',')
        }
        @vault.write_json_string(sb, xs[i])
      }
      sb.write_char(']')
    }
  }
}
