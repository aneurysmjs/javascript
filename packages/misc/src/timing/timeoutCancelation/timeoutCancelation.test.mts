import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

/**
 * "Relative import paths need explicit file extensions in EcmaScript
 *  imports when '--moduleResolution' is 'node16' or 'nodenext'."
 * @see https://www.totaltypescript.com/relative-import-paths-need-explicit-file-extensions-in-ecmascript-imports
 */
import timeoutCancelation from './timeoutCancelation.mjs';

describe('timeoutCancelation', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should execute `fn` if cancellation occurs after', () => {
    const fn = vi.fn();

    const cancelTimeMs = 50;

    const cancelFn = timeoutCancelation(fn, [2], 20);

    setTimeout(cancelFn, cancelTimeMs);

    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(20);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should NOT execute `fn` if cancellation occurs before', () => {
    const fn = vi.fn();

    const cancelTimeMs = 50;

    const cancelFn = timeoutCancelation(fn, [2], 100);

    setTimeout(cancelFn, cancelTimeMs);

    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(50);

    expect(fn).not.toHaveBeenCalled();
  });
});
