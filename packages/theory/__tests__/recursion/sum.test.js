import sum from '../../src/recursion/sum';

describe('sum', () => {
  it('sum number', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
