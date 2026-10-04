import { describe, expect, it } from 'vitest';

import getLongestNonRepeatedChar from './getLongestNonRepeatedChar.mjs';

describe('getLongestNonRepeatedChar', () => {
  it('should return 5', () => {
    const chars = 'ABCDDDFGHI';

    const k = getLongestNonRepeatedChar(chars);
    
    expect(k).toBe('DFGHI');
  });
});
