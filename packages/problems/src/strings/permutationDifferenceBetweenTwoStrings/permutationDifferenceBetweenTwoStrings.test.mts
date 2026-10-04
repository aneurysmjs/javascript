import { describe, expect, it } from 'vitest';

import permutationDifferenceBetweenTwoStrings from './permutationDifferenceBetweenTwoStrings.mjs';

describe('permutationDifferenceBetweenTwoStrings', () => {
  const cases: [[string, string], number][] = [
    [['abc', 'bac'], 2],
    [['abcde', 'edbac'], 12],
  ];

  it.each(cases)('permutations for %s is: %i', ([s, t], result) => {
    expect(permutationDifferenceBetweenTwoStrings(s, t)).toBe(result);
  });
});
