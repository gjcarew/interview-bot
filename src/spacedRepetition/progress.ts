import * as fs from 'fs';
import * as path from 'path';
import type { UserProgress } from './types';

export const PROGRESS_FILE = path.join(process.cwd(), 'data/progress.json');

const EMPTY_PROGRESS: UserProgress = { version: 1, problems: {} };

export function loadProgress(): UserProgress {
  if (!fs.existsSync(PROGRESS_FILE)) {
    return { ...EMPTY_PROGRESS, problems: {} };
  }
  try {
    const raw = fs.readFileSync(PROGRESS_FILE, 'utf-8');
    return JSON.parse(raw) as UserProgress;
  } catch {
    return { ...EMPTY_PROGRESS, problems: {} };
  }
}

export function saveProgress(progress: UserProgress): void {
  const dir = path.dirname(PROGRESS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2), 'utf-8');
}
