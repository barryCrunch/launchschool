// easy_1.js

function displayProblemNumber(number) {
  console.log("\n*****************************");
  console.log(`        Promblem ${number}      `);
  console.log("\n*****************************");
}

displayProblemNumber(1);
let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers);
console.log(numbers[4]);


displayProblemNumber(2);
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function checkExclamation(str) {
  return str[str.length - 1] === '!';
}

console.log(checkExclamation(str1));
console.log(checkExclamation(str2));

// or

console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));

displayProblemNumber(3);
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(Object.keys(ages).includes('Spot'));
// or
console.log(ages.hasOwnProperty("Spot"));

displayProblemNumber(4);
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
console.log(munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.slice(1).toLowerCase());

displayProblemNumber(5);
console.log(false == '0'); // true
console.log(false === '0'); //false

displayProblemNumber(6);
ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
console.log(Object.assign(ages, additionalAges));

displayProblemNumber(7);
str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));
// or
console.log(str1.match("Dino") !== null);
console.log(str2.match("Dino") !== null);
// or
console.log(str1.indexOf("Dino") > -1);
console.log(str2.indexOf("Dino") > -1);

displayProblemNumber(8);
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones[flintstones.length] = "Dino";
console.log(flintstones);
// or
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);

displayProblemNumber(9);
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones = flintstones.concat(['Dino', 'Hoppy']);
console.log(flintstones);
// or
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino', 'Hoppy');
console.log(flintstones);

displayProblemNumber(10);
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
console.log(advice.slice(0, advice.indexOf("house")));
