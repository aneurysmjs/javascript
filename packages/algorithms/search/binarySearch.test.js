import { binarySearch } from './binarySearch';

const arr = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];

describe('binarySearch', () => {
  describe('binarySearch iteratively', () => {
    it('returns the index of the found element', () => {
      const result = binarySearch(arr, 33);
      expect(result).toBe(3);
    });

    it('returns -1 if no element found', () => {
      const result = binarySearch(arr, 77);
      expect(result).toBe(-1);
    });
  });
});
