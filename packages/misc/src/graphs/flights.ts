import fs from 'node:fs';
import path from 'node:path';

import type { AdjacencyFlights, FlightEdge } from './types';

interface FlightsGraph {
  nodes: {
    [K: string]: { name: string };
  };
  edges: FlightEdge[];
}

const flightsGraph: FlightsGraph = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './flights.json'), 'utf-8'),
);

export const fromFlightsGraphToFlightAdjacencyList = (
  keyedNodeGraph: FlightsGraph,
): AdjacencyFlights => {
  const adjacencyList = new Map<string, FlightEdge[]>();

  Object.keys(keyedNodeGraph.nodes).forEach((key) => {
    if (!adjacencyList.has(key)) {
      adjacencyList.set(key, []);
    }
  });

  keyedNodeGraph.edges.forEach((edge) => {
    if (adjacencyList.has(edge.source)) {
      adjacencyList.get(edge.source)?.push(edge);
    }
  });

  return adjacencyList;
};

const flightsAdjacencyList = fromFlightsGraphToFlightAdjacencyList(flightsGraph);

export const findRoute = (from: string, to: string) => {
  const queue = [from];
  const visited = new Set();
  const result: FlightEdge[] = [];

  while (queue.length > 0) {
    const current = queue.shift();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const neighbor of flightsAdjacencyList.get(current)) {
      if (neighbor.source === from && neighbor.target === to) {
        // return true;

        result.push(neighbor);

        return true;
      }

      if (!visited.has(neighbor.target)) {
        visited.add(neighbor.target);

        queue.push(neighbor.target);
      }
    }
  }

  return false;
};
