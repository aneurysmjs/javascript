export default function topKFrequentElements(nums, k) {
  // Create an object to store the frequency of each number
  const map = {};

  // Create an array of empty arrays to hold numbers based on their frequency
  // The length is nums.length + 1 to accommodate frequencies from 0 to nums.length
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  // Iterate through each number in the input array
  for (const num of nums) {
    // Increment the count of the number in the frequency map
    map[num] = (map[num] || 0) + 1;
  }

  // Populate the frequency array where the index represents the frequency
  for (const key in map) {
    // Push the number into the corresponding frequency bucket
    freq[map[key]].push(parseInt(key));
  }

  // Initialize an array to hold the result
  const result = [];

  // Iterate from the highest frequency down to 1
  for (let i = freq.length - 1; i > 0; i--) {
    // For each number with the current frequency
    for (const count of freq[i]) {
      // Add the number to the result array
      result.push(count);

      // If we have collected k elements, return the result
      if (result.length === k) {
        return result;
      }
    }
  }
}
