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
