import miniMaxSum from './miniMaxSum.mjs';

describe('miniMaxSum function', () => {
  it('should return the minimum and maximum sums for a given array', () => {
    const arr = [1, 3, 5, 7, 9];
    const result = miniMaxSum(arr);

    expect(result).toEqual([16, 24]);
  });

  it('should return the minimum and maximum sums for an array with duplicate values', () => {
    const arr = [1, 1, 1, 1, 1];
    const result = miniMaxSum(arr);

    expect(result).toEqual([4, 4]);
  });

  it('should return the minimum and maximum sums for an array with negative values', () => {
    const arr = [-1, -3, -5, -7, -9];
    const result = miniMaxSum(arr);
    
    expect(result).toEqual([-24, -16]);
  });
});
