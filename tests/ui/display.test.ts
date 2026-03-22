import {
  displayTimerStart,
  displayTimerWarning,
  displayTimerExpired,
} from '../../src/ui/display';

describe('Timer display functions', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('displayTimerStart', () => {
    it('logs a message containing the duration in minutes', () => {
      displayTimerStart(20);
      const output = consoleSpy.mock.calls.map((c) => c.join(' ')).join('\n');
      expect(output).toContain('20');
      expect(output).toContain('min');
    });

    it('includes a timer indicator in the output', () => {
      displayTimerStart(20);
      const output = consoleSpy.mock.calls.map((c) => c.join(' ')).join('\n');
      expect(output).toContain('⏱');
    });
  });

  describe('displayTimerWarning', () => {
    it('logs a message containing the remaining minutes', () => {
      displayTimerWarning(5);
      const output = consoleSpy.mock.calls.map((c) => c.join(' ')).join('\n');
      expect(output).toContain('5');
      expect(output).toContain('min');
    });

    it('includes a warning indicator in the output', () => {
      displayTimerWarning(5);
      const output = consoleSpy.mock.calls.map((c) => c.join(' ')).join('\n');
      expect(output).toContain('⚠');
    });
  });

  describe('displayTimerExpired', () => {
    it('logs a time-up notification', () => {
      displayTimerExpired();
      const output = consoleSpy.mock.calls.map((c) => c.join(' ')).join('\n');
      expect(output).toContain('Time');
    });

    it('includes a bell/notification indicator', () => {
      displayTimerExpired();
      const output = consoleSpy.mock.calls.map((c) => c.join(' ')).join('\n');
      expect(output).toContain('🔔');
    });
  });
});
