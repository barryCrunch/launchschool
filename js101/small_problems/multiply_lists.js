// multiply_lists.js

// INPUT: Two lists of numbers
// OUTPUT: A list of numbers where each indicie is the product of the
// corresponding indicies of the original two lists.
// ALGO: Loop through the first list and multiple the current value
// by the current value at the same index of the second list.

function multiplyList(arrayOne, arrayTwo) {
  let finalArray = [];

  for (let idx = 0; idx < arrayOne.length; idx++) {
    finalArray.push(arrayOne[idx] * arrayTwo[idx]);
  }

  return finalArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

