const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 50; // Start at the bottom
let yVelocity = 0;
const gravity = 0.5;
const jumpForce = -15;
const squareSize = 50;
const speed = 5;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'blue';
  ctx.fillRect(x, y, squareSize, squareSize);

  // Update y-position based on gravity and velocity
  yVelocity += gravity;
  y += yVelocity;

  // Prevent falling through the floor
  if (y + squareSize > canvas.height) {
    y = canvas.height - squareSize;
    yVelocity = 0;
  }
}

function keyDownHandler(event) {
  switch (event.key) {
    case 'ArrowRight':
      if (x + speed + squareSize <= canvas.width) {
        x += speed;
      }
      break;
    case 'ArrowLeft':
      if (x - speed >= 0) {
        x -= speed;
      }
      break;
    case 'ArrowUp':
      if (y === canvas.height - squareSize) {
        yVelocity = jumpForce;
      }
      break;
  }
}

document.addEventListener('keydown', keyDownHandler, false);

// Game loop
function gameLoop() {
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
