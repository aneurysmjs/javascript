import throttle from './throttle';

describe('throttle', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should call the function only once in the given wait time', () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn, 100);

    throttledFn();
    throttledFn();
    throttledFn();

    /**
     * This way, you're calling throttledFn once before each
     * jest.advanceTimersByTime(100) and checking the number
     * of times fn has been called after each jest.advanceTimersByTime(100).
     */
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);

    throttledFn();
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(2);

    throttledFn();
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('should pass the correct arguments to the function', () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn, 100);

    throttledFn(1, 2, 3);
    jest.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledWith([1, 2, 3]);
  });

  it('should be called with the correct context', () => {
    const obj = { name: 'ThrottleMe' };
    const fn = jest.fn();
    const throttledFn = throttle(fn, 100);

    throttledFn.call(obj, 1, 2, 3);
    jest.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledWith([1, 2, 3]);
  });
});
