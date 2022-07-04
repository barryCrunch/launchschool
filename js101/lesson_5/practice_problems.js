function displayProblemNumber(number) {
  console.log("\n*****************************");
  console.log(`        Promblem ${number}      `);
  console.log("\n*****************************");
}

// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?
displayProblemNumber(1);
let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a));
console.log(arr);

displayProblemNumber(2);
// How would you orderthe following array of objects based on the year of publication of each book, from the earliest to the latest? 
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
  return Number(a['published']) - Number(b['published']);
});
console.log(books);

displayProblemNumber(3);
// For each of these collection objects, demonstrate how you would access the letter g.
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1['b'][1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
console.log(Object.keys(obj2['third'])[0]);

displayProblemNumber(4);
arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);

arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
console.log(arr2);

obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4;
console.log(obj1);

obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2['a']['a'][2] = 4;
console.log(obj2);

displayProblemNumber(5);
// Compute and display the total age of the male members of the family.
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

// With reducer
let initialValue = 0;
let totalMaleAge = Object.keys(munsters).reduce((prev, curr) => {
  if (munsters[curr]['gender'] === 'male') {
    return prev + munsters[curr]['age'];
  } else {
    return prev;
  }
}, initialValue);
console.log(totalMaleAge);

// With forEach
totalMaleAge = 0;
Object.keys(munsters).forEach((name) => {
  let currMember = munsters[name];
  console.log(`${name} is a ${currMember['age']}-year-old ${currMember['gender']}`);
  if (currMember['gender'] === 'male') {
    totalMaleAge += currMember['age'];
  }
});

console.log(totalMaleAge);

displayProblemNumber(6);
Object.keys(munsters).forEach((name) => {
  let currMember = munsters[name];
  console.log(`${name} is a ${currMember['age']}-year-old ${currMember['gender']}`);
});

displayProblemNumber(7);
// Given the following code, what will the final values of a and b be? Try to answer without running the code
let a = 2;
let b = [5, 8];
arr = [a, b];

arr[0] += 2;
// arr = [4, [5, 8]]
arr[1][0] -= a;
// arr = [4, [3, 8]]
// b =  [3, 8]
// a = 2

displayProblemNumber(8);
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let wordsArray = [].concat(...Object.values(obj));
wordsArray.forEach((word) => {
  word.split('').forEach(char => {
    if ('aeiou'.includes(char)) {
      console.log(char);
    }
  });
});


displayProblemNumber(9);
// Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let sortedArray = arr.map((indvidualArr) => {
  if (typeof indvidualArr[0] === 'number') {
    let finsihedArray = indvidualArr.slice().sort((a, b) => {
      return a - b;
    });
    return finsihedArray;
  } else {
    let finsihedArray = indvidualArr.slice().sort();
    return finsihedArray;
  }
});
console.log(sortedArray);

displayProblemNumber(10);
arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
sortedArray = arr.map((indvidualArr) => {
  if (typeof indvidualArr[0] === 'number') {
    let finsihedArray = indvidualArr.slice().sort((a, b) => {
      return b - a;
    });
    return finsihedArray;
  } else {
    let finsihedArray = indvidualArr.slice().sort().reverse();
    return finsihedArray;
  }
});
console.log(sortedArray);

displayProblemNumber(11);
arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map((obj) => {
  let objCopy = Object.assign({}, obj);
  let keys = Object.keys(objCopy);
  keys.forEach((key) => {
    objCopy[key] += 1;
  });
  return objCopy;
});
console.log(newArr);
console.log(arr);

displayProblemNumber(12);
arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
let multipleThree = arr.map((nestedArray) => {
  return nestedArray.filter(num => num % 3 === 0);
});

console.log(multipleThree);

displayProblemNumber(13);
arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
arr.sort((a, b) => {
  let aSum = 0;
  let bSum = 0;
  // Sum up odd numbers in A array
  for (let idx = 0; idx < a.length; idx++) {
    if (a[idx] % 2 === 1) {
      aSum += a[idx];
    }
  }
  // Sum up odd numbers idxn b array
  for (let idx = 0; idx < b.length; idx++) {
    if (b[idx] % 2 === 1) {
      bSum += b[idx];
    }
  }

  return aSum - bSum;
});
console.log(arr);

displayProblemNumber(14);
obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let stupidArray = [];
for (let prop in obj) {
  let item = obj[prop];
  if (item['type'] === 'fruit') {
    let capitalArray = item['colors'].map(color => {
      return color[0].toUpperCase() + color.slice(1);
    });
    stupidArray.push(capitalArray);
  } else {
    stupidArray.push(item['size'].toUpperCase());
  }
}
console.log(stupidArray);

displayProblemNumber(15);
arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
let evenArray = arr.filter((obj) => {
  let values = [].concat(...Object.values(obj));
  return values.every(num => num % 2 === 0);
});
console.log(evenArray);

displayProblemNumber(16);
arr = [['a', 1], ['b', 'two'], ['sea', { c: 3 }], ['D', ['a', 'b', 'c']]];

let resultObj = {};

arr.forEach((arr) => {
  resultObj[arr[0]] = arr[1];
});
console.log(resultObj);
console.log(Object.fromEntries(arr));

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

displayProblemNumber(17);

/*
Input: None
Output: 32 hexadecimal characters in an 8-4-4-4-12 pattern

Data Structure: Array/String/Dictionary

Algorithm:
  Create an with 15 elements, each element being a hexadecimal character.
  Intialize an Empty Array
  FOR loop with 32 iterations
    Generate a Random Number 0 -15
    Append element at position Random Number in Reference array to empty arrya
  Once Complete, construct return string with the following splices
    array[0-8] - array[8-12] - array[12-16] - array[16-20] - array[20]
  return string
*/

function generateUuid() {
  let hexArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
  let randomArray = [];
  const UUID_LENGTH = 32;
  for (let idx = 0; idx < UUID_LENGTH; idx++) {
    let randomNumber = Math.floor(Math.random() * hexArray.length);
    randomArray.push(hexArray[randomNumber]);
  }
  let formattedUuid = randomArray.slice(0, 8).join('') + '-' +
    randomArray.slice(8, 12).join('') + '-' +
    randomArray.slice(12, 16).join('') + '-' +
    randomArray.slice(16, 20).join('') + '-' +
    randomArray.slice(20).join('');
  return formattedUuid;
}

console.log(generateUuid());
