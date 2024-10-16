import timeConversion from './timeConversion.mjs';

describe('timeConversion', () => {
  const cases = [
    ['07:05:45PM', '19:05:45'],
    ['12:01:00PM', '12:01:00'],
    ['12:01:00AM', '00:01:00'],
  ];

  it.each(cases)('time for %s is: %s', (time, result) => {
    expect(timeConversion(time)).toBe(result);
  });
});
