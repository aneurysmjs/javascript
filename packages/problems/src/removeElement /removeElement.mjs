/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export default function removeElement(nums, val) {
  // This variable will keep track of the index where the next
  // valid element (not equal to val) should be placed in the modified array.
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++;
    }
  }

  return k;
};