export interface Node {
  id: string;
  parentIds: string[];
}

export default function hideSiblingNodes<T extends { id: string; parentIds: string[] }>(
  targetNode: T,
  tree: T[],
  deletedNodesMap: Map<string, string[]>,
): T[] {
  // Helper function to find all ancestors of a node
  function findAncestors(node: Node, allNodes: Node[]): Set<string> {
    const ancestors = new Set<string>();
    const queue = [...node.parentIds];

    while (queue.length > 0) {
      const parentId = queue.shift();
      if (parentId && !ancestors.has(parentId)) {
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
  const ancestors = findAncestors(targetNode, tree);
  const descendants = findDescendants(targetNode, tree);

  // Collect all allowed nodes (target node, ancestors, and descendants)
  const allowedNodes = new Set<string>([targetNode.id, ...ancestors, ...descendants]);

  // Collect nodes to delete
  const deletedNodes = tree.filter((node) => !allowedNodes.has(node.id)).map((node) => node.id);

  // Update the deletedNodesMap
  deletedNodesMap.set(targetNode.id, deletedNodes);

  // Remove deleted node IDs from parentIds of remaining nodes
  const updatedNodes = tree
    .filter((node) => allowedNodes.has(node.id))
    .map((node) => ({
      ...node,
      parentIds: node.parentIds.filter((parentId) => !deletedNodes.includes(parentId)),
    }));

  // Return the filtered and updated tree
  return updatedNodes;
}
