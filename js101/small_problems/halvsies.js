// halvsies.js
// INPUT: Array
// OUTPUT: array of two arrays
// Input is always an array
// A single array of two arrays must be returned
// If there is not enought data to fill one of the two
// or both arrays then return an empty array
// Initialize two empty arrays, firstArray, secondArray
// Find the length of the intial array
// Set the first array equal to the slice of the original array
// with the last digit being the length of the first array
// divided by two and the rounded up.
// Set the second array to the split number

function halvsies(array) {
  let middleNum = Math.ceil((array.length / 2));

  let firstArray = array.slice(0,middleNum);
  let secondArray = array.slice(middleNum);
  return [firstArray, secondArray];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
