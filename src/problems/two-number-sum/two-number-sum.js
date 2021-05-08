/**
 * this takes O(n) | O(n) space
 *
 * @param {Array<number>} array
 * @param {number} targetSum
 * @return {Array<number,number>}
 */
export function twoNumberSumForLoop(array, targetSum) {
  // go to the beforelost
  for (let i = 0; i < array.length - 1; i += 1) {
    const x = array[i];
    // important that `j` goes to the end of the array
    for (let j = i + 1; j < array.length; j += 1) {
      const y = array[j];

      if (x + y === targetSum) {
        return [x, y];
      }
    }
  }

  return [];
}

const hash = {};

/**
 * this takes O(n) | O(n) space
 *
 * @param {Array<number>} arr
 * @param {number} targetSum
 * @return {Array<number,number>}
 */
export function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i += 1) {
    const x = array[i];
    const y = targetSum - x;

    if (hash[targetSum - x]) {
      return [x, y];
    } else {
      hash[x] = true;
    }
  }

  return [];
}

/**
 * this takes O(n) | O(n) space
 *
 * @param {Array<number>} arr
 * @param {number} targetSum
 * @return {Array<number,number>}
 */
export function twoNumberSumOrdered(arr, targetSum) {
  const array = arr.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }
  return [];
}
