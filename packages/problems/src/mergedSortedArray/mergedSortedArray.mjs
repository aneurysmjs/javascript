/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export default function mergedSortedArray(nums1, m, nums2, n) {
  nums1.splice(m);

  nums1.push(...nums2);

  nums1.sort((a, b) => a - b);

}


// for (let i = 0; i < n; i++) {
//   // start from
//   nums1[m + i] = nums2[i];
// }

// nums1.sort((a, b) => a - b);
