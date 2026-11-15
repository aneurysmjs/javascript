import { describe, it, expect } from 'vitest';
import { createMatrix } from './utils.mts';

describe('createMatrix', () => {
  it('should create a matrix with the given dimensions and fill value', () => {
    const matrix = createMatrix(2, 3, 5);
    expect(matrix).toEqual([
      [5, 5, 5],
      [5, 5, 5],
    ]);
  });

  it('should default fill value to 0', () => {
    const matrix = createMatrix(2, 2);
    expect(matrix).toEqual([
      [0, 0],
      [0, 0],
    ]);
  });
});
