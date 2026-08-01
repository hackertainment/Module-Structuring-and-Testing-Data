// Predict and explain first...
//  =============> write your prediction here
    // line 8: redeclaration of formal parameter str
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/
// =============> write your explanation here
    // str has already been declared in line 7 as input of function
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}