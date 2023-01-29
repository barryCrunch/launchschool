function wordSizes(string) {

  // removes nonalphanumeric characters except for spaces
  let alphaNumericString = "";
  let alphNumericRegEx = /^[0-9a-zA-Z\s]+$/;
  for (let index = 0; index < string.length; index++) {
    if (string[index].match(alphNumericRegEx)) {
      alphaNumericString += string[index];
    }
  }
  let stringArray = alphaNumericString.split(" ");
  let countObject = {};
  stringArray.forEach(word => {
    let length = String(word.length);
    // Can't use continue here since we are actually just executing a function
    if (length === '0') {
      return;
    }

    countObject[length] = countObject[length] || 0;
    countObject[length] += 1;

  });
  return countObject;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
