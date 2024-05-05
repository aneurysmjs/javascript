/**
 * @param {number[]} nums
 * @return {number}
 */
export default function removeDuplicatesFromSortedArray2(nums) {
  /**
   * Initialize j to 1 since the first element (at index 0) is always considered part of the modified array.
   */
  let j = 1;

  /**
   * Loop through the array starting from index 1 (i.e., i = 1).
   * Compare the current element at index i with the element two positions behind at index j - 2.
   * If they are the same, it means there are already two occurrences of this element in the modified array,
   * so skip adding another.
   *
   * If they are different, add the current element to the modified array at position j and increment j.
   */
  for (let i = 1; i < nums.length; i++) {
    if (j === 1 || nums[i] !== nums[j - 2]) {
      nums[j++] = nums[i];
    }
  }

  return j;
}
