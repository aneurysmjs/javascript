import type { BaseGraph, AdjacencyList, AdjacencyListStr, KeyedNodeGraph } from './types.js';

export const fromGraphToAdjacencyList = (graph: BaseGraph): AdjacencyList => {
  const adjacencyList = new Map<number, number[]>();

  graph.nodes.forEach((node) => {
    if (!adjacencyList.has(node.id)) {
      adjacencyList.set(node.id, []);
    }
  });

  graph.edges.forEach((edge) => {
    if (adjacencyList.has(edge.source)) {
      adjacencyList.get(edge.source)?.push(edge.target);
    }
  });

  return adjacencyList;
};

export const fromKeyedNodeGraphToAdjacencyList = (
  keyedNodeGraph: KeyedNodeGraph,
): AdjacencyListStr => {
  const adjacencyList = new Map<string, string[]>();

  Object.keys(keyedNodeGraph.nodes).forEach((key) => {
    if (!adjacencyList.has(key)) {
      adjacencyList.set(key, []);
    }
  });

  keyedNodeGraph.edges.forEach((edge) => {
    if (adjacencyList.has(edge.source)) {
      adjacencyList.get(edge.source)?.push(edge.target);
    }
  });

  return adjacencyList;
};

export const fromAdjacencyListToGraph = (adjacencyList: AdjacencyList): BaseGraph => {
  const graph: BaseGraph = {
    nodes: [],
    edges: [],
  };

  for (const [id, targets] of adjacencyList.entries()) {
    graph.nodes.push({ id, label: `node ${id}` });

    if (targets.length) {
      targets.forEach((target) => {
        graph.edges.push({ source: id, target });
      });
    }
  }

  return graph;
};
