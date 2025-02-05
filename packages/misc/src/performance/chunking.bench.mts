import { describe, it, expect, bench, vi } from 'vitest';
import { chunking, noChunking } from './chunking.mjs';

let largeData = [];

for (let i = 0; i < 10_000_000; i++) {
  largeData.push(i);
}

describe('chunking', () => {
  bench('normal', () => {
    noChunking(largeData);
  });

  bench('chunking', () => {
    chunking(largeData);
  });
});
