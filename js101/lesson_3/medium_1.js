// medium_1.js
function displayProblemNumber(number) {
  console.log("\n*****************************");
  console.log(`        Promblem ${number}      `);
  console.log("\n*****************************");
}

displayProblemNumber(1);
let flintstones = "The Flintstones Rock!";
for (let padVal = 1; padVal <= 10; padVal++) {
  console.log(flintstones.padStart(flintstones.length + padVal, ' '));
}

// or

for (let padding = 1; padding <= 10; padding++) {
  console.log(' '.repeat(padding) + "The Flintstones Rock!");
}

displayProblemNumber(2);
let munstersDescription = "The Munsters are creepy and spooky.";
console.log(munstersDescription.split('').map((char) => char.charCodeAt(0) >= 97 ? char.toUpperCase() : char.toLowerCase()).join(''));

displayProblemNumber(3);
function factors(number) {
  if (number <= 0) {
    return [];
  }
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

// or
function factors1(number) {
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

displayProblemNumber(4);
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
// The first option mutates the caller. While the second option does
// not change either array but returns a new array.

displayProblemNumber(6);
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
console.log(Number.isNaN(nanArray[0]));
// Return False, javascript doesn't let you use == or === with NaN

displayProblemNumber(7);
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
// 34

displayProblemNumber(8);
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

displayProblemNumber(9);
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// rps(rps(paper, rock), rock)
// rps(paper, rock)
// rps(paper)

displayProblemNumber(10);
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
console.log(bar(foo()));
// "no"
