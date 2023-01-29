// palindromic_strings_part_one.js

function isPalindrome(string) {
  // Get length of string and cut in half
  // Loop through each element
  let comp = string.length - 1;
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[comp - index]) {
      return false;
    }
  }
  return true;
}

function alternativePalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam'));// true
console.log(isPalindrome('Madam'));// false (case matters)
console.log(isPalindrome("madam i'm adam"));// false (all characters matter)
console.log(isPalindrome('356653'));// true

console.log(alternativePalindrome('madam'));// true
console.log(alternativePalindrome('Madam'));// false (case matters)
console.log(alternativePalindrome("madam i'm adam"));// false (all characters matter)
console.log(alternativePalindrome('356653'));// true
