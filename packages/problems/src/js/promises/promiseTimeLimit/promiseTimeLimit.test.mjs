import { jest } from '@jest/globals';

import promiseTimeLimit, { promiseTimeLimitPromiseRace } from './promiseTimeLimit.mjs';

// This allows you to control the passage of time in the test manually.
jest.useFakeTimers();

/**
 * advanceTimersByTime(): Simulates the passage of time by a specified amount of milliseconds.
 */

describe('promiseTimeLimit', () => {
  it('should resolve if the function completes before the time limit', async () => {
    const mockFn = jest.fn().mockResolvedValue('Success');

    const limitedFn = promiseTimeLimit(mockFn, 1000);

    const promise = limitedFn();

    // Fast forward time to before the timeout
    jest.advanceTimersByTime(500);

    await expect(promise).resolves.toBe('Success');

    expect(mockFn).toHaveBeenCalled();
  });

  it('should reject if the function fails before the time limit', async () => {
    const mockFn = jest.fn().mockRejectedValue('Error');

    const limitedFn = promiseTimeLimit(mockFn, 1000);

    const promise = limitedFn();

    // Fast forward time to before the timeout
    jest.advanceTimersByTime(500);

    await expect(promise).rejects.toBe('Error');

    expect(mockFn).toHaveBeenCalled();
  });

  it('should reject with "Time Limit Exceeded" if the function takes too long', async () => {
    const mockFn = jest.fn(() => new Promise(() => {})); // Never resolves

    const limitedFn = promiseTimeLimit(mockFn, 1000);

    const promise = limitedFn();

    // Fast forward time to exceed the timeout
    jest.advanceTimersByTime(1000);

    await expect(promise).rejects.toBe('Time Limit Exceeded');

    expect(mockFn).toHaveBeenCalled();
  });
});

describe('promiseTimeLimitPromiseRace', () => {
  jest.useFakeTimers(); // Use fake timers for better control of setTimeout

  it('should resolve if the function completes before the time limit', async () => {
    const mockFn = jest.fn().mockResolvedValue('Success');

    const limitedFn = promiseTimeLimitPromiseRace(mockFn, 1000);

    const promise = limitedFn();

    // Fast forward time to before the timeout
    jest.advanceTimersByTime(500);

    await expect(promise).resolves.toBe('Success');

    expect(mockFn).toHaveBeenCalled();
  });

  it('should reject if the function fails before the time limit', async () => {
    const mockFn = jest.fn().mockRejectedValue('Error');

    const limitedFn = promiseTimeLimitPromiseRace(mockFn, 1000);

    const promise = limitedFn();

    // Fast forward time to before the timeout
    jest.advanceTimersByTime(500);

    await expect(promise).rejects.toBe('Error');

    expect(mockFn).toHaveBeenCalled();
  });

  it('should reject with "Time Limit Exceeded" if the function takes too long', async () => {
    const mockFn = jest.fn(() => new Promise(() => {})); // Never resolves

    const limitedFn = promiseTimeLimitPromiseRace(mockFn, 1000);

    const promise = limitedFn();

    // Fast forward time to exceed the timeout
    jest.advanceTimersByTime(1000);

    await expect(promise).rejects.toBe('Time Limit Exceeded');

    expect(mockFn).toHaveBeenCalled();
  });
});
