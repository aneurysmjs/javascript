// ------------------------------------------------------
// PROBLEM
// ------------------------------------------------------
// When the program runs it should print
//         🎸
//       🥁🎸
//     🪗🥁🎸
//   🎺🪗🥁🎸
// 🪈🎺🪗🥁🎸
// ------------------------------------------------------

export type Instrument = {
  label: string;
  image: string;
  count: number;
};

export const instruments: Instrument[] = [
  { label: 'guitar', image: '🎸', count: 5 },
  { label: 'trumpet', image: '🎺', count: 2 },
  { label: 'accordion', image: '🪗', count: 3 },
  { label: 'flute', image: '🪈', count: 1 },
  { label: 'drum', image: '🥁', count: 4 },
];

export const getInstrumentRows = (instruments: Instrument[]): string[] => {
  const sortedInstruments = instruments.toSorted((a, b) => a.count - b.count);

  const rowsCount = Math.max(...sortedInstruments.map((t) => t.count));

  const rows: string[] = [];

  for (let i = rowsCount; i >= 1; i -= 1) {
    let message = '';

    for (const instrument of sortedInstruments) {
      message += instrument.count >= i ? instrument.image : '  ';
    }

    rows.push(message);
  }

  return rows;
};

export const printInstruments = (instruments: Instrument[]) => {
  for (const row of getInstrumentRows(instruments)) {
    console.log(row);
  }
};

printInstruments(instruments);
