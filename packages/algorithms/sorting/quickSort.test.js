import quickSort from './quickSort';

const arr = [8, 5, 2, 9, 5, 6, 3];

describe('quickSort', () => {
  it('sorts an array', () => {
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([2, 3, 5, 5, 6, 8, 9]);
  });
});
