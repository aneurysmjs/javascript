import insertAt from '../../misc/insertAt';

const sortByOrder = (obj1, obj2) => (obj1.order > obj2.order ? 1 : -1);

/**
 * Inserts a copy of an element from a given array but it ensures that the
 * order of the elements stays intact.
 *
 * @template T
 * @param {Array<T>} arr An array of elements
 * @param {T} copy Element's copy
 * @returns {Array<T>}
 */
export default function preserveOrder(arr, copy) {
  // clone each element, cuz objects get mutated by reference.
  // the Array.sort function will mutate your array
  // So the simplest way of getting a new sorted array is to make a copy, then sort it.
  const sorted = arr.map((el) => ({ ...el })).sort(sortByOrder);
  // grabbing the index when the copy has the 'order' property
  const index = sorted.findIndex((el) => el.order === copy.order);

  const inserted = insertAt(sorted, index, copy);

  for (let i = index + 1; i < inserted.length; i += 1) {
    inserted[i].order += 1;
  }

  return inserted;
}
