// easy_3.js
function displayProblemNumber(number) {
  console.log("\n*****************************");
  console.log(`        Promblem ${number}      `);
  console.log("\n*****************************");
}

displayProblemNumber(1);
let numbers = [1, 2, 3, 4];
numbers = [];
console.log(`Numbers: ${numbers}`);
numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.pop();
}
console.log(`Numbers: ${numbers}`);
numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.shift();
}
console.log(`Numbers: ${numbers}`);
// or
numbers.length = 0;
numbers.splice(0, numbers.length);

displayProblemNumber(2);
console.log([1, 2, 3] + [4, 5]);
// 1,2,34,5


displayProblemNumber(3);
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
// hello there

displayProblemNumber(4);
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
// {first: "value1"}, {second: "value2"}, 3, 4, 5
// {first: 42}, {second: "value2"}, 3, 4, 5

displayProblemNumber(5);
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid1(color) {
  return color === "blue" || color === "green";
}

function isColorValid2(color) {
  let validColors = ['blue', 'green'];
  return validColors.includes(color);
}

console.log(isColorValid1('blue'));
console.log(isColorValid2('green'));
console.log(isColorValid1('red'));
console.log(isColorValid2('red'));
