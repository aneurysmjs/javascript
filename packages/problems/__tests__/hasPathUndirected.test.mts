import { describe, expect, test } from 'vitest';

import undirectedPath from '../src/hasPathUndirected.mjs';

const edges: [string, string][] = [
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
