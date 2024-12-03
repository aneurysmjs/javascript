import groupOfAnagrams from './groupOfAnagrams.mjs';

describe('groupOfAnagrams', () => {
  const cases = [
    [
      ['act', 'pots', 'tops', 'cat', 'stop', 'hat'],
      [['act', 'cat'], ['pots', 'tops', 'stop'], ['hat']],
    ],
    [['x'], [['x']]],
    [[''], [['']]],
  ];

  it.each(cases)('for anagrams %p this are their groups %p', (strs, result) => {
    expect(groupOfAnagrams(strs)).toEqual(result);
  });
});
