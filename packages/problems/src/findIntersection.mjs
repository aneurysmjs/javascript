/**
 *
 * @param {string[]} strArr
 * @returns
 */
export default function findIntersection(strArr) {
  /**
   * @type {string[]}
   */
  const numbersArr = [];
  /**
   * @type {string[]}
   */
  const duplicates = [];

  for (const subStr of strArr) {
    const numbers = subStr.split(', ');

    for (const num of numbers) {
      if (numbersArr.includes(num)) {
        duplicates.push(num);
      } else {
        numbersArr.push(num);
      }
    }
  }

  if (duplicates.length === 0) {
    return false;
  }

  return duplicates.sort((a, b) => a - b).join(',');
}
