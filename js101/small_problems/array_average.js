// array_average.js

// INPUT: An array of integers
// OUTPUT: Returns the average of all the integers in the array
// Rounded down to the integer component of the average.
// ASSUMPTIONS: Array will never be empty. It will always contain
// integers
// ALGO: SUM the array return the result diveded by the length of the array
// rounded down using the Math.floor

function average(array) {
  let total = array.reduce((prev, curr) => prev + curr, 0);

  return Math.floor(total / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
