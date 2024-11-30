import topKFrequentElements from './topKFrequentElements.mjs';

describe('top K frequent elements', () => {
  const cases = [
    [[1, 2, 2, 3, 3, 3], 2, [3, 2]],
    [[7, 7], 1, [7]],
  ];

  it.each(cases)('for "%p" the K: %d most frequent elements are %p', (nums, k, expected) => {
    expect(topKFrequentElements(nums, k)).toStrictEqual(expected);
  });
});
