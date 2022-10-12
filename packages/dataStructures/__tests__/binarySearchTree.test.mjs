import { createBST, treeNode, extractNodes, printNodes } from '../src/binarySearchTree';

let bstAPI = {};

const exampleBstApi = createBST();

let bstExample = {};
let exampleApi = {};
beforeEach(() => {
  bstAPI = createBST();

  exampleApi = createBST();
  exampleApi.insert(10);
  exampleApi.insert(7);
  exampleApi.insert(6);
  exampleApi.insert(8);
  exampleApi.insert(1);
  exampleApi.insert(9);
  exampleApi.insert(11);
  exampleApi.insert(20);
  exampleApi.insert(14);
  exampleApi.insert(22);

  bstExample = exampleApi.getRoot();
});

describe('Binary Search Tree', () => {
  test('should have the proper methods', () => {
    expect(bstAPI).toHaveProperty('getRoot');
    expect(bstAPI).toHaveProperty('insert');
    expect(bstAPI).toHaveProperty('preorder');
    expect(bstAPI).toHaveProperty('isValidBST');
    expect(bstAPI).toHaveProperty('breadthFirstTraversal');
    expect(bstAPI).toHaveProperty('findLeftMost');
    expect(bstAPI).toHaveProperty('findRightMost');
    expect(bstAPI).toHaveProperty('includes');
    expect(bstAPI).toHaveProperty('findMinValue');
    expect(bstAPI).toHaveProperty('findMaxValue');
    expect(bstAPI).toHaveProperty('lookUp');
  });

  test('insert - add a new node to the tree', () => {
    bstAPI.insert(10);

    const bst = bstAPI.getRoot();

    expect(bst).toStrictEqual({
      value: 10,
      left: null,
      right: null,
    });
  });

  test('preorder traversal', () => {
    const result = bstAPI.preorder(bstExample);
    expect(result).toStrictEqual([10, 7, 6, 1, 8, 9, 11, 20, 14, 22]);
  });

  test('inorder traversal', () => {
    const result = bstAPI.inorder(bstExample);
    expect(result).toStrictEqual([1, 6, 7, 8, 9, 10, 11, 14, 20, 22]);
  });

  test('postorder traversal', () => {
    const result = bstAPI.postorder(bstExample);
    expect(result).toStrictEqual([1, 6, 9, 8, 7, 14, 22, 20, 11, 10]);
  });

  test('breath-first search', () => {
    const bfsNodes = [];
    const testTree = treeNode(
      1,
      treeNode(2, treeNode(4), treeNode(5)),
      treeNode(3, null, treeNode(6)),
    );
    exampleBstApi.breadthFirstTraversal(testTree, (node) => bfsNodes.push(node));

    expect(bfsNodes).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('findLeftMost - find the minimun node in the treee', () => {
    const minNode = exampleBstApi.findLeftMost(bstExample);

    expect(minNode.value).toBe(1);
  });

  test('findRightMost - find the maximum node in the treee', () => {
    const minNode = exampleBstApi.findRightMost(bstExample);

    expect(minNode.value).toBe(22);
  });

  test('includes - checks whether or not a node exists on the tree', () => {
    const hasNode1 = exampleBstApi.includes(bstExample, 1);
    const hasNotNode15 = exampleBstApi.includes(bstExample, 15);

    expect(hasNode1).toBe(true);
    expect(hasNotNode15).toBe(false);
  });

  test('findMinValue - finds the minimum value in tree', () => {
    const minValue = exampleBstApi.findMinValue(bstExample);

    expect(minValue).toBe(1);
  });
  test('findMaxValue - finds the maximum value in tree', () => {
    const maxValue = exampleBstApi.findMaxValue(bstExample);

    expect(maxValue).toBe(22);
  });

  test('lookUp - finds a node by its value', () => {
    const result = exampleApi.lookUp(8);

    expect(result).toStrictEqual({
      value: 8,
      left: null,
      right: { value: 9, left: null, right: null },
    });
  });

  describe('remove - removes a node by its value', () => {
    test('case 1 - remove leaf node', () => {
      const hasNode1 = exampleBstApi.includes(bstExample, 1);
      expect(hasNode1).toBe(true);

      const deletedNode = exampleApi.remove(1);

      expect(deletedNode).toStrictEqual({
        value: 1,
        left: null,
        right: null,
      });
    });

    test('case 2 - remove node with one child', () => {
      const hasNode6 = exampleBstApi.includes(bstExample, 6);
      expect(hasNode6).toBe(true);

      const deletedNode = exampleApi.remove(6);

      const hasNotNode6 = exampleBstApi.includes(bstExample, 6);
      expect(hasNotNode6).toBe(false);

      const parentOf6 = exampleApi.lookUp(7);

      expect(parentOf6.left.value).toBe(1);
    });

    test('case 3 - remove node with two childs', () => {
      const hasNode7 = exampleBstApi.includes(bstExample, 7);
      expect(hasNode7).toBe(true);

      const deletedNode = exampleApi.remove(7);

      const hasNotNode7 = exampleBstApi.includes(bstExample, 7);
      expect(hasNotNode7).toBe(false);

      expect(deletedNode).toStrictEqual({
        value: 7,
        left: {
          value: 6,
          left: { value: 1, left: null, right: null },
          right: null,
        },
        right: {
          value: 8,
          left: null,
          right: { value: 9, left: null, right: null },
        },
      });
    });
  });
});
