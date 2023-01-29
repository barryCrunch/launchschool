// how_old_is_teddy.js
function getAge(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
console.log(`Teddy is ${getAge(20, 120)} years old!`);
