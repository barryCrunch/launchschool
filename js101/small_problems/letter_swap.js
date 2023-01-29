// letter_swap.js
function swap(string) {
  // split into list
  // loop through list
  // for each word place the last letter in a temp
  // variable. Assign the first letter to the last letter
  // assign the first letter to the temp variable.
  let stringArray = string.split(" ");
  let swappedArray = stringArray.map(word => {
    if (word.length === 1) {
      return word;
    }
    return word[word.length - 1] + word.slice(1,word.length - 1) + word[0];
  });
  return swappedArray;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
