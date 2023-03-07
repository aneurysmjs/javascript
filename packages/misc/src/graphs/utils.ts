import type { BaseGraph, AdjancencyList } from './types';

export const fromGraphtoAdjancencyList = (graph: BaseGraph): AdjancencyList => {
  const adjancencyList = new Map<number, number[]>();

  graph.nodes.forEach((node) => {
    if (!adjancencyList.has(node.id)) {
      adjancencyList.set(node.id, []);
    }
  });

  graph.edges.forEach((edge) => {
    if (adjancencyList.has(edge.source)) {
      adjancencyList.get(edge.source)?.push(edge.target);
    }
  });

  return adjancencyList;
};
