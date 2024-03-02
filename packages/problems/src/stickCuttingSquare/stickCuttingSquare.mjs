/**
 *
 * @param {number} a
 * @param {number} b
 */
export default function stickCuttingSquare(a, b) {
  // Calculate the minimum and maximum possible length of a stick
  const minLength = Math.min(a, b);
  const maxLength = Math.max(a, b);

  // // Check if it's possible to create four equal sticks
  // if (4 * minLength > maxLength) {
  //   return 0; // Not possible to create a square
  // }

  // // Find the largest possible side length of a square
  // let left = minLength;
  // let right = maxLength / 4;

  // while (left <= right) {
  //   const mid = Math.floor((left + right) / 2);
  //   const piecesA = Math.floor(a / mid);
  //   const piecesB = Math.floor(b / mid);

  //   if (piecesA + piecesB >= 4) {
  //     left = mid + 1;
  //   } else {
  //     right = mid - 1;
  //   }
  // }

  // return right; // Right is the last valid side length

  const totalSticks = a + b;
  let maxLenghthTogether = totalSticks / 4;

  while (maxLenghthTogether > 0) {
    const maxLenghthA = a / maxLenghthTogether;
    const maxLenghthB = b / maxLenghthTogether;

    if (maxLenghthA + maxLenghthB >= 4) {
      return maxLenghthTogether;
    }

    maxLenghthTogether -= 1;
  }

  return 0;
}
