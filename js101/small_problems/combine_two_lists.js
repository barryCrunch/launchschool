// combine_two_lists.js

// INPUT: two separate arrays.
// OUTPUT: Single array that alternates elements from each array.
// Each array has the same number of elements
// Each array is non-empty
// ALGO: Intialize an empty array finalArray
// Start a for loop and loop through each element in both arrays
// Push the element[i] from arrayOne into the finalArray
// Push the element[i] from arrayTwo into the finalArray
// Continue until you reach length of arrayOne
// RETURN finalArray

function interleave(arrayOne, arrayTwo) {
  let finalArray = [];

  for (let index = 0; index < arrayOne.length; index++) {
    // finalArray.push(arrayOne[index]);
    // finalArray.push(arrayTwo[index]);
    finalArray.push(arrayOne[index], arrayTwo[index]);
  }

  return finalArray;
}


function interleaveAlt(arrayOne, arrayTwo) {
  let finalArray = [];

  arrayOne.forEach((elem, idx) => {
    finalArray.push(elem, arrayTwo[idx]);
  });

  return finalArray;
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleaveAlt([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
