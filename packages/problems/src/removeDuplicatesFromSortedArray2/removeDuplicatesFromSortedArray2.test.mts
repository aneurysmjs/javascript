import { describe, expect, it } from 'vitest';

import removeDuplicates2 from './removeDuplicatesFromSortedArray2.mjs';

describe('remove duplicates 2', () => {
  const nums = [1, 1, 1, 2, 2, 3];

  const k = removeDuplicates2(nums);

  it('should return 5', () => {
    expect(k).toBe(5);
  });
});
