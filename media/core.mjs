function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull() {}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull.prototype.$tag = 0;
const _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__ = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull();
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool.prototype.$tag = 1;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt.prototype.$tag = 2;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat.prototype.$tag = 3;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr.prototype.$tag = 4;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VList(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VList.prototype.$tag = 5;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ELit(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ELit.prototype.$tag = 0;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ECol(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ECol.prototype.$tag = 1;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EFunc(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EFunc.prototype.$tag = 2;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary.prototype.$tag = 3;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EUnary(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EUnary.prototype.$tag = 4;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EIsNull(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EIsNull.prototype.$tag = 5;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EList(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EList.prototype.$tag = 6;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EStar() {}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EStar.prototype.$tag = 7;
const _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EStar__ = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EStar();
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EError() {}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EError.prototype.$tag = 8;
const _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EError__ = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EError();
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGUsiEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $unsafe_make_string(a, b) {
  return String.fromCodePoint(b).repeat(a);
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function _M0TPB3MapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsuE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRPB5ArrayGiEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRPB5ArrayGiEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB3MapGsiEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB3MapGssEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGiEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGiEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGiEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGiEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGiEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5EntryGsiEE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
function _M0TPC15bytes9BytesView(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const $bytes_literal$0 = new Uint8Array();
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC16buffer6Buffer(param0, param1) {
  this.data = param0;
  this.len = param1;
}
const _M0FPC28encoding4utf816decode__utf8__js = ((preserveBOMDecoder, dropBOMDecoder) => function(bytes, start, len, preserveBOM) {
   try {
     const end = start + len;
     const slice = bytes.subarray(start, end);
     const decoder = preserveBOM ? preserveBOMDecoder : dropBOMDecoder;
     return [decoder.decode(slice)];
   } catch (_) {
     return [];
   }
 })(
   new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }),
   new TextDecoder("utf-8", { fatal: true, ignoreBOM: false }),
 );
const _M0FPC28encoding4utf823decode__utf8__lossy__js = ((preserveBOMDecoder, dropBOMDecoder) => function(bytes, start, len, preserveBOM) {
   const end = start + len;
   const slice = bytes.subarray(start, end);
   const decoder = preserveBOM ? preserveBOMDecoder : dropBOMDecoder;
   return decoder.decode(slice);
 })(
   new TextDecoder("utf-8", { ignoreBOM: true }),
   new TextDecoder("utf-8", { ignoreBOM: false }),
 );
function _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed.prototype.$tag = 0;
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim(param0, param1, param2) {
  this.nodes = param0;
  this.links = param1;
  this.seed = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout7SimNode(param0, param1, param2, param3, param4, param5, param6) {
  this.x = param0;
  this.y = param1;
  this.vx = param2;
  this.vy = param3;
  this.radius = param4;
  this.degree = param5;
  this.fixed = param6;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Quad(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  this.x0 = param0;
  this.y0 = param1;
  this.x1 = param2;
  this.y1 = param3;
  this.mass = param4;
  this.cx = param5;
  this.cy = param6;
  this.body = param7;
  this.child = param8;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree(param0, param1, param2) {
  this.pool = param0;
  this.used = param1;
  this.nodes = param2;
}
function _M0TPB9ArrayViewGUiRPB5ArrayGiEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7TagSink(param0, param1) {
  this.seen = param0;
  this.order = param1;
}
function _M0TPB9ArrayViewGUsuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7RawLink(param0, param1, param2, param3, param4) {
  this.target = param0;
  this.raw = param1;
  this.title = param2;
  this.kind = param3;
  this.line = param4;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse9ParsedDoc(param0, param1) {
  this.links = param0;
  this.tags = param1;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault(param0, param1, param2, param3, param4, param5, param6) {
  this.files = param0;
  this.order = param1;
  this.byPath = param2;
  this.byName = param3;
  this.cache = param4;
  this.change_seq = param5;
  this.revision = param6;
}
function _M0TPB9ArrayViewGUsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPB3MapGssEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntry(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.rel = param0;
  this.dir = param1;
  this.base = param2;
  this.ext = param3;
  this.nameKey = param4;
  this.kind = param5;
  this.tags = param6;
  this.links = param7;
  this.size = param8;
  this.mtime = param9;
}
function _M0TPB9ArrayViewGUsiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStat(param0, param1) {
  this.path = param0;
  this.count = param1;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphNode(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.id = param0;
  this.label = param1;
  this.path = param2;
  this.kind = param3;
  this.ext = param4;
  this.folder = param5;
  this.tags = param6;
  this.size = param7;
  this.mtime = param8;
  this.degree = param9;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11PendingEdge(param0, param1, param2) {
  this.from = param0;
  this.to = param1;
  this.kind = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLink(param0, param1, param2) {
  this.source = param0;
  this.target = param1;
  this.kind = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12GraphPayload(param0, param1, param2, param3, param4) {
  this.nodes = param0;
  this.links = param1;
  this.stats = param2;
  this.generatedAt = param3;
  this.rootName = param4;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10GraphStats(param0, param1, param2, param3) {
  this.notes = param0;
  this.attachments = param1;
  this.unresolved = param2;
  this.links = param3;
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7Dataset(param0, param1, param2) {
  this.name = param0;
  this.columns = param1;
  this.rows = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser(param0, param1, param2) {
  this.tokens = param0;
  this.pos = param1;
  this.error = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query9OrderItem(param0, param1) {
  this.expr = param0;
  this.desc = param1;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10SelectItem(param0, param1) {
  this.expr = param0;
  this.name = param1;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Query(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  this.distinct = param0;
  this.items = param1;
  this.relation = param2;
  this.rel_alias = param3;
  this.where_expr = param4;
  this.group_by = param5;
  this.having = param6;
  this.order_by = param7;
  this.limit = param8;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(param0, param1, param2) {
  this.kind = param0;
  this.text = param1;
  this.pos = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10LexOutcome(param0, param1) {
  this.tokens = param0;
  this.error = param1;
}
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11ParseResult3POk(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11ParseResult3POk.prototype.$tag = 0;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11ParseResult4PErr(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11ParseResult4PErr.prototype.$tag = 1;
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.nodes = param0;
  this.edges = param1;
  this.reverse = param2;
  this.in_deg = param3;
  this.out_deg = param4;
  this.cycle_set = param5;
  this.cycles_ready = param6;
  this.dist_cache = param7;
}
function _M0TPB9ArrayViewGUsRPB3MapGsiEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7EvalCtx(param0, param1) {
  this.graph = param0;
  this.index = param1;
}
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10RunOutcome3ROk(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10RunOutcome3ROk.prototype.$tag = 0;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10RunOutcome4RErr(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10RunOutcome4RErr.prototype.$tag = 1;
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6OutRow(param0, param1, param2) {
  this.values = param0;
  this.keys = param1;
  this.seq = param2;
}
function _M0TPB9ArrayViewGUsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11QueryResult(param0, param1, param2, param3) {
  this.columns = param0;
  this.rows = param1;
  this.total_rows = param2;
  this.scanned = param3;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine(param0, param1, param2) {
  this.cache = param0;
  this.hits = param1;
  this.misses = param2;
}
function _M0TPB9ArrayViewGUsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13EngineOutcome3EOk(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13EngineOutcome3EOk.prototype.$tag = 0;
function _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13EngineOutcome4EErr(param0) {
  this._0 = param0;
}
_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13EngineOutcome4EErr.prototype.$tag = 1;
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13QueryResponse(param0, param1, param2) {
  this.result = param0;
  this.cached = param1;
  this.deps = param2;
}
function _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResult(param0, param1, param2) {
  this.result = param0;
  this.seq = param1;
  this.deps = param2;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPB4Iter4nextN6constrS98GUsiEE = 0;
const _M0MPB4Iter4nextN6constrS99GUsiEE = 0;
const _M0MPB4Iter4nextN6constrS106GcE = 0;
const _M0MPB4Iter4nextN6constrS107GcE = 0;
const _M0MPB4Iter3newN6constrS124GUsiEE = 0;
const _M0MPB4Iter3newN6constrS130GcE = 0;
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__note = 0;
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__link = 1;
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11change__tag = 2;
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__name = 3;
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__file = 4;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0MPC16string6String4trimN6recordS578 = new _M0TPC16string10StringView("\t\n\r ", 0, 4);
const _M0MPC16string10StringView4findN6constrS317 = 0;
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path11decode__uriN6recordS3264 = new _M0TPC16string10StringView("\\", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path11decode__uriN6recordS3265 = new _M0TPC16string10StringView("/", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path5depthN6recordS3256 = new _M0TPC16string10StringView("/", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault16strip__note__extN6recordS3302 = new _M0TPC16string10StringView(".markdown", 0, 9);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault16strip__note__extN6recordS3303 = new _M0TPC16string10StringView(".md", 0, 3);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path8basenameN6recordS3228 = new _M0TPC16string10StringView("/", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7dirnameN6recordS3223 = new _M0TPC16string10StringView("/", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path9normalizeN6recordS3246 = new _M0TPC16string10StringView("/", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path9normalizeN6recordS3247 = new _M0TPC16string10StringView("/", 0, 1);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3396 = new _M0TPC16string10StringView("%", 0, 1);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3397 = new _M0TPC16string10StringView("\\", 0, 1);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3398 = new _M0TPC16string10StringView("<", 0, 1);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3399 = new _M0TPC16string10StringView(">", 0, 1);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3400 = new _M0TPC16string10StringView("/", 0, 1);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3401 = new _M0TPC16string10StringView("./", 0, 2);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3402 = new _M0TPC16string10StringView("../", 0, 3);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value3keyN6recordS3627 = new _M0TPC16string10StringView("\u0001", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14distinct__rowsN6recordS4647 = new _M0TPC16string10StringView("\u0002", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__exprN6recordS3788 = new _M0TPC16string10StringView(", ", 0, 2);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15validate__queryN6recordS3872 = new _M0TPC16string10StringView(", ", 0, 2);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7displayN6recordS3609 = new _M0TPC16string10StringView(", ", 0, 2);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compareN6constrS3641 = 0;
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compareN6recordS3642 = new _M0TPC16string10StringView("\u0001", 0, 1);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compareN6recordS3643 = new _M0TPC16string10StringView("\u0001", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__exprN6constrS4415 = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(false);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__exprN6constrS4416 = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(true);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__exprN6constrS4417 = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(false);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10group__keyN6recordS4548 = new _M0TPC16string10StringView("\u0002", 0, 1);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault10candidatesN6recordS3306 = new _M0TPC16string10StringView("", 0, 0);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault10candidatesN6recordS3307 = new _M0TPC16string10StringView("/", 0, 1);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault10candidatesN6recordS3308 = new _M0TPC16string10StringView(".", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14build__orphansN6constrS4040 = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(0);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser14parse__primaryN6constrS4151 = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(true);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser14parse__primaryN6constrS4152 = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ELit(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser14parse__primaryN6constrS4151);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser14parse__primaryN6constrS4153 = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(false);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser14parse__primaryN6constrS4154 = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ELit(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser14parse__primaryN6constrS4153);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17scan__frontmatterN6recordS3155 = new _M0TPC16string10StringView("[", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17scan__frontmatterN6recordS3156 = new _M0TPC16string10StringView("]", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17scan__frontmatterN6recordS3157 = new _M0TPC16string10StringView(",", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse12is__externalN6recordS3043 = new _M0TPC16string10StringView("//", 0, 2);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse12is__externalN6recordS3044 = new _M0TPC16string10StringView("#", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17parse__md__targetN6constrS3076 = "";
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17parse__md__targetN6constrS3077 = "";
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7extnameN6recordS3233 = new _M0TPC16string10StringView(".", 0, 1);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path10strip__extN6recordS3239 = new _M0TPC16string10StringView(".", 0, 1);
const _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16noteql__selftestN6sourceS4867 = "SELECT n.path, n.degree FROM note n WHERE n.tags CONTAINS 'draft'";
const _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault3new();
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault13ghost__id__ofN6recordS3511 = new _M0TPC16string10StringView("", 0, 0);
const _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11ghost__nodeN6recordS3514 = new _M0TPC16string10StringView("", 0, 0);
const _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph14core__selftestN6recordS4889 = new _M0TPC16string10StringView("ok:", 0, 3);
const _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault7foldersN6recordS3456 = new _M0TPC16string10StringView("/", 0, 1);
const _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12core__engine = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine3new();
const _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim3new();
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    let _tmp$2 = len > 0;
    while (true) {
      const i = _tmp;
      const _more = _tmp$2;
      if (_more) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        _tmp$2 = i > 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    let _tmp$2 = len > 0;
    while (true) {
      const i = _tmp;
      const _more = _tmp$2;
      if (_more) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        _tmp$2 = i > 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Uint8Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  if (size_hint >= 0) {
    return new _M0TPB13StringBuilder("");
  } else {
    console.error("size_hint must be non-negative");
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16string6String20char__length_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_index = _tmp;
      const char_count = _tmp$2;
      if (utf16_index < end_offset$2) {
        const c1 = self.charCodeAt(utf16_index);
        if (c1 >= 55296 && c1 <= 56319 && (utf16_index + 1 | 0) < end_offset$2) {
          const c2 = self.charCodeAt(utf16_index + 1 | 0);
          if (c2 >= 56320 && c2 <= 57343) {
            _tmp = utf16_index + 2 | 0;
            _tmp$2 = char_count + 1 | 0;
            continue;
          } else {
            console.error("invalid surrogate pair");
            $panic();
          }
        }
        _tmp = utf16_index + 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        return char_count;
      }
    }
  } else {
    console.error("invalid start or end index for String::codepoint_length");
    return $panic();
  }
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (c1 >= 55296 && c1 <= 56319) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return c1;
  }
}
function _M0IP016_24default__implPB2Eq10not__equalGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7RawLinkE(x, y) {
  return !_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7RawLinkPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindE(x, y) {
  return !_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(x, y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  let _tmp;
  if (lo > 0) {
    let _tmp$2;
    if (lo < len) {
      let _tmp$3;
      const _p = self.charCodeAt(lo);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(lo - 1 | 0);
        _tmp$3 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    lo = lo + 1 | 0;
  }
  let _tmp$2;
  if (hi > 0) {
    let _tmp$3;
    if (hi < len) {
      let _tmp$4;
      const _p = self.charCodeAt(hi);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(hi - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0MPB4Iter4nextGUsiEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS99GUsiEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS98GUsiEE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS107GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS106GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsiEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS124GUsiEE;
  }
  return new _M0TPB4IterGUsiEE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS130GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC15array10FixedArray21clamped__view_2einnerGyE(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind = self;
  return new _M0TPB9ArrayViewGyE(_bind, lo, lo + count | 0);
}
function _M0MPC16string10StringView12char__length(self) {
  return _M0MPC16string6String20char__length_2einner(self.str, self.start, self.end);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string6String20unsafe__range__equal(self, start, other, other_start, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (self.charCodeAt(start + i | 0) === other.charCodeAt(other_start + i | 0)) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string10StringView17equal__to__string(self, other) {
  const len = self.end - self.start | 0;
  if (len === other.length) {
    if (self.str === other && self.start === 0) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other, 0, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String11from__array(chars) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(chars.end - chars.start | 0, 4) | 0);
  const _bind = chars.end - chars.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const c = chars.buf[chars.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (c >= 56320 && c <= 57343) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (c >= 55296 && c <= 56319) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    console.error("Invalid start index");
    return $panic();
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0FPB20unsafe__make__string(_tmp, _tmp$2) {
  return $unsafe_make_string(_tmp, _tmp$2);
}
function _M0MPC16string6String4make(length, value) {
  if (length >= 0) {
    if (value <= 65535) {
      return _M0FPB20unsafe__make__string(length, value);
    } else {
      const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(2, length) | 0);
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < length) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, value);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return buf.val;
    }
  } else {
    console.error("invalid length");
    return $panic();
  }
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    console.error("Invalid index for View");
    return $panic();
  }
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    return new _M0TPC16string10StringView(self, start_offset, end_offset$2);
  } else {
    console.error("Invalid index for View");
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        if (k > 0 && c !== pattern.str.charCodeAt(pattern.start + k | 0)) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (c === pattern.str.charCodeAt(pattern.start + k | 0)) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        if (k > 0 && c !== pattern.str.charCodeAt(pattern.start + k | 0)) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (c === pattern.str.charCodeAt(pattern.start + k | 0)) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      if (data.charCodeAt(pos) === first && data.charCodeAt(pos + last_offset | 0) === last) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      if (left.charCodeAt(left_start + i | 0) !== right.charCodeAt(right_start + i | 0)) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = target.start;
  const pattern_start = pattern.start;
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(target.str, pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(target.str, found + 1 | 0, pattern.str, pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (failures$2 > 64 || failures$2 > (4 + (scanned / 8 | 0) | 0)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      if (data.charCodeAt(pos) === code) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = target.start;
  const found = _M0FPB30find__code__unit__from__string(target.str, target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS317;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string6String8find__by(self, pred) {
  const _p = new _M0TPC16string10StringView(self, 0, self.length);
  const _p$2 = _p.str;
  const _p$3 = _p.start;
  const _p$4 = _p.end;
  let _tmp = _p$3;
  let _tmp$2 = 0;
  while (true) {
    const _p$5 = _tmp;
    const _p$6 = _tmp$2;
    if (_p$5 < _p$4) {
      let _p$7;
      let _p$8;
      _L: {
        const _p$9 = _p$2.charCodeAt(_p$5);
        if (_p$9 >= 55296 && _p$9 <= 56319 && (_p$5 + 1 | 0) < _p$4) {
          const _p$10 = _p$2.charCodeAt(_p$5 + 1 | 0);
          if (_p$10 >= 56320 && _p$10 <= 57343) {
            const _tmp$3 = _p$5 + 2 | 0;
            const _p$11 = (((Math.imul(_p$9 - 55296 | 0, 1024) | 0) + _p$10 | 0) - 56320 | 0) + 65536 | 0;
            _p$7 = _tmp$3;
            _p$8 = _p$11;
            break _L;
          } else {
            const _tmp$3 = _p$5 + 1 | 0;
            const _p$11 = _p$9;
            _p$7 = _tmp$3;
            _p$8 = _p$11;
            break _L;
          }
        } else {
          const _tmp$3 = _p$5 + 1 | 0;
          const _p$10 = _p$9;
          _p$7 = _tmp$3;
          _p$8 = _p$10;
          break _L;
        }
      }
      if (pred(_p$8)) {
        return _p$6;
      }
      _tmp = _p$7;
      const _p$9 = _p$8;
      _tmp$2 = _p$6 + (_p$9 <= 65535 ? 1 : 2) | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB31rev__find__pattern__kmp__before(target, pattern, candidate_end) {
  if (candidate_end > 0) {
    const m = pattern.end - pattern.start | 0;
    const table = _M0FPB19kmp__failure__table(pattern);
    const scan_end = (candidate_end + m | 0) - 1 | 0;
    let k = 0;
    let best = -1;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < scan_end) {
        const c = target.str.charCodeAt(target.start + i | 0);
        while (true) {
          if (k > 0 && c !== pattern.str.charCodeAt(pattern.start + k | 0)) {
            const _tmp$2 = k - 1 | 0;
            k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
            continue;
          } else {
            break;
          }
        }
        if (c === pattern.str.charCodeAt(pattern.start + k | 0)) {
          k = k + 1 | 0;
        }
        if (k === m) {
          best = (i - m | 0) + 1 | 0;
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return best >= 0 ? best : undefined;
  } else {
    return undefined;
  }
}
function _M0FPB41rev__find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = candidate_end - 1 | 0;
  let _tmp$2 = candidate_end > start;
  while (true) {
    const pos = _tmp;
    const _more = _tmp$2;
    if (_more) {
      if (data.charCodeAt(pos) === first && data.charCodeAt(pos + last_offset | 0) === last) {
        return pos;
      }
      _tmp = pos - 1 | 0;
      _tmp$2 = pos > start;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB47rev__find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB41rev__find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB27rev__find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = target.start;
  const pattern_start = pattern.start;
  const last_offset = pattern_len - 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  const last_candidate = target_len - pattern_len | 0;
  let _tmp = (target_start + last_candidate | 0) + 1 | 0;
  let _tmp$2 = 0;
  while (true) {
    const candidate_end = _tmp;
    const failures = _tmp$2;
    if (candidate_end > target_start) {
      const found = _M0FPB47rev__find__two__anchor__candidate__from__string(target.str, target_start, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(target.str, found + 1 | 0, pattern.str, pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const candidate = found - target_start | 0;
      const failures$2 = failures + 1 | 0;
      const scanned = last_candidate - candidate | 0;
      if (failures$2 > 64 || failures$2 > (4 + (scanned / 8 | 0) | 0)) {
        return _M0FPB31rev__find__pattern__kmp__before(target, pattern, candidate);
      }
      _tmp = found;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB29rev__find__code__unit__scalar(data, start, end, code) {
  let _tmp = end - 1 | 0;
  let _tmp$2 = end > start;
  while (true) {
    const pos = _tmp;
    const _more = _tmp$2;
    if (_more) {
      if (data.charCodeAt(pos) === code) {
        return pos;
      }
      _tmp = pos - 1 | 0;
      _tmp$2 = pos > start;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB35rev__find__code__unit__from__string(data, start, end, code) {
  return _M0FPB29rev__find__code__unit__scalar(data, start, end, code);
}
function _M0FPB33rev__find__code__unit__from__view(target, start, end, code) {
  const target_start = target.start;
  const found = _M0FPB35rev__find__code__unit__from__string(target.str, target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView9rev__find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return self.end - self.start | 0;
    }
    case 1: {
      const found = _M0FPB33rev__find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB27rev__find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String9rev__find(self, str) {
  return _M0MPC16string10StringView9rev__find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || self.str.charCodeAt(self.start + start | 0) === str.str.charCodeAt(str.start) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  return str_len <= (self.end - self.start | 0) ? (str_len === 0 || self.str.charCodeAt(self.start) === str.str.charCodeAt(str.start) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len) : false) : false;
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC15array5Array4pushGRPB5ArrayGbEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGbE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (str.charCodeAt(i) === code) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind = str.end - str.start | 0;
  switch (_bind) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$2 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$2 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$4;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$4;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      const code = _decoded_char;
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind = code >>> 5 | 0;
    switch (_bind) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    let _tmp$2;
    if (pos < end) {
      const _p = str.charCodeAt(pos);
      _tmp$2 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    let _tmp$2;
    if (pos > start) {
      const _p = str.charCodeAt(pos - 1 | 0);
      _tmp$2 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                if (self.str.charCodeAt(self.start + i | 0) === high$2) {
                  if (self.str.charCodeAt(self.start + (i + 1 | 0) | 0) === low) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = _M0MPC16string6String4trimN6recordS578;
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGUsiEE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPC16string6String12replace__all(self, old, new_) {
  const len = self.length;
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
  const old_len = old.end - old.start | 0;
  const new$2 = _M0MPC16string10StringView9to__owned(new_);
  if (old_len === 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
    const _bind = self.length;
    let _tmp = 0;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$2 = self.charCodeAt(_string_index);
          if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
            const _bind$3 = self.charCodeAt(_string_index + 1 | 0);
            if (_bind$3 >= 56320 && _bind$3 <= 57343) {
              const _tmp$2 = _string_index + 2 | 0;
              const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            } else {
              const _tmp$2 = _string_index + 1 | 0;
              const _p = _bind$2;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            }
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        }
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  } else {
    const first_end = _M0MPC16string6String4find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp = new _M0TPC16string10StringView(self, 0, self.length);
      let _tmp$2 = _end;
      while (true) {
        const view = _tmp;
        const end = _tmp$2;
        const seg = _M0MPC16string10StringView12view_2einner(view, 0, end);
        _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, seg.str, seg.start, seg.end - seg.start | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = _M0MPC16string10StringView12view_2einner(view, end + old_len | 0, undefined);
          const _bind = _M0MPC16string10StringView4find(next_view, old);
          if (_bind === undefined) {
            _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, next_view.str, next_view.start, next_view.end - next_view.start | 0);
            break;
          } else {
            const _Some$2 = _bind;
            const _next_end = _Some$2;
            _tmp = next_view;
            _tmp$2 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      return buf.val;
    }
  }
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string10StringView9to__lower(self) {
  const _p = self.str;
  const _p$2 = self.start;
  const _p$3 = self.end;
  let _bind;
  let _tmp = _p$2;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp;
    const _p$5 = _tmp$2;
    if (_p$4 < _p$3) {
      let _p$6;
      let _p$7;
      _L: {
        const _p$8 = _p.charCodeAt(_p$4);
        if (_p$8 >= 55296 && _p$8 <= 56319 && (_p$4 + 1 | 0) < _p$3) {
          const _p$9 = _p.charCodeAt(_p$4 + 1 | 0);
          if (_p$9 >= 56320 && _p$9 <= 57343) {
            const _tmp$3 = _p$4 + 2 | 0;
            const _p$10 = (((Math.imul(_p$8 - 55296 | 0, 1024) | 0) + _p$9 | 0) - 56320 | 0) + 65536 | 0;
            _p$6 = _tmp$3;
            _p$7 = _p$10;
            break _L;
          } else {
            const _tmp$3 = _p$4 + 1 | 0;
            const _p$10 = _p$8;
            _p$6 = _tmp$3;
            _p$7 = _p$10;
            break _L;
          }
        } else {
          const _tmp$3 = _p$4 + 1 | 0;
          const _p$9 = _p$8;
          _p$6 = _tmp$3;
          _p$7 = _p$9;
          break _L;
        }
      }
      if (_M0MPC14char4Char20is__ascii__uppercase(_p$7)) {
        _bind = _p$5;
        break;
      }
      _tmp = _p$6;
      const _p$8 = _p$7;
      _tmp$2 = _p$5 + (_p$8 <= 65535 ? 1 : 2) | 0;
      continue;
    } else {
      _bind = undefined;
      break;
    }
  }
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.end - self.start | 0);
    const head = _M0MPC16string10StringView12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, head.str, head.start, head.end - head.start | 0);
    const _bind$2 = _M0MPC16string10StringView12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp$3 = _bind$4;
    while (true) {
      const _string_index = _tmp$3;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              const _tmp$4 = _string_index + 2 | 0;
              const _p$4 = (((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0;
              _decoded_next_string_index = _tmp$4;
              _decoded_char = _p$4;
              break _L;
            } else {
              const _tmp$4 = _string_index + 1 | 0;
              const _p$4 = _bind$6;
              _decoded_next_string_index = _tmp$4;
              _decoded_char = _p$4;
              break _L;
            }
          } else {
            const _tmp$4 = _string_index + 1 | 0;
            const _p$4 = _bind$6;
            _decoded_next_string_index = _tmp$4;
            _decoded_char = _p$4;
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp$3 = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    const _bind$6 = buf.val;
    return new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length);
  }
}
function _M0MPC16string6String9to__lower(self) {
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, head.str, head.start, head.end - head.start | 0);
    const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp = _bind$4;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              const _tmp$2 = _string_index + 2 | 0;
              const _p = (((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            } else {
              const _tmp$2 = _string_index + 1 | 0;
              const _p = _bind$6;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            }
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$6;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  }
}
function _M0MPC14char4Char20is__ascii__lowercase(self) {
  return self >= 97 && self <= 122;
}
function _M0MPC16string6String9to__upper(self) {
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__lowercase(c));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, head.str, head.start, head.end - head.start | 0);
    const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp = _bind$4;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              const _tmp$2 = _string_index + 2 | 0;
              const _p = (((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            } else {
              const _tmp$2 = _string_index + 1 | 0;
              const _p = _bind$6;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            }
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$6;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__lowercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char - 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  }
}
function _M0MPC16string6String9get__char(self, idx) {
  if (idx >= 0 && idx < self.length) {
    const c = self.charCodeAt(idx);
    if (c >= 55296 && c <= 56319) {
      if ((idx + 1 | 0) < self.length) {
        const next = self.charCodeAt(idx + 1 | 0);
        return next >= 56320 && next <= 57343 ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return c >= 56320 && c <= 57343 ? -1 : c;
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0FPB19join__string__viewsGsE(parts, separator) {
  if ((parts.end - parts.start | 0) === 0) {
    return "";
  } else {
    if ((parts.end - parts.start | 0) === 1) {
      const _one = parts.buf[parts.start];
      return _M0MPC16string10StringView9to__owned(_M0IPC16string6StringPB12ToStringView16to__string__view(_one));
    } else {
      const _first = parts.buf[parts.start];
      const _x_buf = parts.buf;
      const _x_start = 1 + parts.start | 0;
      const _x_end = parts.end;
      const separator$2 = _M0MPC16string10StringView9to__owned(separator);
      let result = _M0MPC16string10StringView9to__owned(_M0IPC16string6StringPB12ToStringView16to__string__view(_first));
      const _bind = _x_end - _x_start | 0;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const part = _x_buf[_x_start + _ | 0];
          result = `${result}${separator$2}`;
          result = `${result}${_M0MPC16string10StringView9to__owned(_M0IPC16string6StringPB12ToStringView16to__string__view(part))}`;
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return result;
    }
  }
}
function _M0IPC16string6StringPB7Compare7compare(self, other) {
  const len = self.length;
  const _bind = $compare_int(len, other.length);
  if (_bind === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const x = self.charCodeAt(i);
        const y = other.charCodeAt(i);
        if (x !== y) {
          return x < y ? -1 : 1;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 0;
  } else {
    return _bind;
  }
}
function _M0MPC16string6String9to__array(self) {
  const chars = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = self.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = self.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$2;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      _M0MPC15array5Array4pushGcE(chars, _decoded_char);
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return chars;
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  return _M0FPB19join__string__viewsGsE(self, separator);
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0FPB21calc__grow__threshold(capacity) {
  return (Math.imul(capacity / 16 | 0, 13) | 0) + ((Math.imul(capacity % 16 | 0, 13) | 0) / 16 | 0) | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsiE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsuE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsuE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGiRPB5ArrayGiEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRPB5ArrayGiEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsRPB5ArrayGsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB5ArrayGsEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  if (length <= _M0FPB21calc__grow__threshold(1073741824)) {
    let capacity = _M0MPC13int3Int20next__power__of__two(length);
    if (length > _M0FPB21calc__grow__threshold(capacity)) {
      capacity = Math.imul(capacity, 2) | 0;
    }
    return capacity;
  } else {
    console.error("Map capacity overflow");
    return $panic();
  }
}
function _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsuE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsiE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsuE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRPB5ArrayGiEE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsiE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsuE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsuE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsuE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRPB5ArrayGiEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRPB5ArrayGiEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRPB5ArrayGiEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsiE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsuE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsuE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsuE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsuE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRPB5ArrayGiEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRPB5ArrayGiEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB5ArrayGsEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsiE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsuE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsuE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRPB5ArrayGiEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRPB5ArrayGiEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB5ArrayGsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB5ArrayGsEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsiE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsiE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsiE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsiE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsiE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsiE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsuE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsuE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsuE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsuE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsuE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsuE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsuE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsuE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRPB5ArrayGiEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRPB5ArrayGiEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRPB5ArrayGiEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRPB5ArrayGiEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRPB5ArrayGiEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRPB5ArrayGiEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGsEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGsEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGsEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGsEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB3MapGsiEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGsiEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGsiEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB3MapGssEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGssEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGssEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGsEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGsEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsiE(self, key, value) {
  _M0MPB3Map15set__with__hashGsiE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsuE(self, key, value) {
  _M0MPB3Map15set__with__hashGsuE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRPB5ArrayGiEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRPB5ArrayGiEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB5ArrayGsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB3MapGsiEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB3MapGsiEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB3MapGssEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB3MapGssEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsiE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsiE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGssE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsuE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsuE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsuE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRPB5ArrayGiEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGiRPB5ArrayGiEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRPB5ArrayGiEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB5ArrayGsEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGsEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGsEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGsEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB3MapGsiEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB3MapGsiEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB3MapGssEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB3MapGssEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGsEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRPB5ArrayGiEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGiEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGiEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB5ArrayGsEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB3MapGsiEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB3MapGssEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map16get__or__defaultGsiE(self, key, default_) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return default_;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return default_;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map16get__or__defaultGsRPB5ArrayGsEE(self, key, default_) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return default_;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return default_;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsuE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map13remove__entryGssE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map13remove__entryGsRPB5ArrayGsEE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGssE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _bind = self.entries[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map11shift__backGsRPB5ArrayGsEE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _bind = self.entries[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map18remove__with__hashGssE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGssE(self, _entry);
        _M0MPB3Map11shift__backGssE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGsRPB5ArrayGsEE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGsRPB5ArrayGsEE(self, _entry);
        _M0MPB3Map11shift__backGsRPB5ArrayGsEE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGssE(self, _entry);
        _M0MPB3Map11shift__backGssE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map6removeGssE(self, key) {
  _M0MPB3Map18remove__with__hashGssE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map6removeGsRPB5ArrayGsEE(self, key) {
  _M0MPB3Map18remove__with__hashGsRPB5ArrayGsEE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map6removeGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self, key) {
  _M0MPB3Map18remove__with__hashGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsRPB3MapGssEEE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0MPB3Map5clearGssE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsRPB3MapGssEEE(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function _M0MPB3Map5clearGsRPB5ArrayGsEE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsRPB3MapGssEEE(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function _M0MPB3Map4iterGsiE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsiEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsiEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, blit_len) {
  const dst = $makebytes(allocate_len, init);
  _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(src, allocate_len, init, len, src_offset, dst_offset) {
  if (allocate_len >= 0 && (len >= 0 && (src_offset >= 0 && (dst_offset >= 0 && ((src_offset + len | 0) <= src.length && (dst_offset + len | 0) <= allocate_len))))) {
    return _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, len);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: allocate_len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, allocate_len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src.length);
    console.error(_string_builder.val);
    return $panic();
  }
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double5floor(_tmp) {
  return Math.floor(_tmp);
}
function _M0MPC14char4Char20to__ascii__lowercase(self) {
  if (_M0MPC14char4Char20is__ascii__uppercase(self)) {
    return self + 32 | 0;
  }
  return self;
}
function _M0MPC15bytes5Bytes21clamped__view_2einner(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  return new _M0TPC15bytes9BytesView(self, lo, lo + count | 0);
}
function _M0MPC15bytes9BytesView21clamped__view_2einner(self, start, end) {
  const len = self.end - self.start | 0;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind = self.buf;
  const _bind$2 = self.start + lo | 0;
  return new _M0TPC15bytes9BytesView(_bind, _bind$2, _bind$2 + count | 0);
}
function _M0MPC15bytes5Bytes11from__array(arr) {
  const len = arr.end - arr.start | 0;
  if (len === 0) {
    return $bytes_literal$0;
  }
  const result = _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(arr.buf, len, arr.start, 0, len);
  return result;
}
function _M0MPC15array5Array21clamped__view_2einnerGcE(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind = self;
  return new _M0TPB9ArrayViewGcE(_bind, lo, lo + count | 0);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGUiiEE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array11unsafe__popGiE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array11unsafe__popGsE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGiE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGiE(self);
    return v;
  }
}
function _M0MPC15array5Array3popGsE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGsE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6OutRowE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array4copyGiE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGRPB5ArrayGbEE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGdE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGbE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array12MutArrayView4swapGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, start, end) {
  const _bind = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGcE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGdE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGbE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB23fixed__bubble__sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, cmp) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S2217GRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(_env, a, b) {
  const cmp = _env._2;
  const swaps = _env._1;
  const arr = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S2218GRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S2217GRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S2217GRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S2217GRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: arr, _1: swaps, _2: cmp };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S2218GRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S2218GRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S2218GRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S2218GRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  let _tmp$2 = _bind > 0;
  while (true) {
    const i = _tmp;
    const _more = _tmp$2;
    if (_more) {
      _M0FPB21fixed__sift__down__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, i, cmp);
      _tmp = i - 1 | 0;
      _tmp$2 = i > 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = len - 1 | 0;
  let _tmp$4 = len > 1;
  while (true) {
    const i = _tmp$3;
    const _more = _tmp$4;
    if (_more) {
      _M0MPC15array12MutArrayView4swapGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(_M0MPC15array12MutArrayView5sliceGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, 0, i), 0, cmp);
      _tmp$3 = i - 1 | 0;
      _tmp$4 = i > 1;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, cmp) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr, cmp, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr$2, cmp);
      return undefined;
    }
    const _bind = _M0FPB24fixed__choose__pivot__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr$2, cmp);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB20fixed__partition__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    const _p = len - _pivot | 0;
    const balanced$2 = (_pivot > _p ? _p : _pivot) >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p$2 = _Some;
      if (cmp(_p$2, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$6 = _pivot;
        while (true) {
          const i$2 = _tmp$6;
          if (i$2 < len && cmp(_p$2, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$6 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(left, cmp, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView8sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array8sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(self, cmp) {
  const _bind = self.length;
  _M0MPC15array12MutArrayView8sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(new _M0TPB12MutArrayViewGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(self, 0, _bind), cmp);
}
function _M0MPC15array5Array5clearGUiiEE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGUiiEE(self, 0);
}
function _M0MPC15array5Array8containsGiE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0FPC16buffer24buffer__growth__capacity(current, len, required) {
  if (required < len) {
    console.error("Buffer capacity overflow");
    $panic();
  }
  const start = current <= 0 ? 1 : current;
  let _tmp = start;
  while (true) {
    const space = _tmp;
    if (space >= required) {
      return space;
    }
    const next = Math.imul(space, 2) | 0;
    if (next <= space) {
      return required;
    }
    _tmp = next;
    continue;
  }
}
function _M0MPC16buffer6Buffer4grow(self, required) {
  const new_capacity = _M0FPC16buffer24buffer__growth__capacity(self.data.length, self.len, required);
  const new_data = _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(self.data, new_capacity, 0, self.len, 0, 0);
  self.data = new_data;
}
function _M0MPC16buffer6Buffer9to__bytes(self) {
  return _M0MPC15bytes5Bytes11from__array(_M0MPC15array10FixedArray21clamped__view_2einnerGyE(self.data, 0, self.len));
}
function _M0MPC16buffer6Buffer14Buffer_2einner(size_hint) {
  const initial = size_hint < 1 ? 1 : size_hint;
  const data = $makebytes(initial, 0);
  return new _M0TPC16buffer6Buffer(data, 0);
}
function _M0MPC16buffer6Buffer11write__byte(self, value) {
  if (self.len >= self.data.length) {
    _M0MPC16buffer6Buffer4grow(self, self.len + 1 | 0);
  }
  self.data[self.len] = value;
  self.len = self.len + 1 | 0;
}
function _M0MPC16buffer6Buffer5reset(self) {
  self.len = 0;
}
function _M0FPC28encoding4utf821utf8__find__malformed(src, src_offset, src_length) {
  const view = _M0MPC15bytes5Bytes21clamped__view_2einner(src, src_offset, src_offset + src_length | 0);
  let _tmp = view;
  while (true) {
    const bytes = _tmp;
    let malformed;
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            let rest$4;
            _L$5: {
              if ((bytes.end - bytes.start | 0) === 0) {
                return -1;
              } else {
                if ((bytes.end - bytes.start | 0) >= 8) {
                  const _x = bytes.buf[bytes.start];
                  if (_x <= 127) {
                    const _x$2 = bytes.buf[bytes.start + 1 | 0];
                    if (_x$2 <= 127) {
                      const _x$3 = bytes.buf[bytes.start + 2 | 0];
                      if (_x$3 <= 127) {
                        const _x$4 = bytes.buf[bytes.start + 3 | 0];
                        if (_x$4 <= 127) {
                          const _x$5 = bytes.buf[bytes.start + 4 | 0];
                          if (_x$5 <= 127) {
                            const _x$6 = bytes.buf[bytes.start + 5 | 0];
                            if (_x$6 <= 127) {
                              const _x$7 = bytes.buf[bytes.start + 6 | 0];
                              if (_x$7 <= 127) {
                                const _x$8 = bytes.buf[bytes.start + 7 | 0];
                                if (_x$8 <= 127) {
                                  const _x$9 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 8 | 0, bytes.end);
                                  _tmp = _x$9;
                                  continue;
                                } else {
                                  const _x$9 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                                  rest$4 = _x$9;
                                  break _L$5;
                                }
                              } else {
                                const _x$8 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                                rest$4 = _x$8;
                                break _L$5;
                              }
                            } else {
                              const _x$7 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                              rest$4 = _x$7;
                              break _L$5;
                            }
                          } else {
                            const _x$6 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                            rest$4 = _x$6;
                            break _L$5;
                          }
                        } else {
                          const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                          rest$4 = _x$5;
                          break _L$5;
                        }
                      } else {
                        const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                        rest$4 = _x$4;
                        break _L$5;
                      }
                    } else {
                      const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                      rest$4 = _x$3;
                      break _L$5;
                    }
                  } else {
                    if (_x >= 194 && _x <= 223) {
                      const _x$2 = bytes.buf[bytes.start + 1 | 0];
                      if (_x$2 >= 128 && _x$2 <= 191) {
                        const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 2 | 0, bytes.end);
                        rest$3 = _x$3;
                        break _L$4;
                      } else {
                        malformed = bytes;
                        break _L;
                      }
                    } else {
                      if (_x === 224) {
                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                        if (_x$2 >= 160 && _x$2 <= 191) {
                          const _x$3 = bytes.buf[bytes.start + 2 | 0];
                          if (_x$3 >= 128 && _x$3 <= 191) {
                            const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                            rest$2 = _x$4;
                            break _L$3;
                          } else {
                            malformed = bytes;
                            break _L;
                          }
                        } else {
                          malformed = bytes;
                          break _L;
                        }
                      } else {
                        if (_x >= 225 && _x <= 236) {
                          const _x$2 = bytes.buf[bytes.start + 1 | 0];
                          if (_x$2 >= 128 && _x$2 <= 191) {
                            const _x$3 = bytes.buf[bytes.start + 2 | 0];
                            if (_x$3 >= 128 && _x$3 <= 191) {
                              const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                              rest$2 = _x$4;
                              break _L$3;
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            malformed = bytes;
                            break _L;
                          }
                        } else {
                          if (_x === 237) {
                            const _x$2 = bytes.buf[bytes.start + 1 | 0];
                            if (_x$2 >= 128 && _x$2 <= 159) {
                              const _x$3 = bytes.buf[bytes.start + 2 | 0];
                              if (_x$3 >= 128 && _x$3 <= 191) {
                                const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                rest$2 = _x$4;
                                break _L$3;
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            if (_x >= 238 && _x <= 239) {
                              const _x$2 = bytes.buf[bytes.start + 1 | 0];
                              if (_x$2 >= 128 && _x$2 <= 191) {
                                const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                if (_x$3 >= 128 && _x$3 <= 191) {
                                  const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                  rest$2 = _x$4;
                                  break _L$3;
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              if (_x === 240) {
                                const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                if (_x$2 >= 144 && _x$2 <= 191) {
                                  const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                  if (_x$3 >= 128 && _x$3 <= 191) {
                                    const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                    if (_x$4 >= 128 && _x$4 <= 191) {
                                      const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                      rest = _x$5;
                                      break _L$2;
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                if (_x >= 241 && _x <= 243) {
                                  const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                  if (_x$2 >= 128 && _x$2 <= 191) {
                                    const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                    if (_x$3 >= 128 && _x$3 <= 191) {
                                      const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                      if (_x$4 >= 128 && _x$4 <= 191) {
                                        const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                        rest = _x$5;
                                        break _L$2;
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  if (_x === 244) {
                                    const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                    if (_x$2 >= 128 && _x$2 <= 143) {
                                      const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                      if (_x$3 >= 128 && _x$3 <= 191) {
                                        const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                        if (_x$4 >= 128 && _x$4 <= 191) {
                                          const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                          rest = _x$5;
                                          break _L$2;
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  const _x = bytes.buf[bytes.start];
                  if (_x >= 0 && _x <= 127) {
                    const _x$2 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                    rest$4 = _x$2;
                    break _L$5;
                  } else {
                    if ((bytes.end - bytes.start | 0) >= 2) {
                      if (_x >= 194 && _x <= 223) {
                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                        if (_x$2 >= 128 && _x$2 <= 191) {
                          const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 2 | 0, bytes.end);
                          rest$3 = _x$3;
                          break _L$4;
                        } else {
                          (bytes.end - bytes.start | 0) >= 3;
                          malformed = bytes;
                          break _L;
                        }
                      } else {
                        if ((bytes.end - bytes.start | 0) >= 3) {
                          if (_x === 224) {
                            const _x$2 = bytes.buf[bytes.start + 1 | 0];
                            if (_x$2 >= 160 && _x$2 <= 191) {
                              const _x$3 = bytes.buf[bytes.start + 2 | 0];
                              if (_x$3 >= 128 && _x$3 <= 191) {
                                const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                rest$2 = _x$4;
                                break _L$3;
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            if (_x >= 225 && _x <= 236) {
                              const _x$2 = bytes.buf[bytes.start + 1 | 0];
                              if (_x$2 >= 128 && _x$2 <= 191) {
                                const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                if (_x$3 >= 128 && _x$3 <= 191) {
                                  const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                  rest$2 = _x$4;
                                  break _L$3;
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              if (_x === 237) {
                                const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                if (_x$2 >= 128 && _x$2 <= 159) {
                                  const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                  if (_x$3 >= 128 && _x$3 <= 191) {
                                    const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                    rest$2 = _x$4;
                                    break _L$3;
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                if (_x >= 238 && _x <= 239) {
                                  const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                  if (_x$2 >= 128 && _x$2 <= 191) {
                                    const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                    if (_x$3 >= 128 && _x$3 <= 191) {
                                      const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                      rest$2 = _x$4;
                                      break _L$3;
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  if ((bytes.end - bytes.start | 0) >= 4) {
                                    if (_x === 240) {
                                      const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                      if (_x$2 >= 144 && _x$2 <= 191) {
                                        const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                        if (_x$3 >= 128 && _x$3 <= 191) {
                                          const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                          if (_x$4 >= 128 && _x$4 <= 191) {
                                            const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                            rest = _x$5;
                                            break _L$2;
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      if (_x >= 241 && _x <= 243) {
                                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                        if (_x$2 >= 128 && _x$2 <= 191) {
                                          const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                          if (_x$3 >= 128 && _x$3 <= 191) {
                                            const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                            if (_x$4 >= 128 && _x$4 <= 191) {
                                              const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                              rest = _x$5;
                                              break _L$2;
                                            } else {
                                              malformed = bytes;
                                              break _L;
                                            }
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        if (_x === 244) {
                                          const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                          if (_x$2 >= 128 && _x$2 <= 143) {
                                            const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                            if (_x$3 >= 128 && _x$3 <= 191) {
                                              const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                              if (_x$4 >= 128 && _x$4 <= 191) {
                                                const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                                rest = _x$5;
                                                break _L$2;
                                              } else {
                                                malformed = bytes;
                                                break _L;
                                              }
                                            } else {
                                              malformed = bytes;
                                              break _L;
                                            }
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      }
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          malformed = bytes;
                          break _L;
                        }
                      }
                    } else {
                      malformed = bytes;
                      break _L;
                    }
                  }
                }
              }
            }
            _tmp = rest$4;
            continue;
          }
          _tmp = rest$3;
          continue;
        }
        _tmp = rest$2;
        continue;
      }
      _tmp = rest;
      continue;
    }
    return malformed.start - src_offset | 0;
  }
}
function _M0FPC28encoding4utf825strict__malformed__suffix(bytes) {
  const input = bytes.buf;
  const src_offset = bytes.start;
  const src_length = bytes.end - bytes.start | 0;
  const malformed_offset = _M0FPC28encoding4utf821utf8__find__malformed(input, src_offset, src_length);
  return _M0MPC15bytes9BytesView21clamped__view_2einner(bytes, malformed_offset, undefined);
}
function _M0FPC28encoding4utf815drop__utf8__bom(bytes, ignore_bom) {
  _L: {
    if (ignore_bom) {
      _L$2: {
        if ((bytes.end - bytes.start | 0) >= 3) {
          const _x = bytes.buf[bytes.start];
          if (_x === 239) {
            const _x$2 = bytes.buf[bytes.start + 1 | 0];
            if (_x$2 === 187) {
              const _x$3 = bytes.buf[bytes.start + 2 | 0];
              if (_x$3 === 191) {
                return new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
          } else {
            break _L$2;
          }
        } else {
          break _L$2;
        }
      }
      break _L;
    } else {
      break _L;
    }
  }
  return bytes;
}
function _M0FPC28encoding4utf814decode_2einner(bytes, ignore_bom) {
  const result = _M0FPC28encoding4utf816decode__utf8__js(bytes.buf, bytes.start, bytes.end - bytes.start | 0, !ignore_bom);
  if (result.length === 1) {
    return new _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok(0 >>> 0 < result.length ? result[0] : $oob());
  } else {
    const bytes$2 = _M0FPC28encoding4utf815drop__utf8__bom(bytes, ignore_bom);
    return new _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err(new _M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed(_M0FPC28encoding4utf825strict__malformed__suffix(bytes$2)));
  }
}
function _M0FPC28encoding4utf821decode__lossy_2einner(bytes, ignore_bom) {
  return _M0FPC28encoding4utf823decode__utf8__lossy__js(bytes.buf, bytes.start, bytes.end - bytes.start | 0, !ignore_bom);
}
function _M0FPC28encoding7percent10hex__value(code_unit) {
  return code_unit >= 48 && code_unit <= 57 ? code_unit - 48 | 0 : code_unit >= 97 && code_unit <= 102 ? (code_unit - 97 | 0) + 10 | 0 : code_unit >= 65 && code_unit <= 70 ? (code_unit - 65 | 0) + 10 | 0 : -1;
}
function _M0FPC28encoding7percent12decode__impl(text, lossy) {
  const length = text.end - text.start | 0;
  const builder = _M0MPB13StringBuilder21StringBuilder_2einner(length);
  const bytes = _M0MPC16buffer6Buffer14Buffer_2einner(0);
  let i = 0;
  let literal_start = 0;
  while (true) {
    if (i < length) {
      if (text.str.charCodeAt(text.start + i | 0) !== 37) {
        i = i + 1 | 0;
        continue;
      }
      _M0IPB13StringBuilderPB6Logger11write__view(builder, _M0MPC16string10StringView12view_2einner(text, literal_start, i));
      _M0MPC16buffer6Buffer5reset(bytes);
      let resume_after_percent = false;
      while (true) {
        if (i < length && text.str.charCodeAt(text.start + i | 0) === 37) {
          if ((i + 2 | 0) < length) {
            const hi = _M0FPC28encoding7percent10hex__value(text.str.charCodeAt(text.start + (i + 1 | 0) | 0));
            const lo = _M0FPC28encoding7percent10hex__value(text.str.charCodeAt(text.start + (i + 2 | 0) | 0));
            if (hi >= 0 && lo >= 0) {
              _M0MPC16buffer6Buffer11write__byte(bytes, (hi << 4 | lo) & 255);
              i = i + 3 | 0;
              continue;
            }
          }
          if (lossy) {
            resume_after_percent = true;
            break;
          } else {
            return undefined;
          }
        } else {
          break;
        }
      }
      if (lossy) {
        const _bind = _M0MPC16buffer6Buffer9to__bytes(bytes);
        _M0IPB13StringBuilderPB6Logger13write__string(builder, _M0FPC28encoding4utf821decode__lossy_2einner(new _M0TPC15bytes9BytesView(_bind, 0, _bind.length), false));
      } else {
        let decoded;
        let _try_err;
        _L: {
          _L$2: {
            const _bind = _M0MPC16buffer6Buffer9to__bytes(bytes);
            const _bind$2 = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(_bind, 0, _bind.length), false);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              decoded = _ok._0;
            } else {
              const _err = _bind$2;
              _try_err = _err._0;
              break _L$2;
            }
            break _L;
          }
          return undefined;
        }
        _M0IPB13StringBuilderPB6Logger13write__string(builder, decoded);
      }
      if (resume_after_percent) {
        _M0IPB13StringBuilderPB6Logger11write__char(builder, 37);
        i = i + 1 | 0;
      }
      literal_start = i;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger11write__view(builder, _M0MPC16string10StringView12view_2einner(text, literal_start, length));
  return builder.val;
}
function _M0FPC28encoding7percent13decode__lossy(text) {
  const _p = _M0FPC28encoding7percent12decode__impl(text, true);
  if (_p === undefined) {
    return $panic();
  } else {
    const _p$2 = _p;
    return _p$2;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim3new() {
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim([], [], 2685821657736338717n);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim5reset(self) {
  _M0MPC15array5Array5clearGUiiEE(self.nodes);
  _M0MPC15array5Array5clearGUiiEE(self.links);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim9add__node(self, degree, radius) {
  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.nodes, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout7SimNode(0, 0, 0, 0, radius, degree, false));
  return self.nodes.length - 1 | 0;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim9add__link(self, a, b) {
  if (a >= 0 && (b >= 0 && (a !== b && (a < self.nodes.length && b < self.nodes.length)))) {
    _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.links, { _0: a, _1: b });
    return;
  } else {
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim8seed__at(self, i, x, y) {
  if (i >= 0 && i < self.nodes.length) {
    _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.nodes, i).x = x;
    _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.nodes, i).y = y;
    return;
  } else {
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim3pin(self, i, x, y) {
  if (i >= 0 && i < self.nodes.length) {
    const n = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.nodes, i);
    n.x = x;
    n.y = y;
    n.vx = 0;
    n.vy = 0;
    n.fixed = true;
    return;
  } else {
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim5unpin(self, i) {
  if (i >= 0 && i < self.nodes.length) {
    _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.nodes, i).fixed = false;
    return;
  } else {
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim8move__to(self, i, x, y) {
  if (i >= 0 && i < self.nodes.length) {
    const n = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.nodes, i);
    n.x = x;
    n.y = y;
    n.vx = 0;
    n.vy = 0;
    return;
  } else {
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Quad3new() {
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Quad(0, 0, 0, 0, 0, 0, 0, -1, -1);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree3new(nodes) {
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree([], 0, nodes);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree7acquire(self) {
  if (self.used < self.pool.length) {
    const i = self.used;
    self.used = self.used + 1 | 0;
    const q = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, i);
    q.mass = 0;
    q.cx = 0;
    q.cy = 0;
    q.body = -1;
    q.child = -1;
    return i;
  } else {
    const i = self.pool.length;
    _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Quad3new());
    self.used = i + 1 | 0;
    return i;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree5split(self, qi) {
  const q = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, qi);
  const mx = (q.x0 + q.x1) / 2;
  const my = (q.y0 + q.y1) / 2;
  const base = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree7acquire(self);
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree7acquire(self);
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree7acquire(self);
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree7acquire(self);
  q.child = base;
  const c0 = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, base);
  c0.x0 = q.x0;
  c0.y0 = q.y0;
  c0.x1 = mx;
  c0.y1 = my;
  const c1 = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, base + 1 | 0);
  c1.x0 = mx;
  c1.y0 = q.y0;
  c1.x1 = q.x1;
  c1.y1 = my;
  const c2 = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, base + 2 | 0);
  c2.x0 = q.x0;
  c2.y0 = my;
  c2.x1 = mx;
  c2.y1 = q.y1;
  const c3 = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, base + 3 | 0);
  c3.x0 = mx;
  c3.y0 = my;
  c3.x1 = q.x1;
  c3.y1 = q.y1;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree6insert(self, qi, body, depth) {
  const node = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.nodes, body);
  const q = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, qi);
  if (depth > 22) {
    const m = q.mass + 1;
    q.cx = (q.cx * q.mass + node.x) / m;
    q.cy = (q.cy * q.mass + node.y) / m;
    q.mass = m;
    q.body = -1;
    return undefined;
  }
  if (q.child < 0) {
    if (q.body < 0) {
      q.body = body;
      q.mass = 1;
      q.cx = node.x;
      q.cy = node.y;
      return undefined;
    }
    const old = q.body;
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree5split(self, qi);
    q.body = -1;
    q.mass = 0;
    q.cx = 0;
    q.cy = 0;
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree13insert__child(self, qi, old, depth + 1 | 0);
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree13insert__child(self, qi, body, depth + 1 | 0);
    return undefined;
  }
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree13insert__child(self, qi, body, depth + 1 | 0);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree13insert__child(self, qi, body, depth) {
  const q = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, qi);
  const node = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.nodes, body);
  const mx = (q.x0 + q.x1) / 2;
  const my = (q.y0 + q.y1) / 2;
  const idx = (node.x >= mx ? 1 : 0) + (node.y >= my ? 2 : 0) | 0;
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree6insert(self, q.child + idx | 0, body, depth);
  const m = q.mass + 1;
  q.cx = (q.cx * q.mass + node.x) / m;
  q.cy = (q.cy * q.mass + node.y) / m;
  q.mass = m;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree5build(self) {
  const nodes = self.nodes;
  const count = nodes.length;
  if (count === 0) {
    return -1;
  }
  self.used = 0;
  let min_x = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, 0).x;
  let min_y = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, 0).y;
  let max_x = min_x;
  let max_y = min_y;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < count) {
      const n = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, i);
      if (n.x < min_x) {
        min_x = n.x;
      }
      if (n.y < min_y) {
        min_y = n.y;
      }
      if (n.x > max_x) {
        max_x = n.x;
      }
      if (n.y > max_y) {
        max_y = n.y;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let size = max_x - min_x;
  const dy = max_y - min_y;
  if (dy > size) {
    size = dy;
  }
  if (size < 1) {
    size = 1;
  }
  size = size + 2;
  const root = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree7acquire(self);
  const q = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, root);
  q.x0 = min_x - 1;
  q.y0 = min_y - 1;
  q.x1 = min_x - 1 + size;
  q.y1 = min_y - 1 + size;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < count) {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree6insert(self, root, i, 0);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return root;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree7repulse(self, qi, target, charge, out) {
  if (qi < 0) {
    return undefined;
  }
  const q = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.pool, qi);
  if (q.mass === 0) {
    return undefined;
  }
  const n = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.nodes, target);
  const dx = q.cx - n.x;
  const dy = q.cy - n.y;
  let d2 = dx * dx + dy * dy;
  if (q.child < 0) {
    if (q.body < 0 || q.body === target) {
      return undefined;
    }
    if (d2 < 9) {
      d2 = 9;
    }
    const f = charge / d2;
    _M0MPC15array5Array3setGdE(out, 0, _M0MPC15array5Array2atGdE(out, 0) - dx * f);
    _M0MPC15array5Array3setGdE(out, 1, _M0MPC15array5Array2atGdE(out, 1) - dy * f);
    return undefined;
  }
  const w = q.x1 - q.x0;
  const denom = d2 === 0 ? 1 : d2;
  if (w * w / denom < 0.81) {
    if (d2 < 9) {
      d2 = 9;
    }
    const f = charge * q.mass / d2;
    _M0MPC15array5Array3setGdE(out, 0, _M0MPC15array5Array2atGdE(out, 0) - dx * f);
    _M0MPC15array5Array3setGdE(out, 1, _M0MPC15array5Array2atGdE(out, 1) - dy * f);
    return undefined;
  }
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 4) {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree7repulse(self, q.child + i | 0, target, charge, out);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim12next__random(self) {
  self.seed = BigInt.asUintN(64, BigInt.asUintN(64, self.seed * 6364136223846793005n) + 1442695040888963407n);
  const bits = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, self.seed) >> BigInt(11 & 63)))) | 0;
  return ((bits % 1000 | 0) + 0) / 1000;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout9cell__key(gx, gy) {
  const x = _M0MPC16double6Double7to__int(gx);
  const y = _M0MPC16double6Double7to__int(gy);
  return Math.imul(x, 73856093) ^ (Math.imul(y, 19349663) | 0);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim19resolve__collisions(self) {
  const nodes = self.nodes;
  const count = nodes.length;
  if (count < 2) {
    return undefined;
  }
  const _bind = [];
  const grid = _M0MPB3Map3MapGiRPB5ArrayGiEE(new _M0TPB9ArrayViewGUiRPB5ArrayGiEEE(_bind, 0, 0), undefined);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < count) {
      const n = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, i);
      const key = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout9cell__key(_M0MPC16double6Double5floor(n.x / 48), _M0MPC16double6Double5floor(n.y / 48));
      const _bind$2 = _M0MPB3Map3getGiRPB5ArrayGiEE(grid, key);
      if (_bind$2.$tag === 1) {
        const _Some = _bind$2;
        const _bucket = _Some._0;
        _M0MPC15array5Array4pushGiE(_bucket, i);
      } else {
        _M0MPB3Map3setGiRPB5ArrayGiEE(grid, key, [i]);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < count) {
      const a = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, i);
      const gx = _M0MPC16double6Double5floor(a.x / 48);
      const gy = _M0MPC16double6Double5floor(a.y / 48);
      let _tmp$3 = -1;
      while (true) {
        const ox = _tmp$3;
        if (ox <= 1) {
          let _tmp$4 = -1;
          while (true) {
            const oy = _tmp$4;
            if (oy <= 1) {
              const _bind$2 = _M0MPB3Map3getGiRPB5ArrayGiEE(grid, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout9cell__key(gx + (ox + 0), gy + (oy + 0)));
              if (_bind$2.$tag === 1) {
                const _Some = _bind$2;
                const _bucket = _Some._0;
                const _bind$3 = _bucket.length;
                let _tmp$5 = 0;
                while (true) {
                  const _ = _tmp$5;
                  if (_ < _bind$3) {
                    const j = _bucket[_];
                    _L: {
                      if (j <= i) {
                        break _L;
                      }
                      const b = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, j);
                      let dx = b.x - a.x;
                      let dy = b.y - a.y;
                      let dist = Math.sqrt(dx * dx + dy * dy);
                      const min_dist = a.radius + b.radius + 8;
                      if (dist >= min_dist) {
                        break _L;
                      }
                      if (dist < 0.001) {
                        dx = (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim12next__random(self) - 0.5) * 0.8;
                        dy = (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim12next__random(self) - 0.5) * 0.8;
                        dist = 0.6;
                      }
                      const push = (min_dist - dist) / dist * 0.5;
                      if (!a.fixed) {
                        a.x = a.x - dx * push;
                        a.y = a.y - dy * push;
                      }
                      if (!b.fixed) {
                        b.x = b.x + dx * push;
                        b.y = b.y + dy * push;
                      }
                      break _L;
                    }
                    _tmp$5 = _ + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
              }
              _tmp$4 = oy + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$3 = ox + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim4step(self, alpha, rest, repulsion) {
  const nodes = self.nodes;
  const count = nodes.length;
  if (count === 0) {
    return undefined;
  }
  const charge = 105 * repulsion;
  const _bind = self.links;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const link = _bind[_];
      const s = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, link._0);
      const t = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, link._1);
      let dx = t.x - s.x;
      let dy = t.y - s.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 0.01) {
        dx = (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim12next__random(self) - 0.5) * 0.6;
        dy = (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim12next__random(self) - 0.5) * 0.6;
        dist = 0.6;
      }
      const kk = (dist - rest) / dist * 0.045 * alpha;
      const fx = dx * kk;
      const fy = dy * kk;
      s.vx = s.vx + fx;
      s.vy = s.vy + fy;
      t.vx = t.vx - fx;
      t.vy = t.vy - fy;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const tree = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree3new(nodes);
  const root = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree5build(tree);
  if (root >= 0) {
    const out = [0, 0];
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < count) {
        _M0MPC15array5Array3setGdE(out, 0, 0);
        _M0MPC15array5Array3setGdE(out, 1, 0);
        _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout4Tree7repulse(tree, root, i, charge * alpha, out);
        const n = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, i);
        const _tmp$3 = n.vx;
        const _p = _M0MPC15array5Array2atGdE(out, 0);
        const _p$2 = -12;
        const _p$3 = 12;
        n.vx = _tmp$3 + (_p < _p$2 ? _p$2 : _p > _p$3 ? _p$3 : _p);
        const _tmp$4 = n.vy;
        const _p$4 = _M0MPC15array5Array2atGdE(out, 1);
        const _p$5 = -12;
        const _p$6 = 12;
        n.vy = _tmp$4 + (_p$4 < _p$5 ? _p$5 : _p$4 > _p$6 ? _p$6 : _p$4);
        n.vx = n.vx - n.x * 0.0013 * alpha;
        n.vy = n.vy - n.y * 0.0013 * alpha;
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < count) {
      _L: {
        const node = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, i);
        if (node.fixed) {
          node.vx = 0;
          node.vy = 0;
          break _L;
        }
        node.vx = node.vx * 0.58;
        node.vy = node.vy * 0.58;
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 12) {
          node.vx = node.vx / speed * 12;
          node.vy = node.vy / speed * 12;
        }
        node.x = node.x + node.vx;
        node.y = node.y + node.vy;
        break _L;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim19resolve__collisions(self);
}
function _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse8LinkKindPB2Eq5equal(_x_174, _x_175) {
  switch (_x_174) {
    case 0: {
      if (_x_175 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_175 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_175 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7RawLinkPB2Eq5equal(_x_168, _x_169) {
  return _x_168.target === _x_169.target && _x_168.raw === _x_169.raw && _x_168.title === _x_169.title && _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse8LinkKindPB2Eq5equal(_x_168.kind, _x_169.kind) && _x_168.line === _x_169.line;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse8LinkKind5label(self) {
  switch (self) {
    case 0: {
      return "wiki";
    }
    case 1: {
      return "md";
    }
    default: {
      return "embed";
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse9is__space(c) {
  return c === 32 || (c === 9 || (c === 11 || c === 12));
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__blank__char(c) {
  return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse9is__space(c) || c === 13;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__alpha__char(c) {
  return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse14is__cjk__punct(c) {
  return c >= 12288 && c <= 12351 || (c >= 65072 && c <= 65103 || c >= 65280 && c <= 65519);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse13is__tag__char(c) {
  if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__alpha__char(c) || (c >= 48 && c <= 57 || (c === 95 || (c === 45 || c === 47)))) {
    return true;
  }
  return c > 127 && !_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse14is__cjk__punct(c);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17is__tag__boundary(c) {
  return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__blank__char(c) || (c === 62 || (c === 124 || (c === 65292 || (c === 12290 || (c === 12289 || (c === 65307 || (c === 65306 || (c === 65281 || (c === 65311 || (c === 65289 || (c === 12305 || (c === 12299 || (c === 12301 || c === 12303)))))))))))));
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, start, end) {
  return end <= start ? "" : _M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(cs, start, end));
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, start, end) {
  let s = start;
  let e = end;
  while (true) {
    if (s < e && _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__blank__char(_M0MPC15array5Array2atGcE(cs, s))) {
      s = s + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (e > s && _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__blank__char(_M0MPC15array5Array2atGcE(cs, e - 1 | 0))) {
      e = e - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: s, _1: e };
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse12trim__string(raw) {
  const cs = _M0MPC16string6String9to__array(raw);
  const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, 0, cs.length);
  const _s = _bind._0;
  const _e = _bind._1;
  return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, _s, _e);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse13fence__marker(cs, start, end) {
  let i = start;
  while (true) {
    if (i < end && ((i - start | 0) < 3 && _M0MPC15array5Array2atGcE(cs, i) === 32)) {
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (i >= end) {
    return "";
  }
  const c = _M0MPC15array5Array2atGcE(cs, i);
  if (c !== 96 && c !== 126) {
    return "";
  }
  let j = i;
  while (true) {
    if (j < end && _M0MPC15array5Array2atGcE(cs, j) === c) {
      j = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if ((j - i | 0) < 3) {
    return "";
  }
  return _M0MPC16string6String4make(j - i | 0, c);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse19blank__inline__code(cs, start, end) {
  let i = start;
  while (true) {
    if (i < end) {
      if (_M0MPC15array5Array2atGcE(cs, i) === 96) {
        let j = i + 1 | 0;
        while (true) {
          if (j < end && _M0MPC15array5Array2atGcE(cs, j) !== 96) {
            j = j + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (j < end) {
          let _tmp = i;
          while (true) {
            const k = _tmp;
            if (k <= j) {
              _M0MPC15array5Array3setGcE(cs, k, 32);
              _tmp = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          i = j + 1 | 0;
          continue;
        }
        return;
      }
      i = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17is__html__comment(cs, start, end) {
  const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, start, end);
  const _s = _bind._0;
  const _e = _bind._1;
  if ((_e - _s | 0) < 7) {
    return false;
  }
  if (!(_M0MPC15array5Array2atGcE(cs, _s) === 60 && (_M0MPC15array5Array2atGcE(cs, _s + 1 | 0) === 33 && (_M0MPC15array5Array2atGcE(cs, _s + 2 | 0) === 45 && _M0MPC15array5Array2atGcE(cs, _s + 3 | 0) === 45)))) {
    return false;
  }
  const t = _e - 3 | 0;
  return _M0MPC15array5Array2atGcE(cs, t) === 45 && (_M0MPC15array5Array2atGcE(cs, t + 1 | 0) === 45 && _M0MPC15array5Array2atGcE(cs, t + 2 | 0) === 62);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse16is__blank__range(cs, start, end) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (!_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__blank__char(_M0MPC15array5Array2atGcE(cs, i))) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse12is__external(target) {
  if (_M0MPC16string6String11has__prefix(target, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse12is__externalN6recordS3043) || _M0MPC16string6String11has__prefix(target, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse12is__externalN6recordS3044)) {
    return true;
  }
  const cs = _M0MPC16string6String9to__array(target);
  const n = cs.length;
  if (n === 0 || !_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__alpha__char(_M0MPC15array5Array2atGcE(cs, 0))) {
    return false;
  }
  let i = 1;
  while (true) {
    if (i < n) {
      const c = _M0MPC15array5Array2atGcE(cs, i);
      if (c === 58) {
        return true;
      }
      if (!(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__alpha__char(c) || (c >= 48 && c <= 57 || (c === 43 || (c === 46 || c === 45))))) {
        return false;
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse14normalize__tag(raw) {
  const cs = _M0MPC16string6String9to__array(raw);
  const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, 0, cs.length);
  const _s0 = _bind._0;
  const _e0 = _bind._1;
  let s = _s0;
  let e = _e0;
  if (s < e && (_M0MPC15array5Array2atGcE(cs, s) === 34 || _M0MPC15array5Array2atGcE(cs, s) === 39)) {
    s = s + 1 | 0;
  }
  if (e > s && (_M0MPC15array5Array2atGcE(cs, e - 1 | 0) === 34 || _M0MPC15array5Array2atGcE(cs, e - 1 | 0) === 39)) {
    e = e - 1 | 0;
  }
  const _bind$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, s, e);
  const _s1 = _bind$2._0;
  const _e1 = _bind$2._1;
  let s2 = _s1;
  if (s2 < _e1 && _M0MPC15array5Array2atGcE(cs, s2) === 35) {
    s2 = s2 + 1 | 0;
  }
  const _bind$3 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, s2, _e1);
  const _s3 = _bind$3._0;
  const _e3 = _bind$3._1;
  const value = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, _s3, _e3);
  if (value === "") {
    return "";
  }
  let all_digits = true;
  const _bind$4 = _M0MPC16string6String9to__array(value);
  const _bind$5 = _bind$4.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$5) {
      const c = _bind$4[_];
      if (!(c >= 48 && c <= 57)) {
        all_digits = false;
        break;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (all_digits) {
    return "";
  }
  return value;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7TagSink3new() {
  const _bind = [];
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7TagSink(_M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind, 0, 0), undefined), []);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7TagSink3add(self, raw) {
  const value = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse14normalize__tag(raw);
  if (value === "") {
    return undefined;
  }
  if (_M0MPB3Map8containsGsuE(self.seen, value)) {
    return undefined;
  }
  _M0MPB3Map3setGsuE(self.seen, value, undefined);
  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.order, value);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17parse__md__target(cs, start, end) {
  const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, start, end);
  const _s = _bind._0;
  const _e = _bind._1;
  let i = _s;
  if (i < _e && _M0MPC15array5Array2atGcE(cs, i) === 60) {
    i = i + 1 | 0;
  }
  let j = i;
  while (true) {
    if (j < _e && (!_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__blank__char(_M0MPC15array5Array2atGcE(cs, j)) && (_M0MPC15array5Array2atGcE(cs, j) !== 62 && _M0MPC15array5Array2atGcE(cs, j) !== 41))) {
      j = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (j <= i) {
    return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17parse__md__targetN6constrS3076;
  }
  let cut = j;
  let _tmp = i;
  while (true) {
    const k = _tmp;
    if (k < j) {
      if (_M0MPC15array5Array2atGcE(cs, k) === 35 || _M0MPC15array5Array2atGcE(cs, k) === 63) {
        cut = k;
        break;
      }
      _tmp = k + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, i, cut);
  const _ts = _bind$2._0;
  const _te = _bind$2._1;
  const target = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, _ts, _te);
  if (target === ".") {
    return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17parse__md__targetN6constrS3077;
  }
  return target;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse19parse__wiki__target(inner) {
  const cs = _M0MPC16string6String9to__array(inner);
  const n = cs.length;
  let pipe = -1;
  let hash = -1;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      if (_M0MPC15array5Array2atGcE(cs, i) === 124 && pipe < 0) {
        pipe = i;
      } else {
        if (_M0MPC15array5Array2atGcE(cs, i) === 35 && hash < 0) {
          hash = i;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const target_end = pipe >= 0 ? pipe : n;
  const raw_target = hash >= 0 && hash < target_end ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, 0, hash) : _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, 0, target_end);
  const target = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse12trim__string(raw_target);
  if (target === "") {
    return undefined;
  }
  const title = pipe >= 0 ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse12trim__string(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, pipe + 1 | 0, n)) : "";
  return { _0: target, _1: title };
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17scan__line__links(cs, start, end, line_no, out) {
  let i = start;
  while (true) {
    if (i < (end - 1 | 0)) {
      if (_M0MPC15array5Array2atGcE(cs, i) === 91 && _M0MPC15array5Array2atGcE(cs, i + 1 | 0) === 91) {
        let j = i + 2 | 0;
        while (true) {
          if (j < end && (_M0MPC15array5Array2atGcE(cs, j) !== 91 && _M0MPC15array5Array2atGcE(cs, j) !== 93)) {
            j = j + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if ((j + 1 | 0) < end && (_M0MPC15array5Array2atGcE(cs, j) === 93 && _M0MPC15array5Array2atGcE(cs, j + 1 | 0) === 93)) {
          const embed = i > start && _M0MPC15array5Array2atGcE(cs, i - 1 | 0) === 33;
          const raw_start = embed ? i - 1 | 0 : i;
          const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse19parse__wiki__target(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, i + 2 | 0, j));
          if (_bind === undefined) {
          } else {
            const _Some = _bind;
            const _x = _Some;
            const _target = _x._0;
            const _title = _x._1;
            _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7RawLink(_target, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, raw_start, j + 2 | 0), _title, embed ? 2 : 0, line_no));
          }
          i = j + 2 | 0;
          continue;
        }
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let k = start;
  while (true) {
    if (k < (end - 1 | 0)) {
      if (_M0MPC15array5Array2atGcE(cs, k) === 91) {
        let j = k + 1 | 0;
        while (true) {
          if (j < end && _M0MPC15array5Array2atGcE(cs, j) !== 93) {
            j = j + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if ((j + 1 | 0) < end && (_M0MPC15array5Array2atGcE(cs, j) === 93 && _M0MPC15array5Array2atGcE(cs, j + 1 | 0) === 40)) {
          let m = j + 2 | 0;
          while (true) {
            if (m < end && _M0MPC15array5Array2atGcE(cs, m) !== 41) {
              m = m + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (m < end) {
            const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17parse__md__target(cs, j + 2 | 0, m);
            if (_bind === undefined) {
            } else {
              const _Some = _bind;
              const _target = _Some;
              let _tmp;
              const _p = "";
              if (!(_target === _p)) {
                _tmp = !_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse12is__external(_target);
              } else {
                _tmp = false;
              }
              if (_tmp) {
                const embed = k > start && _M0MPC15array5Array2atGcE(cs, k - 1 | 0) === 33;
                const raw_start = embed ? k - 1 | 0 : k;
                _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7RawLink(_target, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, raw_start, m + 1 | 0), "", embed ? 2 : 1, line_no));
              }
            }
            k = m + 1 | 0;
            continue;
          }
        }
      }
      k = k + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse16scan__line__tags(cs, start, end, sink) {
  let i = start;
  while (true) {
    if (i < end) {
      if (_M0MPC15array5Array2atGcE(cs, i) === 35 && (i === start || _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17is__tag__boundary(_M0MPC15array5Array2atGcE(cs, i - 1 | 0)))) {
        let j = i + 1 | 0;
        while (true) {
          if (j < end && _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse13is__tag__char(_M0MPC15array5Array2atGcE(cs, j))) {
            j = j + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (j > (i + 1 | 0)) {
          _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7TagSink3add(sink, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, i + 1 | 0, j));
        }
        i = j;
        continue;
      }
      i = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse23match__frontmatter__key(cs, s, e) {
  const names = ["tags", "tag", "keywords"];
  const _bind = names.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const name = names[_];
      const nc = _M0MPC16string6String9to__array(name);
      const len = nc.length;
      if ((s + len | 0) <= e) {
        let ok = true;
        let _tmp$2 = 0;
        while (true) {
          const i = _tmp$2;
          if (i < len) {
            if (_M0MPC14char4Char20to__ascii__lowercase(_M0MPC15array5Array2atGcE(cs, s + i | 0)) !== _M0MPC15array5Array2atGcE(nc, i)) {
              ok = false;
              break;
            }
            _tmp$2 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (ok) {
          let p = s + len | 0;
          while (true) {
            if (p < e && _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse9is__space(_M0MPC15array5Array2atGcE(cs, p))) {
              p = p + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (p < e && _M0MPC15array5Array2atGcE(cs, p) === 58) {
            return p + 1 | 0;
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17scan__frontmatter(cs, spans, from, to, sink) {
  let in_list = false;
  let _tmp = from;
  while (true) {
    const idx = _tmp;
    if (idx < to) {
      _L: {
        const _bind = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(spans, idx);
        const _ls = _bind._0;
        const _le = _bind._1;
        const _bind$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, _ls, _le);
        const _s = _bind$2._0;
        const _e = _bind$2._1;
        const _bind$3 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse23match__frontmatter__key(cs, _s, _e);
        if (_bind$3 === undefined) {
        } else {
          const _Some = _bind$3;
          const _value_start = _Some;
          const _bind$4 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, _value_start, _e);
          const _vs = _bind$4._0;
          const _ve = _bind$4._1;
          const value = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, _vs, _ve);
          in_list = value === "";
          if (value === "") {
            break _L;
          }
          let body;
          if (_M0MPC16string6String11has__prefix(value, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17scan__frontmatterN6recordS3155)) {
            const inner = _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(value, 1, undefined));
            body = _M0MPC16string6String11has__suffix(inner, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17scan__frontmatterN6recordS3156) ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(inner, 0, inner.length - 1 | 0)) : inner;
          } else {
            body = value;
          }
          const _it = _M0MPC16string6String5split(body, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17scan__frontmatterN6recordS3157);
          while (true) {
            const _bind$5 = _M0MPB4Iter4nextGUsiEE(_it);
            if (_bind$5 === undefined) {
              break;
            } else {
              const _Some$2 = _bind$5;
              const _part = _Some$2;
              _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7TagSink3add(sink, _M0MPC16string10StringView9to__owned(_part));
              continue;
            }
          }
          break _L;
        }
        if (in_list) {
          if (_s < _e && (_M0MPC15array5Array2atGcE(cs, _s) === 45 && ((_s + 1 | 0) < _e && _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15is__blank__char(_M0MPC15array5Array2atGcE(cs, _s + 1 | 0))))) {
            const _bind$4 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, _s + 1 | 0, _e);
            const _item_s = _bind$4._0;
            const _item_e = _bind$4._1;
            _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7TagSink3add(sink, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17slice__to__string(cs, _item_s, _item_e));
            break _L;
          }
          if (_s >= _e) {
            break _L;
          }
          in_list = false;
        }
        break _L;
      }
      _tmp = idx + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15parse__markdown(text) {
  const cs = _M0MPC16string6String9to__array(text);
  const total = cs.length;
  let offset = 0;
  if (total > 0 && _M0MPC15array5Array2atGcE(cs, 0) === 65279) {
    offset = 1;
  }
  const spans = [];
  let line_start = offset;
  let i = offset;
  while (true) {
    if (i < total) {
      const c = _M0MPC15array5Array2atGcE(cs, i);
      if (c === 10) {
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(spans, { _0: line_start, _1: i });
        line_start = i + 1 | 0;
      } else {
        if (c === 13) {
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(spans, { _0: line_start, _1: i });
          if ((i + 1 | 0) < total && _M0MPC15array5Array2atGcE(cs, i + 1 | 0) === 10) {
            i = i + 1 | 0;
          }
          line_start = i + 1 | 0;
        }
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (line_start <= total) {
    _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(spans, { _0: line_start, _1: total });
  }
  const sink = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7TagSink3new();
  const links = [];
  const line_count = spans.length;
  let start = 0;
  if (line_count > 0) {
    const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(spans, 0)._0, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(spans, 0)._1);
    const _fs = _bind._0;
    const _fe = _bind._1;
    if ((_fe - _fs | 0) === 3 && (_M0MPC15array5Array2atGcE(cs, _fs) === 45 && (_M0MPC15array5Array2atGcE(cs, _fs + 1 | 0) === 45 && _M0MPC15array5Array2atGcE(cs, _fs + 2 | 0) === 45))) {
      const limit = line_count < 400 ? line_count : 400;
      let end = -1;
      let _tmp = 1;
      while (true) {
        const k = _tmp;
        if (k < limit) {
          const _bind$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse11trim__range(cs, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(spans, k)._0, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(spans, k)._1);
          const _s = _bind$2._0;
          const _e = _bind$2._1;
          if ((_e - _s | 0) === 3) {
            const first = _M0MPC15array5Array2atGcE(cs, _s);
            const ok = first === 45 && (_M0MPC15array5Array2atGcE(cs, _s + 1 | 0) === 45 && _M0MPC15array5Array2atGcE(cs, _s + 2 | 0) === 45) || first === 46 && (_M0MPC15array5Array2atGcE(cs, _s + 1 | 0) === 46 && _M0MPC15array5Array2atGcE(cs, _s + 2 | 0) === 46);
            if (ok) {
              end = k;
              break;
            }
          }
          _tmp = k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (end > 0) {
        _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17scan__frontmatter(cs, spans, 1, end, sink);
        start = end + 1 | 0;
      }
    }
  }
  let fence = "";
  let _tmp = start;
  while (true) {
    const idx = _tmp;
    if (idx < line_count) {
      _L: {
        const _bind = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(spans, idx);
        const _ls = _bind._0;
        const _le = _bind._1;
        const marker = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse13fence__marker(cs, _ls, _le);
        const _p = fence;
        const _p$2 = "";
        if (!(_p === _p$2)) {
          let _tmp$2;
          const _p$3 = "";
          if (!(marker === _p$3)) {
            _tmp$2 = _M0MPC16string6String20char__length_2einner(marker, 0, undefined) >= _M0MPC16string6String20char__length_2einner(fence, 0, undefined) && _M0MPC15array5Array2atGcE(_M0MPC16string6String9to__array(marker), 0) === _M0MPC15array5Array2atGcE(_M0MPC16string6String9to__array(fence), 0);
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            fence = "";
          }
          break _L;
        }
        const _p$3 = "";
        if (!(marker === _p$3)) {
          fence = marker;
          break _L;
        }
        _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse19blank__inline__code(cs, _ls, _le);
        if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse16is__blank__range(cs, _ls, _le)) {
          break _L;
        }
        if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17is__html__comment(cs, _ls, _le)) {
          break _L;
        }
        _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse17scan__line__links(cs, _ls, _le, idx + 1 | 0, links);
        _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse16scan__line__tags(cs, _ls, _le, sink);
        break _L;
      }
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse9ParsedDoc(links, sink.order);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7dirname(p) {
  const _bind = _M0MPC16string6String9rev__find(p, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7dirnameN6recordS3223);
  if (_bind === undefined) {
    return "";
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(p, 0, _i));
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path8basename(p) {
  const _bind = _M0MPC16string6String9rev__find(p, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path8basenameN6recordS3228);
  if (_bind === undefined) {
    return p;
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(p, _i + 1 | 0, undefined));
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7extname(p) {
  const base = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path8basename(p);
  const _bind = _M0MPC16string6String9rev__find(base, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7extnameN6recordS3233);
  if (_bind === undefined) {
    return "";
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _i <= 0 ? "" : _M0MPC16string6String9to__lower(_M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(base, _i, undefined)));
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path10strip__ext(p) {
  const base = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path8basename(p);
  const _bind = _M0MPC16string6String9rev__find(base, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path10strip__extN6recordS3239);
  if (_bind === undefined) {
    return p;
  } else {
    const _Some = _bind;
    const _i = _Some;
    if (_i <= 0) {
      return p;
    } else {
      const cut = p.length - (base.length - _i | 0) | 0;
      return _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(p, 0, cut));
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path9normalize(p) {
  const parts = [];
  const _it = _M0MPC16string6String5split(p, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path9normalizeN6recordS3246);
  while (true) {
    const _bind = _M0MPB4Iter4nextGUsiEE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _seg = _Some;
      const s = _M0MPC16string10StringView9to__owned(_seg);
      if (s === "" || s === ".") {
        continue;
      }
      if (s === "..") {
        if (parts.length > 0) {
          _M0MPC15array5Array3popGsE(parts);
        }
        continue;
      }
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(parts, s);
      continue;
    }
  }
  return _M0MPC15array5Array4joinGsE(parts, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path9normalizeN6recordS3247);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path5depth(p) {
  let n = 0;
  const _it = _M0MPC16string6String5split(p, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path5depthN6recordS3256);
  while (true) {
    const _bind = _M0MPB4Iter4nextGUsiEE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _seg = _Some;
      if (_M0MPC16string10StringView12char__length(_seg) > 0) {
        n = n + 1 | 0;
      }
      continue;
    }
  }
  return n;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path11decode__uri(raw) {
  const s = _M0MPC16string6String12replace__all(raw, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path11decode__uriN6recordS3264, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path11decode__uriN6recordS3265);
  return _M0FPC28encoding7percent13decode__lossy(new _M0TPC16string10StringView(s, 0, s.length));
}
function _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault8FileKindPB2Eq5equal(_x_191, _x_192) {
  if (_x_191 === 0) {
    if (_x_192 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_192 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault3new() {
  const _bind = [];
  const _tmp = _M0MPB3Map3MapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(new _M0TPB9ArrayViewGUsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryEE(_bind, 0, 0), undefined);
  const _tmp$2 = [];
  const _bind$2 = [];
  const _tmp$3 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const _tmp$4 = _M0MPB3Map3MapGsRPB5ArrayGsEE(new _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(_bind$3, 0, 0), undefined);
  const _bind$4 = [];
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault(_tmp, _tmp$2, _tmp$3, _tmp$4, _M0MPB3Map3MapGsRPB3MapGssEE(new _M0TPB9ArrayViewGUsRPB3MapGssEEE(_bind$4, 0, 0), undefined), [0, 0, 0, 0, 0], 0);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault4bump(self, slot) {
  if (slot >= 0 && slot < self.change_seq.length) {
    _M0MPC15array5Array3setGiE(self.change_seq, slot, _M0MPC15array5Array2atGiE(self.change_seq, slot) + 1 | 0);
  }
  self.revision = self.revision + 1 | 0;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault9bump__all(self) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.change_seq.length) {
      _M0MPC15array5Array3setGiE(self.change_seq, i, _M0MPC15array5Array2atGiE(self.change_seq, i) + 1 | 0);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.revision = self.revision + 1 | 0;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault16change__snapshot(self) {
  return _M0MPC15array5Array4copyGiE(self.change_seq);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault13same__strings(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < a.length) {
      const _p = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(a, i);
      const _p$2 = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(b, i);
      if (!(_p === _p$2)) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11same__links(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < a.length) {
      if (_M0IP016_24default__implPB2Eq10not__equalGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse7RawLinkE(_M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(a, i), _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(b, i))) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5clear(self) {
  _M0MPB3Map5clearGssE(self.files);
  _M0MPC15array5Array5clearGUiiEE(self.order);
  _M0MPB3Map5clearGssE(self.byPath);
  _M0MPB3Map5clearGsRPB5ArrayGsEE(self.byName);
  _M0MPB3Map5clearGssE(self.cache);
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault9bump__all(self);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5notes(self) {
  const out = [];
  const _bind = self.order;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const rel = _bind[_];
      const _bind$3 = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel);
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault8FileKindPB2Eq5equal(_entry.kind, 0)) {
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, _entry);
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array8sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(out, (a, b) => _M0IPC16string6StringPB7Compare7compare(a.rel, b.rel));
  return out;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault16strip__note__ext(rel) {
  const lower = _M0MPC16string6String9to__lower(rel);
  return _M0MPC16string6String11has__suffix(lower, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault16strip__note__extN6recordS3302) ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(rel, 0, rel.length - 9 | 0)) : _M0MPC16string6String11has__suffix(lower, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault16strip__note__extN6recordS3303) ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(rel, 0, rel.length - 3 | 0)) : rel;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault10candidates(self, raw_target) {
  const view = _M0MPC16string6String4trim(raw_target, undefined);
  if (_M0IPC16string10StringViewPB2Eq5equal(view, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault10candidatesN6recordS3306)) {
    return [];
  }
  const lower = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView9to__lower(view));
  if (_M0MPC16string6String8contains(lower, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault10candidatesN6recordS3307) || _M0MPC16string6String11has__prefix(lower, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault10candidatesN6recordS3308)) {
    return [];
  }
  const name = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path8basename(lower);
  const trimmed = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault16strip__note__ext(name);
  const _bind = _M0MPB3Map3getGsRPB5ArrayGsEE(self.byName, trimmed);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _list = _Some._0;
    return _M0MPC15array5Array4copyGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6OutRowE(_list);
  } else {
    const _bind$2 = _M0MPB3Map3getGsRPB5ArrayGsEE(self.byName, name);
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _list = _Some._0;
      return _M0MPC15array5Array4copyGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6OutRowE(_list);
    } else {
      return [];
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12index__entry(self, entry) {
  const lower = _M0MPC16string6String9to__lower(entry.rel);
  _M0MPB3Map3setGssE(self.byPath, lower, entry.rel);
  if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault8FileKindPB2Eq5equal(entry.kind, 0)) {
    _M0MPB3Map3setGssE(self.byPath, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault16strip__note__ext(lower), entry.rel);
  }
  const _bind = _M0MPB3Map3getGsRPB5ArrayGsEE(self.byName, entry.nameKey);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _list = _Some._0;
    if (!_M0MPC15array5Array8containsGsE(_list, entry.rel)) {
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_list, entry.rel);
      return;
    } else {
      return;
    }
  } else {
    _M0MPB3Map3setGsRPB5ArrayGsEE(self.byName, entry.nameKey, [entry.rel]);
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault14unindex__entry(self, entry) {
  const lower = _M0MPC16string6String9to__lower(entry.rel);
  if (_M0IPC16option6OptionPB2Eq5equalGsE(_M0MPB3Map3getGssE(self.byPath, lower), entry.rel)) {
    _M0MPB3Map6removeGssE(self.byPath, lower);
  }
  const no_ext = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault16strip__note__ext(lower);
  if (_M0IPC16option6OptionPB2Eq5equalGsE(_M0MPB3Map3getGssE(self.byPath, no_ext), entry.rel)) {
    _M0MPB3Map6removeGssE(self.byPath, no_ext);
  }
  const _bind = _M0MPB3Map3getGsRPB5ArrayGsEE(self.byName, entry.nameKey);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _list = _Some._0;
    const next = [];
    const _bind$2 = _list.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const item = _list[_];
        const _p = entry.rel;
        if (!(item === _p)) {
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(next, item);
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (next.length === 0) {
      _M0MPB3Map6removeGsRPB5ArrayGsEE(self.byName, entry.nameKey);
      return;
    } else {
      _M0MPB3Map3setGsRPB5ArrayGsEE(self.byName, entry.nameKey, next);
      return;
    }
  } else {
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault14drop__previous(self, rel) {
  const _bind = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel);
  if (_bind === undefined) {
    return;
  } else {
    const _Some = _bind;
    const _prev = _Some;
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault14unindex__entry(self, _prev);
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12upsert__note(self, rel, size, mtime, text) {
  const base = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path10strip__ext(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path8basename(rel));
  const ext = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7extname(rel);
  const parsed = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15parse__markdown(text);
  const previous = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel);
  let link_changed = true;
  let tag_changed = true;
  let name_changed = true;
  if (previous === undefined) {
  } else {
    const _Some = previous;
    const _old = _Some;
    link_changed = !_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11same__links(_old.links, parsed.links);
    tag_changed = !_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault13same__strings(_old.tags, parsed.tags);
    const _p = _old.base;
    name_changed = !(_p === base);
  }
  const entry = new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntry(rel, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7dirname(rel), base, ext, _M0MPC16string6String9to__lower(base), 0, parsed.tags, parsed.links, size, mtime);
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault14drop__previous(self, rel);
  _M0MPB3Map5clearGssE(self.cache);
  _M0MPB3Map3setGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel, entry);
  if (!_M0MPC15array5Array8containsGsE(self.order, rel)) {
    _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.order, rel);
  }
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12index__entry(self, entry);
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault4bump(self, 0);
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault4bump(self, 4);
  if (link_changed) {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault4bump(self, 1);
  }
  if (tag_changed) {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault4bump(self, 2);
  }
  if (name_changed) {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault4bump(self, 3);
    return;
  } else {
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault18upsert__attachment(self, rel, size, mtime) {
  const base = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path10strip__ext(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path8basename(rel));
  const ext = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7extname(rel);
  const previous = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel);
  let name_changed = true;
  if (previous === undefined) {
  } else {
    const _Some = previous;
    const _old = _Some;
    const _p = _old.base;
    name_changed = !(_p === base);
  }
  const entry = new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntry(rel, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7dirname(rel), base, ext, _M0MPC16string6String9to__lower(`${base}${ext}`), 1, [], [], size, mtime);
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault14drop__previous(self, rel);
  _M0MPB3Map5clearGssE(self.cache);
  _M0MPB3Map3setGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel, entry);
  if (!_M0MPC15array5Array8containsGsE(self.order, rel)) {
    _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.order, rel);
  }
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12index__entry(self, entry);
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault4bump(self, 4);
  if (name_changed) {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault4bump(self, 3);
    return;
  } else {
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault6remove(self, rel) {
  const _bind = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel);
  if (_bind === undefined) {
    return;
  } else {
    const _Some = _bind;
    const _entry = _Some;
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault14unindex__entry(self, _entry);
    _M0MPB3Map5clearGssE(self.cache);
    _M0MPB3Map6removeGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel);
    const next = [];
    const _bind$2 = self.order;
    const _bind$3 = _bind$2.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$3) {
        const item = _bind$2[_];
        if (!(item === rel)) {
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(next, item);
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC15array5Array5clearGUiiEE(self.order);
    const _bind$4 = next.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const item = next[_];
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.order, item);
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault9bump__all(self);
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5total(self) {
  const _p = self.files;
  return _p.size;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault11note__count(self) {
  let n = 0;
  const _bind = self.order;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const rel = _bind[_];
      const _bind$3 = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel);
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _e = _Some;
        if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault8FileKindPB2Eq5equal(_e.kind, 0)) {
          n = n + 1 | 0;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return n;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncached(self, dir, target_raw) {
  const decoded = _M0MPC16string6String8contains(target_raw, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3396) || _M0MPC16string6String8contains(target_raw, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3397) ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path11decode__uri(target_raw) : target_raw;
  let target = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(decoded, undefined));
  if (_M0MPC16string6String11has__prefix(target, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3398)) {
    target = _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(target, 1, undefined));
  }
  if (_M0MPC16string6String11has__suffix(target, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3399)) {
    target = _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(target, 0, target.length - 1 | 0));
  }
  let t = target;
  while (true) {
    if (_M0MPC16string6String11has__prefix(t, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3400)) {
      t = _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(t, 1, undefined));
      continue;
    } else {
      break;
    }
  }
  if (t === "") {
    return undefined;
  }
  const lower = _M0MPC16string6String9to__lower(t);
  if (_M0MPC16string6String11has__prefix(lower, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3401) || _M0MPC16string6String11has__prefix(lower, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncachedN6recordS3402)) {
    const _bind = _M0MPB3Map3getGssE(self.byPath, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path9normalize(`${dir}/${lower}`));
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _rel = _Some;
      return _rel;
    }
  } else {
    const _bind = _M0MPB3Map3getGssE(self.byPath, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path9normalize(`${dir}/${lower}`));
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _rel = _Some;
      return _rel;
    }
    const _bind$2 = _M0MPB3Map3getGssE(self.byPath, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path9normalize(lower));
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _rel = _Some;
      return _rel;
    }
  }
  const name = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path8basename(lower);
  const trimmed_name = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault16strip__note__ext(name);
  const _bind = _M0MPB3Map3getGsRPB5ArrayGsEE(self.byName, trimmed_name);
  let list;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _l = _Some._0;
    list = new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(_l);
  } else {
    list = _M0MPB3Map3getGsRPB5ArrayGsEE(self.byName, name);
  }
  if (list.$tag === 1) {
    const _Some = list;
    const _items = _Some._0;
    if (_items.length === 0) {
      return undefined;
    } else {
      if (_items.length === 1) {
        return _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_items, 0);
      } else {
        let same_dir = "";
        const _bind$2 = _items.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$2) {
            const item = _items[_];
            if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7dirname(item) === dir) {
              same_dir = item;
              break;
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _p = same_dir;
        const _p$2 = "";
        if (!(_p === _p$2)) {
          return same_dir;
        } else {
          const sorted = _M0MPC15array5Array4copyGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6OutRowE(_items);
          _M0MPC15array5Array8sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(sorted, (a, b) => {
            const da = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path5depth(a);
            const db = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path5depth(b);
            return da !== db ? da - db | 0 : _M0IPC16string6StringPB7Compare7compare(a, b);
          });
          return _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(sorted, 0);
        }
      }
    }
  } else {
    return undefined;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault16resolve__in__dir(self, dir, raw_target) {
  const view = _M0MPC16string6String4trim(raw_target, undefined);
  if (_M0MPC16string10StringView12char__length(view) === 0) {
    return undefined;
  }
  const target = _M0MPC16string10StringView17equal__to__string(view, raw_target) ? raw_target : _M0MPC16string10StringView9to__owned(view);
  const _bind = _M0MPB3Map3getGsRPB3MapGssEE(self.cache, dir);
  let bucket;
  if (_bind === undefined) {
    const _bind$2 = [];
    const m = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$2, 0, 0), undefined);
    _M0MPB3Map3setGsRPB3MapGssEE(self.cache, dir, m);
    bucket = m;
  } else {
    const _Some = _bind;
    bucket = _Some;
  }
  const _bind$2 = _M0MPB3Map3getGssE(bucket, target);
  if (_bind$2 === undefined) {
  } else {
    const _Some = _bind$2;
    const _hit = _Some;
    return _hit === "" ? undefined : _hit;
  }
  const result = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault17resolve__uncached(self, dir, target);
  let _tmp;
  if (result === undefined) {
    _tmp = "";
  } else {
    const _Some = result;
    _tmp = _Some;
  }
  _M0MPB3Map3setGssE(bucket, target, _tmp);
  return result;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault7resolve(self, from_rel, raw_target) {
  return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault16resolve__in__dir(self, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path7dirname(from_rel), raw_target);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault7folders(self) {
  const _bind = [];
  const counts = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind, 0, 0), undefined);
  const _bind$2 = self.order;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const rel = _bind$2[_];
      const _bind$4 = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel);
      if (_bind$4 === undefined) {
      } else {
        const _Some = _bind$4;
        const _entry = _Some;
        let _tmp$2;
        if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault8FileKindPB2Eq5equal(_entry.kind, 0)) {
          const _p = _entry.dir;
          const _p$2 = "";
          _tmp$2 = !(_p === _p$2);
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const parts = _M0MPC16string6String5split(_entry.dir, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault7foldersN6recordS3456);
          let acc = "";
          while (true) {
            const _bind$5 = _M0MPB4Iter4nextGUsiEE(parts);
            if (_bind$5 === undefined) {
              break;
            } else {
              const _Some$2 = _bind$5;
              const _part = _Some$2;
              const seg = _M0MPC16string10StringView9to__owned(_part);
              acc = acc === "" ? seg : `${acc}/${seg}`;
              _M0MPB3Map3setGsiE(counts, acc, _M0MPB3Map16get__or__defaultGsiE(counts, acc, 0) + 1 | 0);
              continue;
            }
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const out = [];
  const _it = _M0MPB3Map4iterGsiE(counts);
  while (true) {
    const _bind$4 = _M0MPB4Iter4nextGUsiEE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _pair = _Some;
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStat(_pair._0, _pair._1));
      continue;
    }
  }
  _M0MPC15array5Array8sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(out, (a, b) => _M0IPC16string6StringPB7Compare7compare(a.path, b.path));
  return out;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10hex__digit(v) {
  const _p = _M0MPC16string6String9get__char("0123456789abcdef", v);
  return _p === -1 ? $panic() : _p;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, s) {
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 34);
  const _bind = s.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = s.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = s.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$2;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      if (_decoded_char === 34) {
        _M0IPB13StringBuilderPB6Logger13write__string(sb, "\\\"");
      } else {
        if (_decoded_char === 92) {
          _M0IPB13StringBuilderPB6Logger13write__string(sb, "\\\\");
        } else {
          if (_decoded_char === 10) {
            _M0IPB13StringBuilderPB6Logger13write__string(sb, "\\n");
          } else {
            if (_decoded_char === 13) {
              _M0IPB13StringBuilderPB6Logger13write__string(sb, "\\r");
            } else {
              if (_decoded_char === 9) {
                _M0IPB13StringBuilderPB6Logger13write__string(sb, "\\t");
              } else {
                if (_decoded_char < 32) {
                  _M0IPB13StringBuilderPB6Logger13write__string(sb, "\\u00");
                  const code = _decoded_char;
                  _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10hex__digit(code >> 4 & 15));
                  _M0IPB13StringBuilderPB6Logger11write__char(sb, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10hex__digit(code & 15));
                } else {
                  _M0IPB13StringBuilderPB6Logger11write__char(sb, _decoded_char);
                }
              }
            }
          }
        }
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 34);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault20write__string__array(sb, items) {
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 91);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < items.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(items, i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 93);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12GraphPayload16to__json__string(self) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(1024);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\"nodes\":[");
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.nodes.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      const n = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.nodes, i);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\"id\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, n.id);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"label\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, n.label);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"path\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, n.path);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"kind\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, n.kind);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"ext\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, n.ext);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"folder\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, n.folder);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"tags\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault20write__string__array(sb, n.tags);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"size\":");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(n.size, 10));
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"mtime\":");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, String(n.mtime));
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"degree\":");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(n.degree, 10));
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 125);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "],\"links\":[");
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < self.links.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      const l = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.links, i);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\"source\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, l.source);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"target\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, l.target);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"kind\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, l.kind);
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 125);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "],\"stats\":{\"notes\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(self.stats.notes, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"attachments\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(self.stats.attachments, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"unresolved\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(self.stats.unresolved, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"links\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(self.stats.links, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "},\"generatedAt\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(self.generatedAt, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"rootName\":");
  _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, self.rootName);
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 125);
  return sb.val;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault17folders__to__json(list) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(256);
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 91);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < list.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\"path\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(list, i).path);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"count\":");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(_M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(list, i).count, 10));
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 125);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 93);
  return sb.val;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault13ghost__id__of(raw) {
  const clean = _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string6String4trim(raw, undefined), _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault13ghost__id__ofN6recordS3511) ? "(空链接)" : _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(raw, undefined));
  return `u:${_M0MPC16string6String9to__lower(clean)}`;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11ghost__node(id, raw) {
  const clean = _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string6String4trim(raw, undefined), _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11ghost__nodeN6recordS3514) ? "(空链接)" : _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(raw, undefined));
  const base = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path8basename(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph4path11decode__uri(clean));
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphNode(id, base === "" ? clean : base, clean, "unresolved", "", "", [], 0, 0, 0);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10take__tags(tags, max_tags) {
  const out = [];
  const limit = max_tags < 0 ? 0 : max_tags;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < tags.length && i < limit) {
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tags, i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12build__graph(self, max_tags, generated_at, root_name) {
  const nodes = [];
  const _bind = [];
  const node_index = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind, 0, 0), undefined);
  const _bind$2 = [];
  const ghost_index = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$2, 0, 0), undefined);
  const pending = [];
  const referenced = [];
  const _bind$3 = [];
  const referenced_set = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$3, 0, 0), undefined);
  const notes = [];
  const _bind$4 = self.order;
  const _bind$5 = _bind$4.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$5) {
      const rel = _bind$4[_];
      const _bind$6 = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel);
      if (_bind$6 === undefined) {
      } else {
        const _Some = _bind$6;
        const _entry = _Some;
        if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault8FileKindPB2Eq5equal(_entry.kind, 0)) {
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(notes, _entry);
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array8sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(notes, (a, b) => _M0IPC16string6StringPB7Compare7compare(a.rel, b.rel));
  const _bind$6 = notes.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$6) {
      const entry = notes[_];
      if (!_M0MPB3Map8containsGsiE(node_index, entry.rel)) {
        _M0MPB3Map3setGsiE(node_index, entry.rel, nodes.length);
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphNode(entry.rel, entry.base, entry.rel, "note", entry.ext, entry.dir, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10take__tags(entry.tags, max_tags), entry.size, entry.mtime, 0));
      }
      const _bind$7 = entry.links;
      const _bind$8 = _bind$7.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$8) {
          const link = _bind$7[_$2];
          const _bind$9 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault16resolve__in__dir(self, entry.dir, link.target);
          if (_bind$9 === undefined) {
            const ghost_id = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault13ghost__id__of(link.target);
            if (!_M0MPB3Map8containsGsiE(ghost_index, ghost_id)) {
              _M0MPB3Map3setGsiE(ghost_index, ghost_id, nodes.length);
              _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11ghost__node(ghost_id, link.target));
            }
            _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(pending, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11PendingEdge(entry.rel, ghost_id, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse8LinkKind5label(link.kind)));
          } else {
            const _Some = _bind$9;
            const _target_rel = _Some;
            const _p = entry.rel;
            if (!(_target_rel === _p)) {
              const _bind$10 = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, _target_rel);
              if (_bind$10 === undefined) {
              } else {
                const _Some$2 = _bind$10;
                const _target = _Some$2;
                if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault8FileKindPB2Eq5equal(_target.kind, 1) && !_M0MPB3Map8containsGsuE(referenced_set, _target_rel)) {
                  _M0MPB3Map3setGsuE(referenced_set, _target_rel, undefined);
                  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(referenced, _target_rel);
                }
              }
              _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(pending, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11PendingEdge(entry.rel, _target_rel, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse8LinkKind5label(link.kind)));
            }
          }
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$7 = referenced.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$7) {
      const rel = referenced[_];
      if (!_M0MPB3Map8containsGsiE(node_index, rel)) {
        const _bind$8 = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(self.files, rel);
        if (_bind$8 === undefined) {
        } else {
          const _Some = _bind$8;
          const _entry = _Some;
          _M0MPB3Map3setGsiE(node_index, rel, nodes.length);
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphNode(_entry.rel, _entry.base, _entry.rel, "attachment", _entry.ext, _entry.dir, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10take__tags(_entry.tags, max_tags), _entry.size, _entry.mtime, 0));
        }
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const links = [];
  const _bind$8 = [];
  const seen = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$8, 0, 0), undefined);
  const _bind$9 = [];
  const degrees = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$9, 0, 0), undefined);
  const _bind$10 = pending.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$10) {
      const edge = pending[_];
      _L: {
        if (!_M0MPB3Map8containsGsiE(node_index, edge.from)) {
          break _L;
        }
        if (!(_M0MPB3Map8containsGsiE(node_index, edge.to) || _M0MPB3Map8containsGsiE(ghost_index, edge.to))) {
          break _L;
        }
        const key = `${edge.from}\u0000${edge.to}`;
        if (_M0MPB3Map8containsGsuE(seen, key)) {
          break _L;
        }
        _M0MPB3Map3setGsuE(seen, key, undefined);
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(links, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLink(edge.from, edge.to, edge.kind));
        _M0MPB3Map3setGsiE(degrees, edge.from, _M0MPB3Map16get__or__defaultGsiE(degrees, edge.from, 0) + 1 | 0);
        _M0MPB3Map3setGsiE(degrees, edge.to, _M0MPB3Map16get__or__defaultGsiE(degrees, edge.to, 0) + 1 | 0);
        break _L;
      }
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$11 = nodes.length;
  let _tmp$5 = 0;
  while (true) {
    const _ = _tmp$5;
    if (_ < _bind$11) {
      const node = nodes[_];
      node.degree = _M0MPB3Map16get__or__defaultGsiE(degrees, node.id, 0);
      _tmp$5 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array8sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(nodes, (a, b) => a.degree !== b.degree ? a.degree - b.degree | 0 : _M0IPC16string6StringPB7Compare7compare(a.label, b.label));
  let note_count = 0;
  let attachment_count = 0;
  let unresolved_count = 0;
  const _bind$12 = nodes.length;
  let _tmp$6 = 0;
  while (true) {
    const _ = _tmp$6;
    if (_ < _bind$12) {
      const node = nodes[_];
      if (node.kind === "note") {
        note_count = note_count + 1 | 0;
      } else {
        if (node.kind === "attachment") {
          attachment_count = attachment_count + 1 | 0;
        } else {
          unresolved_count = unresolved_count + 1 | 0;
        }
      }
      _tmp$6 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12GraphPayload(nodes, links, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10GraphStats(note_count, attachment_count, unresolved_count, links.length), generated_at, root_name);
}
function _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_x_798, _x_799) {
  switch (_x_798) {
    case 0: {
      if (_x_799 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_799 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_799 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_799 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_799 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_799 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_799 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_799 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_799 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_799 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_799 === 10) {
        return true;
      } else {
        return false;
      }
    }
    case 11: {
      if (_x_799 === 11) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_799 === 12) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8is__null(self) {
  if (self.$tag === 0) {
    return true;
  } else {
    return false;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6truthy(self) {
  switch (self.$tag) {
    case 1: {
      const _VBool = self;
      return _VBool._0;
    }
    case 2: {
      const _VInt = self;
      const _i = _VInt._0;
      return _i !== 0;
    }
    case 3: {
      const _VFloat = self;
      const _f = _VFloat._0;
      return _f !== 0;
    }
    case 4: {
      const _VStr = self;
      const _s = _VStr._0;
      const _p = "";
      return !(_s === _p);
    }
    case 5: {
      const _VList = self;
      const _xs = _VList._0;
      return _xs.length > 0;
    }
    default: {
      return false;
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7display(self) {
  switch (self.$tag) {
    case 0: {
      return "";
    }
    case 1: {
      const _VBool = self;
      const _b = _VBool._0;
      return _b ? "true" : "false";
    }
    case 2: {
      const _VInt = self;
      const _i = _VInt._0;
      return _M0MPC13int3Int18to__string_2einner(_i, 10);
    }
    case 3: {
      const _VFloat = self;
      const _f = _VFloat._0;
      return String(_f);
    }
    case 4: {
      const _VStr = self;
      return _VStr._0;
    }
    default: {
      const _VList = self;
      const _xs = _VList._0;
      return _M0MPC15array5Array4joinGsE(_xs, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7displayN6recordS3609);
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(self) {
  if (self.$tag === 4) {
    const _VStr = self;
    return _VStr._0;
  } else {
    return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7display(self);
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__double(self) {
  switch (self.$tag) {
    case 2: {
      const _VInt = self;
      const _i = _VInt._0;
      return new _M0DTPC16option6OptionGdE4Some(_i + 0);
    }
    case 3: {
      const _VFloat = self;
      const _f = _VFloat._0;
      return new _M0DTPC16option6OptionGdE4Some(_f);
    }
    default: {
      return _M0DTPC16option6OptionGdE4None__;
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value3key(self) {
  switch (self.$tag) {
    case 0: {
      return "n:";
    }
    case 1: {
      const _VBool = self;
      const _b = _VBool._0;
      return _b ? "b:1" : "b:0";
    }
    case 2: {
      const _VInt = self;
      const _i = _VInt._0;
      return `i:${_M0MPC13int3Int18to__string_2einner(_i, 10)}`;
    }
    case 3: {
      const _VFloat = self;
      const _f = _VFloat._0;
      return `f:${String(_f)}`;
    }
    case 4: {
      const _VStr = self;
      const _s = _VStr._0;
      return `s:${_s}`;
    }
    default: {
      const _VList = self;
      const _xs = _VList._0;
      return `l:${_M0MPC15array5Array4joinGsE(_xs, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value3keyN6recordS3627)}`;
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compare(self, other) {
  _L: {
    if (self.$tag === 0) {
      if (other.$tag === 0) {
        return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compareN6constrS3641;
      } else {
        return undefined;
      }
    } else {
      if (other.$tag === 0) {
        return undefined;
      } else {
        switch (self.$tag) {
          case 1: {
            const _VBool = self;
            const _a = _VBool._0;
            if (other.$tag === 1) {
              const _VBool$2 = other;
              const _b = _VBool$2._0;
              return _a === _b ? 0 : _a ? 1 : -1;
            } else {
              break _L;
            }
          }
          case 2: {
            const _VInt = self;
            const _a$2 = _VInt._0;
            switch (other.$tag) {
              case 2: {
                const _VInt$2 = other;
                const _b = _VInt$2._0;
                return _a$2 < _b ? -1 : _a$2 > _b ? 1 : 0;
              }
              case 3: {
                const _VFloat = other;
                const _b$2 = _VFloat._0;
                const _p = _a$2 + 0;
                return _p < _b$2 ? -1 : _p > _b$2 ? 1 : 0;
              }
              default: {
                break _L;
              }
            }
          }
          case 3: {
            const _VFloat$2 = self;
            const _a$3 = _VFloat$2._0;
            switch (other.$tag) {
              case 2: {
                const _VInt$3 = other;
                const _b$3 = _VInt$3._0;
                const _p$2 = _b$3 + 0;
                return _a$3 < _p$2 ? -1 : _a$3 > _p$2 ? 1 : 0;
              }
              case 3: {
                const _VFloat$3 = other;
                const _b$4 = _VFloat$3._0;
                return _a$3 < _b$4 ? -1 : _a$3 > _b$4 ? 1 : 0;
              }
              default: {
                break _L;
              }
            }
          }
          case 4: {
            const _VStr = self;
            const _a$4 = _VStr._0;
            if (other.$tag === 4) {
              const _VStr$2 = other;
              const _b$5 = _VStr$2._0;
              return _M0IPC16string6StringPB7Compare7compare(_a$4, _b$5);
            } else {
              break _L;
            }
          }
          default: {
            const _VList = self;
            const _a$5 = _VList._0;
            if (other.$tag === 5) {
              const _VList$2 = other;
              const _b$5 = _VList$2._0;
              return _M0IPC16string6StringPB7Compare7compare(_M0MPC15array5Array4joinGsE(_a$5, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compareN6recordS3642), _M0MPC15array5Array4joinGsE(_b$5, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compareN6recordS3643));
            } else {
              break _L;
            }
          }
        }
      }
    }
  }
  return undefined;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6equals(self, other) {
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compare(self, other);
  if (_bind === undefined) {
    return false;
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 0) {
      return true;
    } else {
      return false;
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8contains(self, needle) {
  switch (self.$tag) {
    case 5: {
      const _VList = self;
      const _items = _VList._0;
      const target = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(needle);
      return _M0MPC15array5Array8containsGsE(_items, target);
    }
    case 4: {
      const _VStr = self;
      const _haystack = _VStr._0;
      const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(needle);
      return _M0MPC16string6String8contains(_haystack, new _M0TPC16string10StringView(_bind, 0, _bind.length));
    }
    default: {
      return false;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11like__match(text, pattern) {
  const t = _M0MPC16string6String9to__array(text);
  const p = _M0MPC16string6String9to__array(pattern);
  const n = t.length;
  const m = p.length;
  const dp = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i <= n) {
      const row = [];
      let _tmp$2 = 0;
      while (true) {
        const j = _tmp$2;
        if (j <= m) {
          _M0MPC15array5Array4pushGbE(row, false);
          _tmp$2 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRPB5ArrayGbEE(dp, row);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array3setGbE(_M0MPC15array5Array2atGRPB5ArrayGbEE(dp, 0), 0, true);
  let _tmp$2 = 1;
  while (true) {
    const j = _tmp$2;
    if (j <= m) {
      if (_M0MPC15array5Array2atGcE(p, j - 1 | 0) === 37) {
        _M0MPC15array5Array3setGbE(_M0MPC15array5Array2atGRPB5ArrayGbEE(dp, 0), j, _M0MPC15array5Array2atGbE(_M0MPC15array5Array2atGRPB5ArrayGbEE(dp, 0), j - 1 | 0));
      }
      _tmp$2 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = 1;
  while (true) {
    const i = _tmp$3;
    if (i <= n) {
      let _tmp$4 = 1;
      while (true) {
        const j = _tmp$4;
        if (j <= m) {
          const pc = _M0MPC15array5Array2atGcE(p, j - 1 | 0);
          if (pc === 37) {
            _M0MPC15array5Array3setGbE(_M0MPC15array5Array2atGRPB5ArrayGbEE(dp, i), j, _M0MPC15array5Array2atGbE(_M0MPC15array5Array2atGRPB5ArrayGbEE(dp, i), j - 1 | 0) || _M0MPC15array5Array2atGbE(_M0MPC15array5Array2atGRPB5ArrayGbEE(dp, i - 1 | 0), j));
          } else {
            if (pc === 95 || pc === _M0MPC15array5Array2atGcE(t, i - 1 | 0)) {
              _M0MPC15array5Array3setGbE(_M0MPC15array5Array2atGRPB5ArrayGbEE(dp, i), j, _M0MPC15array5Array2atGbE(_M0MPC15array5Array2atGRPB5ArrayGbEE(dp, i - 1 | 0), j - 1 | 0));
            }
          }
          _tmp$4 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15array5Array2atGbE(_M0MPC15array5Array2atGRPB5ArrayGbEE(dp, n), m);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query18write__value__json(sb, value) {
  switch (value.$tag) {
    case 0: {
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "null");
      return;
    }
    case 1: {
      const _VBool = value;
      const _b = _VBool._0;
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _b ? "true" : "false");
      return;
    }
    case 2: {
      const _VInt = value;
      const _i = _VInt._0;
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(_i, 10));
      return;
    }
    case 3: {
      const _VFloat = value;
      const _f = _VFloat._0;
      if (_f !== _f || (_f === 1 / 0 || _f === -1 / 0)) {
        _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, String(_f));
        return;
      } else {
        _M0IPB13StringBuilderPB6Logger13write__string(sb, String(_f));
        return;
      }
    }
    case 4: {
      const _VStr = value;
      const _s = _VStr._0;
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, _s);
      return;
    }
    default: {
      const _VList = value;
      const _xs = _VList._0;
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 91);
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _xs.length) {
          if (i > 0) {
            _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
          }
          _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_xs, i));
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 93);
      return;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13is__aggregate(name) {
  return name === "count" || (name === "sum" || (name === "avg" || (name === "min" || name === "max")));
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19function__arity__ok(name, argc) {
  _L: {
    _L$2: {
      _L$3: {
        _L$4: {
          switch (name) {
            case "count": {
              return argc === 0 || argc === 1;
            }
            case "sum": {
              break _L$4;
            }
            case "avg": {
              break _L$4;
            }
            case "min": {
              break _L$4;
            }
            case "max": {
              break _L$4;
            }
            case "lower": {
              break _L$3;
            }
            case "upper": {
              break _L$3;
            }
            case "length": {
              break _L$3;
            }
            case "abs": {
              break _L$3;
            }
            case "coalesce": {
              return argc >= 1;
            }
            case "reachable": {
              return argc === 3;
            }
            case "distance": {
              return argc === 2;
            }
            case "in_cycle": {
              break _L$2;
            }
            case "indegree": {
              break _L$2;
            }
            case "outdegree": {
              break _L$2;
            }
            case "degree": {
              break _L$2;
            }
            case "contains": {
              break _L;
            }
            case "like": {
              break _L;
            }
            case "startswith": {
              break _L;
            }
            case "endswith": {
              break _L;
            }
            default: {
              return false;
            }
          }
        }
        return argc === 1;
      }
      return argc === 1;
    }
    return argc === 1;
  }
  return argc === 2;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16function__exists(name) {
  return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13is__aggregate(name) || (name === "lower" || (name === "upper" || (name === "length" || (name === "abs" || (name === "coalesce" || (name === "reachable" || (name === "distance" || (name === "in_cycle" || (name === "indegree" || (name === "outdegree" || (name === "degree" || (name === "contains" || (name === "like" || (name === "startswith" || name === "endswith"))))))))))))));
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14has__agg__expr(expr) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    switch (expr$2.$tag) {
      case 2: {
        const _EFunc = expr$2;
        const _name = _EFunc._0;
        return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13is__aggregate(_name);
      }
      case 3: {
        const _EBinary = expr$2;
        const _a = _EBinary._1;
        const _b = _EBinary._2;
        if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14has__agg__expr(_a)) {
          return true;
        } else {
          _tmp = _b;
          continue _L;
        }
      }
      case 4: {
        const _EUnary = expr$2;
        const _a$2 = _EUnary._1;
        _tmp = _a$2;
        continue _L;
      }
      case 5: {
        const _EIsNull = expr$2;
        const _a$3 = _EIsNull._0;
        _tmp = _a$3;
        continue _L;
      }
      case 6: {
        const _EList = expr$2;
        const _items = _EList._0;
        let found = false;
        const _bind = _items.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind) {
            const item = _items[_];
            if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14has__agg__expr(item)) {
              found = true;
            }
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return found;
      }
      default: {
        return false;
      }
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15query__has__agg(query) {
  let found = false;
  const _bind = query.items;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const item = _bind[_];
      if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14has__agg__expr(item.expr)) {
        found = true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = query.having;
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _e = _Some;
    if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14has__agg__expr(_e)) {
      found = true;
    }
  }
  const _bind$4 = query.order_by;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const order = _bind$4[_];
      if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14has__agg__expr(order.expr)) {
        found = true;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return found;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13collect__cols(expr, out) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    switch (expr$2.$tag) {
      case 1: {
        const _ECol = expr$2;
        const _c = _ECol._1;
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, _c);
        return;
      }
      case 2: {
        const _EFunc = expr$2;
        const _name = _EFunc._0;
        const _args = _EFunc._1;
        if (!_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13is__aggregate(_name)) {
          const _bind = _args.length;
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < _bind) {
              const arg = _args[_];
              _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13collect__cols(arg, out);
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              return;
            }
          }
        } else {
          return;
        }
      }
      case 3: {
        const _EBinary = expr$2;
        const _a = _EBinary._1;
        const _b = _EBinary._2;
        _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13collect__cols(_a, out);
        _tmp = _b;
        continue _L;
      }
      case 4: {
        const _EUnary = expr$2;
        const _a$2 = _EUnary._1;
        _tmp = _a$2;
        continue _L;
      }
      case 5: {
        const _EIsNull = expr$2;
        const _a$3 = _EIsNull._0;
        _tmp = _a$3;
        continue _L;
      }
      case 6: {
        const _EList = expr$2;
        const _items = _EList._0;
        const _bind = _items.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind) {
            const item = _items[_];
            _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13collect__cols(item, out);
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
      default: {
        return;
      }
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__expr(expr, schema, rel_alias, allow_agg, in_where, inside_agg) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    switch (expr$2.$tag) {
      case 0: {
        return "";
      }
      case 1: {
        const _ECol = expr$2;
        const _q = _ECol._0;
        const _c = _ECol._1;
        let _tmp$2;
        const _p = "";
        if (!(_q === _p)) {
          _tmp$2 = !(_q === rel_alias);
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          return `未知关系别名 \`${_q}\`，当前别名为 \`${rel_alias}\``;
        } else {
          return !_M0MPC15array5Array8containsGsE(schema, _c) ? `关系里没有列 \`${_c}\`，可用列：${_M0MPC15array5Array4joinGsE(schema, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__exprN6recordS3788)}` : "";
        }
      }
      case 2: {
        const _EFunc = expr$2;
        const _name = _EFunc._0;
        const _args = _EFunc._1;
        const _distinct = _EFunc._2;
        if (!_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16function__exists(_name)) {
          return `未知函数 \`${_name}\``;
        } else {
          if (!_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19function__arity__ok(_name, _args.length)) {
            return `函数 \`${_name}\` 的参数个数不正确`;
          } else {
            if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13is__aggregate(_name)) {
              if (in_where) {
                return "聚合函数不能出现在 WHERE 中";
              } else {
                if (!allow_agg) {
                  return "这里不能使用聚合函数";
                } else {
                  if (inside_agg) {
                    return "聚合函数不能嵌套";
                  } else {
                    let _tmp$3;
                    if (_distinct) {
                      const _p$2 = "count";
                      _tmp$3 = !(_name === _p$2);
                    } else {
                      _tmp$3 = false;
                    }
                    if (_tmp$3) {
                      return "DISTINCT 只支持 count(DISTINCT ...)";
                    } else {
                      let _tmp$4;
                      if (_args.length === 1) {
                        const _bind = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_args, 0);
                        let _tmp$5;
                        if (_bind.$tag === 7) {
                          _tmp$5 = true;
                        } else {
                          _tmp$5 = false;
                        }
                        _tmp$4 = _tmp$5;
                      } else {
                        _tmp$4 = false;
                      }
                      if (_tmp$4) {
                        return _name === "count" ? "" : "`*` 只能用于 count(*)";
                      } else {
                        let err = "";
                        const _bind = _args.length;
                        let _tmp$5 = 0;
                        while (true) {
                          const _ = _tmp$5;
                          if (_ < _bind) {
                            const arg = _args[_];
                            if (err === "") {
                              err = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__expr(arg, schema, rel_alias, true, false, true);
                            }
                            _tmp$5 = _ + 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                        return err;
                      }
                    }
                  }
                }
              }
            } else {
              let err = "";
              if (_distinct) {
                err = "DISTINCT 只能用于聚合函数";
              } else {
                const _bind = _args.length;
                let _tmp$3 = 0;
                while (true) {
                  const _ = _tmp$3;
                  if (_ < _bind) {
                    const arg = _args[_];
                    if (err === "") {
                      if (arg.$tag === 7) {
                        err = "`*` 只能用于 count(*)";
                      } else {
                        err = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__expr(arg, schema, rel_alias, allow_agg, in_where, inside_agg);
                      }
                    }
                    _tmp$3 = _ + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
              }
              return err;
            }
          }
        }
      }
      case 3: {
        const _EBinary = expr$2;
        const _a = _EBinary._1;
        const _b = _EBinary._2;
        const ea = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__expr(_a, schema, rel_alias, allow_agg, in_where, inside_agg);
        const _p$2 = "";
        if (!(ea === _p$2)) {
          return ea;
        } else {
          _tmp = _b;
          continue _L;
        }
      }
      case 4: {
        const _EUnary = expr$2;
        const _a$2 = _EUnary._1;
        _tmp = _a$2;
        continue _L;
      }
      case 5: {
        const _EIsNull = expr$2;
        const _a$3 = _EIsNull._0;
        _tmp = _a$3;
        continue _L;
      }
      case 6: {
        const _EList = expr$2;
        const _items = _EList._0;
        let err = "";
        const _bind = _items.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind) {
            const item = _items[_];
            if (err === "") {
              err = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__expr(item, schema, rel_alias, false, in_where, inside_agg);
            }
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return err;
      }
      case 7: {
        return "`*` 只能用于 SELECT * 或 count(*)";
      }
      default: {
        return "表达式解析失败";
      }
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14query__aliases(query) {
  const _bind = [];
  const aliases = _M0MPB3Map3MapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(new _M0TPB9ArrayViewGUsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprEE(_bind, 0, 0), undefined);
  const _bind$2 = query.items;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const item = _bind$2[_];
      const _p = item.name;
      const _p$2 = "";
      if (!(_p === _p$2)) {
        _M0MPB3Map3setGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(aliases, item.name, item.expr);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return aliases;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16relation__schema(name) {
  switch (name) {
    case "note": {
      return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["path", "label", "folder", "ext", "size", "mtime", "degree", "tags", "in_degree", "out_degree"]);
    }
    case "file": {
      return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["path", "kind", "ext", "size", "mtime", "folder"]);
    }
    case "link": {
      return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["from", "to", "kind", "raw", "line", "title", "to_kind"]);
    }
    case "tag": {
      return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["note", "tag"]);
    }
    case "unresolved": {
      return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["from", "raw", "target", "line", "kind"]);
    }
    case "ambiguous": {
      return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["from", "raw", "target", "line", "candidates"]);
    }
    case "orphan": {
      return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["path", "degree"]);
    }
    case "cycle": {
      return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["path", "out_degree"]);
    }
    default: {
      return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(expr, aliases) {
  switch (expr.$tag) {
    case 1: {
      const _ECol = expr;
      const _q = _ECol._0;
      const _c = _ECol._1;
      if (_q === "") {
        const _bind = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4ExprE(aliases, _c);
        if (_bind === undefined) {
          return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ECol(_q, _c);
        } else {
          const _Some = _bind;
          return _Some;
        }
      } else {
        return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ECol(_q, _c);
      }
    }
    case 2: {
      const _EFunc = expr;
      const _name = _EFunc._0;
      const _args = _EFunc._1;
      const _distinct = _EFunc._2;
      const next = [];
      const _bind = _args.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const arg = _args[_];
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(next, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(arg, aliases));
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EFunc(_name, next, _distinct);
    }
    case 3: {
      const _EBinary = expr;
      const _op = _EBinary._0;
      const _a = _EBinary._1;
      const _b = _EBinary._2;
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary(_op, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(_a, aliases), _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(_b, aliases));
    }
    case 4: {
      const _EUnary = expr;
      const _op$2 = _EUnary._0;
      const _a$2 = _EUnary._1;
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EUnary(_op$2, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(_a$2, aliases));
    }
    case 5: {
      const _EIsNull = expr;
      const _a$3 = _EIsNull._0;
      const _negate = _EIsNull._1;
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EIsNull(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(_a$3, aliases), _negate);
    }
    case 6: {
      const _EList = expr;
      const _items = _EList._0;
      const next$2 = [];
      const _bind$2 = _items.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$2) {
          const item = _items[_];
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(next$2, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(item, aliases));
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EList(next$2);
    }
    case 0: {
      return expr;
    }
    case 7: {
      return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EStar__;
    }
    default: {
      return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EError__;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15validate__query(query) {
  const relation = _M0MPC16string6String9to__lower(query.relation);
  const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16relation__schema(relation);
  let schema;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    schema = _Some._0;
  } else {
    return `未知关系 \`${query.relation}\`，可用关系：${_M0MPC15array5Array4joinGsE(["note", "file", "link", "tag", "unresolved", "ambiguous", "orphan", "cycle"], _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15validate__queryN6recordS3872)}`;
  }
  if (query.items.length === 0) {
    return "SELECT 至少需要一个列";
  }
  const has_agg = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15query__has__agg(query);
  const grouped = has_agg || query.group_by.length > 0;
  const aliases = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14query__aliases(query);
  const _bind$2 = query.items;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const item = _bind$2[_];
      const _bind$4 = item.expr;
      if (_bind$4.$tag === 7) {
        if (grouped) {
          return "SELECT * 不能与 GROUP BY 或聚合函数一起使用";
        }
      } else {
        const err = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__expr(item.expr, schema, query.rel_alias, true, false, false);
        const _p = "";
        if (!(err === _p)) {
          return err;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = query.where_expr;
  if (_bind$4 === undefined) {
  } else {
    const _Some = _bind$4;
    const _expr = _Some;
    const err = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__expr(_expr, schema, query.rel_alias, false, true, false);
    const _p = "";
    if (!(err === _p)) {
      return err;
    }
  }
  const group_keys = [];
  const _bind$5 = query.group_by;
  const _bind$6 = _bind$5.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$6) {
      const expr = _bind$5[_];
      if (expr.$tag === 1) {
        const _ECol = expr;
        const _c = _ECol._1;
        const err = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__expr(expr, schema, query.rel_alias, false, false, false);
        const _p = "";
        if (!(err === _p)) {
          return err;
        }
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(group_keys, _c);
      } else {
        return "GROUP BY 目前只支持列，例如 GROUP BY n.folder";
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (grouped) {
    const _bind$7 = query.items;
    const _bind$8 = _bind$7.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$8) {
        const item = _bind$7[_];
        const cols = [];
        _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13collect__cols(item.expr, cols);
        const _bind$9 = cols.length;
        let _tmp$4 = 0;
        while (true) {
          const _$2 = _tmp$4;
          if (_$2 < _bind$9) {
            const c = cols[_$2];
            if (!_M0MPC15array5Array8containsGsE(group_keys, c)) {
              return `列 \`${c}\` 必须出现在 GROUP BY 中`;
            }
            _tmp$4 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$9 = query.having;
    if (_bind$9 === undefined) {
    } else {
      const _Some = _bind$9;
      const _expr = _Some;
      const expanded = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(_expr, aliases);
      const err = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__expr(expanded, schema, query.rel_alias, true, false, false);
      const _p = "";
      if (!(err === _p)) {
        return err;
      }
      const cols = [];
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13collect__cols(expanded, cols);
      const _bind$10 = cols.length;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$10) {
          const c = cols[_];
          if (!_M0MPC15array5Array8containsGsE(group_keys, c)) {
            return `HAVING 中的列 \`${c}\` 必须出现在 GROUP BY 中`;
          }
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  } else {
    const _bind$7 = query.having;
    if (_bind$7 === undefined) {
    } else {
      return "HAVING 需要配合 GROUP BY 或聚合函数使用";
    }
  }
  const _bind$7 = query.order_by;
  const _bind$8 = _bind$7.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$8) {
      const order = _bind$7[_];
      const expanded = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(order.expr, aliases);
      const err = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14validate__expr(expanded, schema, query.rel_alias, true, false, false);
      const _p = "";
      if (!(err === _p)) {
        return err;
      }
      if (grouped) {
        const cols = [];
        _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13collect__cols(expanded, cols);
        const _bind$9 = cols.length;
        let _tmp$4 = 0;
        while (true) {
          const _$2 = _tmp$4;
          if (_$2 < _bind$9) {
            const c = cols[_$2];
            if (!_M0MPC15array5Array8containsGsE(group_keys, c)) {
              return `ORDER BY 中的列 \`${c}\` 必须出现在 GROUP BY 中`;
            }
            _tmp$4 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return "";
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16build__ambiguous(vault) {
  const rows = [];
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5notes(vault);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const entry = _bind[_];
      const _bind$3 = entry.links;
      const _bind$4 = _bind$3.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$4) {
          const link = _bind$3[_$2];
          const candidates = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault10candidates(vault, link.target);
          if (candidates.length > 1) {
            _M0MPC15array5Array4pushGRPB5ArrayGbEE(rows, [new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(entry.rel), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(link.raw), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(link.target), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(link.line), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VList(candidates)]);
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7Dataset("ambiguous", ["from", "raw", "target", "line", "candidates"], rows);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex14ensure__cycles(self) {
  if (self.cycles_ready) {
    return undefined;
  }
  const _bind = [];
  const visited = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind, 0, 0), undefined);
  const order = [];
  const _bind$2 = self.nodes;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const start = _bind$2[_];
      _L: {
        if (_M0MPB3Map8containsGsuE(visited, start)) {
          break _L;
        }
        const stack = [start];
        const index_stack = [0];
        _M0MPB3Map3setGsuE(visited, start, undefined);
        while (true) {
          if (stack.length > 0) {
            const top = stack.length - 1 | 0;
            const node = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(stack, top);
            const neighbors = _M0MPB3Map16get__or__defaultGsRPB5ArrayGsEE(self.edges, node, []);
            const i = _M0MPC15array5Array2atGiE(index_stack, top);
            if (i < neighbors.length) {
              _M0MPC15array5Array3setGiE(index_stack, top, i + 1 | 0);
              const next = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(neighbors, i);
              if (!_M0MPB3Map8containsGsuE(visited, next)) {
                _M0MPB3Map3setGsuE(visited, next, undefined);
                _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(stack, next);
                _M0MPC15array5Array4pushGiE(index_stack, 0);
              }
            } else {
              _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(order, node);
              _M0MPC15array5Array3popGsE(stack);
              _M0MPC15array5Array3popGiE(index_stack);
            }
            continue;
          } else {
            break;
          }
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = [];
  const comp = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$4, 0, 0), undefined);
  let comp_id = 0;
  let _tmp$2 = order.length - 1 | 0;
  while (true) {
    const k = _tmp$2;
    if (k >= 0) {
      _L: {
        const start = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(order, k);
        if (_M0MPB3Map8containsGsiE(comp, start)) {
          break _L;
        }
        const members = [];
        const stack = [start];
        _M0MPB3Map3setGsiE(comp, start, comp_id);
        while (true) {
          if (stack.length > 0) {
            const node = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(stack, stack.length - 1 | 0);
            _M0MPC15array5Array3popGsE(stack);
            _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(members, node);
            const _bind$5 = _M0MPB3Map16get__or__defaultGsRPB5ArrayGsEE(self.reverse, node, []);
            const _bind$6 = _bind$5.length;
            let _tmp$3 = 0;
            while (true) {
              const _ = _tmp$3;
              if (_ < _bind$6) {
                const prev = _bind$5[_];
                if (!_M0MPB3Map8containsGsiE(comp, prev)) {
                  _M0MPB3Map3setGsiE(comp, prev, comp_id);
                  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(stack, prev);
                }
                _tmp$3 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            continue;
          } else {
            break;
          }
        }
        if (members.length > 1) {
          const _bind$5 = members.length;
          let _tmp$3 = 0;
          while (true) {
            const _ = _tmp$3;
            if (_ < _bind$5) {
              const node = members[_];
              _M0MPB3Map3setGsuE(self.cycle_set, node, undefined);
              _tmp$3 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        comp_id = comp_id + 1 | 0;
        break _L;
      }
      _tmp$2 = k - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.cycles_ready = true;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex12cycle__nodes(self) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex14ensure__cycles(self);
  const out = [];
  const _bind = self.nodes;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const node = _bind[_];
      if (_M0MPB3Map8containsGsuE(self.cycle_set, node)) {
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, node);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13build__cycles(graph) {
  const rows = [];
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex12cycle__nodes(graph);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const path = _bind[_];
      _M0MPC15array5Array4pushGRPB5ArrayGbEE(rows, [new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(path), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_M0MPB3Map16get__or__defaultGsiE(graph.out_deg, path, 0))]);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7Dataset("cycle", ["path", "out_degree"], rows);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12build__files(vault) {
  const rows = [];
  const _bind = vault.order;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const rel = _bind[_];
      const _bind$3 = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(vault.files, rel);
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _entry = _Some;
        const kind = _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault8FileKindPB2Eq5equal(_entry.kind, 0) ? "note" : "attachment";
        _M0MPC15array5Array4pushGRPB5ArrayGbEE(rows, [new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(_entry.rel), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(kind), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(_entry.ext), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_entry.size), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(_entry.mtime), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(_entry.dir)]);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7Dataset("file", ["path", "kind", "ext", "size", "mtime", "folder"], rows);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12build__links(vault) {
  const rows = [];
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5notes(vault);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const entry = _bind[_];
      const _bind$3 = entry.links;
      const _bind$4 = _bind$3.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$4) {
          const link = _bind$3[_$2];
          const _bind$5 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault7resolve(vault, entry.rel, link.target);
          if (_bind$5 === undefined) {
          } else {
            const _Some = _bind$5;
            const _target_rel = _Some;
            const _bind$6 = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(vault.files, _target_rel);
            let to_kind;
            if (_bind$6 === undefined) {
              to_kind = "missing";
            } else {
              const _Some$2 = _bind$6;
              const _target = _Some$2;
              to_kind = _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault8FileKindPB2Eq5equal(_target.kind, 0) ? "note" : "attachment";
            }
            _M0MPC15array5Array4pushGRPB5ArrayGbEE(rows, [new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(entry.rel), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(_target_rel), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse8LinkKind5label(link.kind)), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(link.raw), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(link.line), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(link.title), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(to_kind)]);
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7Dataset("link", ["from", "to", "kind", "raw", "line", "title", "to_kind"], rows);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12build__notes(vault, graph) {
  const rows = [];
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5notes(vault);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const entry = _bind[_];
      const in_degree = _M0MPB3Map16get__or__defaultGsiE(graph.in_deg, entry.rel, 0);
      const out_degree = _M0MPB3Map16get__or__defaultGsiE(graph.out_deg, entry.rel, 0);
      _M0MPC15array5Array4pushGRPB5ArrayGbEE(rows, [new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(entry.rel), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(entry.base), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(entry.dir), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(entry.ext), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(entry.size), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(entry.mtime), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(in_degree + out_degree | 0), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VList(entry.tags), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(in_degree), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(out_degree)]);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7Dataset("note", ["path", "label", "folder", "ext", "size", "mtime", "degree", "tags", "in_degree", "out_degree"], rows);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14build__orphans(vault, graph) {
  const rows = [];
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5notes(vault);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const entry = _bind[_];
      const degree = _M0MPB3Map16get__or__defaultGsiE(graph.in_deg, entry.rel, 0) + _M0MPB3Map16get__or__defaultGsiE(graph.out_deg, entry.rel, 0) | 0;
      if (degree === 0) {
        _M0MPC15array5Array4pushGRPB5ArrayGbEE(rows, [new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(entry.rel), _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14build__orphansN6constrS4040]);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7Dataset("orphan", ["path", "degree"], rows);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11build__tags(vault) {
  const rows = [];
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5notes(vault);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const entry = _bind[_];
      const _bind$3 = entry.tags;
      const _bind$4 = _bind$3.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$4) {
          const tag = _bind$3[_$2];
          _M0MPC15array5Array4pushGRPB5ArrayGbEE(rows, [new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(entry.rel), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(tag)]);
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7Dataset("tag", ["note", "tag"], rows);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query17build__unresolved(vault) {
  const rows = [];
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5notes(vault);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const entry = _bind[_];
      const _bind$3 = entry.links;
      const _bind$4 = _bind$3.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$4) {
          const link = _bind$3[_$2];
          const _bind$5 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault7resolve(vault, entry.rel, link.target);
          const resolved = !(_bind$5 === undefined);
          if (!resolved) {
            _M0MPC15array5Array4pushGRPB5ArrayGbEE(rows, [new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(entry.rel), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(link.raw), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(link.target), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(link.line), new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse8LinkKind5label(link.kind))]);
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7Dataset("unresolved", ["from", "raw", "target", "line", "kind"], rows);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15build__relation(vault, graph, name) {
  switch (name) {
    case "note": {
      return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12build__notes(vault, graph);
    }
    case "file": {
      return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12build__files(vault);
    }
    case "link": {
      return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12build__links(vault);
    }
    case "tag": {
      return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11build__tags(vault);
    }
    case "unresolved": {
      return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query17build__unresolved(vault);
    }
    case "ambiguous": {
      return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16build__ambiguous(vault);
    }
    case "orphan": {
      return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14build__orphans(vault, graph);
    }
    case "cycle": {
      return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13build__cycles(graph);
    }
    default: {
      return undefined;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query23relation__catalog__json() {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(512);
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 91);
  const names = ["note", "file", "link", "tag", "unresolved", "ambiguous", "orphan", "cycle"];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < names.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      const name = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(names, i);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\"name\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, name);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"columns\":[");
      const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16relation__schema(name);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _columns = _Some._0;
        let _tmp$2 = 0;
        while (true) {
          const j = _tmp$2;
          if (j < _columns.length) {
            if (j > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
            }
            _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_columns, j));
            _tmp$2 = j + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "]}");
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 93);
  return sb.val;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser3new(tokens) {
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser(tokens, 0, "");
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self) {
  return _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.tokens, self.pos);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self) {
  const t = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(self.tokens, self.pos);
  if ((self.pos + 1 | 0) < self.tokens.length) {
    self.pos = self.pos + 1 | 0;
  }
  return t;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4fail(self, message) {
  if (self.error === "") {
    self.error = `${message}（位置 ${_M0MPC13int3Int18to__string_2einner(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).pos, 10)}）`;
    return;
  } else {
    return;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser6is__kw(self, word) {
  const t = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self);
  return _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(t.kind, 0) && _M0MPC16string6String9to__lower(t.text) === word;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, word) {
  if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser6is__kw(self, word)) {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
    return true;
  } else {
    return false;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10expect__kw(self, word) {
  if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, word)) {
    return true;
  } else {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4fail(self, `期望关键字 ${_M0MPC16string6String9to__upper(word)}`);
    return false;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12expect__kind(self, kind, what) {
  if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, kind)) {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
    return true;
  } else {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4fail(self, `期望${what}`);
    return false;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser13expect__ident(self, what) {
  if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 0)) {
    return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self).text;
  } else {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4fail(self, `期望${what}`);
    return undefined;
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16is__clause__word(text) {
  const lower = _M0MPC16string6String9to__lower(text);
  return lower === "where" || (lower === "group" || (lower === "having" || (lower === "order" || (lower === "limit" || (lower === "from" || (lower === "join" || (lower === "left" || (lower === "inner" || lower === "union"))))))));
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16parse__int__text(text) {
  const cs = _M0MPC16string6String9to__array(text);
  let value = 0;
  const _bind = cs.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const c = cs[_];
      if (c >= 48 && c <= 57) {
        value = (Math.imul(value, 10) | 0) + (c - 48 | 0) | 0;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return value;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query18parse__float__text(text) {
  const cs = _M0MPC16string6String9to__array(text);
  let value = 0;
  let i = 0;
  while (true) {
    if (i < cs.length && _M0MPC15array5Array2atGcE(cs, i) !== 46) {
      if (_M0MPC15array5Array2atGcE(cs, i) >= 48 && _M0MPC15array5Array2atGcE(cs, i) <= 57) {
        value = value * 10 + ((_M0MPC15array5Array2atGcE(cs, i) - 48 | 0) + 0);
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (i < cs.length && _M0MPC15array5Array2atGcE(cs, i) === 46) {
    i = i + 1 | 0;
    let scale = 1;
    while (true) {
      if (i < cs.length) {
        if (_M0MPC15array5Array2atGcE(cs, i) >= 48 && _M0MPC15array5Array2atGcE(cs, i) <= 57) {
          scale = scale * 10;
          value = value + ((_M0MPC15array5Array2atGcE(cs, i) - 48 | 0) + 0) / scale;
        }
        i = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return value;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11is__cmp__op(text) {
  return text === "=" || (text === "!=" || (text === "<>" || (text === "<" || (text === "<=" || (text === ">" || text === ">=")))));
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__expr(self) {
  return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser9parse__or(self);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser9parse__or(self) {
  let left = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__and(self);
  while (true) {
    if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "or")) {
      const right = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__and(self);
      left = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary("OR", left, right);
      continue;
    } else {
      break;
    }
  }
  return left;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__and(self) {
  let left = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__not(self);
  while (true) {
    if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "and")) {
      const right = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__not(self);
      left = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary("AND", left, right);
      continue;
    } else {
      break;
    }
  }
  return left;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__not(self) {
  return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "not") ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EUnary("NOT", _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__not(self)) : _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__cmp(self);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__cmp(self) {
  const left = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__add(self);
  if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "is")) {
    const negate = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "not");
    if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10expect__kw(self, "null")) {
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EIsNull(left, negate);
    }
    return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EError__;
  }
  if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "in")) {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12expect__kind(self, 7, " `(`");
    const items = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser17parse__expr__list(self);
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12expect__kind(self, 8, " `)`");
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary("IN", left, new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EList(items));
  }
  if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "like")) {
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary("LIKE", left, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__add(self));
  }
  if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "contains")) {
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary("CONTAINS", left, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__add(self));
  }
  const t = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self);
  if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(t.kind, 11) && _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11is__cmp__op(t.text)) {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary(t.text, left, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__add(self));
  } else {
    return left;
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__add(self) {
  let left = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__mul(self);
  while (true) {
    const t = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self);
    if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(t.kind, 11) && (t.text === "+" || t.text === "-")) {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      left = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary(t.text, left, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__mul(self));
    } else {
      break;
    }
    continue;
  }
  return left;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10parse__mul(self) {
  let left = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12parse__unary(self);
  while (true) {
    const t = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self);
    if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(t.kind, 11) && (t.text === "/" || t.text === "%") || _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(t.kind, 6)) {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      const op = _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(t.kind, 6) ? "*" : t.text;
      left = new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr7EBinary(op, left, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12parse__unary(self));
    } else {
      break;
    }
    continue;
  }
  return left;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12parse__unary(self) {
  while (true) {
    const t = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self);
    if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(t.kind, 11) && t.text === "-") {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EUnary("NEG", _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12parse__unary(self));
    } else {
      if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(t.kind, 11) && t.text === "+") {
        _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
        continue;
      } else {
        return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser14parse__primary(self);
      }
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser14parse__primary(self) {
  const t = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self);
  const _bind = t.kind;
  switch (_bind) {
    case 2: {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ELit(new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16parse__int__text(t.text)));
    }
    case 3: {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ELit(new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query18parse__float__text(t.text)));
    }
    case 1: {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ELit(new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(t.text));
    }
    case 7: {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      const inner = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__expr(self);
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12expect__kind(self, 8, " `)`");
      return inner;
    }
    case 9: {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      const items = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser17parse__expr__list(self);
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12expect__kind(self, 10, " `]`");
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EList(items);
    }
    case 6: {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EStar__;
    }
    case 0: {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      const lower = _M0MPC16string6String9to__lower(t.text);
      if (lower === "true") {
        return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser14parse__primaryN6constrS4152;
      } else {
        if (lower === "false") {
          return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser14parse__primaryN6constrS4154;
        } else {
          if (lower === "null") {
            return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ELit(_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__);
          } else {
            if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 7)) {
              return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__call(self, t.text);
            } else {
              if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 5)) {
                _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
                const _bind$2 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser13expect__ident(self, "列名");
                let col;
                if (_bind$2 === undefined) {
                  col = "";
                } else {
                  const _Some = _bind$2;
                  col = _Some;
                }
                return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ECol(t.text, col);
              } else {
                return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ECol("", t.text);
              }
            }
          }
        }
      }
    }
    default: {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4fail(self, "期望表达式");
      return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr6EError__;
    }
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__call(self, name) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12expect__kind(self, 7, " `(`");
  const distinct = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "distinct");
  const args = [];
  if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 6)) {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
    _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EStar__);
  } else {
    if (_M0IP016_24default__implPB2Eq10not__equalGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindE(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 8)) {
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__expr(self));
      while (true) {
        if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 4)) {
          _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__expr(self));
          continue;
        } else {
          break;
        }
      }
    }
  }
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12expect__kind(self, 8, " `)`");
  return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EFunc(_M0MPC16string6String9to__lower(name), args, distinct);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser17parse__expr__list(self) {
  const items = [];
  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(items, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__expr(self));
  while (true) {
    if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 4)) {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(items, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__expr(self));
      continue;
    } else {
      break;
    }
  }
  return items;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser18parse__order__item(self) {
  const expr = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__expr(self);
  let desc;
  if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "desc")) {
    desc = true;
  } else {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "asc");
    desc = false;
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query9OrderItem(expr, desc);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser19parse__order__items(self) {
  const items = [];
  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(items, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser18parse__order__item(self));
  while (true) {
    if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 4)) {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(items, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser18parse__order__item(self));
      continue;
    } else {
      break;
    }
  }
  return items;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser19parse__select__item(self) {
  const expr = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__expr(self);
  let rel_alias;
  if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "as")) {
    const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser13expect__ident(self, "列别名");
    if (_bind === undefined) {
      rel_alias = "";
    } else {
      const _Some = _bind;
      rel_alias = _Some;
    }
  } else {
    rel_alias = _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 0) && !_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16is__clause__word(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).text) ? _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self).text : "";
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10SelectItem(expr, rel_alias);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser20parse__select__items(self) {
  const items = [];
  if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 6)) {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
    _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(items, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10SelectItem(_M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr5EStar__, ""));
    return items;
  }
  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(items, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser19parse__select__item(self));
  while (true) {
    if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 4)) {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(items, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser19parse__select__item(self));
      continue;
    } else {
      break;
    }
  }
  return items;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12parse__query(self) {
  if (!_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10expect__kw(self, "select")) {
    return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Query(false, [], "", "", undefined, [], undefined, [], -1);
  }
  const distinct = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "distinct");
  const items = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser20parse__select__items(self);
  if (!_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10expect__kw(self, "from")) {
    return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Query(distinct, items, "", "", undefined, [], undefined, [], -1);
  }
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser13expect__ident(self, "关系名");
  let relation;
  if (_bind === undefined) {
    relation = "";
  } else {
    const _Some = _bind;
    relation = _Some;
  }
  let rel_alias;
  if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "as")) {
    const _bind$2 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser13expect__ident(self, "关系别名");
    if (_bind$2 === undefined) {
      rel_alias = relation;
    } else {
      const _Some = _bind$2;
      rel_alias = _Some;
    }
  } else {
    rel_alias = _M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 0) && !_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16is__clause__word(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).text) ? _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self).text : relation;
  }
  const where_expr = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "where") ? _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__expr(self) : undefined;
  const group_by = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "group") ? (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10expect__kw(self, "by") ? _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser17parse__expr__list(self) : []) : [];
  const having = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "having") ? _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser11parse__expr(self) : undefined;
  const order_by = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "order") ? (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser10expect__kw(self, "by") ? _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser19parse__order__items(self) : []) : [];
  let limit;
  if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7eat__kw(self, "limit")) {
    const t = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self);
    if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindPB2Eq5equal(t.kind, 2)) {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser7advance(self);
      limit = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16parse__int__text(t.text);
    } else {
      _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4fail(self, "LIMIT 需要一个整数");
      limit = -1;
    }
  } else {
    limit = -1;
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7TokKindE(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4peek(self).kind, 12) && self.error === "") {
    _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser4fail(self, "查询结尾有多余内容");
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Query(distinct, items, relation, rel_alias, where_expr, group_by, having, order_by, limit);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10hex__value(c) {
  return c >= 48 && c <= 57 ? c - 48 | 0 : c >= 97 && c <= 102 ? (c - 97 | 0) + 10 | 0 : c >= 65 && c <= 70 ? (c - 65 | 0) + 10 | 0 : -1;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14decode__string(cs, start, stop) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(32);
  let i = start;
  while (true) {
    if (i < stop) {
      const c = _M0MPC15array5Array2atGcE(cs, i);
      if (c === 92 && (i + 1 | 0) < stop) {
        const next = _M0MPC15array5Array2atGcE(cs, i + 1 | 0);
        if (next === 110) {
          _M0IPB13StringBuilderPB6Logger11write__char(sb, 10);
          i = i + 2 | 0;
        } else {
          if (next === 114) {
            _M0IPB13StringBuilderPB6Logger11write__char(sb, 13);
            i = i + 2 | 0;
          } else {
            if (next === 116) {
              _M0IPB13StringBuilderPB6Logger11write__char(sb, 9);
              i = i + 2 | 0;
            } else {
              if (next === 92) {
                _M0IPB13StringBuilderPB6Logger11write__char(sb, 92);
                i = i + 2 | 0;
              } else {
                if (next === 39) {
                  _M0IPB13StringBuilderPB6Logger11write__char(sb, 39);
                  i = i + 2 | 0;
                } else {
                  if (next === 34) {
                    _M0IPB13StringBuilderPB6Logger11write__char(sb, 34);
                    i = i + 2 | 0;
                  } else {
                    if (next === 117 && ((i + 5 | 0) < stop && (_M0MPC15array5Array2atGcE(cs, i + 2 | 0) === 123 && _M0MPC15array5Array2atGcE(cs, i + 6 | 0) === 125))) {
                      let code = 0;
                      let ok = true;
                      let _tmp = 3;
                      while (true) {
                        const k = _tmp;
                        if (k < 6) {
                          const h = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10hex__value(_M0MPC15array5Array2atGcE(cs, i + k | 0));
                          if (h < 0) {
                            ok = false;
                          } else {
                            code = (Math.imul(code, 16) | 0) + h | 0;
                          }
                          _tmp = k + 1 | 0;
                          continue;
                        } else {
                          break;
                        }
                      }
                      if (ok) {
                        _M0IPB13StringBuilderPB6Logger11write__char(sb, code);
                        i = i + 7 | 0;
                      } else {
                        _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
                        i = i + 1 | 0;
                      }
                    } else {
                      _M0IPB13StringBuilderPB6Logger11write__char(sb, next);
                      i = i + 2 | 0;
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, c);
        i = i + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15is__alpha__char(c) {
  return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16is__ident__start(c) {
  return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15is__alpha__char(c) || (c === 95 || c === 36);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15is__ident__char(c) {
  return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16is__ident__start(c) || c >= 48 && c <= 57;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15is__space__char(c) {
  return c === 32 || (c === 9 || (c === 10 || c === 13));
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query3lex(source) {
  const cs = _M0MPC16string6String9to__array(source);
  const n = cs.length;
  const tokens = [];
  let i = 0;
  let error = "";
  while (true) {
    if (i < n) {
      const c = _M0MPC15array5Array2atGcE(cs, i);
      if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15is__space__char(c)) {
        i = i + 1 | 0;
      } else {
        if (c === 45 && ((i + 1 | 0) < n && _M0MPC15array5Array2atGcE(cs, i + 1 | 0) === 45)) {
          while (true) {
            if (i < n && _M0MPC15array5Array2atGcE(cs, i) !== 10) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        } else {
          if (c === 47 && ((i + 1 | 0) < n && _M0MPC15array5Array2atGcE(cs, i + 1 | 0) === 47)) {
            while (true) {
              if (i < n && _M0MPC15array5Array2atGcE(cs, i) !== 10) {
                i = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            if (c === 59) {
              i = i + 1 | 0;
            } else {
              if (c === 39 || c === 34) {
                const start = i + 1 | 0;
                let j = start;
                let closed = false;
                while (true) {
                  if (j < n) {
                    if (_M0MPC15array5Array2atGcE(cs, j) === 92 && (j + 1 | 0) < n) {
                      j = j + 2 | 0;
                    } else {
                      if (_M0MPC15array5Array2atGcE(cs, j) === c) {
                        closed = true;
                        break;
                      } else {
                        j = j + 1 | 0;
                      }
                    }
                    continue;
                  } else {
                    break;
                  }
                }
                if (!closed) {
                  error = `字符串没有闭合（位置 ${_M0MPC13int3Int18to__string_2einner(i, 10)}）`;
                  i = n;
                } else {
                  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(1, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14decode__string(cs, start, j), i));
                  i = j + 1 | 0;
                }
              } else {
                if (c >= 48 && c <= 57) {
                  const start = i;
                  let seen_dot = false;
                  while (true) {
                    if (i < n) {
                      const _p = _M0MPC15array5Array2atGcE(cs, i);
                      if (_p >= 48 && _p <= 57) {
                        i = i + 1 | 0;
                      } else {
                        let _tmp;
                        if (_M0MPC15array5Array2atGcE(cs, i) === 46) {
                          let _tmp$2;
                          if (!seen_dot) {
                            let _tmp$3;
                            if ((i + 1 | 0) < n) {
                              const _p$2 = _M0MPC15array5Array2atGcE(cs, i + 1 | 0);
                              _tmp$3 = _p$2 >= 48 && _p$2 <= 57;
                            } else {
                              _tmp$3 = false;
                            }
                            _tmp$2 = _tmp$3;
                          } else {
                            _tmp$2 = false;
                          }
                          _tmp = _tmp$2;
                        } else {
                          _tmp = false;
                        }
                        if (_tmp) {
                          seen_dot = true;
                          i = i + 1 | 0;
                        } else {
                          break;
                        }
                      }
                      continue;
                    } else {
                      break;
                    }
                  }
                  const text = _M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(cs, start, i));
                  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(seen_dot ? 3 : 2, text, start));
                } else {
                  if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16is__ident__start(c)) {
                    const start = i;
                    while (true) {
                      if (i < n && _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15is__ident__char(_M0MPC15array5Array2atGcE(cs, i))) {
                        i = i + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(0, _M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(cs, start, i)), start));
                  } else {
                    if (c === 44) {
                      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(4, ",", i));
                      i = i + 1 | 0;
                    } else {
                      if (c === 46) {
                        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(5, ".", i));
                        i = i + 1 | 0;
                      } else {
                        if (c === 42) {
                          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(6, "*", i));
                          i = i + 1 | 0;
                        } else {
                          if (c === 40) {
                            _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(7, "(", i));
                            i = i + 1 | 0;
                          } else {
                            if (c === 41) {
                              _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(8, ")", i));
                              i = i + 1 | 0;
                            } else {
                              if (c === 91) {
                                _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(9, "[", i));
                                i = i + 1 | 0;
                              } else {
                                if (c === 93) {
                                  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(10, "]", i));
                                  i = i + 1 | 0;
                                } else {
                                  if ((i + 1 | 0) < n) {
                                    const two = _M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(cs, i, i + 2 | 0));
                                    if (two === "!=" || (two === "<>" || (two === "<=" || two === ">="))) {
                                      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(11, two, i));
                                      i = i + 2 | 0;
                                      continue;
                                    }
                                  }
                                  if (c === 61 || (c === 60 || (c === 62 || (c === 43 || (c === 45 || (c === 47 || c === 37)))))) {
                                    _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(11, _M0IPC14char4CharPB4Show10to__string(c), i));
                                    i = i + 1 | 0;
                                  } else {
                                    error = `无法识别的字符 \`${_M0IPC14char4CharPB4Show10to__string(c)}\`（位置 ${_M0MPC13int3Int18to__string_2einner(i, 10)}）`;
                                    i = n;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(tokens, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Token(12, "", n));
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10LexOutcome(tokens, error);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5parse(source) {
  const lexed = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query3lex(source);
  const _p = lexed.error;
  const _p$2 = "";
  if (!(_p === _p$2)) {
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11ParseResult4PErr(lexed.error);
  }
  const parser = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser3new(lexed.tokens);
  const query = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Parser12parse__query(parser);
  const _p$3 = parser.error;
  const _p$4 = "";
  if (!(_p$3 === _p$4)) {
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11ParseResult4PErr(parser.error);
  } else {
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11ParseResult3POk(query);
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex5empty() {
  const _tmp = [];
  const _bind = [];
  const _tmp$2 = _M0MPB3Map3MapGsRPB5ArrayGsEE(new _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(_bind, 0, 0), undefined);
  const _bind$2 = [];
  const _tmp$3 = _M0MPB3Map3MapGsRPB5ArrayGsEE(new _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const _tmp$4 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$3, 0, 0), undefined);
  const _bind$4 = [];
  const _tmp$5 = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$4, 0, 0), undefined);
  const _bind$5 = [];
  const _tmp$6 = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$5, 0, 0), undefined);
  const _bind$6 = [];
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex(_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, true, _M0MPB3Map3MapGsRPB3MapGsiEE(new _M0TPB9ArrayViewGUsRPB3MapGsiEEE(_bind$6, 0, 0), undefined));
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex3new(vault) {
  const nodes = [];
  const _bind = [];
  const edges = _M0MPB3Map3MapGsRPB5ArrayGsEE(new _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(_bind, 0, 0), undefined);
  const _bind$2 = [];
  const reverse = _M0MPB3Map3MapGsRPB5ArrayGsEE(new _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const in_deg = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$3, 0, 0), undefined);
  const _bind$4 = [];
  const out_deg = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$4, 0, 0), undefined);
  const _bind$5 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5notes(vault);
  const _bind$6 = _bind$5.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$6) {
      const entry = _bind$5[_];
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(nodes, entry.rel);
      _M0MPB3Map3setGsRPB5ArrayGsEE(edges, entry.rel, []);
      _M0MPB3Map3setGsRPB5ArrayGsEE(reverse, entry.rel, []);
      _M0MPB3Map3setGsiE(in_deg, entry.rel, 0);
      _M0MPB3Map3setGsiE(out_deg, entry.rel, 0);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$7 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5notes(vault);
  const _bind$8 = _bind$7.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$8) {
      const entry = _bind$7[_];
      const _bind$9 = [];
      const seen = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$9, 0, 0), undefined);
      const _bind$10 = entry.links;
      const _bind$11 = _bind$10.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$11) {
          const link = _bind$10[_$2];
          const _bind$12 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault7resolve(vault, entry.rel, link.target);
          if (_bind$12 === undefined) {
          } else {
            const _Some = _bind$12;
            const _target_rel = _Some;
            let _tmp$4;
            const _p = entry.rel;
            if (!(_target_rel === _p)) {
              _tmp$4 = !_M0MPB3Map8containsGsuE(seen, _target_rel);
            } else {
              _tmp$4 = false;
            }
            if (_tmp$4) {
              const _bind$13 = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9FileEntryE(vault.files, _target_rel);
              if (_bind$13 === undefined) {
              } else {
                const _Some$2 = _bind$13;
                const _target = _Some$2;
                if (_M0IP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault8FileKindPB2Eq5equal(_target.kind, 0)) {
                  _M0MPB3Map3setGsuE(seen, _target_rel, undefined);
                  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_M0MPB3Map16get__or__defaultGsRPB5ArrayGsEE(edges, entry.rel, []), _target_rel);
                  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_M0MPB3Map16get__or__defaultGsRPB5ArrayGsEE(reverse, _target_rel, []), entry.rel);
                  _M0MPB3Map3setGsiE(out_deg, entry.rel, _M0MPB3Map16get__or__defaultGsiE(out_deg, entry.rel, 0) + 1 | 0);
                  _M0MPB3Map3setGsiE(in_deg, _target_rel, _M0MPB3Map16get__or__defaultGsiE(in_deg, _target_rel, 0) + 1 | 0);
                }
              }
            }
          }
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$9 = [];
  const _tmp$3 = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$9, 0, 0), undefined);
  const _bind$10 = [];
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex(nodes, edges, reverse, in_deg, out_deg, _tmp$3, false, _M0MPB3Map3MapGsRPB3MapGsiEE(new _M0TPB9ArrayViewGUsRPB3MapGsiEEE(_bind$10, 0, 0), undefined));
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex3bfs(self, from) {
  const _bind = [];
  const dist = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind, 0, 0), undefined);
  const queue = [];
  _M0MPB3Map3setGsiE(dist, from, 0);
  _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(queue, from);
  let head = 0;
  while (true) {
    if (head < queue.length) {
      const node = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(queue, head);
      head = head + 1 | 0;
      const d = _M0MPB3Map16get__or__defaultGsiE(dist, node, 0);
      const _bind$2 = _M0MPB3Map16get__or__defaultGsRPB5ArrayGsEE(self.edges, node, []);
      const _bind$3 = _bind$2.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$3) {
          const next = _bind$2[_];
          if (!_M0MPB3Map8containsGsiE(dist, next)) {
            _M0MPB3Map3setGsiE(dist, next, d + 1 | 0);
            _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(queue, next);
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return dist;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex8distance(self, from, to) {
  if (from === to) {
    return 0;
  }
  const _bind = _M0MPB3Map3getGsRPB3MapGsiEE(self.dist_cache, from);
  let cached;
  if (_bind === undefined) {
    const map = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex3bfs(self, from);
    _M0MPB3Map3setGsRPB3MapGsiEE(self.dist_cache, from, map);
    cached = map;
  } else {
    const _Some = _bind;
    const _map = _Some;
    cached = _map;
  }
  if (cached === undefined) {
    return -1;
  } else {
    const _Some = cached;
    const _map = _Some;
    return _M0MPB3Map16get__or__defaultGsiE(_map, to, -1);
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex9reachable(self, from, to, max_depth) {
  const d = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex8distance(self, from, to);
  return d < 0 ? false : max_depth < 0 ? true : d <= max_depth;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex9in__cycle(self, path) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex14ensure__cycles(self);
  return _M0MPB3Map8containsGsuE(self.cycle_set, path);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7EvalCtx3new(graph, dataset, rel_alias) {
  const _bind = [];
  const index = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind, 0, 0), undefined);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < dataset.columns.length) {
      const column = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(dataset.columns, i);
      _M0MPB3Map3setGsiE(index, column, i);
      const _p = "";
      if (!(rel_alias === _p)) {
        _M0MPB3Map3setGsiE(index, `${rel_alias}.${column}`, i);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7EvalCtx(graph, index);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7EvalCtx6column(self, row, qualifier, name) {
  const key = qualifier === "" ? name : `${qualifier}.${name}`;
  const _bind = _M0MPB3Map3getGsiE(self.index, key);
  if (_bind === undefined) {
    return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _i >= 0 && _i < row.length ? _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(row, _i) : _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query9null__row(width) {
  const row = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < width) {
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(row, _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return row;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13numeric__pair(a, b) {
  _L: {
    const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__double(a);
    const _bind$2 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__double(b);
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _x = _Some._0;
      if (_bind$2.$tag === 1) {
        const _Some$2 = _bind$2;
        const _y = _Some$2._0;
        let both_int;
        if (a.$tag === 2) {
          if (b.$tag === 2) {
            both_int = true;
          } else {
            both_int = false;
          }
        } else {
          both_int = false;
        }
        return { _0: _x, _1: _y, _2: both_int };
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return undefined;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query9eval__add(a, b) {
  _L: {
    let y;
    _L$2: {
      switch (a.$tag) {
        case 2: {
          const _VInt = a;
          const _x = _VInt._0;
          switch (b.$tag) {
            case 2: {
              const _VInt$2 = b;
              const _y = _VInt$2._0;
              return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_x + _y | 0);
            }
            case 3: {
              const _VFloat = b;
              const _y$2 = _VFloat._0;
              return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(_x + 0 + _y$2);
            }
            case 4: {
              const _VStr = b;
              const _y$3 = _VStr._0;
              y = _y$3;
              break _L$2;
            }
            default: {
              break _L;
            }
          }
        }
        case 3: {
          const _VFloat$2 = a;
          const _x$2 = _VFloat$2._0;
          switch (b.$tag) {
            case 2: {
              const _VInt$3 = b;
              const _y$4 = _VInt$3._0;
              return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(_x$2 + (_y$4 + 0));
            }
            case 3: {
              const _VFloat$3 = b;
              const _y$5 = _VFloat$3._0;
              return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(_x$2 + _y$5);
            }
            case 4: {
              const _VStr$2 = b;
              const _y$6 = _VStr$2._0;
              y = _y$6;
              break _L$2;
            }
            default: {
              break _L;
            }
          }
        }
        case 4: {
          const _VStr$3 = a;
          const _x$3 = _VStr$3._0;
          return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(`${_x$3}${_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7display(b)}`);
        }
        default: {
          if (b.$tag === 4) {
            const _VStr$4 = b;
            const _y$7 = _VStr$4._0;
            y = _y$7;
            break _L$2;
          } else {
            break _L;
          }
        }
      }
    }
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(`${_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7display(a)}${y}`);
  }
  return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11eval__arith(op, a, b) {
  switch (op) {
    case "+": {
      return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query9eval__add(a, b);
    }
    case "-": {
      const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13numeric__pair(a, b);
      if (_bind === undefined) {
        return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x._0;
        const _y = _x._1;
        const _both_int = _x._2;
        return _both_int ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_M0MPC16double6Double7to__int(_x$2) - _M0MPC16double6Double7to__int(_y) | 0) : new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(_x$2 - _y);
      }
    }
    case "*": {
      const _bind$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13numeric__pair(a, b);
      if (_bind$2 === undefined) {
        return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _x$2 = _x._0;
        const _y = _x._1;
        const _both_int = _x._2;
        return _both_int ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(Math.imul(_M0MPC16double6Double7to__int(_x$2), _M0MPC16double6Double7to__int(_y)) | 0) : new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(_x$2 * _y);
      }
    }
    case "/": {
      const _bind$3 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13numeric__pair(a, b);
      if (_bind$3 === undefined) {
        return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x._0;
        const _y = _x._1;
        return _y === 0 ? _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__ : new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(_x$2 / _y);
      }
    }
    case "%": {
      _L: {
        if (a.$tag === 2) {
          const _VInt = a;
          const _x = _VInt._0;
          if (b.$tag === 2) {
            const _VInt$2 = b;
            const _y = _VInt$2._0;
            return _y === 0 ? _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__ : new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_x % _y | 0);
          } else {
            break _L;
          }
        } else {
          break _L;
        }
      }
      return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
    }
    default: {
      return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16aggregate__count(ctx, args, distinct, row, group) {
  let rows;
  if (group.$tag === 1) {
    const _Some = group;
    rows = _Some._0;
  } else {
    rows = [row];
  }
  if (args.length === 0) {
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(rows.length);
  }
  const _bind = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0);
  let star;
  if (_bind.$tag === 7) {
    star = true;
  } else {
    star = false;
  }
  if (star) {
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(rows.length);
  }
  let count = 0;
  const _bind$2 = [];
  const seen = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$2, 0, 0), undefined);
  const _bind$3 = rows.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const r = rows[_];
      const value = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), r, _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__);
      if (!_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8is__null(value)) {
        if (distinct) {
          const key = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value3key(value);
          if (!_M0MPB3Map8containsGsuE(seen, key)) {
            _M0MPB3Map3setGsuE(seen, key, undefined);
            count = count + 1 | 0;
          }
        } else {
          count = count + 1 | 0;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(count);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, expr, row, group) {
  switch (expr.$tag) {
    case 0: {
      const _ELit = expr;
      return _ELit._0;
    }
    case 1: {
      const _ECol = expr;
      const _q = _ECol._0;
      const _c = _ECol._1;
      return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7EvalCtx6column(ctx, row, _q, _c);
    }
    case 2: {
      const _EFunc = expr;
      const _name = _EFunc._0;
      const _args = _EFunc._1;
      const _distinct = _EFunc._2;
      return _name === "count" ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query16aggregate__count(ctx, _args, _distinct, row, group) : _name === "sum" ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14aggregate__sum(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_args, 0), row, group, false) : _name === "avg" ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14aggregate__sum(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_args, 0), row, group, true) : _name === "min" ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query17aggregate__minmax(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_args, 0), row, group, false) : _name === "max" ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query17aggregate__minmax(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_args, 0), row, group, true) : _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query18eval__scalar__func(ctx, _name, _args, row, group);
    }
    case 3: {
      const _EBinary = expr;
      const _op = _EBinary._0;
      const _a = _EBinary._1;
      const _b = _EBinary._2;
      if (_op === "AND") {
        return !_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6truthy(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _a, row, group)) ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__exprN6constrS4415 : new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6truthy(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _b, row, group)));
      } else {
        if (_op === "OR") {
          return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6truthy(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _a, row, group)) ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__exprN6constrS4416 : new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6truthy(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _b, row, group)));
        } else {
          const left = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _a, row, group);
          const right = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _b, row, group);
          if (_op === "=") {
            return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6equals(left, right));
          } else {
            if (_op === "!=" || _op === "<>") {
              return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(!_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6equals(left, right));
            } else {
              if (_op === "<" || (_op === "<=" || (_op === ">" || _op === ">="))) {
                const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compare(left, right);
                if (_bind === undefined) {
                  return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__exprN6constrS4417;
                } else {
                  const _Some = _bind;
                  const _c$2 = _Some;
                  return _op === "<" ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_c$2 < 0) : _op === "<=" ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_c$2 <= 0) : _op === ">" ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_c$2 > 0) : new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_c$2 >= 0);
                }
              } else {
                return _op === "LIKE" ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11like__match(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(left), _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(right))) : _op === "CONTAINS" ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8contains(left, right)) : _op === "IN" ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8contains(right, left)) : _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11eval__arith(_op, left, right);
              }
            }
          }
        }
      }
    }
    case 4: {
      const _EUnary = expr;
      const _op$2 = _EUnary._0;
      const _a$2 = _EUnary._1;
      const value = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _a$2, row, group);
      if (_op$2 === "NOT") {
        return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(!_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6truthy(value));
      } else {
        if (_op$2 === "NEG") {
          switch (value.$tag) {
            case 2: {
              const _VInt = value;
              const _i = _VInt._0;
              return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(-_i | 0);
            }
            case 3: {
              const _VFloat = value;
              const _f = _VFloat._0;
              return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(-_f);
            }
            default: {
              return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
            }
          }
        } else {
          return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
        }
      }
    }
    case 5: {
      const _EIsNull = expr;
      const _a$3 = _EIsNull._0;
      const _negate = _EIsNull._1;
      const value$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _a$3, row, group);
      return _negate ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(!_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8is__null(value$2)) : new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8is__null(value$2));
    }
    case 6: {
      const _EList = expr;
      const _items = _EList._0;
      const out = [];
      const _bind = _items.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const item = _items[_];
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7display(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, item, row, group)));
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VList(out);
    }
    case 7: {
      return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
    }
    default: {
      return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query17aggregate__minmax(ctx, arg, row, group, want_max) {
  let rows;
  if (group.$tag === 1) {
    const _Some = group;
    rows = _Some._0;
  } else {
    rows = [row];
  }
  let best = _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
  let has = false;
  const _bind = rows.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const r = rows[_];
      const value = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, arg, r, _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__);
      if (!_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8is__null(value)) {
        if (!has) {
          best = value;
          has = true;
        } else {
          const _bind$2 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compare(value, best);
          if (_bind$2 === undefined) {
          } else {
            const _Some = _bind$2;
            const _c = _Some;
            if (want_max && _c > 0 || !want_max && _c < 0) {
              best = value;
            }
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return best;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14aggregate__sum(ctx, arg, row, group, want_avg) {
  let rows;
  if (group.$tag === 1) {
    const _Some = group;
    rows = _Some._0;
  } else {
    rows = [row];
  }
  let any = false;
  let all_int = true;
  let int_sum = 0;
  let float_sum = 0;
  const _bind = rows.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const r = rows[_];
      const value = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, arg, r, _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__);
      switch (value.$tag) {
        case 2: {
          const _VInt = value;
          const _i = _VInt._0;
          any = true;
          int_sum = int_sum + _i | 0;
          float_sum = float_sum + (_i + 0);
          break;
        }
        case 3: {
          const _VFloat = value;
          const _f = _VFloat._0;
          any = true;
          all_int = false;
          float_sum = float_sum + _f;
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!any) {
    return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
  }
  if (want_avg) {
    let n = 0;
    const _bind$2 = rows.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$2) {
        const r = rows[_];
        const value = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, arg, r, _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__);
        if (!_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8is__null(value)) {
          n = n + 1 | 0;
        }
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const count = n;
    return count === 0 ? _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__ : new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(float_sum / (count + 0));
  } else {
    return all_int ? new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(int_sum) : new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(float_sum);
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query18eval__scalar__func(ctx, name, args, row, group) {
  _L: {
    switch (name) {
      case "reachable": {
        break _L;
      }
      case "distance": {
        break _L;
      }
      case "in_cycle": {
        break _L;
      }
      case "indegree": {
        break _L;
      }
      case "outdegree": {
        break _L;
      }
      case "degree": {
        break _L;
      }
      case "lower": {
        const value = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group);
        return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(_M0MPC16string6String9to__lower(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(value)));
      }
      case "upper": {
        const value$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group);
        return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VStr(_M0MPC16string6String9to__upper(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(value$2)));
      }
      case "length": {
        const value$3 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group);
        if (value$3.$tag === 5) {
          const _VList = value$3;
          const _items = _VList._0;
          return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_items.length);
        } else {
          return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_M0MPC16string6String20char__length_2einner(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(value$3), 0, undefined));
        }
      }
      case "abs": {
        const value$4 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group);
        switch (value$4.$tag) {
          case 2: {
            const _VInt = value$4;
            const _i = _VInt._0;
            return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_i < 0 ? -_i | 0 : _i);
          }
          case 3: {
            const _VFloat = value$4;
            const _f = _VFloat._0;
            return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6VFloat(_f < 0 ? -_f : _f);
          }
          default: {
            return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
          }
        }
      }
      case "coalesce": {
        let result = _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
        const _bind = args.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind) {
            const arg = args[_];
            const value$5 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, arg, row, group);
            if (!_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8is__null(value$5)) {
              result = value$5;
              break;
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return result;
      }
      case "contains": {
        const a = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group);
        const b = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 1), row, group);
        return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value8contains(a, b));
      }
      case "like": {
        const a$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group);
        const b$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 1), row, group);
        return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11like__match(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(a$2), _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(b$2)));
      }
      case "startswith": {
        const a$3 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group);
        const b$3 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 1), row, group);
        const _tmp$2 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(a$3);
        const _bind$2 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(b$3);
        return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MPC16string6String11has__prefix(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
      }
      case "endswith": {
        const a$4 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group);
        const b$4 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 1), row, group);
        const _tmp$3 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(a$4);
        const _bind$3 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(b$4);
        return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MPC16string6String11has__suffix(_tmp$3, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)));
      }
      default: {
        return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
      }
    }
  }
  return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query17eval__graph__func(ctx, name, args, row, group);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query17eval__graph__func(ctx, name, args, row, group) {
  const arg0 = args.length > 0 ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group) : _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
  switch (name) {
    case "indegree": {
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_M0MPB3Map16get__or__defaultGsiE(ctx.graph.in_deg, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(arg0), 0));
    }
    case "outdegree": {
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_M0MPB3Map16get__or__defaultGsiE(ctx.graph.out_deg, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(arg0), 0));
    }
    case "degree": {
      const path = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(arg0);
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_M0MPB3Map16get__or__defaultGsiE(ctx.graph.in_deg, path, 0) + _M0MPB3Map16get__or__defaultGsiE(ctx.graph.out_deg, path, 0) | 0);
    }
    case "in_cycle": {
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex9in__cycle(ctx.graph, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(arg0)));
    }
    case "distance": {
      const from = args.length > 0 ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group) : _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
      const to = args.length > 1 ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 1), row, group) : _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value4VInt(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex8distance(ctx.graph, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(from), _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(to)));
    }
    case "reachable": {
      const from$2 = args.length > 0 ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 0), row, group) : _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
      const to$2 = args.length > 1 ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 1), row, group) : _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
      const depth = args.length > 2 ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(args, 2), row, group) : _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
      let limit;
      if (depth.$tag === 2) {
        const _VInt = depth;
        limit = _VInt._0;
      } else {
        limit = -1;
      }
      return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VBool(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex9reachable(ctx.graph, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(from$2), _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value10as__string(to$2), limit));
    }
    default: {
      return _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value5VNull__;
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10group__key(ctx, group_by, row) {
  const parts = [];
  const _bind = group_by.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const expr = group_by[_];
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(parts, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value3key(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, expr, row, _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__)));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15array5Array4joinGsE(parts, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10group__keyN6recordS4548);
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query26expr__functions__for__eval(expr, out) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    switch (expr$2.$tag) {
      case 2: {
        const _EFunc = expr$2;
        const _name = _EFunc._0;
        const _args = _EFunc._1;
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, _name);
        const _bind = _args.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind) {
            const arg = _args[_];
            _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query26expr__functions__for__eval(arg, out);
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
      case 3: {
        const _EBinary = expr$2;
        const _a = _EBinary._1;
        const _b = _EBinary._2;
        _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query26expr__functions__for__eval(_a, out);
        _tmp = _b;
        continue _L;
      }
      case 4: {
        const _EUnary = expr$2;
        const _a$2 = _EUnary._1;
        _tmp = _a$2;
        continue _L;
      }
      case 5: {
        const _EIsNull = expr$2;
        const _a$3 = _EIsNull._0;
        _tmp = _a$3;
        continue _L;
      }
      case 6: {
        const _EList = expr$2;
        const _items = _EList._0;
        const _bind$2 = _items.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$2) {
            const item = _items[_];
            _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query26expr__functions__for__eval(item, out);
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
      default: {
        return;
      }
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12needs__graph(query) {
  const relation = _M0MPC16string6String9to__lower(query.relation);
  if (relation === "note" || (relation === "orphan" || relation === "cycle")) {
    return true;
  }
  const funcs = [];
  const _bind = query.items;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const item = _bind[_];
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query26expr__functions__for__eval(item.expr, funcs);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = query.where_expr;
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _expr = _Some;
    _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query26expr__functions__for__eval(_expr, funcs);
  }
  const _bind$4 = query.having;
  if (_bind$4 === undefined) {
  } else {
    const _Some = _bind$4;
    const _expr = _Some;
    _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query26expr__functions__for__eval(_expr, funcs);
  }
  const _bind$5 = query.order_by;
  const _bind$6 = _bind$5.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$6) {
      const order = _bind$5[_];
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query26expr__functions__for__eval(order.expr, funcs);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$7 = funcs.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$7) {
      const name = funcs[_];
      if (name === "reachable" || (name === "distance" || (name === "in_cycle" || (name === "indegree" || (name === "outdegree" || name === "degree"))))) {
        return true;
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13expand__items(query, dataset) {
  const items = [];
  const _bind = query.items;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const item = _bind[_];
      const _bind$3 = item.expr;
      if (_bind$3.$tag === 7) {
        const _bind$4 = dataset.columns;
        const _bind$5 = _bind$4.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$5) {
            const column = _bind$4[_$2];
            _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(items, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10SelectItem(new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query4Expr4ECol("", column), column));
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(items, item);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return items;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11expr__label(expr) {
  switch (expr.$tag) {
    case 0: {
      return "value";
    }
    case 1: {
      const _ECol = expr;
      return _ECol._1;
    }
    case 2: {
      const _EFunc = expr;
      return _EFunc._0;
    }
    case 3: {
      const _EBinary = expr;
      const _op = _EBinary._0;
      return _M0MPC16string6String9to__lower(_op);
    }
    case 4: {
      const _EUnary = expr;
      const _op$2 = _EUnary._0;
      return _M0MPC16string6String9to__lower(_op$2);
    }
    case 5: {
      return "is_null";
    }
    case 6: {
      return "list";
    }
    case 7: {
      return "*";
    }
    default: {
      return "error";
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13output__names(items) {
  const names = [];
  const _bind = items.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const item = items[_];
      let base;
      const _p = item.name;
      const _p$2 = "";
      if (!(_p === _p$2)) {
        base = item.name;
      } else {
        base = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11expr__label(item.expr);
      }
      let name = base;
      let suffix = 2;
      while (true) {
        if (_M0MPC15array5Array8containsGsE(names, name)) {
          name = `${base}_${_M0MPC13int3Int18to__string_2einner(suffix, 10)}`;
          suffix = suffix + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(names, name);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return names;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query18build__order__keys(ctx, query, aliases, row, group) {
  const keys = [];
  const _bind = query.order_by;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const order = _bind[_];
      const expanded = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(order.expr, aliases);
      _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(keys, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, expanded, row, group));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return keys;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14distinct__rows(rows) {
  const out = [];
  const _bind = [];
  const seen = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind, 0, 0), undefined);
  const _bind$2 = rows.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const row = rows[_];
      const parts = [];
      const _bind$3 = row.values;
      const _bind$4 = _bind$3.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$4) {
          const value = _bind$3[_$2];
          _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(parts, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value3key(value));
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const key = _M0MPC15array5Array4joinGsE(parts, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14distinct__rowsN6recordS4647);
      if (!_M0MPB3Map8containsGsuE(seen, key)) {
        _M0MPB3Map3setGsuE(seen, key, undefined);
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, row);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10run__query(vault, query) {
  const err = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15validate__query(query);
  const _p = "";
  if (!(err === _p)) {
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10RunOutcome4RErr(err);
  }
  const graph = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12needs__graph(query) ? _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex3new(vault) : _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10GraphIndex5empty();
  const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15build__relation(vault, graph, _M0MPC16string6String9to__lower(query.relation));
  let dataset;
  if (_bind === undefined) {
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10RunOutcome4RErr(`未知关系 \`${query.relation}\``);
  } else {
    const _Some = _bind;
    dataset = _Some;
  }
  const ctx = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query7EvalCtx3new(graph, dataset, query.rel_alias);
  const items = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13expand__items(query, dataset);
  const names = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13output__names(items);
  const aliases = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14query__aliases(query);
  const _bind$2 = query.having;
  let having_expr;
  if (_bind$2 === undefined) {
    having_expr = undefined;
  } else {
    const _Some = _bind$2;
    const _expr = _Some;
    having_expr = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19substitute__aliases(_expr, aliases);
  }
  const filtered = [];
  const _bind$3 = dataset.rows;
  const _bind$4 = _bind$3.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const row = _bind$3[_];
      const _bind$5 = query.where_expr;
      if (_bind$5 === undefined) {
        _M0MPC15array5Array4pushGRPB5ArrayGbEE(filtered, row);
      } else {
        const _Some = _bind$5;
        const _expr = _Some;
        if (_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6truthy(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _expr, row, _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__))) {
          _M0MPC15array5Array4pushGRPB5ArrayGbEE(filtered, row);
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const has_agg = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15query__has__agg(query);
  const grouped = has_agg || query.group_by.length > 0;
  const out = [];
  let seq = 0;
  if (grouped) {
    if (query.group_by.length === 0) {
      const rep = filtered.length > 0 ? _M0MPC15array5Array2atGRPB5ArrayGbEE(filtered, 0) : _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query9null__row(dataset.columns.length);
      let keep;
      if (having_expr === undefined) {
        keep = true;
      } else {
        const _Some = having_expr;
        const _expr = _Some;
        keep = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6truthy(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _expr, rep, new _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4Some(filtered)));
      }
      if (keep) {
        const values = [];
        const _bind$5 = items.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind$5) {
            const item = items[_];
            _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(values, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, item.expr, rep, new _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4Some(filtered)));
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const keys = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query18build__order__keys(ctx, query, aliases, rep, new _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4Some(filtered));
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6OutRow(values, keys, seq));
      }
    } else {
      const _bind$5 = [];
      const groups = _M0MPB3Map3MapGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(new _M0TPB9ArrayViewGUsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEEE(_bind$5, 0, 0), undefined);
      const group_order = [];
      const _bind$6 = [];
      const reps = _M0MPB3Map3MapGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(new _M0TPB9ArrayViewGUsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(_bind$6, 0, 0), undefined);
      const _bind$7 = filtered.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$7) {
          const row = filtered[_];
          const key = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10group__key(ctx, query.group_by, row);
          const _bind$8 = _M0MPB3Map3getGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(groups, key);
          if (_bind$8.$tag === 1) {
            const _Some = _bind$8;
            const _members = _Some._0;
            _M0MPC15array5Array4pushGRPB5ArrayGbEE(_members, row);
          } else {
            _M0MPB3Map3setGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(groups, key, [row]);
            _M0MPB3Map3setGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(reps, key, row);
            _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(group_order, key);
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _bind$8 = group_order.length;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$8) {
          const key = group_order[_];
          const _bind$9 = _M0MPB3Map3getGsRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE(groups, key);
          let members;
          if (_bind$9.$tag === 1) {
            const _Some = _bind$9;
            members = _Some._0;
          } else {
            members = [];
          }
          const _bind$10 = _M0MPB3Map3getGsRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEE(reps, key);
          let rep;
          if (_bind$10.$tag === 1) {
            const _Some = _bind$10;
            rep = _Some._0;
          } else {
            rep = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query9null__row(dataset.columns.length);
          }
          let keep;
          if (having_expr === undefined) {
            keep = true;
          } else {
            const _Some = having_expr;
            const _expr = _Some;
            keep = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value6truthy(_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, _expr, rep, new _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4Some(members)));
          }
          if (keep) {
            const values = [];
            const _bind$11 = items.length;
            let _tmp$4 = 0;
            while (true) {
              const _$2 = _tmp$4;
              if (_$2 < _bind$11) {
                const item = items[_$2];
                _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(values, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, item.expr, rep, new _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4Some(members)));
                _tmp$4 = _$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const keys = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query18build__order__keys(ctx, query, aliases, rep, new _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4Some(members));
            _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6OutRow(values, keys, seq));
            seq = seq + 1 | 0;
          }
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  } else {
    const _bind$5 = filtered.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$5) {
        const row = filtered[_];
        const values = [];
        const _bind$6 = items.length;
        let _tmp$3 = 0;
        while (true) {
          const _$2 = _tmp$3;
          if (_$2 < _bind$6) {
            const item = items[_$2];
            _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(values, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10eval__expr(ctx, item.expr, row, _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__));
            _tmp$3 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const keys = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query18build__order__keys(ctx, query, aliases, row, _M0DTPC16option6OptionGRPB5ArrayGRPB5ArrayGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5ValueEEE4None__);
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6OutRow(values, keys, seq));
        seq = seq + 1 | 0;
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const deduped = query.distinct ? _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14distinct__rows(out) : out;
  const sorted = _M0MPC15array5Array4copyGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6OutRowE(deduped);
  _M0MPC15array5Array8sort__byGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault10FolderStatE(sorted, (a, b) => {
    let result = 0;
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < a.keys.length && i < b.keys.length) {
        const _bind$5 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5Value7compare(_M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(a.keys, i), _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(b.keys, i));
        let c;
        if (_bind$5 === undefined) {
          c = 0;
        } else {
          const _Some = _bind$5;
          c = _Some;
        }
        if (c !== 0) {
          result = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(query.order_by, i).desc ? -c | 0 : c;
          break;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return result !== 0 ? result : a.seq - b.seq | 0;
  });
  const total_rows = sorted.length;
  const limit = query.limit >= 0 && sorted.length > query.limit ? query.limit : sorted.length;
  const rows = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < limit) {
      _M0MPC15array5Array4pushGRPB5ArrayGbEE(rows, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(sorted, i).values);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10RunOutcome3ROk(new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11QueryResult(names, rows, total_rows, dataset.rows.length));
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine3new() {
  const _bind = [];
  return new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine(_M0MPB3Map3MapGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(new _M0TPB9ArrayViewGUsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultEE(_bind, 0, 0), undefined), 0, 0);
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine5reset(self) {
  _M0MPB3Map5clearGssE(self.cache);
  self.hits = 0;
  self.misses = 0;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15expr__functions(expr, out) {
  let _tmp = expr;
  _L: while (true) {
    const expr$2 = _tmp;
    switch (expr$2.$tag) {
      case 2: {
        const _EFunc = expr$2;
        const _name = _EFunc._0;
        const _args = _EFunc._1;
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(out, _name);
        const _bind = _args.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind) {
            const arg = _args[_];
            _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15expr__functions(arg, out);
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
      case 3: {
        const _EBinary = expr$2;
        const _a = _EBinary._1;
        const _b = _EBinary._2;
        _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15expr__functions(_a, out);
        _tmp = _b;
        continue _L;
      }
      case 4: {
        const _EUnary = expr$2;
        const _a$2 = _EUnary._1;
        _tmp = _a$2;
        continue _L;
      }
      case 5: {
        const _EIsNull = expr$2;
        const _a$3 = _EIsNull._0;
        _tmp = _a$3;
        continue _L;
      }
      case 6: {
        const _EList = expr$2;
        const _items = _EList._0;
        const _bind$2 = _items.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$2) {
            const item = _items[_];
            _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15expr__functions(item, out);
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
      default: {
        return;
      }
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15is__graph__func(name) {
  return name === "reachable" || (name === "distance" || (name === "in_cycle" || (name === "indegree" || (name === "outdegree" || name === "degree"))));
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19query__dependencies(query) {
  const deps = [_M0MPC16string6String9to__lower(query.relation)];
  const funcs = [];
  const _bind = query.items;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const item = _bind[_];
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15expr__functions(item.expr, funcs);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = query.where_expr;
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _expr = _Some;
    _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15expr__functions(_expr, funcs);
  }
  const _bind$4 = query.having;
  if (_bind$4 === undefined) {
  } else {
    const _Some = _bind$4;
    const _expr = _Some;
    _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15expr__functions(_expr, funcs);
  }
  const _bind$5 = query.order_by;
  const _bind$6 = _bind$5.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$6) {
      const order = _bind$5[_];
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15expr__functions(order.expr, funcs);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$7 = funcs.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$7) {
      const name = funcs[_];
      if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15is__graph__func(name) && !_M0MPC15array5Array8containsGsE(deps, "graph")) {
        _M0MPC15array5Array4pushGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(deps, "graph");
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return deps;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15relation__slots(name) {
  switch (name) {
    case "note": {
      return [_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__note, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__link, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11change__tag, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__name];
    }
    case "file": {
      return [_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__file, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__name];
    }
    case "link": {
      return [_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__link, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__name];
    }
    case "tag": {
      return [_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault11change__tag, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__name];
    }
    case "unresolved": {
      return [_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__link, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__name];
    }
    case "ambiguous": {
      return [_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__link, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__name];
    }
    case "orphan": {
      return [_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__link, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__name];
    }
    case "cycle": {
      return [_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__link, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__name];
    }
    case "graph": {
      return [_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__link, _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12change__name];
    }
    default: {
      return [];
    }
  }
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query17dependency__slots(deps) {
  const slots = [];
  const _bind = deps.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const dep = deps[_];
      const _bind$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query15relation__slots(dep);
      const _bind$3 = _bind$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$3) {
          const slot = _bind$2[_$2];
          if (!_M0MPC15array5Array8containsGiE(slots, slot)) {
            _M0MPC15array5Array4pushGiE(slots, slot);
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return slots;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12seq__matches(cached, current, slots) {
  const _bind = slots.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const slot = slots[_];
      if (slot < 0 || (slot >= cached.length || slot >= current.length)) {
        return false;
      }
      if (_M0MPC15array5Array2atGiE(cached, slot) !== _M0MPC15array5Array2atGiE(current, slot)) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine3run(self, vault, source, use_cache) {
  const _bind = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query5parse(source);
  let query;
  if (_bind.$tag === 1) {
    const _PErr = _bind;
    const _err = _PErr._0;
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13EngineOutcome4EErr(_err);
  } else {
    const _POk = _bind;
    query = _POk._0;
  }
  const deps = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query19query__dependencies(query);
  const slots = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query17dependency__slots(deps);
  const current = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault16change__snapshot(vault);
  if (use_cache) {
    const _bind$2 = _M0MPB3Map3getGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(self.cache, source);
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _entry = _Some;
      if (_M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12seq__matches(_entry.seq, current, slots)) {
        self.hits = self.hits + 1 | 0;
        return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13EngineOutcome3EOk(new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13QueryResponse(_entry.result, true, deps));
      }
    }
  }
  self.misses = self.misses + 1 | 0;
  const _bind$2 = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query10run__query(vault, query);
  if (_bind$2.$tag === 0) {
    const _ROk = _bind$2;
    const _result = _ROk._0;
    const _p = self.cache;
    if (_p.size >= 64) {
      _M0MPB3Map5clearGssE(self.cache);
    }
    _M0MPB3Map3setGsRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResultE(self.cache, source, new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query12CachedResult(_result, current, deps));
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13EngineOutcome3EOk(new _M0TP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13QueryResponse(_result, false, deps));
  } else {
    const _RErr = _bind$2;
    const _err = _RErr._0;
    return new _M0DTP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query13EngineOutcome4EErr(_err);
  }
}
function _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine11stats__json(self, vault) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(256);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\"hits\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(self.hits, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"misses\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(self.misses, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"cacheSize\":");
  const _p = self.cache;
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(_p.size, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"revision\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(vault.revision, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"changeSeq\":[");
  const seq = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault16change__snapshot(vault);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < seq.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(_M0MPC15array5Array2atGiE(seq, i), 10));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "]}");
  return sb.val;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14response__json(response) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(1024);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\"ok\":true,\"cached\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, response.cached ? "true" : "false");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"dependencies\":[");
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < response.deps.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(response.deps, i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "],\"columns\":[");
  const result = response.result;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < result.columns.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(result.columns, i));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "],\"rows\":[");
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < result.rows.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 91);
      const row = _M0MPC15array5Array2atGRPB5ArrayGbEE(result.rows, i);
      let _tmp$4 = 0;
      while (true) {
        const j = _tmp$4;
        if (j < row.length) {
          if (j > 0) {
            _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
          }
          _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query18write__value__json(sb, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(row, j));
          _tmp$4 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 93);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "],\"rowCount\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(result.rows.length, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"totalRows\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(result.total_rows, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"scanned\":");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(result.scanned, 10));
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 125);
  return sb.val;
}
function _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11error__json(message) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(128);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\"ok\":false,\"error\":");
  _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, message);
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 125);
  return sb.val;
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13core__version() {
  return "2.1.0";
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16noteql__selftest() {
  const vault = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault3new();
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12upsert__note(vault, "a.md", 1, 1, "[[b]] #draft");
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12upsert__note(vault, "b.md", 1, 2, "[[a]] #done");
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12upsert__note(vault, "c.md", 1, 3, "[[missing]]");
  const engine = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine3new();
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine3run(engine, vault, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16noteql__selftestN6sourceS4867, true);
  if (_bind.$tag === 1) {
    const _EErr = _bind;
    const _err = _EErr._0;
    return `fail:${_err}`;
  } else {
    const _EOk = _bind;
    const _first = _EOk._0;
    if (_first.result.rows.length !== 1) {
      return `fail:rows:${_M0MPC13int3Int18to__string_2einner(_first.result.rows.length, 10)}`;
    }
    const _bind$2 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine3run(engine, vault, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16noteql__selftestN6sourceS4867, true);
    if (_bind$2.$tag === 1) {
      const _EErr = _bind$2;
      const _err = _EErr._0;
      return `fail:cached:${_err}`;
    } else {
      const _EOk$2 = _bind$2;
      const _second = _EOk$2._0;
      if (!_second.cached) {
        return "fail:cache-miss";
      } else {
        _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12upsert__note(vault, "c.md", 1, 4, "[[missing]] [[b]]");
        const _bind$3 = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine3run(engine, vault, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16noteql__selftestN6sourceS4867, true);
        if (_bind$3.$tag === 1) {
          const _EErr = _bind$3;
          const _err = _EErr._0;
          return `fail:after-edit:${_err}`;
        } else {
          const _EOk$3 = _bind$3;
          const _third = _EOk$3._0;
          return _third.cached ? "fail:stale" : "ok:1";
        }
      }
    }
  }
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16vault__add__note(rel, size, mtime, text) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12upsert__note(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault, rel, size, mtime, text);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12vault__reset() {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5clear(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph14core__selftest() {
  const doc = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15parse__markdown("[[b]] #tag");
  if (doc.links.length !== 1 || doc.tags.length !== 1) {
    return "fail:parse";
  }
  _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12vault__reset();
  _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16vault__add__note("a.md", 1, 0, "[[b]] #tag");
  _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16vault__add__note("b.md", 1, 0, "");
  const payload = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12build__graph(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault, 16, 0, "selftest");
  const nodes = payload.nodes.length;
  _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12vault__reset();
  const query_probe = _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16noteql__selftest();
  return nodes !== 2 ? `fail:graph:${_M0MPC13int3Int18to__string_2einner(nodes, 10)}` : !_M0MPC16string6String11has__prefix(query_probe, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph14core__selftestN6recordS4889) ? `fail:query:${query_probe}` : "ok:2";
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph21parse__markdown__json(text) {
  const doc = _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse15parse__markdown(text);
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(256);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\"links\":[");
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < doc.links.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      const link = _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(doc.links, i);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, "{\"target\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, link.target);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"raw\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, link.raw);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"title\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, link.title);
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"kind\":");
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph7mdparse8LinkKind5label(link.kind));
      _M0IPB13StringBuilderPB6Logger13write__string(sb, ",\"line\":");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPC13int3Int18to__string_2einner(link.line, 10));
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 125);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "],\"tags\":[");
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < doc.tags.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, 44);
      }
      _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault19write__json__string(sb, _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(doc.tags, i));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "]}");
  return sb.val;
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph22vault__add__attachment(rel, size, mtime) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault18upsert__attachment(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault, rel, size, mtime);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13vault__remove(rel) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault6remove(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault, rel);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12vault__count() {
  return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault5total(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph18vault__note__count() {
  return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault11note__count(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph19vault__build__graph(max_tags, generated_at, root_name) {
  return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault12GraphPayload16to__json__string(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault12build__graph(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault, max_tags, generated_at, root_name));
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph14vault__folders() {
  return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault17folders__to__json(_M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault7folders(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault));
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph14vault__resolve(from_rel, target) {
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault5Vault7resolve(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault, from_rel, target);
  if (_bind === undefined) {
    return "";
  } else {
    const _Some = _bind;
    return _Some;
  }
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11noteql__run(source, use_cache) {
  const _bind = _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine3run(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12core__engine, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault, source, use_cache !== 0);
  if (_bind.$tag === 0) {
    const _EOk = _bind;
    const _response = _EOk._0;
    return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query14response__json(_response);
  } else {
    const _EErr = _bind;
    const _err = _EErr._0;
    return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query11error__json(_err);
  }
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph17noteql__relations() {
  return _M0FP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query23relation__catalog__json();
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13noteql__stats() {
  return _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine11stats__json(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12core__engine, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11core__vault);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph20noteql__reset__cache() {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5query6Engine5reset(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12core__engine);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13layout__reset() {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim5reset(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph17layout__add__node(degree, radius) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim9add__node(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim, degree, radius);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph17layout__add__link(a, b) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim9add__link(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim, a, b);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12layout__seed(i, x, y) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim8seed__at(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim, i, x, y);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11layout__pin(i, x, y) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim3pin(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim, i, x, y);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13layout__unpin(i) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim5unpin(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim, i);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12layout__move(i, x, y) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim8move__to(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim, i, x, y);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12layout__step(alpha, rest, repulsion) {
  _M0MP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph6layout3Sim4step(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim, alpha, rest, repulsion);
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9layout__x(i) {
  return i >= 0 && i < _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim.nodes.length ? _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim.nodes, i).x : 0;
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9layout__y(i) {
  return i >= 0 && i < _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim.nodes.length ? _M0MPC15array5Array2atGRP36L1r0gn31noteql_2dmarkdowns_2din_2dgraph5vault9GraphLinkE(_M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim.nodes, i).y : 0;
}
function _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13layout__count() {
  return _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9core__sim.nodes.length;
}
export { _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13core__version as core_version, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16noteql__selftest as noteql_selftest, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph16vault__add__note as vault_add_note, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12vault__reset as vault_reset, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph14core__selftest as core_selftest, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph21parse__markdown__json as parse_markdown_json, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph22vault__add__attachment as vault_add_attachment, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13vault__remove as vault_remove, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12vault__count as vault_count, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph18vault__note__count as vault_note_count, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph19vault__build__graph as vault_build_graph, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph14vault__folders as vault_folders, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph14vault__resolve as vault_resolve, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11noteql__run as noteql_run, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph17noteql__relations as noteql_relations, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13noteql__stats as noteql_stats, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph20noteql__reset__cache as noteql_reset_cache, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13layout__reset as layout_reset, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph17layout__add__node as layout_add_node, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph17layout__add__link as layout_add_link, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12layout__seed as layout_seed, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph11layout__pin as layout_pin, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13layout__unpin as layout_unpin, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12layout__move as layout_move, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph12layout__step as layout_step, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9layout__x as layout_x, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph9layout__y as layout_y, _M0FP26L1r0gn31noteql_2dmarkdowns_2din_2dgraph13layout__count as layout_count }
