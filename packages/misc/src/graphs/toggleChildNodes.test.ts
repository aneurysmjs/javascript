import { describe, it, expect } from 'vitest';
import toggleChildNodes from './toggleChildNodes';

describe('toggleChildNodes', () => {
  it('finds a route between 2 nodes', () => {
    const tree = [
      { id: '1', parentIds: [] },
      { id: '2', parentIds: ['1'] },
      { id: '3', parentIds: ['1'] },
      { id: '4', parentIds: ['3'] },
      { id: '7', parentIds: ['4'] },
      { id: '6', parentIds: ['5', '4'] },
      { id: '5', parentIds: ['3'] },
    ];

    const deletedNodesMap = new Map();

    const updatedTree = toggleChildNodes({ id: '3', parentIds: ['1'] }, tree, deletedNodesMap);

    expect(updatedTree).toStrictEqual([
      { id: '1', parentIds: [] },
      { id: '2', parentIds: ['1'] },
      { id: '3', parentIds: ['1'] },
    ]);

    const recoveredTree = toggleChildNodes(
      { id: '3', parentIds: ['1'] },
      updatedTree,
      deletedNodesMap,
    );

    console.log('recoveredTree', recoveredTree);

    expect(recoveredTree).toStrictEqual([
      { id: '1', parentIds: [] },
      { id: '2', parentIds: ['1'] },
      { id: '3', parentIds: ['1'] },
      { id: '4', parentIds: ['3'] },
      { id: '7', parentIds: ['4'] },
      { id: '6', parentIds: ['5', '4'] },
      { id: '5', parentIds: ['3'] },
    ]);
  });
});
