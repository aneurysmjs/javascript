/**
 *
 * @param {(...*) => any)} fn
 * @param {number} ms
 * @returns {(...args: any[]) => void}
 */
export default function debounce(fn, ms) {
  let timeoutId;

  return function (...args) {
    /**
     * if an event happens before the setTimeout has expired.
     * we cancel the setTimeout and reset it, so effectively
     * what this is gonna do, it's to keep reseting the timer
     * as longs as events are ocurring before the timeout has
     * had chance to expire
     */
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(args);
    }, ms);
  };
}
