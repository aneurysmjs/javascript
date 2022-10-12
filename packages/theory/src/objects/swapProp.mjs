/**
 *
 * @param {object} obj1
 * @param {object} obj2
 * @param {string} key
 */
export default function swapProp(obj1, obj2, key) {
  const objA = {
    ...obj1,
    [key]: obj2[key],
  };
  return objA;
}
