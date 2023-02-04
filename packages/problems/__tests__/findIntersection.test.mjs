import findIntersection from '../src/findIntersection.mjs';

describe('findIntersection', () => {
  it('can construct a binary tree', () => {
    expect(findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'])).toBe('1,4,13');
  });
});
