import { createRequire } from 'node:module';
import { findValue } from './binaryTree.mjs';
const treeData = createRequire(import.meta.url)('./treeData.json');

describe('binaryTree', () => {
  describe('findValue', () => {
    it('returnsttrue if it finds a value', () => {
      expect(findValue(treeData, 6)).toBe(true);
    });

    it('returns true if it finds a value', () => {
      expect(findValue(treeData, 6)).toBe(true);
    });
  });
});
