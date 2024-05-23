/**
 *
 * @param {string} s
 * @param {string} t
 * @returns
 */
export default function permutationDifferenceBetweenTwoStrings(s, t) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let j = t.indexOf(s[i]);

    result += Math.abs(i - j);
  }

  return result;
}
