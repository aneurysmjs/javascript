/**
 * Inserts and element at given index.
 *
 * @param {Array<T>} arr An array of T elements
 * @param {number} index Index in which to where put the element
 * @param {T} el Element to be inserted
 * @returns {Array<T>}
 */
export default function insertAt(arr, index, el) {
  return [...arr.slice(0, index), el, ...arr.slice(index)];
}
