import { jest } from '@jest/globals';
import debounce from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
  test('execute just once', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 500);

    // Execute for the first time
    debouncedFunc();

    // Move on the timer
    jest.advanceTimersByTime(250);
    // try to execute a 2nd time
    debouncedFunc();

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
