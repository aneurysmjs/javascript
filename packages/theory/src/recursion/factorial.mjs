/**
 *
 * num = 4
 *
 * num = (4 * 3 * 2 * 1) = 24
 *
 * @param {number} num
 * @param {number} acc
 * @returns
 */

let result = 1;

export default function factorial(num) {
  let copy = num;
  if (num === 1) {
    return result;
  }
  copy -= 1;
  result *= num;
  return factorial(copy);
}
