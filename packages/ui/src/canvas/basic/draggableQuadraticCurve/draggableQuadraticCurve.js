const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Control points
let startX = 100;
let startY = canvas.height - 50;
let controlX = canvas.width / 2;
let controlY = -50;
let endX = canvas.width - 100;
let endY = canvas.height - 50;

let draggingPoint = null;

const drawQuadraticCurve = () => {
  context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  context.lineWidth = 5;
  context.strokeStyle = 'red'; // line color
  context.beginPath();
  context.moveTo(startX, startY);
  context.quadraticCurveTo(controlX, controlY, endX, endY);
  context.stroke();

  // Draw control points
  drawControlPoint(startX, startY);
  drawControlPoint(controlX, controlY);
  drawControlPoint(endX, endY);
};

const drawControlPoint = (x, y) => {
  context.fillStyle = 'blue';
  context.beginPath();
  context.arc(x, y, 8, 0, Math.PI * 2);
  context.fill();
};

const isPointInControlPoint = (x, y, pointX, pointY) => {
  const dx = x - pointX;
  const dy = y - pointY;

  return dx * dx + dy * dy < 8 * 8; // 8 is the radius of the control point
};

canvas.addEventListener('mousedown', (event) => {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;

  if (isPointInControlPoint(mouseX, mouseY, startX, startY)) {
    draggingPoint = 'start';
  } else if (isPointInControlPoint(mouseX, mouseY, controlX, controlY)) {
    draggingPoint = 'control';
  } else if (isPointInControlPoint(mouseX, mouseY, endX, endY)) {
    draggingPoint = 'end';
  }
});

canvas.addEventListener('mousemove', (event) => {
  if (draggingPoint) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    if (draggingPoint === 'start') {
      startX = mouseX;
      startY = mouseY;
    } else if (draggingPoint === 'control') {
      controlX = mouseX;
      controlY = mouseY;
    } else if (draggingPoint === 'end') {
      endX = mouseX;
      endY = mouseY;
    }

    drawQuadraticCurve();
  }
});

canvas.addEventListener('mouseup', () => {
  draggingPoint = null; // Stop dragging
});

canvas.addEventListener('mouseleave', () => {
  draggingPoint = null; // Stop dragging if mouse leaves canvas
});

drawQuadraticCurve(); // Initial draw
