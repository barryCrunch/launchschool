let array = [1,2,3,4,5]

for (const num in array) {
  if (array[num] === 3) {
    return true
  }
  console.log(num);
}
