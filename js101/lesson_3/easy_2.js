// easy_2.js
function displayProblemNumber(number) {
  console.log("\n*****************************");
  console.log(`        Promblem ${number}      `);
  console.log("\n*****************************");
}

displayProblemNumber(1);
let advice = "Few things in life are as important as house training your pet dinosaur important.";
while (advice.indexOf("important") !== -1) {
  advice = advice.replace('important', 'urgent');
}
console.log(advice);

displayProblemNumber(2);
let numbers = [1, 2, 3, 4, 5];
console.log([...numbers].reverse());
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
console.log([...numbers].sort((num1, num2) => num2 - num1));
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let emptyArray = [];
numbers.forEach((num) => {
  emptyArray.unshift(num);
});
console.log(numbers);
console.log(emptyArray);

displayProblemNumber(3);
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
console.log(numbers.includes(number1));
console.log(numbers.includes(number2));


displayProblemNumber(4);
let famousWords = "seven years ago...";
console.log("Four score and " + famousWords);
console.log("Four score and ".concat(famousWords));

displayProblemNumber(5);
numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers);

displayProblemNumber(6);
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
console.log(flintstones.flat());
console.log([].concat(...flintstones));

displayProblemNumber(7);
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());

displayProblemNumber(8);
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

displayProblemNumber(9);
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
console.log(title.padStart((padding + title.length)));
console.log(''.padStart(40, '-'));
console.log(padding);

displayProblemNumber(10);
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.split('').filter((char) => char === 't').length);
console.log(statement2.split('').filter((char) => char === 't').length);
