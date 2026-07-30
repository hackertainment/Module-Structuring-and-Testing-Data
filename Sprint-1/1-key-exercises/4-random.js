const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);
// Math.random() generates a random decimal number of 0-1 including 0 excluding 1 (e.g. 0.99999)
// multiply 100 (i.e. the range of minimum and maximum) expands it to 0-100 including 0 excluding 100 (e.g. 99.999)
// Math.floor() truncates it to an integer between 0-99 inclusive (e.g. 99)
// add 1 (i.e. minumum) shifts it to an integer between 1-100 inclusive (e.g. 100)
// assign the final integer (random between minimum and maximum inclusive) to the variable num