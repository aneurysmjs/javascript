/**
 * Returns a random position from the available options.
 * @returns {string} A random position ('top-left', 'top-right', 'bottom-left', 'bottom-right', 'center').
 */
export function getRandomPosition() {
  const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'];
  const randomIndex = Math.floor(Math.random() * positions.length);

  return positions[randomIndex];
}

/**
 * Draws a rectangle positioned in one of the four corners of the canvas.
 * @param {string} position - The position of the rectangle ('top-left', 'top-right', 'bottom-left', 'bottom-right').
 * @param {number} width - Width of the rectangle.
 * @param {number} height - Height of the rectangle.
 */
export function getPosition(position, width, height) {
  let x, y;

  switch (position) {
    case 'top-left':
      x = 0;
      y = 0;
      break;
    case 'top-right':
      x = canvas.width - width;
      y = 0;
      break;
    case 'center':
      x = (canvas.width - width) / 2;
      y = (canvas.height - height) / 2;
      break;
    case 'bottom-left':
      x = 0;
      y = canvas.height - height;
      break;
    case 'bottom-right':
      x = canvas.width - width;
      y = canvas.height - height;
      break;
    default:
      console.error('Invalid position. Use top-left, top-right, bottom-left, or bottom-right.');
      return;
  }

  return { x, y };
}
