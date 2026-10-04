export type AdjacencyList = Map<string, string[]>;

export type Edge = [string, string];

function findShortestPath(graph: AdjacencyList, src: string, dst: string): boolean {
  const visited = new Set<string>();

  const stack = [src];

  while (stack.length > 0) {
    const current = stack.pop()!;

    if (current === dst) {
      return true;
    }

    for (const neighbor of graph.get(current)!) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
      visited.add(neighbor);
    }
  }

  return false;
}

export default function shortestPath(edges: Edge[], src: string, dst: string): boolean {
  const graph = buildGraph(edges);
  return findShortestPath(graph, src, dst);
}

export function buildGraph(edges: Edge[]): AdjacencyList {
  const adjacencyList: AdjacencyList = new Map();

  for (const [a, b] of edges) {
    if (!adjacencyList.has(a)) {
      adjacencyList.set(a, []);
    }

    if (!adjacencyList.has(b)) {
      adjacencyList.set(b, []);
    }

    // so here we can safetely add neighbors into their edges
    adjacencyList.get(a)!.push(b);
    adjacencyList.get(b)!.push(a);
  }

  return adjacencyList;
}
