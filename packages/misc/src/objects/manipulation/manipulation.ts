/**
 *
 * @param {Record<string, any>} target
 * @param {string} path
 * @param {any} [value]
 * @returns
 */
export function add<T extends Record<string, any>>(target: T, path: string, value?: any) {
  const keys = path.split('.');

  // Helper function to recursively build the object
  function build(obj: T, index: number): T {
    // If we've processed all keys, return an empty object at this level
    if (index === keys.length) {
      return value ?? {};
    }

    const key = keys[index];
    // Create a new object with the current key, preserving existing properties
    return {
      ...obj,
      [key]: build(obj[key] || {}, index + 1), // recursively build for the next level
    };
  }

  // Start the recursive building process
  return build(target, 0);
}

export function get<T extends Record<string, any>>(target: T, path: string) {
  const keys = path.includes('.') ? path.split('.') : [path];

  return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), target);
}
