const openParen = '(';
const closeParen = ')';

const openCurly = '{';
const closeCurly = '}';

const openBracket = '[';
const closeBracket = ']';

/**
 *
 * @param l left character
 * @param r right character
 */
const parensWrapper = (l: string, r: string): boolean => l === openParen && r === closeParen;
/**
 *
 * @param l left character
 * @param r right character
 */
const curlyWrapper = (l: string, r: string): boolean => l === openCurly && r === closeCurly;
/**
 *
 * @param l left character
 * @param r right character
 */
const bracketsWrapper = (l: string, r: string): boolean => l === openBracket && r === closeBracket;

/**
 *
 * @param l left character
 * @param r right character
 */
const isSymmetricBraces = (l: string, r: string): boolean => {
  if (l === openParen) {
    return parensWrapper(l, r);
  }

  if (l === openCurly) {
    return curlyWrapper(l, r);
  }

  if (l === openBracket) {
    return bracketsWrapper(l, r);
  }

  return false;
};

// unfinished: never returns a value, so it always yields `undefined`
const isGroupedBraces = (braces: string[]): undefined => {
  if (braces[0] === openParen) {
    let current = 0;

    while (current <= braces.length) {}
    // return parensWrapper(l, r);
  }

  if (braces[0] === openCurly) {
    // return curlyWrapper(l, r);
  }

  if (braces[0] === openBracket) {
    //  return bracketsWrapper(l, r);
  }
};

// oxlint-disable-next-line no-unused-vars -- alternative implementation kept for reference
function validBraces_bad(bracesText: string): boolean {
  const braces = Array.from(bracesText);

  let left = 0;
  let right = braces.length - 1;

  let result = false;

  while (left < right) {
    // symmetric order
    if (isSymmetricBraces(braces[left], braces[right])) {
      result = true;
    } else if (isGroupedBraces(braces)) {
      result = true;
    } else {
      result = false;
    }

    left += 1;
    right -= 1;
  }

  // console.log('result', result);

  return result;
}

// export default function validBraces(braces) {
//   let tracer = [];
//   for (let i = 0; i < braces.length; i++) {
//     if (braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
//       tracer.push(braces[i]);
//     } else {
//       if (tracer.length === 0) {
//         return false;
//       }
//       let lastValue = tracer[tracer.length - 1];
//       if (
//         (braces[i] === ']' && lastValue === '[') ||
//         (braces[i] === '}' && lastValue === '{') ||
//         (braces[i] === ')' && lastValue === '(')
//       ) {
//         tracer.pop();
//       } else {
//         break;
//       }
//     }
//   }
//   return tracer.length === 0;
// }

export default function isValidBraces(braces: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < braces.length; i += 1) {
    const currentBrace = braces[i];

    if (map[currentBrace]) {
      stack.push(currentBrace);
    } else {
      const lastBrace = stack.pop();

      // `lastBrace` is `undefined` when the stack is empty; the lookup then yields `undefined`
      if (currentBrace !== map[lastBrace as string]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// /**
//  *
//  * @param {string} braces
//  * @returns
//  */
// export default function validBraces(braces) {
//   while (
//     braces.indexOf('{}') !== -1 ||
//     braces.indexOf('()') !== -1 ||
//     braces.indexOf('[]') !== -1
//   ) {
//     braces = braces.replace('{}', '').replace('()', '').replace('[]', '');
//   }
//   return braces.length === 0 ? true : false;
// }

// const regex = /\(\)|\[\]|\{\}/;

// export default function validBraces(braces) {
//   return regex.test(braces) ? validBraces(braces.replace(regex, '')) : '' === braces;
// }
