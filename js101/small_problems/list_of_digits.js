// list_of_digits.js

// INPUT: A single number
// OUTPUT: A list of numbers
// ASSUMPTIONS: The number passed will be positive
// Only one number will be passed
// ALGO:
// Intialize an empty array
// while the number > 0
// Take the modules of the number and assign it to a variable
// unshift the number on to the empty array
// Set number equal to num / 10 rounded down
// return arrya

function digitList(num) {
  let finalArray = [];

  while (num > 0) {
    let tempNum = num % 10;
    finalArray.unshift(tempNum);
    num = Math.floor(num / 10);
  }

  return finalArray;
}


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
