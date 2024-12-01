import { myFunction } from './callApplyBind';

/**
 * call: Invokes a function immediately, setting its this value to the first argument.
 * apply: Similar to call, but accepts an array of arguments as its second argument.
 * bind: Creates a new function with a fixed this value.
 */

describe('Testing function methods', () => {
  const obj = { x: 10 };

  it('should test call', () => {
    const result = myFunction.call(obj, 2, 3);
    expect(result).toBe(15);
  });

  it('should test apply', () => {
    const result = myFunction.apply(obj, [2, 3]);
    expect(result).toBe(15);
  });

  it('should test bind', () => {
    const boundFunction = myFunction.bind(obj, 2, 3);
    const result = boundFunction();
    expect(result).toBe(15);
  });
});
