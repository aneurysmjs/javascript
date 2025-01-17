import { describe, it, expect } from 'vitest';
import deleteChildrenFromGivenNode from './deleteChildrenFromGivenNode';

describe('deleteChildrenFromGivenNode', () => {
  it('it deletes all children nodes from node 3', () => {
    const tree = [
      { id: '1', parentIds: [] },
      { id: '2', parentIds: ['1'] },
      { id: '3', parentIds: ['1'] },
      { id: '4', parentIds: ['3'] },
      { id: '7', parentIds: ['4'] },
      { id: '6', parentIds: ['5', '4'] },
      { id: '5', parentIds: ['3'] },
    ];

    const updatedTree = deleteChildrenFromGivenNode({ id: '3', parentIds: ['1'] }, tree);

    expect(updatedTree).toStrictEqual([
      { id: '1', parentIds: [] },
      { id: '2', parentIds: ['1'] },
      { id: '3', parentIds: ['1'] },
    ]);
  });
});
