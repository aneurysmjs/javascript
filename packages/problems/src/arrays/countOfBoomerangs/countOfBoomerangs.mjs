/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
export default function numberOfBoomerangs(nums) {
  const boomerangs = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 2] && nums[i + 1] !== nums[i]) {
      boomerangs.push(nums[i]);
      boomerangs.push(nums[i + 1]);
      boomerangs.push(nums[i + 2]);

      result.push(boomerangs);
    }
  }

  return result.length;
}
