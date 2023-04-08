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
// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
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

// Question 4
// What is the difference between these two approaches?
// eslint-disable-next-line no-unused-vars
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// eslint-disable-next-line no-unused-vars
function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
// The difference is that concat will return a new array.
// The first function will mutate the original array.
// Meaning that you will need to assign the return value to the original array.

// Question 5
// What will the following two lines of code output?
console.log(0.3 + 0.6); // .9
console.log(0.3 + 0.6 === 0.9); // True

// Quesion 6
// What do you think the following code will output?
let nanArray = [NaN];
// eslint-disable-next-line use-isnan
console.log(nanArray[0] === NaN);
console.log(Number.isNaN(nanArray[0]));

// Question 7
// What is the output of the following code?
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

// eslint-disable-next-line no-unused-vars
let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34

// Question 8
// Did spot mess with the family data after running his function?
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);
console.log(munsters);

// Question 9
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")); // Paper

// Question 10
// Consider the following two functions and determine what the associated
// invocation will return.
function foo(_param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
bar(foo()); // no
bar("yes");
console.log(bar(foo()));