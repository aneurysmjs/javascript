import { describe, expect, it } from 'vitest';

import findVowels from './findVowels.mjs';

describe('findVowels', () => {
  const cases: [string, number][] = [
    ['cow', 1],
    ['airplane', 4],
  ];

  it.each(cases)('count for %s is: %i', (s, result) => {
    expect(findVowels(s)).toBe(result);
  });
});
