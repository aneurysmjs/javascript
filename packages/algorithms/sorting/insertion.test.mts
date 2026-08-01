import { describe, expect, it } from 'vitest';

import insertionSort from './insertion.mjs';

const nums = [3, 5, 9, 6, 2, 1];

describe('insertion sort', () => {
  it('should order an array a', () => {
    expect(insertionSort(nums)).toStrictEqual([1, 2, 3, 5, 6, 9]);
  });
});
