import * as vscode from 'vscode';
import { GraphIndexer } from './indexer';
import { GraphPanel } from './graphPanel';
import { QueryPanel } from './queryPanel';

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  const output = vscode.window.createOutputChannel('Markdown Graph');
  context.subscriptions.push(output);
  output.appendLine('[graph] 扩展已激活');

  const indexer = new GraphIndexer(context, output);
  context.subscriptions.push(indexer);

  const status = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 90);
  status.name = 'Markdown 关系图谱';
  status.command = 'markdownsInGraph.show';
  status.text = '$(type-hierarchy) 图谱';
  status.tooltip = '打开 Markdown 关系图谱（Ctrl+Alt+G）';
  status.show();
  context.subscriptions.push(status);

  context.subscriptions.push(
    vscode.commands.registerCommand('markdownsInGraph.show', async () => {
      await GraphPanel.createOrShow(context, indexer, output);
    }),

    vscode.commands.registerCommand('markdownsInGraph.showLocal', async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor || editor.document.languageId !== 'markdown' || editor.document.uri.scheme !== 'file') {
        void vscode.window.showInformationMessage('请先打开一篇 Markdown 笔记，再查看它的局部图谱。');
        return;
      }
      await vscode.window.withProgress(
        { location: vscode.ProgressLocation.Window, title: '正在索引 Markdown 笔记…' },
        () => indexer.ensureReady()
      );
      const rel = indexer.toRel(editor.document.uri);
      if (!rel) {
        void vscode.window.showInformationMessage('当前文件不在工作区中，无法定位。');
        return;
      }
      const depth = vscode.workspace
        .getConfiguration('markdownsInGraph')
        .get<number>('localDepth', 1);
      await GraphPanel.createOrShow(context, indexer, output, { focus: rel, depth });
    }),

    vscode.commands.registerCommand('markdownsInGraph.showFolder', async (uri?: unknown) => {
      await vscode.window.withProgress(
        { location: vscode.ProgressLocation.Window, title: '正在索引 Markdown 笔记…' },
        () => indexer.ensureReady()
      );

      let rel: string | undefined;
      if (uri instanceof vscode.Uri) {
        rel = indexer.toRel(uri);
      }
      if (rel === undefined) {
        const picks = [
          {
            label: '$(root-folder) 整个工作区',
            description: `${indexer.fileCount} 篇笔记`,
            path: ''
          },
          ...indexer.listFolders().map((folder) => ({
            label: `$(folder) ${folder.path}`,
            description: `${folder.count} 篇笔记`,
            path: folder.path
          }))
        ];
        const chosen = await vscode.window.showQuickPick(picks, {
          placeHolder: '选择要展示的文件夹（包含其子文件夹）',
          matchOnDescription: true
        });
        if (!chosen) {
          return;
        }
        rel = chosen.path;
      }

      await GraphPanel.createOrShow(context, indexer, output, { folder: rel });
    }),

    vscode.commands.registerCommand('markdownsInGraph.query', async (initialQuery?: unknown) => {
      await QueryPanel.createOrShow(
        context,
        indexer,
        output,
        typeof initialQuery === 'string' ? initialQuery : undefined
      );
    }),

    vscode.commands.registerCommand('markdownsInGraph.refresh', async () => {
      await indexer.ensureReady();
      if (GraphPanel.current) {
        await GraphPanel.current.refresh();
      } else {
        await indexer.refresh(true);
        vscode.window.setStatusBarMessage(
          `$(check) 已重新索引 ${indexer.fileCount} 篇笔记`,
          2500
        );
      }
    })
  );

  // 当前编辑文件在图谱中高亮
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      GraphPanel.current?.postActiveFile(editor?.document.uri);
    })
  );

  // 工作区切换时通知面板刷新
  context.subscriptions.push(
    vscode.workspace.onDidChangeWorkspaceFolders(() => {
      void indexer.refresh(true);
    })
  );

  // 启动后预热索引（不阻塞激活），让首次打开图谱秒开
  setTimeout(() => {
    if (vscode.workspace.workspaceFolders?.length) {
      void indexer.ensureReady().then(() => {
        status.tooltip = `Markdown 关系图谱 · ${indexer.fileCount} 篇笔记（Ctrl+Alt+G）`;
      });
    }
  }, 1200);
}

export function deactivate(): void {
  // 由 context.subscriptions 负责释放
}
