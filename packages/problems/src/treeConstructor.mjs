/**
 *
 * @param {string[]} strArr
 * @returns
 */
export default function treeConstructor(strArr) {
  const nodesPair = strArr.map((str) => str.replace(/\(|\)/g, '').split(','));

  /**
   * @typedef {Object} parents
   * @property {string} key
   * @property {string[]} childs
   */
  const parents = {};
  const children = {};

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
