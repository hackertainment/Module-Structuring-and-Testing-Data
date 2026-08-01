// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minuteStr = time.slice(3);

  if (hours==0 || hours==24) {
    return `12:${minuteStr} am`;
  }
  if (hours==12) {
    return `12:${minuteStr} pm`;
  }
  if (hours>12) {
    return `${pad(hours-12)}:${minuteStr} pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

console.assert(formatAs12HourClock("00:00")==="12:00 am");
console.assert(formatAs12HourClock("08:00")==="08:00 am");
console.assert(formatAs12HourClock("11:00")==="11:00 am");
console.assert(formatAs12HourClock("12:00")==="12:00 pm");
console.assert(formatAs12HourClock("20:00")==="08:00 pm");
console.assert(formatAs12HourClock("23:00")==="11:00 pm");
console.assert(formatAs12HourClock("24:00")==="12:00 am");