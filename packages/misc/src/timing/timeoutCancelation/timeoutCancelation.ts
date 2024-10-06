export default function timeoutCancelation(fn: (...args: any[]) => any, args: any[], t: number) {
  const timeoutId = setTimeout(() => fn(...args), t);

  return function () {
    clearTimeout(timeoutId);
  };
}
