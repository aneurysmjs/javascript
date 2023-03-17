import { createRequire } from 'node:module';
import { findValue, findMaxValue, findLeafNodes } from './binaryTree.mjs';
const treeData = createRequire(import.meta.url)('./treeData.json');
const treeAlphabet = createRequire(import.meta.url)('./treeAlphabet.json');

describe('binaryTree', () => {
  describe('findValue', () => {
    it('returnsttrue if it finds a value', () => {
      expect(findValue(treeData, 6)).toBe(true);
    });

    it('returns true if it finds a value', () => {
      expect(findValue(treeData, 6)).toBe(true);
    });
  });

  describe('findMaxValue', () => {
    it('returns maximum value in a tree', () => {
      expect(findMaxValue(treeData)).toBe(20);
    });
  });

  describe('findLeafNodes', () => {
    it('finds all leaf nodes in a binary tree', () => {
      expect(findLeafNodes(treeAlphabet)).toStrictEqual([
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'Q',
      ]);
    });
  });
});
