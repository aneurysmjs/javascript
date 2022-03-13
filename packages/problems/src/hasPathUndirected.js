/**
 * @typedef {Map<string, string[]>} AdjacencyList
 */

/**
 *
 * @param {AdjacencyList} graph
 * @param {string} src
 * @param {string} dst
 * @returns boolean
 */
function findShortestPath(graph, src, dst) {
  const visited = new Set();

  const stack = [src];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current === dst) {
      return true;
    }

    for (const neighbor of graph.get(current)) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
      visited.add(neighbor);
    }
  }

  return false;
}

/**
 *
 * @param {string[][]} edges
 * @param {string} src
 * @param {string} dst
 */
export default function shortestPath(edges, src, dst) {
  const graph = buildGraph(edges);
  return findShortestPath(graph, src, dst);
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
