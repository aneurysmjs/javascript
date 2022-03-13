import shortestPath from '../src/shortestPath';

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

describe('find shortest path in a graph', () => {
  test('should find shortest', () => {
    expect(shortestPath(edges, 'w', 'z')).toBe(2);
  });
});
