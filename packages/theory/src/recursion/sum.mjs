export default function add(sum, ...nums) {
  if (nums.length === 0) {
    return sum;
  }
  const result = sum + add(...nums);

  return result;
}
