/**
 *
 * @param {number} millis
 * @returns {Promise<void>}
 */
export default async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}
