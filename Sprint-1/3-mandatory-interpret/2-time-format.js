const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // 6

// b) How many function calls are there?
    // 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    // it returns the remainder of movieLength divided by 60 (in integer division) and takes the sign of the dividend (i.e. movidLength)

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // the movieLength in whole minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // a string representing movieLength in h:m:s format, formattedMovieLength

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // no, because it only works for any non-negative integers
