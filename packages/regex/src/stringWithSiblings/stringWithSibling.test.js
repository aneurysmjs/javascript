import stringWithSibling from './stringWithSibling.mjs';

describe('stringWithSibling', () => {
  const cases = [
    ['some+prop', true],
    ['some.prop', true],
    ['some.nested+prop', true],
    ['some+prop.nested', true],
    ['some+prop.nested+with.more+siblings.and.more.nested', true],
    ['some+prop.nested+continue.with.other', true],
    ['some', false],
    ['some.', false],
    ['some.nested+', false],
    ['some.nested+other.', false],
    ['some.nested+other+', false],
  ];

  it.each(cases)('takes pattern "%s" and validates to "%s"', (pattern, result) => {
    expect(stringWithSibling(pattern)).toBe(result);
  });
});
