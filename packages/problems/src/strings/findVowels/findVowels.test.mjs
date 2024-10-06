import findVowels from './findVowels.mjs';

describe('findVowels', () => {
  const cases = [
    ['cow', 1],
    ['airplane', 4],
  ];

  it.each(cases)('count for %s is: %i', (s, result) => {
    expect(findVowels(s)).toBe(result);
  });
});
