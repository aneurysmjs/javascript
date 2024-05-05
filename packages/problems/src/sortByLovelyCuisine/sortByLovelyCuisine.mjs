/**
 * @param {string} a
 * @param {string} b
 */
export default function sortByLovelyCuisine(a, b) {
  if (a === 'georgian' && b !== 'georgian') {
    return -1; // 'georgian' comes before anything else
  } else if (b === 'georgian' && a !== 'georgian') {
    return 1; // Anything else comes after 'georgian'
  } else if (a === 'indian' && b !== 'indian') {
    return -1; // 'indian' comes before anything else except 'georgian'
  } else if (b === 'indian' && a !== 'indian') {
    return 1; // Anything else comes after 'indian' except 'georgian'
  } else if (a === 'chinese' && b === 'italian') {
    return -1; // 'chinese' comes before 'italian'
  } else if (a === 'italian' && b === 'chinese') {
    return 1; // 'italian' comes after 'chinese'
  }

  return 0;
}
