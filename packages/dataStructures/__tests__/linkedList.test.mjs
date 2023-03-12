import { jest } from '@jest/globals';

import {
  createNode,
  printNodes,
  linkedListValues,
  sumLinkedList,
  findTarget,
  getNodeValueAtIndex,
  createLinkedList,
  prettyPrint,
  insertNodeAtEnd,
} from '../src/linkedList.mjs';

describe('linkedList', () => {
  describe('createNode', () => {
    it('creates a linkedList node', () => {
      const a = createNode('A');
      expect(a.value).toBe('A');
    });
  });

  describe('printNodes', () => {
    it('calls a callback per each node', () => {
      const d = createNode('D');
      const c = createNode('C', d);
      const b = createNode('B', c);
      const a = createNode('A', b);

      // const logger = jest.fn((val) => console.log('val', val));
      const logger = jest.fn();

      printNodes(a, logger);

      expect(logger).toHaveBeenCalledTimes(4);
    });
  });

  describe('linkedListValues', () => {
    it('gets all he linked list values in an array', () => {
      const d = createNode('D');
      const c = createNode('C', d);
      const b = createNode('B', c);
      const a = createNode('A', b);

      expect(linkedListValues(a)).toStrictEqual(['A', 'B', 'C', 'D']);
    });
  });

  describe('sumLinkedList', () => {
    it('gets the sum of all of the values from a linkedlist', () => {
      const d = createNode(8);
      const c = createNode(12, d);
      const b = createNode(5, c);
      const a = createNode(15, b);

      expect(sumLinkedList(a)).toBe(40);
    });
  });

  describe('findTarget', () => {
    it('returns true is a node is found', () => {
      const d = createNode('D');
      const c = createNode('C', d);
      const b = createNode('B', c);
      const a = createNode('A', b);

      expect(findTarget(a, 'B')).toBe(true);
      expect(findTarget(a, 'Z')).toBe(false);
    });
  });

  describe('getNodeValueAtIndex', () => {
    it('gets a node at given index', () => {
      const d = createNode('D');
      const c = createNode('C', d);
      const b = createNode('B', c);
      const a = createNode('A', b);

      expect(getNodeValueAtIndex(a, 2)).toBe('C');
      expect(getNodeValueAtIndex(a, 5)).toBe(null);
    });
  });

  describe('createLinkedList', () => {
    it('creates a linked list from a string array', () => {
      const result = createLinkedList(['a', 'b', 'c', 'd']);

      expect(result).toStrictEqual({
        value: 'a',
        next: {
          value: 'b',
          next: {
            value: 'c',
            next: {
              value: 'd',
              next: undefined,
            },
          },
        },
      });
    });
  });

  describe('prettyPrint', () => {
    it('pretty prints a linked list in the form "value -> nextValue -> ..."', () => {
      const result = createLinkedList(['a', 'b', 'c', 'd']);
      expect(prettyPrint(result)).toBe('a -> b -> c -> d');
    });
  });

  describe('insertNodeAtEnd', () => {
    it('inserts a new node at the end of the linked list', () => {
      const linkedList = createLinkedList(['a', 'b', 'c', 'd']);
      const result = insertNodeAtEnd(linkedList, 'e');
      expect(prettyPrint(result)).toBe('a -> b -> c -> d -> e');
    });
  });
});
