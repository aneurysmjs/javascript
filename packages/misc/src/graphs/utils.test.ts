import { fromGraphtoAdjancencyList, fromAdjancencyListToGraph } from './utils';

import type { BaseGraph } from './types';

const dummyGraph: BaseGraph = {
  nodes: [
    { id: 1, label: 'node 1' },
    { id: 2, label: 'node 2' },
    { id: 3, label: 'node 3' },
  ],
  edges: [
    {
      source: 1,
      target: 2,
    },
    {
      source: 1,
      target: 3,
    },
  ],
};

const dummyAdjecencyList = new Map<number, number[]>([
  [1, [2, 3]],
  [2, []],
  [3, []],
]);

describe('graph-utils', () => {
  describe('fromGraphtoAdjancencyList', () => {
    it('converts a json graph to and adjancency list', () => {
      expect(fromGraphtoAdjancencyList(dummyGraph)).toStrictEqual(dummyAdjecencyList);
    });
  });

  describe('fromGraphtoAdjancencyList', () => {
    it('converts a json adjancency list to a graph', () => {
      expect(fromAdjancencyListToGraph(dummyAdjecencyList)).toStrictEqual(dummyGraph);
    });
  });
});
