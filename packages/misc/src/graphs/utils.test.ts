import fs from 'node:fs';
import path from 'node:path';
import {
  fromGraphToAdjacencyList,
  fromAdjacencyListToGraph,
  fromKeyedNodeGraphToAdjacencyList,
} from './utils';

import type { BaseGraph, FlightEdge } from './types';

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

const dummyAdjacencyList = new Map<number, number[]>([
  [1, [2, 3]],
  [2, []],
  [3, []],
]);

interface FlightsGraph {
  nodes: {
    [K: string]: { name: string };
  };
  edges: FlightEdge[];
}

const flightsGraph: FlightsGraph = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './flights.json'), 'utf-8'),
);

describe('graph-utils', () => {
  describe('fromGraphToAdjacencyList', () => {
    it('converts a json graph to and adjacency list', () => {
      expect(fromGraphToAdjacencyList(dummyGraph)).toStrictEqual(dummyAdjacencyList);
    });
  });

  describe('fromGraphToAdjacencyList', () => {
    it('converts a json adjacency list to a graph', () => {
      expect(fromAdjacencyListToGraph(dummyAdjacencyList)).toStrictEqual(dummyGraph);
    });
  });

  describe('fromKeyedNodeGraphToAdjacencyList', () => {
    it('converts a json adjacency list to a graph', () => {
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

      expect(fromKeyedNodeGraphToAdjacencyList(flightsGraph)).toStrictEqual(list);
    });
  });
});
