import { twoNumberSumForLoop, twoNumberSum, twoNumberSumOrdered } from './two-number-sum';

const nums = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

describe('Two number sum', () => {
  describe('using two for loops', () => {
    const result = twoNumberSumForLoop(nums, targetSum);
    it('should return [11, -1]', () => {
      expect(result).toStrictEqual([11, -1]);
    });
  });

  describe('using a hash table ', () => {
    const result = twoNumberSum(nums, targetSum);
    it('should return [-1, 11]', () => {
      expect(result).toStrictEqual([-1, 11]);
    });
  });

  describe('using an ordered array', () => {
    const result = twoNumberSumOrdered(nums, targetSum);
    it('should return [-1, 11]', () => {
      expect(result).toStrictEqual([-1, 11]);
    });
  });
});
