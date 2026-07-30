const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. lines 3-6 trim the trailing p from the string
// 3. line 8 prepends 0 to the string until it is at least 3 characters long (so that any amount less than a pound can still get the 0 later on)
// 4. lines 9-11 extract the first part except the last 2 characters of the string as the pounds value
// 5. lines 14-15 extract the last 2 characters of the string as the remaining pence value
// 6. line 16 appends 0 to the pence until it is at least 2 characters long (but it is not needed as step 3 guarenteed the length of string must be longer than 3 characters)
// 7. line 18 prints out the formatted amount as pounds with 2 decimal places to the terminal
