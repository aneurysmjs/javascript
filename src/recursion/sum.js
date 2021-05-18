function add(sum, ...nums) {
  if (nums.length === 0) {
    return sum;
  }
  const result = sum + add(...nums);
  debugger;
  return result;
}

add(1, 2, 3, 4, 5, 6, 7);
