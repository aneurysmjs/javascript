/**
 *
 * @param {string[]} strs
 */
export default function groupOfAnagrams(strs) {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];

    const sorted = str.split('').sort().join('');

    if (map[sorted]) {
      map[sorted].push(str);
    } else {
      map[sorted] = [str];
    }
  }

  return Object.values(map);
}
