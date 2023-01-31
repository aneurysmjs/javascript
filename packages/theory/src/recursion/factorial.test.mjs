import factorial from './factorial.mjs';

describe('factorial', () => {
  it('sum number', () => {
    expect(factorial(4)).toEqual(24)
  });
});
