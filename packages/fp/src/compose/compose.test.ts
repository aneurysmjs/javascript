import compose from './compose';

describe('Composes', () => {
  it('composes functions', () => {
    const fn1 = (val) => `fn1(${val})`;
    const fn2 = (val) => `fn2(${val})`;
    const fn3 = (val) => `fn3(${val})`;
    const composedFunction = compose(fn1, fn2, fn3);
    expect(composedFunction('inner')).toBe('fn1(fn2(fn3(inner)))');
  });
});
