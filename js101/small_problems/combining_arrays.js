// combining_arrays.js

// INPUT: Two Arrays
// OUTPUT: One array with no duplicates
// Both arguments will always be arrays
// Arrays can be made of any value
// Arrays can be of any length
// The return value will be an array
// Create an empty array finalArray
// Loop through arrayOne for each value check if value
// is in finalArray. If not then add it to finalArray
// Loop through arrayTwo for each value check if value
// is in finalArray. If not then add it to finalArray
// return finalArray

function union(arrayOne, arrayTwo) {
  let finalArray = [];
  arrayOne.forEach((value) => {
    if (!finalArray.includes(value)) {
      finalArray.push(value);
    }
  });

  arrayTwo.forEach((value) => {
    if (!finalArray.includes(value)) {
      finalArray.push(value);
    }
  });

  return finalArray;
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// NOTES: I need to remember to breakout functionality
// DRY with the code. If i'm going to write something twice
// I should just create a function.
