// palindromic_numbers.js

// Dumb overly complicated way to solve this
function isPalindromicNumber(number) {
  let stringNumber = '';
  while (number !== 0) {
    let remainder = number % 10;
    stringNumber += remainder.toString();
    number = Math.floor(number / 10);
  }
  return stringNumber === stringNumber.split('').reverse().join('');
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function easyWay(number) {
  return isPalindrome(String(number));
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

console.log(easyWay(34543));        // true
console.log(easyWay(123210));       // false
console.log(easyWay(22));           // true
console.log(easyWay(5));            // true
