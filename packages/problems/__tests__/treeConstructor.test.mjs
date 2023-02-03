import treeConstructor from '../src/treeConstructor.mjs';

describe('treeConstructor', () => {
  it('can construct a binary tree', () => {
    expect(treeConstructor(['(1,2)', '(2,4)', '(5,7)', '(7,2)', '(9,5)'])).toBe(true);
  });

  it('can NOT construct a binary tree', () => {
    expect(treeConstructor(['(1,2)', '(3,2)', '(2,12)', '(5,2)'])).toBe(false);
  });
});
