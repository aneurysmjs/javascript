export const createNode = (value, next = null) => ({
  value,
  next,
});

/**
 * iterative version
 */
export const printNodesIter = (head, logger) => {
  let current = head;

  while (current !== null) {
    logger(current.value);
    current = current.next;
  }
};

export const printNodes = (head, logger) => {
  if (head === null) {
    return;
  }

  logger(head.value);

  printNodes(head.next, logger);
};

export const linkedListValues2 = (head) => {
  let current = head;
  const values = [];

  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  return values;
};

export const linkedListValues = (head) => {
  const values = [];

  const fillValues = (node) => {
    if (node !== null) {
      values.push(node.value);
      fillValues(node.next);
    }
  };

  fillValues(head);

  return values;
};

export const sumLinkedListIter = (head) => {
  let current = head;
  let sum = 0;

  while (current !== null) {
    sum += current.value;
    current = current.next;
  }

  return sum;
};

export const sumLinkedList = (node) => {
  if (node === null) {
    return 0;
  }

  return node.value + sumLinkedList(node.next);
};

export const findTargetIter = (node, target) => {
  let current = node;

  while (current !== null) {
    if (current.value === target) {
      return true;
    }
    current = node.next;
  }

  return false;
};

export const findTarget = (node, target) => {
  if (node === null) {
    return false;
  }

  if (node.value === target) {
    return true;
  }

  return findTarget(node.next, target);
};

export const getNodeValueAtIndexIter = (node, index) => {
  let current = node;

  let count = 0;

  while (current !== null) {
    if (count === index) {
      return current.value;
    }

    count += 1;

    current = current.next;
  }

  return null;
};

export const getNodeValueAtIndex = (node, index) => {
  if (node === null) {
    return null;
  }

  /**
   * when index reaches 0, this is the node's value we want
   */
  if (index === 0) {
    return node.value;
  }

  /**
   * on recursive calls you decrease it by one
   */
  return getNodeValueAtIndex(node.next, (index -= 1));
};

// const print = (el, ...rest) => {
//   if (el == null) {
//     return;
//   }

//   console.log('el', el);

//   print(...rest);
// };

// print(...values);

/**
 *
 * @param {string[]} values
 */
export const createLinkedListIter = (values) => {
  const head = createNode(values[0]?.toUpperCase());
  let current = head;

  for (let i = 1; i < values.length; i += 1) {
    const node = createNode(values[i]?.toUpperCase());
    current.next = node;

    current = node;
  }

  return head;
};

/**
 *
 * @param {string[]} values
 */
export const createLinkedList = (values) => {
  const buildList = (index) => {
    if (index === values.length) {
      return;
    }
    const node = createNode(values[index]);

    node.next = buildList((index += 1));

    return node;
  };

  return buildList(0);
};

export const prettyPrintIter = (linkedList) => {
  let current = linkedList;

  let result = '';

  while (current != null) {
    result += `${current.value} -> `;
    current = current.next;
  }

  if (result.endsWith(' -> ')) {
    result = result.replace(/\s->\s$/g, '');
  }

  return result;
};

export const prettyPrint = (linkedList) => {
  let result = '';

  const helper = (node) => {
    if (node == null) {
      return result;
    }
    result += `${node.value} -> `;

    helper(node.next);
  };

  helper(linkedList);

  if (result.endsWith(' -> ')) {
    result = result.replace(/\s->\s$/g, '');
  }

  return result;
};
