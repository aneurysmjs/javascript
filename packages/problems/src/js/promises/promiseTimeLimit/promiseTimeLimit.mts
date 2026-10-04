export default function promiseTimeLimit<Args extends unknown[], R>(
  fn: (...params: Args) => Promise<R>,
  t: number,
) {
  return async function (...args: Args): Promise<R> {
    return new Promise<R>((resolve, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);

      fn(...args)
        .then(resolve)
        .catch(reject);
    });
  };
}

export function promiseTimeLimitPromiseRace<Args extends unknown[], R>(
  fn: (...params: Args) => Promise<R>,
  t: number,
) {
  return async function (...args: Args): Promise<R> {
    const originalFnPromise = fn(...args);

    const timeoutPromise = new Promise<never>((_, reject) => {
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
