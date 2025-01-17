interface Node {
  id: string;
  parentIds: string[];
}

export default function deleteChildrenFromGivenNode(node: Node, tree: Node[]): Node[] {
  const nodeId = node.id;

  // Create a Set to store IDs of nodes to delete
  const nodesToDelete = new Set();

  // Helper function to recursively find all descendants
  function collectDescendants(id: string) {
    for (const item of tree) {
      if (item.parentIds.includes(id)) {
        nodesToDelete.add(item.id);
        collectDescendants(item.id);
      }
    }
  }

  // Start collecting descendants from the given node
  collectDescendants(nodeId);

  // Filter the tree to exclude nodes that are in the nodesToDelete Set
  return tree.filter((item) => !nodesToDelete.has(item.id));
}
