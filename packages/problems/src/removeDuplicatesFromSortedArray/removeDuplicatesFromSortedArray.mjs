/**
 * @param {number[]} nums
 */
export default function removeDuplicatesFromSortedArray(nums) {
  let j = 1;

  for (let i = 1; i < nums.length; i++) {
    // compare with the previous item
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
}
