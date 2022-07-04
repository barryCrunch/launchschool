let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let obj = {};

flintstones.forEach((item, idx) => {
  obj[item] = idx;
});

console.log(obj);

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sum = 0;
Object.values(ages).forEach(age => {
  sum += age;
});

console.log(sum);

let ageArray = Object.values(ages);
let lowest = ageArray[0];

ageArray.forEach((age) => {
  if (age < lowest) {
    lowest = age;
  }
});
console.log(lowest);

// or

console.log(Math.min(...ageArray));

let countObj = {};
let statement = "The Flintstones Rock";

statement.split('').forEach((char) => {
  if (countObj.hasOwnProperty(char)) {
    countObj[char] += 1;
  } else {
    countObj[char] = 1;
  }
});

console.log(countObj);

