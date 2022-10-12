import undirectedPath, { buildGraph } from '../src/hasPathUndirected';

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

describe('find path in an undirectedd graph', () => {
  test('should find', () => {
    expect(undirectedPath(edges, 'j', 'm')).toBe(true);
  });
});
