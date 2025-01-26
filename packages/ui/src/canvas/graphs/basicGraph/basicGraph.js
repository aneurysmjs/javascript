const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Define canvas dimensions
const width = (canvas.width = 800);
const height = (canvas.height = 600);

// Data
const nodes = [
  { id: 'A', x: 100, y: 100 },
  { id: 'B', x: 300, y: 200 },
  { id: 'C', x: 500, y: 100 },
];

const links = [
  { source: 'A', target: 'B' },
  { source: 'B', target: 'C' },
];

// Function to draw a node
function drawNode(node) {
  ctx.beginPath();
  ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
  ctx.fillStyle = 'lightblue';
  ctx.fill();
  ctx.stroke();
}

// Function to draw a link
function drawLink(link) {
  const source = nodes.find((n) => n.id === link.source);
  const target = nodes.find((n) => n.id === link.target);

  ctx.beginPath();
  ctx.moveTo(source.x, source.y);
  ctx.lineTo(target.x, target.y);
  ctx.stroke();
}

// Draw the initial graph
function drawGraph() {
  ctx.clearRect(0, 0, width, height);

  nodes.forEach(drawNode);

  links.forEach(drawLink);
}

// Initial draw
drawGraph();
