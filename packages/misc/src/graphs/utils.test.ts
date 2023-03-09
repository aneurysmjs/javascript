import fs from 'node:fs';
import path from 'node:path';
import {
  fromGraphtoAdjancencyList,
  fromAdjancencyListToGraph,
  fromKeydNodeGraphtoAdjancencyList,
} from './utils';

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

const flightsGraph = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './flights.json'), 'utf-8'),
);

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

  describe('fromKeydNodeGraphtoAdjancencyList', () => {
    it('converts a json adjancency list to a graph', () => {
      const list = new Map<string, string[]>([
        ['ATL', ['LAX', 'ORD', 'DFW']],
        ['LAX', ['JFK', 'DEN']],
        ['ORD', ['JFK', 'DEN']],
        ['DFW', ['SFO', 'LAS']],
        ['JFK', []],
        ['DEN', []],
        ['SFO', []],
        ['LAS', []],
      ]);
      expect(fromKeydNodeGraphtoAdjancencyList(flightsGraph)).toStrictEqual(list);
    });
  });
});
