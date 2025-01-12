const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 50;
let yVelocity = 0;
let xVelocity = 0; // New variable for horizontal velocity
const gravity = 0.5;
const jumpForce = -15;
const squareSize = 50;
const speed = 5;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'blue';
  ctx.fillRect(x, y, squareSize, squareSize);

  // Update positions
  x += xVelocity;
  yVelocity += gravity;
  y += yVelocity;

  // Horizontal boundary check
  if (x < 0) {
    x = 0;
  } else if (x + squareSize > canvas.width) {
    x = canvas.width - squareSize;
  }

  // Prevent falling through the floor
  if (y + squareSize > canvas.height) {
    y = canvas.height - squareSize;
    yVelocity = 0;
  }
}

function keyDownHandler(event) {
  switch (event.key) {
    case 'ArrowRight':
      xVelocity = speed;
      break;
    case 'ArrowLeft':
      xVelocity = -speed;
      break;
    case 'ArrowUp':
      if (y === canvas.height - squareSize) {
        yVelocity = jumpForce;
      }
      break;
  }
}

function keyUpHandler(event) {
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowLeft':
      xVelocity = 0; // Stop horizontal movement when key is released
      break;
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function gameLoop() {
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
