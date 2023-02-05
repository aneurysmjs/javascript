/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * @example
 *
 * Example 1:
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * @param {string[]} strs
 */
export default function longestCommonPrefix(strs) {
 
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // const strIdx = strs[i].indexOf(prefix);

    while (strs[i].indexOf(prefix) !== 0) {
      /**
       * flower
       * flowe
       * flow
       * flo
       * fl
       */
      const fragment = prefix.substring(0, prefix.length - 1);
      prefix = fragment;
      if (prefix.length === 0) {
        return '';
      }
    }
  }

  return prefix;
}
