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

export const fromAdjancencyListToGraph = (adjancencyList: AdjancencyList): BaseGraph => {
  const graph: BaseGraph = {
    nodes: [],
    edges: [],
  };

  for (const [id, targets] of adjancencyList.entries()) {
    graph.nodes.push({ id, label: `node ${id}` });

    if (targets.length) {
      targets.forEach((target) => {
        graph.edges.push({ source: id, target });
      });
    }
  }

  return graph;
};
