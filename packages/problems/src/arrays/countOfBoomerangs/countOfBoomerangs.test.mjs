import countOfBoomerangs from './countOfBoomerangs.mjs';

describe('countOfBoomerangs', () => {
  const cases = [
    [[9, 5, 9, 5, 1, 1, 1], 2],
    [[5, 6, 6, 7, 6, 3, 9], 1],
    [[4, 4, 4, 9, 9, 9, 9], 0],
  ];

  it.each(cases)('for sequence "%p" there are "%d" boomerangs', (nums, expected) => {
    expect(countOfBoomerangs(nums)).toStrictEqual(expected);
  });
});
