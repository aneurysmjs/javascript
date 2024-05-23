import permutationDifferenceBetweenTwoStrings from './permutationDifferenceBetweenTwoStrings.mjs';

describe('permutationDifferenceBetweenTwoStrings', () => {
  const cases = [
    [['abc', 'bac'], 2],
    [['abcde', 'edbac'], 12],
  ];

  it.each(cases)('permutations for %s is: %i', ([s, t], result) => {
    expect(permutationDifferenceBetweenTwoStrings(s, t)).toBe(result);
  });
});
