// when_will_i_retire.js
const readline = require("readline-sync");

let currentAge = Number(readline.question("What is your age? "));
let retirementAge = Number(readline.question("At what age would you like to retire? "));


let today = new Date();
let year = today.getFullYear();
console.log(`It's ${year}. You will retire in ${year + (retirementAge - currentAge)}.`);
console.log(`You only have ${retirementAge - currentAge} years of work to go!`);
