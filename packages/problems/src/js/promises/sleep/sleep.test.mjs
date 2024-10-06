import { jest } from '@jest/globals';

import sleep from './sleep.mjs';

describe('sleep', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should resolve after the given time', async () => {
    const millis = 1000;

    // Spy on the global setTimeout function
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

    const sleepPromise = sleep(millis);

    // Check that setTimeout was called with the correct arguments
    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), millis);

    // Fast-forward time
    jest.advanceTimersByTime(millis);

    // Wait for the promise to resolve
    await expect(sleepPromise).resolves.toBeUndefined();

    // Clean up the spy
    setTimeoutSpy.mockRestore();
  });
});
