// easy_3.js

// Question 1
// Write three different ways to remove all of the elements
// from the following array:
let numbers = [1, 2, 3, 4];
console.log(numbers);
numbers = [];
console.log(numbers);

numbers = [1, 2, 3, 4];
console.log(numbers);
numbers.length = 0;
console.log(numbers);

numbers = [1, 2, 3, 4];
console.log(numbers);
numbers.splice(0, numbers.length);
console.log(numbers);


numbers = [1, 2, 3, 4];
console.log(numbers);
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

// Question 2
// What will the following code output?

console.log([1, 2, 3] + [4, 5]); // '[1, 2, 3] [4, 5]'
// 1,2,3 is converted to a string and then concatenated with 4,5

// Question 3
// What will the following code output?
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // hello there

// Question 4
// What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); //[{ first: 42 }, { second: "value2" }, 3, 4, 5]

// Question 5
// Rewrite this function so it only has one return statement
// and does not explicity use true or false
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValidFixed(color) {
  return color === "blue" || color === "green";
}

console.log(isColorValid("red"));
console.log(isColorValid("blue"));
console.log(isColorValidFixed("red"));
console.log(isColorValidFixed("blue"));
