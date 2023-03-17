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

export const findLeafNodesIter = (root) => {
  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node?.left === null && node?.right === null) {
      result.push(node.value);
    }

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
};

export const findLeafNodes = (root) => {
  const result = [];

  const helper = (node) => {
    if (root == null) {
      return;
    }
    if (node?.left === null && node?.right === null) {
      result.push(node.value);
    }

    if (node.left) {
      helper(node.left);
    }

    if (node.right) {
      helper(node.right);
    }
  };

  helper(root);

  return result;
};
