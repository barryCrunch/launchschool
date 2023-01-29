// truthiness.js

console.log(true);
console.log(false);

function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  } else {
    return string;
  }
}

makeLonger("abc", true);
makeLonger("xyz", false);

function isDigit(char) {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false;
  }
}

isDigit("5");
isDigit("a");

let num = 5;

if (num < 10) {
  console.log("small number");
} else {
  console.log("large number");
}

function isSmall(number) {
  return number < 10;
}

num = 15;

if (isSmall(num)) {
  console.log("small number");
} else {
  console.log("large number");
}

let myName = "mike";

if (myName && (myName.length > 0)) {
  console.log(`Hi, ${myName}.`);
} else {
  console.log("Hello, whoever you are.");
}
