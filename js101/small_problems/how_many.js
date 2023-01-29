// how_many.js

// INPUT: Array of Strings
// OUTPUT: A dictionary of the count of each word
// ALGO: Intialize and empty object
// Loop through the passed Array
// Check if object has a property.
// If it doesn't create the property and set a value equal to 1
// If it does exist increment the value of the property by one
// Return the object

function countOccurrences(array) {
  let returnObj = {};
  array.forEach((word) => {
    if (returnObj.hasOwnProperty(word)) {
      returnObj[word] += 1;
    } else {
      returnObj[word] = 1;
    }
  });

  return returnObj;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));
