import { cssValue, uIntString } from '../src/regexes.mjs';

it('css value', () => {
  expect('30px').toMatch(cssValue);
  expect('-30px').toMatch(cssValue);
  expect('x').not.toMatch(cssValue);
});

it('string integer', () => {
  expect('30').toMatch(uIntString);
  expect('-30').not.toMatch(uIntString);
  expect('x').not.toMatch(uIntString);

  expect('3.0').not.toMatch(uIntString);
});
