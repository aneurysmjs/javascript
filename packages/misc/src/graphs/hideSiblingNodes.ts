export interface Node {
  id: string;
  parentIds: string[];
}

export default function hideSiblingNodes(
  targetNode: Node,
  nodes: Node[],
  deletedNodesMap: Map<string, string[]>,
): Node[] {
  // Helper function to find all ancestors of a node
  function findAncestors(node: Node, allNodes: Node[]): Set<string> {
    const ancestors = new Set<string>();
    const queue = [...node.parentIds];

    while (queue.length > 0) {
      const parentId = queue.shift()!;
      if (!ancestors.has(parentId)) {
        ancestors.add(parentId);
        const parentNode = allNodes.find((n) => n.id === parentId);
        if (parentNode) {
          queue.push(...parentNode.parentIds);
        }
      }
    }

    return ancestors;
  }

  // BFS to find all descendants of the target node
  function findDescendants(node: Node, allNodes: Node[]): Set<string> {
    const descendants = new Set<string>();
    const queue = [node];

    while (queue.length > 0) {
      const current = queue.shift()!;
      const children = allNodes.filter((n) => n.parentIds.includes(current.id));
      for (const child of children) {
        if (!descendants.has(child.id)) {
          descendants.add(child.id);
          queue.push(child);
        }
      }
    }

    return descendants;
  }

  // Find ancestors and descendants of the target node
  const ancestors = findAncestors(targetNode, nodes);
  const descendants = findDescendants(targetNode, nodes);

  // Collect all allowed nodes (target node, ancestors, and descendants)
  const allowedNodes = new Set<string>([targetNode.id, ...ancestors, ...descendants]);

  // Collect nodes to delete
  const deletedNodes = nodes.filter((node) => !allowedNodes.has(node.id)).map((node) => node.id);

  // Update the deletedNodesMap
  deletedNodesMap.set(targetNode.id, deletedNodes);

  // Return the filtered tree
  return nodes.filter((node) => allowedNodes.has(node.id));
}
