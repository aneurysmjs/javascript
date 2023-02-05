import longestCommonPrefix from '../src/longestCommonPrefix.mjs';

describe('longestCommonPrefix', () => {
  it('can construct a binary tree', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });
});
