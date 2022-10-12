// @ts-nocheck
import sum from './sum.mjs';

describe('sum', () => {
  it('sum number', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
