/**
 * Throttle calls a function at intervals of a specified amount of time
 * while the user is carrying out an event.
 *
 * @param {(...*) => any)} fn
 * @param {number} ms
 * @returns {(...args: any[]) => any}
 */
export default function throttle<T extends (...args: any[]) => any>(
  cb: T,
  ms: number,
): (...args: Parameters<T>) => any {
  let inThrottle: boolean;

  /**
   * @see https://stackoverflow.com/a/41945742/5378393
   */
  return function throttled(this: typeof throttled, ...args) {
    if (!inThrottle) {
      cb.call(this, args);

      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, ms);
    }
  };
}
