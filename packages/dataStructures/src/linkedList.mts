export type ListNode<T> = {
  value: T;
  next: ListNode<T> | null;
};

export const createNode = <T,>(value: T, next: ListNode<T> | null = null): ListNode<T> => ({
  value,
  next,
});

/**
 * iterative version
 */
export const printNodesIter = <T,>(head: ListNode<T> | null, logger: (value: T) => void): void => {
  let current = head;

  while (current !== null) {
    logger(current.value);
    current = current.next;
  }
};

export const printNodes = <T,>(head: ListNode<T> | null, logger: (value: T) => void): void => {
  if (head === null) {
    return;
  }

  logger(head.value);

  printNodes(head.next, logger);
};

export const linkedListValues2 = <T,>(head: ListNode<T> | null): T[] => {
  let current = head;
  const values: T[] = [];

  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  return values;
};

export const linkedListValues = <T,>(head: ListNode<T> | null): T[] => {
  const values: T[] = [];

  const fillValues = (node: ListNode<T> | null): void => {
    if (node !== null) {
      values.push(node.value);
      fillValues(node.next);
    }
  };

  fillValues(head);

  return values;
};

export const sumLinkedListIter = (head: ListNode<number> | null): number => {
  let current = head;
  let sum = 0;

  while (current !== null) {
    sum += current.value;
    current = current.next;
  }

  return sum;
};

export const sumLinkedList = (node: ListNode<number> | null): number => {
  if (node === null) {
    return 0;
  }

  return node.value + sumLinkedList(node.next);
};

export const findTargetIter = <T,>(node: ListNode<T> | null, target: T): boolean => {
  let current = node;

  while (current !== null) {
    if (current.value === target) {
      return true;
    }
    current = current.next;
  }

  return false;
};

export const findTarget = <T,>(node: ListNode<T> | null, target: T): boolean => {
  if (node === null) {
    return false;
  }

  if (node.value === target) {
    return true;
  }

  return findTarget(node.next, target);
};

export const getNodeValueAtIndexIter = <T,>(node: ListNode<T> | null, index: number): T | null => {
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

export const getNodeValueAtIndex = <T,>(node: ListNode<T> | null, index: number): T | null => {
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

export const createLinkedListIter = (values: string[]): ListNode<string | undefined> => {
  const head = createNode(values[0]?.toUpperCase());
  let current = head;

  for (let i = 1; i < values.length; i += 1) {
    const node = createNode(values[i]?.toUpperCase());
    current.next = node;

    current = node;
  }

  return head;
};

export const createLinkedList = (values: string[]): ListNode<string> | undefined => {
  const buildList = (index: number): ListNode<string> | undefined => {
    if (index === values.length) {
      return;
    }
    const node = createNode(values[index]);

    node.next = buildList((index += 1)) as ListNode<string> | null;

    return node;
  };

  return buildList(0);
};

export const prettyPrintIter = <T,>(linkedList: ListNode<T> | null | undefined): string => {
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

export const prettyPrint = <T,>(linkedList: ListNode<T> | null | undefined): string => {
  let result = '';

  const helper = (node: ListNode<T> | null | undefined): string | undefined => {
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

export const insertNodeAtEndIter = <T,>(linkedList: ListNode<T>, value: T): ListNode<T> => {
  let current = linkedList;

  while (current.next) {
    current = current.next;
  }

  current.next = createNode(value);

  return linkedList;
};

export const insertNodeAtEnd = <T,>(linkedList: ListNode<T>, value: T): ListNode<T> => {
  const helper = (node: ListNode<T>): ListNode<T> => {
    if (node.next == null) {
      return node;
    }

    return helper(node.next);
  };

  const lastNode = helper(linkedList);

  lastNode.next = createNode(value);

  return linkedList;
};
