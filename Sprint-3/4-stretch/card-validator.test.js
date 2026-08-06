/*
To be valid, a card must:
- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.
*/
const isValidCard = require("./card-validator");
test("card has at least 5 characters", () => {
    expect(isValidCard("9999777788880000")).toEqual(true);
    expect(isValidCard("6666666666661666")).toEqual(true);
    expect(isValidCard("a92332119c011112")).toEqual(false);
    expect(isValidCard("4444444444444444")).toEqual(false);
    expect(isValidCard("1111111111111110")).toEqual(false);
    expect(isValidCard("6666666666666661")).toEqual(false);
    expect(isValidCard("1234567890")).toEqual(false);
});