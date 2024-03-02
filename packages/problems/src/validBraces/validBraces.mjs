const openParen = '(';
const closeParen = ')';

const openCurly = '{';
const closeCurly = '}';

const openBracket = '[';
const closeBracket = ']';

/**
 *
 * @param {string} l left character
 * @param {string} r right character
 * @returns
 */
const parensWrapper = (l, r) => l === openParen && r === closeParen;
/**
 *
 * @param {string} l left character
 * @param {string} r right character
 * @returns
 */
const curlyWrapper = (l, r) => l === openCurly && r === closeCurly;
/**
 *
 * @param {string} l left character
 * @param {string} r right character
 * @returns
 */
const bracketsWrapper = (l, r) => l === openBracket && r === closeBracket;

/**
 *
 * @param {string} l left character
 * @param {string} r right character
 * @returns {boolean}
 */
const isSymmetricBraces = (l, r) => {
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

/**
 *
 * @param {string[]} braces
 * @returns {boolean}
 */
const isGroupedBraces = (braces) => {
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

/**
 *
 * @param {string} bracesText
 * @returns {boolean}
 */
function validBraces_bad(bracesText) {
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

/**
 *
 * @param {string} braces
 * @returns {boolean}
 */

export default function isValidBraces(braces) {
  const stack = [];
  const map = {
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

      if (currentBrace !== map[lastBrace]) {
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
