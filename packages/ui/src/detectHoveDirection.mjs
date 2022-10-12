/**
 * @see http://jsfiddle.net/MJTkk/2/
 */

const img = document.querySelector('img');

function getEdge(evt) {
  console.log('evt.pageX', evt.pageX);
  console.log('evt.pageY', evt.pageY);

  const elPos = evt.target.getBoundingClientRect();
  console.log('elPos', elPos);
  console.log('evt.pageX - elPos.left', evt.pageX - elPos.left);
  console.log('----------');
  const edge = closestEdge(
    evt.pageX - elPos.left,
    evt.pageY - elPos.top,
    elPos.width,
    elPos.height,
  );

  return edge;
}

function handleMouseOver(evt) {
  const edge = getEdge(evt);
  log('entered at: ' + edge);
}

function handleMouseLeave(evt) {
  const edge = getEdge(evt);
  log('left at: ' + edge + '<br><br>');
}

img.addEventListener('mouseover', handleMouseOver);
img.addEventListener('mouseleave', handleMouseLeave);

function closestEdge(x, y, w, h) {
  const topEdgeDist = distMetric(x, y, w / 2, 0);
  const bottomEdgeDist = distMetric(x, y, w / 2, h);
  const leftEdgeDist = distMetric(x, y, 0, h / 2);
  const rightEdgeDist = distMetric(x, y, w, h / 2);
  const min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);

  switch (min) {
    case leftEdgeDist:
      return 'left';
    case rightEdgeDist:
      return 'right';
    case topEdgeDist:
      return 'top';
    case bottomEdgeDist:
      return 'bottom';
  }
}

const directionsLog = document.querySelector('#directionsLog');

function log(msg) {
  const pre = document.createElement('pre');
  pre.innerHTML = msg;
  directionsLog.append(pre);
}

function distMetric(x, y, x2, y2) {
  const xDiff = x - x2;
  const yDiff = y - y2;

  return xDiff * xDiff + yDiff * yDiff;
}
