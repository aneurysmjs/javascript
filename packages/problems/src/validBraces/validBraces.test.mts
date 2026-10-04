import { describe, expect, test } from 'vitest';

import validBraces from './validBraces.mjs';

describe('validBraces', () => {
  test.each([
    // ['()', true],
    // ['[]', true],
    // ['{}', true],
    // ['()))', false],
    // ['(){}[]', true],
    // ['([{}])', true],
    // ['(}', false],
    // ['[(])', false],
    // ['({})[({})]', true],
    // ['(})', false],
    ['(({{[[]]}}))', true],
    // ['{}({})[]', true],
    // [')(}{][', false],
    // ['())({}}{()][][', false],
    // ['(((({{', false],
    // ['}}]]))}])', false],
  ])('for braces: %s', (braces, expected) => {
    expect(validBraces(braces)).toBe(expected);
  });
});
