export type AdjacencyList = Map<string, string[]>;

export default function createGraph() {
  const adjacencyList: AdjacencyList = new Map();

  return {
    /**
     * @description gets the graph.
     */
    getGraph(): AdjacencyList {
      return adjacencyList;
    },
    /**
     * @description adds a node to the graph.
     */
    addNode(node: string): void {
      adjacencyList.set(node, []);
    },
    /**
     * @description adds an edge to the graph.
     */
    addEdge(source: string, value: string[]): void {
      adjacencyList.set(source, value);
    },
    /**
     * @description traverse in depth first
     *
     * @param node - starting node
     */
    depthFirstSearch(node: string, fn: (node: string) => void): void {
      fn(node);
      for (const neighbor of adjacencyList.get(node) ?? []) {
        this.depthFirstSearch(neighbor, fn);
      }
    },
    depthFirstSearchIter(node: string, fn: (node: string) => void): void {
      const stack = [node];

      while (stack.length > 0) {
        const current = stack.pop()!;
        fn(current);

        for (const neighbor of adjacencyList.get(current) ?? []) {
          stack.push(neighbor);
        }
      }
    },
    /**
     * @description traverse in breath first
     *
     * @param node - starting node
     */
    breathFirstSearch(node: string, fn: (node: string) => void): void {
      const queue = [node];

      while (queue.length > 0) {
        const current = queue.shift()!;

        fn(current);

        for (const neighbor of adjacencyList.get(current) ?? []) {
          queue.push(neighbor);
        }
      }
    },
  };
}
