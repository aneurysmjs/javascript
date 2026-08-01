import { describe, expect, it, vi } from 'vitest';

import { getInstrumentRows, printInstruments, instruments } from './play.mjs';
import type { Instrument } from './play.mjs';

describe('getInstrumentRows', () => {
  it('should build a right-aligned pyramid sorted by count ascending', () => {
    const rows = getInstrumentRows(instruments);

    expect(rows).toEqual([
      '        🎸',
      '      🥁🎸',
      '    🪗🥁🎸',
      '  🎺🪗🥁🎸',
      '🪈🎺🪗🥁🎸',
    ]);
  });

  it('should pad columns whose instrument is shorter than the current row', () => {
    const twoInstruments: Instrument[] = [
      { label: 'guitar', image: '🎸', count: 2 },
      { label: 'flute', image: '🪈', count: 1 },
    ];

    const rows = getInstrumentRows(twoInstruments);

    expect(rows).toEqual(['  🎸', '🪈🎸']);
  });

  it('should print a single row when all counts are equal', () => {
    const sameCount: Instrument[] = [
      { label: 'guitar', image: '🎸', count: 1 },
      { label: 'drum', image: '🥁', count: 1 },
    ];

    const rows = getInstrumentRows(sameCount);

    expect(rows).toEqual(['🎸🥁']);
  });
});

describe('printInstruments', () => {
  it('should log every row to the console', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    printInstruments(instruments);

    expect(logSpy).toHaveBeenCalledTimes(5);
    expect(logSpy).toHaveBeenNthCalledWith(1, '        🎸');
    expect(logSpy).toHaveBeenNthCalledWith(5, '🪈🎺🪗🥁🎸');

    logSpy.mockRestore();
  });
});
