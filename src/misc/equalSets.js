/**
 * @template T
 *
 * @param {Set<T>} set1
 * @param {Set<t>} set2
 * @returns boolean
 */
export default function equalSets(set1, set2) {
  if (!(set1.size === set2.size)) {
    return false;
  }

  for (const elem of set1) {
    if (!set2.has(elem)) {
      return false;
    }
  }
  // return set1.size === set2.size && [...set1].every((el) => set2.has(el));

  return true;
}
