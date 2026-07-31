export type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

/**
 * @description checks whether or not a value is null,
 */
function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * @description checks whether or not the node is a leaf node,
 */
function isLeafNode(node: TreeNode): boolean {
  return node.left === null && node.right === null;
}

/**
 * @description checks whether or not the node has only one child.
 */
function hasOneChild(node: TreeNode): boolean {
  return (node.left === null && node.right !== null) || (node.left !== null && node.right === null);
}

/**
 * @description checks whether or not the node has two childs.
 */
function hasTwoChilds(node: TreeNode): boolean {
  return node.left !== null && node.right !== null;
}

/**
 * @description find most further node.
 */
function findDeep(node: TreeNode, side: 'left' | 'right'): TreeNode {
  const child = node[side];

  // here we reach node's end (leaf)
  if (child === null) {
    return node;
  }

  return findDeep(child, side);
}

/**
 * BFS
 */
function findParentBFS(root: TreeNode, node: TreeNode): TreeNode | undefined {
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const currentNode = queue.shift()!;
    if (currentNode.left === node || currentNode.right === node) {
      return currentNode;
    }

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
}

/**
 * DFS
 */
function findParentDFS(root: TreeNode, node: TreeNode): TreeNode | null {
  const helper = (
    current: TreeNode | null,
    parent: TreeNode | null,
    target: TreeNode,
  ): TreeNode | null => {
    if (!current) {
      return null;
    }

    if (current === target) {
      return parent;
    }

    return helper(current.left, current, target) || helper(current.right, current, target);
  };

  return helper(root, null, node);
}

export function printNodes(levels: (number | string)[][]): void {
  let result = '';
  for (let i = 0; i < levels.length; i += 1) {
    const spacerSize = Math.ceil(40 / ((i + 2) * 2));
    const spacer = new Array(spacerSize + 1).join('  ');
    const lines: string[] = levels[i].map((_, index) => {
      return index % 2 === 0 ? ' /' : '\\ ';
    });
    levels[i].unshift('');
    lines.unshift('');
    ///  console.log('spacer', spacer);
    if (i > 0) {
      console.log(lines.join(spacer));
      //  result += lines.join(spacer);
      // result += spacer;
      // result += '\n';
    }
    // result += levels[i].join(spacer);
    // result += '\n\n';
    console.log(levels[i].join(spacer));
  }

  //  console.log('result', result);
}

/**
 * @description extracts each of from the tree and returns
 * an array containing each level's nodes
 *
 * @example
 *
 *    4
 *
 * 3     6
 *
 * // to
 *
 * [[4], [3, 6]]
 */
export function extractNodes(node: TreeNode, depth = 0, levels: number[][] = []): number[][] {
  //traverse left branch
  if (node.left !== null) {
    levels = extractNodes(node.left, depth + 1, levels);
  }

  levels[depth] = levels[depth] || [];
  levels[depth].push(node.value);

  //traverse right branch
  if (node.right !== null) {
    levels = extractNodes(node.right, depth + 1, levels);
  }

  return levels;
}

export function treeNode(
  value: TreeNode['value'],
  left: TreeNode | null = null,
  right: TreeNode | null = null,
): TreeNode {
  return {
    value,
    left,
    right,
  };
}

/**
 * @description A valid binary search tree (BST) has ALL left children with
 * values less than the parent node, and ALL right children with values greater
 * than the parent node.
 */
const isValidBST = (root: TreeNode | null): boolean => {
  const helper = (node: TreeNode | null, min: number, max: number): boolean => {
    if (!node) {
      return true;
    }

    if (node.value <= min || node.value >= max) {
      return false;
    }

    return helper(node.left, min, node.value) && helper(node.right, node.value, max);
  };

  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

/**
 * @description visit node first then the left sub-tree and then
 * the right sub-tree.
 */
function preorder(root: TreeNode | null): number[] {
  if (isNull(root)) {
    return [];
  }
  return [root.value, ...preorder(root.left), ...preorder(root.right)];
}

/**
 * @description visit first the left sub-tree then the node and then
 * the right sub-tree.
 */
function inorder(root: TreeNode | null): number[] {
  if (isNull(root)) {
    return [];
  }
  return [...inorder(root.left), root.value, ...inorder(root.right)];
}

/**
 * @description  visit left sub-tree then right sub-tree and then
 * the node
 */
function postorder(root: TreeNode | null): number[] {
  if (isNull(root)) {
    return [];
  }
  return [...postorder(root.left), ...postorder(root.right), root.value];
}

function invertBST(tree: TreeNode | null): void {
  if (tree === null) {
    return;
  }

  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
  invertBST(tree.left);
  invertBST(tree.right);
}

/**
 * @description visits all nodes level by level
 */
function breadthFirstTraversal(root: TreeNode | null, callback: (value: number) => void): void {
  if (root == null) {
    return;
  }

  // we start our traversal with the root of the tree
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;
    const value = node.value;

    callback(value);

    // this is a leaf node, jump the cycle
    if (isLeafNode(node)) {
      continue;
    }

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }
}

/**
 * @description finds the left most node in tree
 * searching starts from given node
 */
function findLeftMost(node: TreeNode): TreeNode {
  return findDeep(node, 'left');
}

/**
 * @description finds the right most node in tree
 * searching starts from given node
 */
function findRightMost(node: TreeNode): TreeNode {
  return findDeep(node, 'right');
}

/**
 * @description checks whether or not a node exists on the tree.
 */
function includes(root: TreeNode | null, target: number): boolean {
  if (isNull(root)) {
    return false;
  }

  if (root.value === target) {
    return true;
  }

  return includes(root.left, target) || includes(root.right, target);
}

/**
 * @description finds the minimum value in the tree
 */
function findMinValue(node: TreeNode | null): number {
  if (node === null) {
    return Infinity;
  }

  return Math.min(node.value, findMinValue(node.left), findMinValue(node.right));
}

/**
 * @description finds the maximum value in the tree
 */
function findMaxValue(node: TreeNode | null): number {
  if (node === null) {
    return -Infinity;
  }

  return Math.max(node.value, findMaxValue(node.left), findMaxValue(node.right));
}

export function createBST() {
  let root: TreeNode | null = null;

  return {
    getRoot(): TreeNode | null {
      return root;
    },

    insert(data: number) {
      if (isNull(root)) {
        // it means this is the first time insert has been called to insert data into the tree.
        // Therefore, a new Node will take the data as its value and will be inserted as the
        // root node of the tree.
        root = treeNode(data);
        return root;
      }

      /**
       * @description method that will search the tree to see where the data should go.
       */
      const searchTree = (node: TreeNode): void => {
        /**
         * checks if our data is less than the current node’s value and if there is a value
         * to the left side of the current node.
         */
        if (data < node.value && node.left) {
          // If both are true, we use recursion and call the function again,
          // this time taking that left node as the argument.
          searchTree(node.left);
        } else if (data < node.value) {
          // If the data is less than the current node’s value
          // (and we know node.left doesn’t exist because the previous conditional wasn’t true),
          node.left = treeNode(data);
        } else if (data > node.value && node.right) {
          searchTree(node.right);
        } else if (data > node.value) {
          node.right = treeNode(data);
        }
      };

      return searchTree(root);
    },

    lookUp(value: number): TreeNode | undefined {
      if (isNull(root)) {
        return undefined;
      }

      const look = (node: TreeNode): TreeNode | undefined => {
        // is value is less than node's value, go left
        if (value < node.value) {
          return look(node.left!);
          // is value is greather than node's value, go right
        } else if (value > node.value) {
          return look(node.right!);
          // is value is equal to node's value, we found it!
        } else if (value === node.value) {
          return node;
        }
      };

      return look(root);
    },

    remove(value: number): TreeNode | undefined {
      if (isNull(root)) {
        return undefined;
      }

      /**
       * 1) traverse the tree, find node and its parent
       */
      const removeNode = (node: TreeNode, parentNode: TreeNode | null = null): TreeNode | undefined => {
        if (value < node.value) {
          return removeNode(node.left!, node);
        } else if (value > node.value) {
          return removeNode(node.right!, node);
          // we've found a match, so we can proceed to deletion.
        } else if (value === node.value) {
          // return { node, parentNode };

          if (isLeafNode(node)) {
            // node is the left child of parent
            if (node.value === parentNode!.left?.value) {
              parentNode!.left = null; // remove left node from parent
            }
            // node is the right child of parent
            if (node.value === parentNode!.right?.value) {
              parentNode!.right = null; // remove right node from parent
            }

            return node;
          } else if (hasOneChild(node)) {
            // figure out is node is left-side child of parent
            // or right-side of parent

            // node is left-child of parent
            if (node.value === parentNode!.left!.value) {
              // we replace parent's left-side child with
              // the node's side child

              // it means `node.right` if the node's only child
              if (isNull(node.left)) {
                parentNode!.right = node.right;
              }

              // it means `node.left` if the node's only child
              if (isNull(node.right)) {
                parentNode!.left = node.left;
              }

              return node;
            }

            // node is right-child of parent
            if (node.value === parentNode!.right!.value) {
              // we replace parent's right-side child with
              // the node's right-side child

              // it means `node.right` if the node's only child
              if (isNull(node.left)) {
                parentNode!.right = node.right;
              }

              // it means `node.left` if the node's only child
              if (isNull(node.right)) {
                parentNode!.left = node.left;
              }

              return node;
            }
          } else if (hasTwoChilds(node)) {
            /**
             * the successor can be either the largest value on the left subtree or
             * the smallest value in the right tree
             */
            // find the largest value in the left-side subtree
            const largest = findMaxValue(node.left);
            // find the smallest value in the right-side subtree
            const smallest = findMinValue(node.right);

            // node is a left subtree of parent
            if (node.value === parentNode!.left!.value) {
              parentNode!.left = treeNode(largest, node.left, node.right);
            }

            // node is a right subtree of parent
            if (node.value === parentNode!.right!.value) {
              parentNode!.right = treeNode(largest, node.left, node.right);
            }

            return node;
          }
        }
      };

      return removeNode(root);
    },

    findLeftMost,
    findRightMost,
    includes,
    findMinValue,
    findMaxValue,
    preorder,
    inorder,
    postorder,
    isValidBST,
    breadthFirstTraversal,
  };
}
