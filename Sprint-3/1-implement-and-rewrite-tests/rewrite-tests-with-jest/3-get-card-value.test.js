// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`Should return its numeric value when given a number card`, () => {
  expect(getCardValue("9♠")).toEqual(9);
  expect(getCardValue("6♥")).toEqual(6);
  expect(getCardValue("2♦")).toEqual(2);
  expect(getCardValue("10♣")).toEqual(10);
});
//   Face Cards (J, Q, K)
test(`Should return 10 when given a face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});
//   Invalid Cards
test(`Should return 11 when given an ace card`, () => {
  expect(() => {getCardValue("invalid");}).toThrow();
  expect(() => {getCardValue("");}).toThrow();
  expect(() => {getCardValue(" ");}).toThrow();
  expect(() => {getCardValue("-");}).toThrow();
  expect(() => {getCardValue("0");}).toThrow();
  expect(() => {getCardValue("1");}).toThrow();
  expect(() => {getCardValue("A");}).toThrow();
  expect(() => {getCardValue("Z");}).toThrow();
  expect(() => {getCardValue("2");}).toThrow();
  expect(() => {getCardValue("♠");}).toThrow();
  expect(() => {getCardValue("  ");}).toThrow();
  expect(() => {getCardValue("--");}).toThrow();
  expect(() => {getCardValue("00");}).toThrow();
  expect(() => {getCardValue("11");}).toThrow();
  expect(() => {getCardValue("AA");}).toThrow();
  expect(() => {getCardValue("ZZ");}).toThrow();
  expect(() => {getCardValue("22");}).toThrow();
  expect(() => {getCardValue(" ♠");}).toThrow();
  expect(() => {getCardValue("-♠");}).toThrow();
  expect(() => {getCardValue("0♠");}).toThrow();
  expect(() => {getCardValue("1♠");}).toThrow();
  expect(() => {getCardValue("Z♠");}).toThrow();
  expect(() => {getCardValue("♠ ");}).toThrow();
  expect(() => {getCardValue("♠-");}).toThrow();
  expect(() => {getCardValue("♠0");}).toThrow();
  expect(() => {getCardValue("♠1");}).toThrow();
  expect(() => {getCardValue("♠A");}).toThrow();
  expect(() => {getCardValue("♠Z");}).toThrow();
  expect(() => {getCardValue("♠2");}).toThrow();
  expect(() => {getCardValue("♠♠");}).toThrow();
  expect(() => {getCardValue("10");}).toThrow();
  expect(() => {getCardValue("10 ");}).toThrow();
  expect(() => {getCardValue("10-");}).toThrow();
  expect(() => {getCardValue("100");}).toThrow();
  expect(() => {getCardValue("101");}).toThrow();
  expect(() => {getCardValue("10A");}).toThrow();
  expect(() => {getCardValue("10Z");}).toThrow();
  expect(() => {getCardValue("102");}).toThrow();
  expect(() => {getCardValue(" 10");}).toThrow();
  expect(() => {getCardValue("-10");}).toThrow();
  expect(() => {getCardValue("010");}).toThrow();
  expect(() => {getCardValue("110");}).toThrow();
  expect(() => {getCardValue("A10");}).toThrow();
  expect(() => {getCardValue("Z10");}).toThrow();
  expect(() => {getCardValue("210");}).toThrow();
  expect(() => {getCardValue("♠10");}).toThrow();
});
// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

