// easy_2.js

// Question 1
// Given a string, return a new string that replaces every occurrence of the
// word "important" with "urgent".
let advice = "Few things in life are as important as house training your pet dinosaur.";

function replaceImportant(str) {
  return str.replace('important', 'urgent');
}

console.log(replaceImportant(advice));

// Question 2
// Write two distinct ways of reversing the array without mutating
// the original array. Use reverse for the first solution, and sort
// for the second.
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice().reverse());
console.log([...numbers].sort((num1, num2) => num2 - num1));
console.log(numbers);

let temp = [];
numbers.forEach((num) => temp.unshift(num));
console.log(temp);
console.log(numbers);

// Question 3
// Given a number and an array determin whether the number is
// included in the array.

numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;  // false
let number2 = 95; // true

function containsNumbV1(arr, num) {
  return arr.includes(num);
}

function containsNumbV2(arr, num) {
  return arr.some(val => val === num);
}

console.log(containsNumbV1(numbers, number1));
console.log(containsNumbV1(numbers, number2));

console.log(containsNumbV2(numbers, number1));
console.log(containsNumbV2(numbers, number2));

// Question 4
// Starting with the string below, show two different ways to put
// "Four score and " in front of it.
let famousWords = "seven years ago...";
console.log("Four score and " + famousWords);
console.log("Four score and ".concat(famousWords));

// Question 5
// Given an array of numbers, mutate the array by remove the number at
// index 2.
numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers);

// Question 6
// Create a new array that contains all of the below values but in
// an un-nested format.
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log([].concat(...flintstones));

// Question 7
// Create an array from the object that contains only two elements:
// Barney's name and Barney's number.
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// My Solution
function getBarney(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (key === 'Barney') {
      return [key, value];
    }
  }
}

console.log(getBarney(flintstones));

// Provided Solution
console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());

// Question 8
// How would you check wheter the objects assigned to variables
// numbers and table below are arrays?
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

// Question 9
// How can we center the following title above the dable with 40
// cahracter spaces?
let title = "Flintstone Family Members";
const LENGTH_OF_TABLE = 40;
let padding = Math.floor(((LENGTH_OF_TABLE - title.length) / 2));
console.log(title.padStart(padding + title.length));

// Question 10
// Write a one-line expression to count the number of lower-case 't'
// characters in each of the following strings.
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// My Solution
function getCount(str) {
  let count = str.split('').reduce((accum, char) => {
    if (char === 't') {
      accum += 1;
    }
    return accum;
  }, 0);
  return count;
}

console.log(getCount(statement1));
console.log(getCount(statement2));

// Provided Solution
console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);
