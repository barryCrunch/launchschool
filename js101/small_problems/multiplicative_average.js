// multiplicative_average.js

// INPUT: Array of Integers
// OUTPUT: Float to the third decimal
// ASSUMPTIONS: Array will always have integers
// Return a float formatted to the third decimal
// The passed array will never be empty
// ALGO: Use reduce to multiply all the integers in the array
// Device the value by the length of the passed array
// format with toFixed(3) and return value

function multiplicativeAverage(array) {
  let sum = array.reduce((prev, curr) => {
    return prev * curr;
  });

  return (sum / array.length).toFixed(3);
}
