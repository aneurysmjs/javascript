/**
 *
 * @param {string} str
 * @returns {number}
 *
 */
export default function findVowels(str) {
  return (str.match(/[aeiou]/gi) ?? []).length;
}
