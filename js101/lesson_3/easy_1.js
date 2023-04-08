// easy_1.js

// Question 2
// How can you determine wheather a given string ends with an exclamation mark?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// My Solution
function hasShebang(str) {
  return str[str.length - 1] === '!';
}
hasShebang(str1);
hasShebang(str2);

// Provided Solution
str1.endsWith('!');
str2.endsWith('!');

// Question 3
// Determine wheater the following object of people
// and their age contains an entry for 'Spot'
let ages1 = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
let ages2 = { Spot: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// My Solution
function hasSpot(obj) {
  return Object.keys(obj).includes('Spot');
}

hasSpot(ages1);
hasSpot(ages2);

// Provide Solution
ages1.hasOwnProperty("Spot");
ages2.hasOwnProperty("Spot");

// Question 4
// Using the following string, create a new string that contains all
// lowercase letters except for the first character, which should
// be capitalized.
let munstersDescription = "the Munsters are CREEPY and Spooky.";

function formatString(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(formatString(munstersDescription));

// Question 5
// What will the following code output?
console.log(false == '0'); // True
console.log(false === '0'); // False

// Question 6
// Add the following entries to ages
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

// My Solution
ages = {...ages, ...additionalAges};
console.log(ages);

// Provided Solution
console.log(Object.assign(ages, additionalAges));

// Question 7
// Determine wheather the name Dino appears in the strings below
str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// My Solution
function hasDino(str) {
  return str.includes('Dino');
}
console.log(hasDino(str1));
console.log(hasDino(str2));

// Provided Solution
console.log(str1.match('Dino') !== null);
console.log(str2.match('Dino') !== null);

// Question 8
// How can we add family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);

// Question 9
// Add Multiple Items to the flinstones array
flintstones.push('Dino', 'Bob');
console.log(flintstones);

// Question 10
//  Return a new version of this sentence that ends just before the word house
let advice = "Few things in life are as important as house training your pet dinosaur.";

function noHouse(str) {
  return advice.slice(0, advice.indexOf('house'));
}

console.log(noHouse(advice));
