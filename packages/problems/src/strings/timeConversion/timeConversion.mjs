/**
 * @param {string} s - A time in 12-hour format.
 * @returns {string} - The time in 24-hour format.
 */
export default function timeConversion(s) {
  // s = 07:05:45PM

  // 07
  let hours = s.slice(0, 2);
  // 05:45
  let minutesSeconds = s.slice(3, 8);
  // PM
  let ampm = s.slice(-2);

  // If the time is PM, we check if the hour is not 12.
  if (ampm === 'PM') {
    // If it's not 12, we add 12 to the hour. If it's 12, we keep it as it is.
    if (hours !== '12') {
      hours = parseInt(hours) + 12;
    }
  } else {
    if (hours === '12') {
      hours = '00';
    }
  }

  return hours + ':' + minutesSeconds;
}

/**
 *
 * @param {string} s
 * @returns
 */
function timeConversionOther(s) {
  const ampmPart = s.slice(-2);
  const timePart = s.slice(0, -2);

  const hourInt = parseInt(s.slice(0, 2));
  const minAndSec = timePart.slice(2);

  if (ampmPart === 'AM' && hourInt === 12) {
    return '00' + minAndSec;
  } else if (ampmPart === 'AM' || (ampmPart === 'PM' && hourInt === 12)) {
    return timePart;
  }

  const convertHour = hourInt + 12;

  return convertHour + minAndSec;
}
