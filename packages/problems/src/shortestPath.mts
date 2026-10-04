export type AdjacencyList = Map<string, string[]>;

export type Edge = [string, string];

function shortestPath(graph: AdjacencyList, src: string, dst: string): number {
  const visited = new Set([src]);

  const queue: [string, number][] = [[src, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift()!;

    if (node === dst) {
      return distance;
    }

    for (const neighbor of graph.get(node)!) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
}

export default function undirectedPath(edges: Edge[], src: string, dst: string): number {
  const graph = buildGraph(edges);
  return shortestPath(graph, src, dst);
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
