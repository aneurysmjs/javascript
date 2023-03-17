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

/**
 *
 * @param {BinaryTree} root
 * @returns
 */
export const findLeafNodesIter = (root) => {
  /** @type {BinaryTree[]} */
  const stack = [root];
  /** @type {number[]} */
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node?.left === null && node?.right === null) {
      result.push(node.value);
    }

    if (node?.right) {
      stack.push(node.right);
    }

    if (node?.left) {
      stack.push(node.left);
    }
  }

  return result;
};

/**
 *
 * @param {BinaryTree} root
 * @returns
 */
export const findLeafNodes = (root) => {
  /** @type {number[]} */
  const result = [];

  /**
   *
   * @param {BinaryTree} node
   * @returns
   */
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

/**
 *
 * @param {BinaryTree} root
 * @returns
 */
export const maxPathSumIter = (root) => {
  if (root === null) {
    return -Infinity;
  }
  /** @type {BinaryTree[]} */
  const stack = [root];

  let maxSum = -Infinity;
  /** @type {BinaryTree} */
  let left;
  /** @type {BinaryTree} */
  let right;

  while (stack.length) {
    /** @type {BinaryTree} */
    const node = stack.pop();

    if (node.left === null && node.right === null) {
      maxSum = Math.max(maxSum, node.value);
    }

    if (node.left !== null) {
      left = node.left;
      left.value += node.value;
      stack.push(left);
    }

    if (node.right !== null) {
      right = node.right;
      right.value += node.value;
      stack.push(right);
    }
  }

  return maxSum;
};

/**
 * Gets the maximun sum from any root to a leaf path
 * @param {BinaryTree} root
 * @returns
 */
export const maxPathSum = (root) => {
  if (root === null) {
    return -Infinity;
  }

  if (root.left === null && root.right === null) {
    return root.value;
  }

  const maxChildPath = Math.max(maxPathSum(root.left), maxPathSum(root.right));

  return root.value + maxChildPath;
};
