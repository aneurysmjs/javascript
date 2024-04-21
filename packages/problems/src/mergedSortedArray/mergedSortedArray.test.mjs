import mergedSortedArray from './mergedSortedArray.mjs';

describe('Merged sorted array', () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const nums2 = [2, 5, 6];

  mergedSortedArray(nums1, 3, nums2, 3);

  it('should return [1,2,2,3,5,6]', () => {
    expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6]);
  });
});
