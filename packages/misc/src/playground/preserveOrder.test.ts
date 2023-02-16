import preserveOrder from './preserveOrder';

describe('preserveOrder', () => {
  const arr = [
    { name: 'jero', order: 1 },
    { name: 'matthias', order: 2 },
    { name: 'miro', order: 3 },
  ];

  it('should copy the first element and update the rest', () => {
    const copy = { order: 1, name: 'jero' };

    const result = [
      { name: 'jero', order: 1 },
      { name: 'jero', order: 2 },
      { name: 'matthias', order: 3 },
      { name: 'miro', order: 4 },
    ];

    const copies = preserveOrder(arr, copy);

    expect(copies).toEqual(result);
  });

  it('should copy the second element and update the rest', () => {
    const copy = { order: 2, name: 'matthias' };

    const result = [
      { name: 'jero', order: 1 },
      { name: 'matthias', order: 2 },
      { name: 'matthias', order: 3 },
      { name: 'miro', order: 4 },
    ];

    const copies = preserveOrder(arr, copy);

    expect(copies).toEqual(result);
  });
});
