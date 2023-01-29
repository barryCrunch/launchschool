// palindromic_strings_part_two.js
function isRealPalindrome(string) {
  let newStringArray = [];
  let alphNumericRegEx = /^[0-9a-zA-Z]+$/;
  for (let index = 0; index < string.length; index++) {
    if (string[index].match(alphNumericRegEx)) {
      newStringArray.push(string[index]);
    }
  }
  let maybePalindrome = newStringArray.join('').toLowerCase();
  return maybePalindrome === maybePalindrome.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));// true
console.log(isRealPalindrome('Madam'));// true (case does not matter)
console.log(isRealPalindrome("Madam,I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));// true
console.log(isRealPalindrome('356a653'));// true
console.log(isRealPalindrome('123ab321'));// false
