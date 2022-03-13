/**
 * @typedef {Map<string, string[]>} AdjacencyList
 */

/**
 *
 * @param {AdjacencyList} graph
 * @param {string} src
 * @param {string} dst
 * @returns number
 */
function shortestPath(graph, src, dst) {
  const visited = new Set([src]);

  const queue = [[src, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === dst) {
      return distance;
    }

    for (const neighbor of graph.get(node)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
}

/**
 *
 * @param {string[][]} edges
 * @param {string} src
 * @param {string} dst
 */
export default function undirectedPath(edges, src, dst) {
  const graph = buildGraph(edges);
  return shortestPath(graph, src, dst);
}

/**
 *
 * @param {string[][]} edges
 * @returns AdjacencyList
 */
export function buildGraph(edges) {
  /** @type AdjacencyList */
  const adjacencyList = new Map();

  for (const [a, b] of edges) {
    if (!adjacencyList.has(a)) {
      adjacencyList.set(a, []);
    }

    if (!adjacencyList.has(b)) {
      adjacencyList.set(b, []);
    }

    // so here we can safetely add neighbors into their edges
    adjacencyList.get(a).push(b);
    adjacencyList.get(b).push(a);
  }

  return adjacencyList;
}
