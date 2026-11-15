import { describe, it, expect } from 'vitest';
import { createMatrix, getMatrixCorners } from './utils.mts';

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

describe('getMatrixCorners', () => {
  it('should return the four corners of the matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(getMatrixCorners(matrix)).toEqual([1, 3, 7, 9]);
  });

  it('should return an empty array for an empty matrix', () => {
    expect(getMatrixCorners([])).toEqual([]);
  });
});
