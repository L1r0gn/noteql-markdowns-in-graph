# NoteQL 查询示例

这些 `.nql` 文件可以直接用 CLI 批量执行：

```bash
node scripts/noteql.mjs --vault example-vault --queries queries
node scripts/noteql.mjs --vault example-vault --queries queries --format json
node scripts/noteql.mjs --vault example-vault --queries queries --format sarif
```

或者在 VS Code 里打开 NoteQL 查询面板，粘贴其中的查询。

| 文件 | 用途 |
| --- | --- |
| `unresolved.nql` | 断链清单，带行号 |
| `ambiguous.nql` | 同名文件导致的歧义链接 |
| `orphans.nql` | 孤立笔记 |
| `cycles.nql` | 引用环 |
| `drafts_without_backlinks.nql` | 草稿的入链体检 |
| `hub_notes.nql` | 枢纽笔记排行 |
| `folder_summary.nql` | 目录级统计 |
| `unreachable_from_index.nql` | 从首页不可达的笔记 |
| `reachable_from_index.nql` | 从首页可达的笔记与跳数 |
| `tag_usage.nql` | 标签使用频率 |

CLI 的 `--fail-on-results` 可以把体检类查询变成 CI 闸门：有结果时退出码为 2。
