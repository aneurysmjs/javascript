import hasPath from '../src/hasPath';
const graph = new Map();

graph.set('f', ['g', 'i']);
graph.set('g', ['h']);
graph.set('h', []);
graph.set('i', ['g', 'k']);
graph.set('j', ['i']);
graph.set('k', []);

describe('hasPath', () => {
  test('should has path', () => {
    expect(hasPath(graph, 'f', 'k')).toBe(true);
  });
});
