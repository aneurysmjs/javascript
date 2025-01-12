import { getPosition, getRandomPosition } from './utils.js';
// Get the canvas element
const canvas = document.getElementById('canvas');
// Get the 2D rendering context
const ctx = canvas.getContext('2d');

/**
 * Draws a rectangle positioned in one of the four corners of the canvas.
 * @param {number} x - x coordinate of the rectangle.
 * @param {number} y - y coordinate of the rectangle.
 * @param {number} width - Width of the rectangle.
 * @param {number} height - Height of the rectangle.
 */
const drawRectangle = (x, y, width, height) => {
  // ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  ctx.fillStyle = 'blue'; // Set the fill color
  ctx.fillRect(x, y, width, height); // Draw the filled rectangle
};

const rectWidth = 100;
const rectHeight = 100;

const { x, y } = getPosition('center', rectWidth, rectHeight);

drawRectangle(x, y, rectWidth, rectHeight);

setInterval(() => {
  const position = getRandomPosition();

  const { x, y } = getPosition(position, rectWidth, rectHeight);

  drawRectangle(x, y, rectWidth, rectHeight);
}, 100);

// Optionally, draw the rectangle's border
// ctx.strokeStyle = 'black'; // Set the border color
// ctx.lineWidth = 2; // Set the border width
// ctx.strokeRect(x, y, width, height); // Draw the border
