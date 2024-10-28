import { describe, it } from '@jest/globals';

import keyboard from './keyboard.mjs';

describe('keyboard', () => {
  const cases = [
    ['423692', '923857614', 8],
    ['91566165', '639485712', 11],
    ['511', '752961348', 1],
    [
      '8553982341832335462719765195724528712694739612751237758137979675921433426965922934481234474796463393755327699912785388742934174844495971927334148978958231589645962215239284424395761621472162397563225111568989166532272198999837172337964935133128126978889661247641766353955612542769867285896617629639516245591239457435957923971311116728488831225274446824296979829389491423221785976398754113726423614194612666244144272329545519951415222967427378249775225559425235161529515941857437999571648779947526394275938679478582259345186575415275933373112651495255967717786826167281434133426193445491963451563345',
      '825769413',
      761,
    ],
  ];

  it.each(cases)('should resolve after the given time', (userCode, keypad, result) => {
    expect(keyboard(userCode, keypad)).toBe(result);
  });
});
