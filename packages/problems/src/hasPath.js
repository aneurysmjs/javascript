/**
 * @typedef {Map<string, string[]>} AdjacencyList
 */

/**
 * @description checks whether there's a path between two nodes
 *
 * @param {AdjacencyList} graph
 * @param {string} src
 * @param {dst} dst
 * @returns boolean
 */
export default function hasPath(graph, src, dst) {
  /**
   * DFS - Recursive wy
   */
  if (src === dst) {
    return true;
  }
  for (const neighbor of graph.get(src)) {
    if (hasPath(graph, neighbor, dst)) {
      return true;
    }
  }
  return false;
  /**
   * DFS -Iterative way
   */
  // const stack = [src];
  // if (src === dst) {
  //   return true;
  // }
  // while (stack.length > 0) {
  //   const current = stack.pop();
  //   if (current === dst) {
  //     return true;
  //   }
  //   for (const neighbor of graph.get(current)) {
  //     stack.push(neighbor);
  //   }
  // }
  // return false;

  /**
   * BFS -Iterative way
   */
  // const queue = [src];
  // if (src === dst) {
  //   return true;
  // }
  // while (queue.length > 0) {
  //   const current = queue.shift();
  //   if (current === dst) {
  //     return true;
  //   }
  //   for (const neighbor of graph.get(current)) {
  //     queue.push(neighbor);
  //   }
  // }
}
