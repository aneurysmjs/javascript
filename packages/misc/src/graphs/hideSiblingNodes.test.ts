import { describe, it, expect } from 'vitest';

import hideSiblingNodes, { type Node } from './hideSiblingNodes.js';

// Example usage
const mockDataOfMultipleLevelsDeep = [
  {
    id: '1',
    parentIds: [],
  },
  {
    id: '2',
    parentIds: ['1'],
  },
  {
    id: '5',
    parentIds: ['2'],
  },
  {
    id: '4',
    parentIds: ['1'],
  },
  {
    id: '7',
    parentIds: ['4'],
  },
  {
    id: '3',
    parentIds: ['1'],
  },
  {
    id: '6',
    parentIds: ['3'],
  },
  {
    id: '8',
    parentIds: ['5'],
  },
  {
    id: '9',
    parentIds: ['6'],
  },
  {
    id: '10',
    parentIds: ['7'],
  },
];

describe('hideSiblingNodes', () => {
  describe('hiding sibling nodes at level 1', () => {
    const cases = [
      [
        { id: '2', parentIds: ['1'] },
        [
          {
            id: '1',
            parentIds: [],
          },
          {
            id: '2',
            parentIds: ['1'],
          },
          {
            id: '5',
            parentIds: ['2'],
          },
          {
            id: '8',
            parentIds: ['5'],
          },
        ],
        new Map([['2', ['4', '7', '3', '6', '9', '10']]]),
      ],
      [
        { id: '3', parentIds: ['1'] },
        [
          {
            id: '1',
            parentIds: [],
          },
          {
            id: '3',
            parentIds: ['1'],
          },
          {
            id: '6',
            parentIds: ['3'],
          },
          {
            id: '9',
            parentIds: ['6'],
          },
        ],
        new Map([['3', ['2', '5', '4', '7', '8', '10']]]),
      ],
      [
        { id: '4', parentIds: ['1'] },
        [
          {
            id: '1',
            parentIds: [],
          },
          {
            id: '4',
            parentIds: ['1'],
          },
          {
            id: '7',
            parentIds: ['4'],
          },
          {
            id: '10',
            parentIds: ['7'],
          },
        ],
        new Map([['4', ['2', '5', '3', '6', '8', '9']]]),
      ],
    ];

    it.each(cases)(
      'should hide siblings of node "%o"',
      (node, expectedTree, expectedDeletedNodes) => {
        const deletedNodesMap = new Map<string, string[]>();

        const updatedTree = hideSiblingNodes(
          node as Node,
          mockDataOfMultipleLevelsDeep,
          deletedNodesMap,
        );

        expect(updatedTree).toStrictEqual(expectedTree);

        expect(deletedNodesMap).toStrictEqual(expectedDeletedNodes);
      },
    );
  });

  describe('hiding sibling nodes at level 2', () => {
    const cases = [
      [
        { id: '5', parentIds: ['2'] },
        [
          {
            id: '1',
            parentIds: [],
          },
          {
            id: '2',
            parentIds: ['1'],
          },
          {
            id: '5',
            parentIds: ['2'],
          },
          {
            id: '8',
            parentIds: ['5'],
          },
        ],
        new Map([['5', ['4', '7', '3', '6', '9', '10']]]),
      ],
      [
        { id: '6', parentIds: ['3'] },
        [
          {
            id: '1',
            parentIds: [],
          },
          {
            id: '3',
            parentIds: ['1'],
          },
          {
            id: '6',
            parentIds: ['3'],
          },
          {
            id: '9',
            parentIds: ['6'],
          },
        ],
        new Map([['6', ['2', '5', '4', '7', '8', '10']]]),
      ],
      [
        { id: '7', parentIds: ['4'] },
        [
          {
            id: '1',
            parentIds: [],
          },
          {
            id: '4',
            parentIds: ['1'],
          },
          {
            id: '7',
            parentIds: ['4'],
          },
          {
            id: '10',
            parentIds: ['7'],
          },
        ],
        new Map([['7', ['2', '5', '3', '6', '8', '9']]]),
      ],
    ];

    it.each(cases)(
      'should hide siblings of node "%o"',
      (node, expectedTree, expectedDeletedNodes) => {
        const deletedNodesMap = new Map<string, string[]>();

        const updatedTree = hideSiblingNodes(
          node as Node,
          mockDataOfMultipleLevelsDeep,
          deletedNodesMap,
        );

        expect(updatedTree).toStrictEqual(expectedTree);

        expect(deletedNodesMap).toStrictEqual(expectedDeletedNodes);
      },
    );
  });
});
