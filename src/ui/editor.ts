import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as childProcess from 'child_process';

export function applyLine(currentCode: string, newLine: string): string {
  if (currentCode === '') return newLine;
  return currentCode + '\n' + newLine;
}

export function isSubmitSignal(line: string): boolean {
  return line === '--submit' || line === ':submit';
}

export function buildEditorPrompt(functionSignature: string): string {
  return [
    '─'.repeat(60),
    'CODE EDITOR',
    'Type your solution below. Type "--submit" on a new line to submit.',
    '─'.repeat(60),
    '',
    functionSignature,
    '',
  ].join('\n');
}

export async function openEditor(initialCode: string): Promise<string> {
  const suffix = Math.random().toString(36).slice(2, 7);
  const tmpFile = path.join(os.tmpdir(), `interview-${suffix}.js`);

  fs.writeFileSync(tmpFile, initialCode);

  const editor = process.env.EDITOR ?? 'vi';
  childProcess.spawnSync(editor, [tmpFile], { stdio: 'inherit' });

  const code = fs.readFileSync(tmpFile, 'utf8') as string;
  fs.unlinkSync(tmpFile);

  return code;
}
