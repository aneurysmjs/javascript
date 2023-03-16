/**
 *
 * @param {any[]} items
 * @param {number} leftIndex
 * @param {number} rightIndex
 */
function swap(items, leftIndex, rightIndex) {
  const temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

/**
 *
 * @param {any[]} items
 * @param {number} left
 * @param {number} right
 */
function partition(items, left, right) {
  const middle = Math.floor((right + left) / 2);
  const pivot = items[middle]; // middle element
  let i = left; // left pointer
  let j = right; // right pointer

  while (i <= j) {
    while (items[i] < pivot) {
      i += 1;
    }

    while (items[j] > pivot) {
      j -= 1;
    }

    if (i <= j) {
      swap(items, i, j); //sawpping two elements

      i += 1;
      j -= 1;
    }
  }

  return i;
}

/**
 *
 * @param {any[]} items
 * @param {number} left
 * @param {number} right
 */
export default function quickSort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      // more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      // more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }

  return items;
}
