import { describe, expect, it } from 'vitest';

import longestWord from '../src/longestWord.mjs';

describe('longestWord', () => {
  it('finds longest word in string', () => {
    expect(longestWord('fun&!! time')).toEqual('time');
  });
});
