// running_totals.js
function runningTotal(array) {
  for (let index = 0; index < array.length - 1; index++) {
    array[index + 1] += array[index];
  }
  return array;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
