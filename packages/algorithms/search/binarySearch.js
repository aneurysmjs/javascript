/**
 *
 * @param {any[]} arr
 * @param {any} target
 * @returns
 */
export const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.round((left + right) / 2);

    const potentialMatch = arr[middle];

    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};
