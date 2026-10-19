/**
 * 轻量的 Markdown 双链 / 标准链接 / 标签解析器。
 *
 * 支持：
 *   [[笔记]]、[[笔记|别名]]、[[笔记#标题]]、[[笔记#^block]]、![[笔记]]
 *   [文本](笔记.md)、[文本](../dir/笔记.md#锚点)、![图片](assets/a.png)
 *   #行内标签、Frontmatter 中的 tags / tag / keywords
 *
 * 忽略：围栏代码块、行内代码、单行 HTML 注释、外部协议链接。
 */

export interface RawLink {
  /** 去掉 #锚点 与 |别名 之后的目标文本 */
  target: string;
  /** 原始匹配文本，便于调试 */
  raw: string;
  alias?: string;
  kind: 'wiki' | 'md' | 'embed';
  /** 1 基行号 */
  line: number;
}

export interface ParsedMarkdown {
  links: RawLink[];
  tags: string[];
}

const WIKI_RE = /(!?)\[\[([^\[\]\n]+?)\]\]/g;
const MD_RE = /(!?)\[([^\]\n]*)\]\(\s*<?([^)\s>]+)>?[^)\n]*\)/g;
const INLINE_TAG_RE = /(^|[\s>|，。、；：！？）】》」』])#([\p{L}\p{N}_\-/]+)/gu;
const FENCE_RE = /^\s{0,3}(`{3,}|~{3,})/;

function isExternal(target: string): boolean {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(target);
}

function collectLinks(line: string, lineNo: number, out: RawLink[]): void {
  WIKI_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = WIKI_RE.exec(line)) !== null) {
    const embed = m[1] === '!';
    const inner = m[2];
    const pipe = inner.indexOf('|');
    let targetPart = pipe >= 0 ? inner.slice(0, pipe) : inner;
    const alias = pipe >= 0 ? inner.slice(pipe + 1).trim() : undefined;
    const hash = targetPart.indexOf('#');
    if (hash >= 0) {
      targetPart = targetPart.slice(0, hash);
    }
    targetPart = targetPart.trim();
    if (!targetPart) {
      // [[#标题]] 这类同文件锚点链接不构成节点间连线
      continue;
    }
    out.push({
      target: targetPart,
      raw: m[0],
      alias: alias || undefined,
      kind: embed ? 'embed' : 'wiki',
      line: lineNo
    });
  }

  MD_RE.lastIndex = 0;
  while ((m = MD_RE.exec(line)) !== null) {
    const embed = m[1] === '!';
    let target = (m[3] || '').trim();
    if (!target || isExternal(target)) {
      continue;
    }
    const hash = target.indexOf('#');
    if (hash >= 0) {
      target = target.slice(0, hash);
    }
    const query = target.indexOf('?');
    if (query >= 0) {
      target = target.slice(0, query);
    }
    target = target.trim();
    if (!target || target === '.') {
      continue;
    }
    out.push({
      target,
      raw: m[0],
      kind: embed ? 'embed' : 'md',
      line: lineNo
    });
  }
}

function addTag(raw: string, tags: Set<string>): void {
  const value = raw
    .trim()
    .replace(/^["']/, '')
    .replace(/["']$/, '')
    .replace(/^#/, '')
    .trim();
  if (!value) {
    return;
  }
  if (/^\d+$/.test(value)) {
    return;
  }
  tags.add(value);
}

function collectInlineTags(line: string, tags: Set<string>): void {
  INLINE_TAG_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = INLINE_TAG_RE.exec(line)) !== null) {
    addTag(m[2], tags);
  }
}

function collectFrontmatterTags(lines: string[], tags: Set<string>): void {
  let inList = false;
  for (const line of lines) {
    const kv = /^\s*(tags?|keywords)\s*:\s*(.*)$/i.exec(line);
    if (kv) {
      const value = kv[2].trim();
      inList = value === '';
      if (!value) {
        continue;
      }
      if (value.startsWith('[')) {
        const inner = value.replace(/^\[/, '').replace(/\]$/, '');
        for (const part of inner.split(',')) {
          addTag(part, tags);
        }
      } else {
        for (const part of value.split(',')) {
          addTag(part, tags);
        }
      }
      continue;
    }
    if (inList) {
      const item = /^\s*-\s*(.+)$/.exec(line);
      if (item) {
        addTag(item[1], tags);
        continue;
      }
      if (line.trim() === '') {
        continue;
      }
      inList = false;
    }
  }
}

export function parseMarkdown(text: string): ParsedMarkdown {
  // 去掉 UTF-8 BOM，否则 Frontmatter 起止符无法识别
  const source = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  const lines = source.split(/\r\n|\r|\n/);
  const tags = new Set<string>();
  const links: RawLink[] = [];

  let start = 0;
  if (lines.length > 0 && lines[0].trim() === '---') {
    let end = -1;
    const limit = Math.min(lines.length, 400);
    for (let i = 1; i < limit; i++) {
      const t = lines[i].trim();
      if (t === '---' || t === '...') {
        end = i;
        break;
      }
    }
    if (end > 0) {
      collectFrontmatterTags(lines.slice(1, end), tags);
      start = end + 1;
    }
  }

  let fence: string | null = null;
  for (let i = start; i < lines.length; i++) {
    const line = lines[i];
    const fenceMatch = FENCE_RE.exec(line);
    if (fence) {
      if (
        fenceMatch &&
        fenceMatch[1].charAt(0) === fence.charAt(0) &&
        fenceMatch[1].length >= fence.length
      ) {
        fence = null;
      }
      continue;
    }
    if (fenceMatch) {
      fence = fenceMatch[1];
      continue;
    }
    const cleaned = line.replace(/`[^`\n]*`/g, ' ');
    if (!cleaned.trim()) {
      continue;
    }
    if (/^\s*<!--.*-->\s*$/.test(cleaned)) {
      continue;
    }
    collectLinks(cleaned, i + 1, links);
    collectInlineTags(cleaned, tags);
  }

  return { links, tags: Array.from(tags) };
}
