import removeDuplicatesFromSortedArray from './removeDuplicatesFromSortedArray.mjs';

describe('removeDuplicatesFromSortedArray', () => {
  it('should return 5', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    const k = removeDuplicatesFromSortedArray(nums);

    expect(k).toBe(5);
  });
});
