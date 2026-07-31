import { describe, expect, test, vi } from 'vitest';

import debounce from './debounce.mjs';

vi.useFakeTimers();

describe('debounce', () => {
  test('execute just once', () => {
    const func = vi.fn();
    const debouncedFunc = debounce(func, 500);

    // Execute for the first time
    debouncedFunc();

    // Move on the timer
    vi.advanceTimersByTime(250);
    // try to execute a 2nd time
    debouncedFunc();

    // Fast-forward time
    vi.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
