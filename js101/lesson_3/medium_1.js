// medium_1.js

// Question 1
// Write a program that outputs "The Flinstones Rock!" 10  times,
// with each line indented 1 space to the right of the line
// above it.

// My Solution
let str = "The Flintstones Rock!";
for (let index = 0; index < 10; index++) {
  console.log(str.padStart(str.length + index, " "));
}

// Provided Solution
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flintstones Rock!");
}

// Question 2
// Starting with the string below, return a new string that swaps
// the case of all the letters.
let munstersDescription = "The Munsters are creepy and spooky.";

let swappedStr = munstersDescription.split("").map((char) => {
  if (char.toUpperCase() === char) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");
console.log(swappedStr);

// Question 3
// Rewrite the function to fail gracefully on an input of 0 or negative.
// Also write the function without a do/while loop.
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
function factorsRewrite(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
