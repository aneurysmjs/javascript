// Function to calculate the total time required to type the sequence
export default function entryTime(string, keypad) {
  // Create a tracer array to store the positions (row, col) of each digit
  const tracer = Array.from({ length: 10 }, (_, i) => [
    Math.floor(keypad.indexOf(i) / 3), // Row position
    keypad.indexOf(i) % 3, // Column position
  ]);

  /**
   * what is Manhattan distance?
   *
   * Manhattan distance calculates the distances between two points
   * by summing the absolute differences of their coordinates
   *
   * @param {string} r1
   * @param {string} c1
   * @param {string} r2
   * @param {string} c2
   * @returns
   */
  const distance = (r1, c1, r2, c2) => {
    // Manhattan formula: |x2 - x1| + |y2 - y1|
    // absolute means "whether the result is positive or negative, it is always positive"
    return Math.max(Math.abs(r1 - r2), Math.abs(c1 - c2));
  };

  let totalTime = 0;
  let prev = tracer[string[0] - '0']; // Get position of the first digit

  // Iterate through the sequence starting from the second digit
  for (let i = 1; i < string.length; i++) {
    const curr = tracer[string[i] - '0']; // Get position of the current digit

    totalTime += distance(prev[0], prev[1], curr[0], curr[1]); // Add the distance

    prev = curr; // Update previous position to current one
  }

  return totalTime;
}
