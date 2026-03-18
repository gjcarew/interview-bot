import * as readline from 'readline';

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
  process.stdout.write(buildEditorPrompt(initialCode));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let currentCode = initialCode;

  return new Promise((resolve) => {
    rl.on('line', (line) => {
      if (isSubmitSignal(line)) {
        rl.close();
        resolve(currentCode);
      } else {
        currentCode = applyLine(currentCode, line);
      }
    });

    rl.on('close', () => {
      resolve(currentCode);
    });
  });
}
