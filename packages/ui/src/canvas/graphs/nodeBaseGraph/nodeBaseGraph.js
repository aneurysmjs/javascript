const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createNode(x, y) {
  return { x, y, width: 80, height: 50, isDragging: false };
}

function drawNode(node) {
  ctx.fillStyle = '#1e1e1e';
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.fillRect(node.x, node.y, node.width, node.height);
  ctx.strokeRect(node.x, node.y, node.width, node.height);
}

function nodeContains(node, mx, my) {
  return mx > node.x && mx < node.x + node.width && my > node.y && my < node.y + node.height;
}

function getNodeCenter(node) {
  return { x: node.x + node.width / 2, y: node.y + node.height / 2 };
}

function createConnection(from, to) {
  return { from, to };
}

function drawConnection(conn) {
  const { x: x1, y: y1 } = getNodeCenter(conn.from);
  const { x: x2, y: y2 } = getNodeCenter(conn.to);
  const cp1x = x1 + 100,
    cp1y = y1;
  const cp2x = x2 - 100,
    cp2y = y2;

  ctx.strokeStyle = '#3498db';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
  ctx.stroke();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  connections.forEach(drawConnection);
  nodes.forEach(drawNode);
}

const nodes = [createNode(200, 300), createNode(500, 200), createNode(500, 400)];

const connections = [
  createConnection(nodes[0], nodes[1]),
  createConnection(nodes[0], nodes[2]),
  createConnection(nodes[1], nodes[2]),
];

let selectedNode = null;
let offsetX, offsetY;

canvas.addEventListener('mousedown', (e) => {
  const { clientX, clientY } = e;
  nodes.forEach((node) => {
    if (nodeContains(node, clientX, clientY)) {
      selectedNode = node;
      offsetX = clientX - node.x;
      offsetY = clientY - node.y;
      node.isDragging = true;
    }
  });
});

canvas.addEventListener('mousemove', (e) => {
  if (selectedNode) {
    selectedNode.x = e.clientX - offsetX;
    selectedNode.y = e.clientY - offsetY;
    draw();
  }
});

canvas.addEventListener('mouseup', () => {
  if (selectedNode) {
    selectedNode.isDragging = false;
    selectedNode = null;
  }
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
});

draw();
