// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
});

// Special case: numerator is zero
test(`should return false when numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(false);
  expect(isProperFraction(0, -1)).toEqual(false);
});

// Special case: numerator is equal to denominator
test(`should return false when numerator is equal to denominator`, () => {
  expect(isProperFraction(1, 1)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
  expect(isProperFraction(-1, -1)).toEqual(false);
});

// General case: fraction is not between 0 and 1
test(`should return false when fraction is not between 0 and 1`, () => {
  expect(isProperFraction(1, -1)).toEqual(false);
  expect(isProperFraction(1, -2)).toEqual(false);
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(2, -1)).toEqual(false);
  expect(isProperFraction(2, -2)).toEqual(false);
  expect(isProperFraction(-1, 2)).toEqual(false);
  expect(isProperFraction(-1, 1)).toEqual(false);
  expect(isProperFraction(-2, 2)).toEqual(false);
  expect(isProperFraction(-2, 1)).toEqual(false);
  expect(isProperFraction(-2, -1)).toEqual(false);
});

// General case: fraction is between 0 and 1
test(`should return true when fraction is between 0 and 1`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
});
