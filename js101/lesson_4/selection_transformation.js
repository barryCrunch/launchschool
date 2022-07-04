// selection_transformation.js

function selectFruit(basket) {
  let fruit = {};
  let items = Object.keys(basket);
  for (let idx = 0; idx < items.length; idx++) {
    if (basket[items[idx]] === 'Fruit') {
      fruit[items[idx]] = 'Fruit';
    }
  }

  return fruit;
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }


function doubleNumbers(numbers) {
  for (let idx = 0; idx < numbers.length; idx++) {
    numbers[idx] *= 2;
  }
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]


function doubleOddNumbers(numbers) {
  let doubledNumbers = [];

  for (let idx = 0; idx < numbers.length; idx++) {
    if (idx % 2 === 1) {
      doubledNumbers.push(numbers[idx] * 2);
    } else {
      doubledNumbers.push(numbers[idx]);
    }
  }
  return doubledNumbers;
}


myNumbers = [1, 4, 3, 7, 2, 6];
let doubledNumbers = doubleOddNumbers(myNumbers);  // => [2, 4, 6, 14, 2, 6]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]
console.log(doubledNumbers);                    // => [1, 4, 3, 7, 2, 6]


function multiply(numbers, multiplier) {
  let newNumbers = [];
  for (let idx = 0; idx < numbers.length; idx++) {
    newNumbers.push(numbers[idx] * multiplier);
  }
  return newNumbers;
}

myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
