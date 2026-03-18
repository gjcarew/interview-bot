import { applyLine, isSubmitSignal, buildEditorPrompt } from '../../src/ui/editor';

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
