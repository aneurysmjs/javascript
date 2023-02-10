/**
 * @typedef {object} BinaryTree
 * @property {number} value
 * @property {BinaryTree} left
 * @property {BinaryTree} right
 */

/**
 *
 * @param {BinaryTree} root
 * @param {number} value
 * @returns {boolean}
 */
export const findValue = (root, value) => {
  if (root == null) {
    return false;
  }

  if (root.value === value) {
    return true;
  }

  return findValue(root.left, value) || findValue(root.right, value);
};

/**
 *
 * @param {BinaryTree} root
 * @param {number} value
 * @returns {number}
 */
export const findMaxValue = (root, value = Number.MIN_SAFE_INTEGER) => {
  if (root == null) {
    return value;
  }

  value = Math.max(value, root.value);
  value = Math.max(value, findMaxValue(root.left, value));
  value = Math.max(value, findMaxValue(root.right, value));

  return value;
};
