// after_midnight_part_one.js

// INPUT: Integer (positive or negative) that represents a number of minutes
// OUTPUT: String that represents the number of minutes converted
// to 24h format
// ASSUMPTIONS: The integer will always be whole.
// ALGORITHM: Take integer and convert to hours
// Take the number of minutes and modulus by 24 - store the result in
// a minuteValue
// Take the number of mnutes and divide by 60 apply the floor to
// that number and it will be your total hours
// If total hours is greater than modulus the
// total hours by 24 and save that to your hour number


function padNum(num, size) {
  num = num.toString();
  while (num.length < size) {
    num = "0" + num;
  }
  return num;
}

function formatTime(hours, mins) {
  return padNum(hours, 2) + ":" + padNum(mins, 2);
}

function timeOfDay(numOfMinutes) {
  let finalMinutes = numOfMinutes % 60;
  let totalHours = Math.floor(numOfMinutes / 60);


  if (numOfMinutes >= 0) {
    if (totalHours < 24) { 
      return formatTime(totalHours, finalMinutes);
    } else {
      return formatTime(totalHours % 24, finalMinutes);
    }
  } else {
    if (totalHours < 24) {
      return formatTime(totalHours, finalMinutes);
    } else {
      return formatTime(totalHours % 24, finalMinutes);
    }
  }
}


console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");
