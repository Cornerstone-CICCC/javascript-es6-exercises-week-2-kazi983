/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  date = date.split('/');
  const yyyy = date[0];
  const mm = date[1];
  const dd = date[2];

  // prettier-ignore
  const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const cleanDd = dd[0] === '0' ? dd.slice(1) : dd;

  let suffix = 'th';
  switch (cleanDd) {
    case '1': // Feedback: 11, 12, and 13 are special cases and should keep the "th" suffix.
      suffix = 'st';
      break;
    case '2': // Feedback: only 2, 22 should be "nd"; 12 should be "12th".
      suffix = 'nd';
      break;
    case '3': // Feedback: only 3, 23 should be "rd"; 13 should be "13th".
      suffix = 'rd';
      break;
    default:
  }

  return `${months[Number(mm) - 1]} ${cleanDd}${suffix}, ${yyyy}`;
};

console.log(talkingCalendar('2017/12/02')); // December 2nd, 2017
console.log(talkingCalendar('2007/11/11')); // November 11th, 2007
console.log(talkingCalendar('1987/08/24')); // August 24th, 1987

module.exports = talkingCalendar;
