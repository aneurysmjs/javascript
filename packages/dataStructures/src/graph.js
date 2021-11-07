/**
 * @typedef {Map<string, string[]>} AdjacencyList
 */

export default function createGraph() {
  /**@type AdjacencyList */
  const adjacencyList = new Map();

  return {
    /**
     * @description gets the graph.
     *
     * @returns AdjacencyList
     */
    getGraph() {
      return adjacencyList;
    },
    /**
     * @description adds a node to the graph.
     *
     * @param {string} node
     */
    addNode(node) {
      adjacencyList.set(node, []);
    },
    /**
     * @description adds an edge to the graph.
     *
     * @param {string} source
     * @param {string[]} value
     */
    addEdge(source, value) {
      adjacencyList.set(source, value);
    },
    /**
     * @description traverse in depth first
     *
     * @param {string} node - starting node
     * @callback fn
     */
    depthFirstSearch(node, fn) {
      fn(node);
      for (const neighbor of adjacencyList.get(node)) {
        this.depthFirstSearch(neighbor, fn);
      }
    },
    depthFirstSearchIter(node, fn) {
      const stack = [node];

      while (stack.length > 0) {
        const current = stack.pop();
        fn(current);

        for (const neighbor of adjacencyList.get(current)) {
          stack.push(neighbor);
        }
      }
    },
    /**
     * @description traverse in breath first
     *
     * @param {string} node - starting node
     * @param {(node) => void)} fn
     */
    breathFirstSearch(node, fn) {
      const queue = [node];

      while (queue.length > 0) {
        const current = queue.shift();

        fn(current);

        for (const neighbor of adjacencyList.get(current)) {
          queue.push(neighbor);
        }
      }
    },
  };
}
