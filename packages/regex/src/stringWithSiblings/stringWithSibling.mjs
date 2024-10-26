/**
 *
 * @param {string} input
 * @returns {boolean}
 */
export default function stringWithSiblings(input) {
  /**
   * Regular expression to validate a specific input string format.
   *
   * @pattern /^(?!.*\.\.+)(?!.*\+\+)(?!.*\.$)(?!.*\+\.)[a-zA-Z0-9]+([.+][a-zA-Z0-9]+)+$/
   *
   * @description
   * This regular expression is used to validate strings that follow a specific pattern:
   *
   * 1. **Base identifier**: Starts with one or more alphanumeric characters.
   * 2. **Nested dot and plus notation**: Requires at least one segment with a `.` or `+`, each followed by alphanumeric characters, allowing deep nesting.
   *
   * The regex enforces several constraints to ensure the validity of the input:
   *
   * - No consecutive dots (`..`).
   * - No consecutive plus signs (`++`).
   * - No trailing dot (`.`).
   * - No plus sign followed by a dot (`+.`).
   *
   * @groups
   *
   * - `match[0]`: The entire matched string.
   *
   * @breakdown
   *
   * - `^`: Asserts the start of the string.
   * - `(?!.*\.\.+)`: Negative lookahead to disallow consecutive dots.
   * - `(?!.*\+\+)`: Negative lookahead to disallow consecutive plus signs.
   * - `(?!.*\.$)`: Negative lookahead to disallow a trailing dot.
   * - `(?!.*\+\.)`: Negative lookahead to disallow a plus sign followed by a dot.
   * - `[a-zA-Z0-9]+`: Matches one or more alphanumeric characters (the base identifier).
   * - `([.+][a-zA-Z0-9]+)+`: Requires at least one occurrence of either a dot or plus,
   *   each followed by alphanumeric characters, supporting deep nesting.
   * - `$`: Asserts the end of the string.
   *
   * @example
   * For the input string `"example.deep+path.with+segments"`, the regex matches:
   *
   * - `match[0]` → `"example.deep+path.with+segments"` (the entire input).
   */

  const regex = /^(?!.*\.\.+)(?!.*\+\+)(?!.*\.$)(?!.*\+\.)[a-zA-Z0-9]+([.+][a-zA-Z0-9]+)+$/;

  return regex.test(input);
}
