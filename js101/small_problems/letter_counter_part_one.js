function wordSizes(string) {
  // split words into array
  // initialize empty object
  // loop through array and get length of each string
  // check to see if the length exists as a key in the object
  // if it does increment by one else create key and assign it a value
  // of one

  let stringArray = string.split(" ");
  let countObject = {};
  stringArray.forEach(word => {
    let length = String(word.length);
    // Can't use continue here since we are actually just executing a function
    if (length === '0') {
      return;
    }
    if (countObject.hasOwnProperty(length)) {
      countObject[length] += 1;
    } else {
      countObject[length] = 1;
    }
  });
  return countObject;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
