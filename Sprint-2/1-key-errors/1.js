// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
    // line 9: redeclaration of formal parameter decimalNumber
// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/
// =============> write your explanation here
    // decimalNumber has already been declared in line 8 as input of function
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));