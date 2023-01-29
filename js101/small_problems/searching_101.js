// searching_101.js
const readline = require('readline-sync');

let entries = [];
for (let index = 0; index < 6; index++) {
  let entry = readline.question(`Enter entry number ${index + 1}: `);
  entries.push(entry);
}

let lastNumber = readline.question("Entery last entry: ");

if (entries.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${entries}`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${entries}`);
}
