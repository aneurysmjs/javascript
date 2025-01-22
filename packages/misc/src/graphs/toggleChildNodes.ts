interface Node {
  id: string;
  parentIds: string[];
}

export default function toggleChildNodes(node: Node, tree: Node[], deletedNodesMap = new Map()) {
  const nodeId = node.id;

  if (deletedNodesMap.has(nodeId)) {
    // Restore child nodes
    const restoredNodes = deletedNodesMap.get(nodeId);
    deletedNodesMap.delete(nodeId);
    return [...tree, ...restoredNodes];
  }

  // Create a Set to store IDs of nodes to delete
  const nodesToDelete = new Set();
  const nodesToKeep = [];
  const removedNodes = [];

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

  // Separate nodes to delete and nodes to keep
  for (const item of tree) {
    if (nodesToDelete.has(item.id)) {
      removedNodes.push(item);
    } else {
      nodesToKeep.push(item);
    }
  }

  // Store removed nodes in the map
  deletedNodesMap.set(nodeId, removedNodes);

  return nodesToKeep;
}
