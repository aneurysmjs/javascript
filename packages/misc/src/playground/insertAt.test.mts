import { describe, expect, it } from 'vitest';

import insertAt from './insertAt.mjs';

describe('insertAt', () => {
  const lodaouts = ['Miro', 'Chen Li', 'David'];

  const result = ['Miro', 'Chen Li', 'Moses', 'David'];
  it('should insert a new element at index 2', () => {
    expect(insertAt(lodaouts, 2, 'Moses')).toEqual(result);
  });
});
