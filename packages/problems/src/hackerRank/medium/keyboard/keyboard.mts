// Function to calculate the total time required to type the sequence
export default function entryTime(string: string, keypad: string): number {
  // Create a tracer array to store the positions (row, col) of each digit
  const tracer = Array.from({ length: 10 }, (_, i): [number, number] => [
    Math.floor(keypad.indexOf(String(i)) / 3), // Row position
    keypad.indexOf(String(i)) % 3, // Column position
  ]);

  /**
   * what is Manhattan distance?
   *
   * Manhattan distance calculates the distances between two points
   * by summing the absolute differences of their coordinates
   *
   */
  const distance = (r1: number, c1: number, r2: number, c2: number): number => {
    // Manhattan formula: |x2 - x1| + |y2 - y1|
    // absolute means "whether the result is positive or negative, it is always positive"
    return Math.max(Math.abs(r1 - r2), Math.abs(c1 - c2));
  };

  let totalTime = 0;
  let prev = tracer[Number(string[0])]; // Get position of the first digit

  // Iterate through the sequence starting from the second digit
  for (let i = 1; i < string.length; i++) {
    const curr = tracer[Number(string[i])]; // Get position of the current digit

    totalTime += distance(prev[0], prev[1], curr[0], curr[1]); // Add the distance

    prev = curr; // Update previous position to current one
  }

  return totalTime;
}
