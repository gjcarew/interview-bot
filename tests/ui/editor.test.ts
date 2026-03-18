import { applyLine, isSubmitSignal, buildEditorPrompt, openEditor } from '../../src/ui/editor';
import * as fs from 'fs';
import * as childProcess from 'child_process';

jest.mock('fs');
jest.mock('child_process');

const mockWriteFileSync = fs.writeFileSync as jest.MockedFunction<typeof fs.writeFileSync>;
const mockReadFileSync = fs.readFileSync as jest.MockedFunction<typeof fs.readFileSync>;
const mockUnlinkSync = fs.unlinkSync as jest.MockedFunction<typeof fs.unlinkSync>;
const mockSpawnSync = childProcess.spawnSync as jest.MockedFunction<typeof childProcess.spawnSync>;

beforeEach(() => {
  jest.clearAllMocks();
  mockSpawnSync.mockReturnValue({ status: 0, pid: 1234, output: [], stdout: Buffer.from(''), stderr: Buffer.from(''), signal: null });
  mockReadFileSync.mockReturnValue('function twoSum(nums, target) {\n  return [0, 1];\n}');
});

describe('applyLine', () => {
  it('appends a line with a newline separator', () => {
    expect(applyLine('function foo() {', '  return 1;')).toBe('function foo() {\n  return 1;');
  });

  it('appends to empty string with no leading newline', () => {
    expect(applyLine('', 'const x = 1;')).toBe('const x = 1;');
  });

  it('preserves existing indentation in the appended line', () => {
    const result = applyLine('function foo() {', '  const x = 1;');
    expect(result).toBe('function foo() {\n  const x = 1;');
  });
});

describe('isSubmitSignal', () => {
  it('returns true for "--submit"', () => {
    expect(isSubmitSignal('--submit')).toBe(true);
  });

  it('returns false for normal code lines', () => {
    expect(isSubmitSignal('  return nums[0] + nums[1];')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isSubmitSignal('')).toBe(false);
  });

  it('returns true for ":submit" alternative signal', () => {
    expect(isSubmitSignal(':submit')).toBe(true);
  });
});

describe('buildEditorPrompt', () => {
  it('returns a string containing the function signature', () => {
    const sig = 'function twoSum(nums, target) {}';
    expect(buildEditorPrompt(sig)).toContain(sig);
  });

  it('returns a string containing submit instructions', () => {
    const prompt = buildEditorPrompt('function foo() {}');
    expect(prompt.toLowerCase()).toMatch(/--submit|:submit/);
  });

  it('returns a non-empty string', () => {
    expect(buildEditorPrompt('function bar() {}')).toBeTruthy();
  });
});

describe('openEditor', () => {
  it('writes the initial code to a temp file', async () => {
    const stub = 'function twoSum(nums, target) {\n  \n}';
    await openEditor(stub);
    expect(mockWriteFileSync).toHaveBeenCalledWith(
      expect.stringContaining('interview-'),
      stub,
    );
  });

  it('spawns the editor with the temp file path', async () => {
    await openEditor('function foo() {}');
    expect(mockSpawnSync).toHaveBeenCalledWith(
      expect.any(String),
      [expect.stringContaining('interview-')],
      expect.objectContaining({ stdio: 'inherit' }),
    );
  });

  it('returns the contents of the temp file after editing', async () => {
    const edited = 'function twoSum(nums, target) {\n  return [0, 1];\n}';
    mockReadFileSync.mockReturnValue(edited);
    const result = await openEditor('function twoSum(nums, target) {\n  \n}');
    expect(result).toBe(edited);
  });

  it('deletes the temp file after reading', async () => {
    await openEditor('function foo() {}');
    expect(mockUnlinkSync).toHaveBeenCalledWith(expect.stringContaining('interview-'));
  });

  it('uses $EDITOR env var when set', async () => {
    const original = process.env.EDITOR;
    process.env.EDITOR = 'nano';
    await openEditor('function foo() {}');
    expect(mockSpawnSync).toHaveBeenCalledWith('nano', expect.any(Array), expect.any(Object));
    process.env.EDITOR = original;
  });

  it('falls back to vi when $EDITOR is not set', async () => {
    const original = process.env.EDITOR;
    delete process.env.EDITOR;
    await openEditor('function foo() {}');
    expect(mockSpawnSync).toHaveBeenCalledWith('vi', expect.any(Array), expect.any(Object));
    process.env.EDITOR = original;
  });
});
