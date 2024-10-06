/**
 *
 * @param {(...params: any[]) => Promise<any>} fn
 * @param {number}
 */
export default function promiseTimeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);

      fn(...args)
        .then(resolve)
        .catch(reject);
    });
  };
}

/**
 *
 * @param {(...params: any[]) => Promise<any>} fn
 * @param {number}
 */
export function promiseTimeLimitPromiseRace(fn, t) {
  return async function (...args) {
    const originalFnPromise = fn(...args);

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });

    return Promise.race([originalFnPromise, timeoutPromise]);
  };
}

// const fn = async (n) => {
//   await new Promise((res) => setTimeout(res, 100));

//   return n * n;
// };

// const inputs = [5];

// const t = 50;

// const limited = promiseTimeLimit(fn, t);

// const start = performance.now();
// let result;

// try {
//   const res = await limited(...inputs);
//   result = { resolved: res, time: Math.floor(performance.now() - start) };
// } catch (err) {
//   result = { rejected: err, time: Math.floor(performance.now() - start) };
// }

// console.log(result); // Output
