function repeatStr(str, num) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  let repeat = "";

  if (num<0) {
    throw new Error();
  }
  for (let i=1; i<=num; i++) {
    repeat = repeat+str;
  }

  return repeat;
}

module.exports = repeatStr;
