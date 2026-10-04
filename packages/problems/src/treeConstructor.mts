export default function treeConstructor(strArr: string[]): boolean {
  const nodesPair = strArr.map((str) => str.replace(/\(|\)/g, '').split(','));

  // parent -> its children
  const parents: Record<string, string[]> = {};
  // child -> its parent
  const children: Record<string, string> = {};

  for (const [child, parent] of nodesPair) {
    if (parents[parent]) {
      parents[parent].push(child);
    } else {
      parents[parent] = [child];
    }

    if (parents[parent].length > 2) {
      return false;
    }

    if (children[child]) {
      // child already has a parent
      return false;
    } else {
      children[child] = parent;
    }
  }

  return true;
}
