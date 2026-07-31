import { describe, expect, it } from 'vitest';

import equalSets from './equalSets.mjs';

describe('equalSets', () => {
  const set1 = new Set(['ControlLeft', 'ShiftLeft', 'A']);
  const set2 = new Set(['ShiftLeft', 'A', 'ControlLeft']);

  it('should compare two Sets and be true', () => {
    const result = equalSets(set1, set2);

    expect(result).toBe(true);
  });
});
