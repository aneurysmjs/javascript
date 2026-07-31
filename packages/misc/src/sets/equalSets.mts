/**
 * @template T
 *
 * @param {Set<T>} set1
 * @param {Set<T>} set2
 * @returns boolean
 */
export default function equalSets<T>(set1: Set<T>, set2: Set<T>) {
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
