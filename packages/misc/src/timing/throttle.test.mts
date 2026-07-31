import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import throttle from './throttle.mjs';

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should call the function only once in the given wait time', () => {
    const fn = vi.fn();
    const throttledFn = throttle(fn, 100);

    throttledFn();
    throttledFn();
    throttledFn();

    /**
     * This way, you're calling throttledFn once before each
     * vi.advanceTimersByTime(100) and checking the number
     * of times fn has been called after each vi.advanceTimersByTime(100).
     */
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);

    throttledFn();
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(2);

    throttledFn();
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('should pass the correct arguments to the function', () => {
    const fn = vi.fn();
    const throttledFn = throttle(fn, 100);

    throttledFn(1, 2, 3);
    vi.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledWith([1, 2, 3]);
  });

  it('should be called with the correct context', () => {
    const obj = { name: 'ThrottleMe' };
    const fn = vi.fn();
    const throttledFn = throttle(fn, 100);

    throttledFn.call(obj, 1, 2, 3);
    vi.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledWith([1, 2, 3]);
  });
});
