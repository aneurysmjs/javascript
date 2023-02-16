/**
 * @param {(...)}
 */
export default <T extends (args: any[]) => any>(...fns: T[]) =>
  (x: any) =>
    fns.reduceRight((v, f) => f(v), x);
