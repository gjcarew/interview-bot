import * as fs from 'fs';
import * as path from 'path';
import { loadProgress, saveProgress } from '../../src/spacedRepetition/progress';
import type { UserProgress } from '../../src/spacedRepetition/types';

const PROGRESS_FILE = path.join(process.cwd(), 'data/progress.json');

jest.mock('fs');
const mockFs = fs as jest.Mocked<typeof fs>;

const emptyProgress: UserProgress = { version: 1, problems: {} };

const sampleProgress: UserProgress = {
  version: 1,
  problems: {
    'two-sum': {
      problemId: 'two-sum',
      neetcodeId: 3,
      easinessFactor: 2.5,
      interval: 6,
      repetitions: 2,
      nextReviewDate: '2026-04-10',
      lastReviewDate: '2026-04-04',
      lastGrade: 4,
    },
  },
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('loadProgress', () => {
  it('returns empty default progress when file does not exist', () => {
    mockFs.existsSync.mockReturnValue(false);
    const result = loadProgress();
    expect(result).toEqual(emptyProgress);
  });

  it('parses and returns progress from existing file', () => {
    mockFs.existsSync.mockReturnValue(true);
     
    (mockFs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(sampleProgress));
    const result = loadProgress();
    expect(result).toEqual(sampleProgress);
  });

  it('returns empty default if file contains invalid JSON', () => {
    mockFs.existsSync.mockReturnValue(true);
     
    (mockFs.readFileSync as jest.Mock).mockReturnValue('not-valid-json');
    const result = loadProgress();
    expect(result).toEqual(emptyProgress);
  });
});

describe('saveProgress', () => {
  it('writes progress as JSON to the progress file', () => {
    mockFs.writeFileSync.mockImplementation(() => undefined);
    saveProgress(sampleProgress);
    expect(mockFs.writeFileSync).toHaveBeenCalledWith(
      PROGRESS_FILE,
      JSON.stringify(sampleProgress, null, 2),
      'utf-8',
    );
  });

  it('creates the data directory if it does not exist', () => {
    mockFs.existsSync.mockReturnValue(false);
    mockFs.mkdirSync.mockImplementation(() => undefined);
    mockFs.writeFileSync.mockImplementation(() => undefined);
    saveProgress(sampleProgress);
    expect(mockFs.mkdirSync).toHaveBeenCalledWith(
      path.join(process.cwd(), 'data'),
      { recursive: true },
    );
  });
});
