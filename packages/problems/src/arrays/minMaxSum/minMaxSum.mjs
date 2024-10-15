export default function miniMaxSum(arr) {
  // Calculate the total sum of all five integers
  let totalSum = arr.reduce((a, b) => a + b, 0);

  // Find the minimum sum by subtracting the largest integer from the total sum
  let minSum = totalSum - Math.max(...arr);

  // Find the maximum sum by subtracting the smallest integer from the total sum
  let maxSum = totalSum - Math.min(...arr);

  // Print the minimum and maximum sums as a single line of two space-separated long integers
  //  console.log(`${minSum} ${maxSum}`);

  return [minSum, maxSum];
}
