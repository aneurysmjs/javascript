/**
 * breaks up camel casing, using a space between words.
 *
 * @param {string} string
 * @returns {string}
 */
export default function breakCamelCase(string) {
  return string.replace(/([A-Z])/g, ' $1');
}
