const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LOCALE = 'es';
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === "" || Number.isNaN(Number(number));
}

function invalidResponse(response) {
  return response.trim() === "" || response.trim().length > 1 || !['y', 'n'].includes(response.trim());
}


while (true) {
  console.clear();
  prompt(MESSAGES[LOCALE]['welcome']);

  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[LOCALE]['validNumber']);
    number1 = readline.question();
  }
  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[LOCALE]['validNumber']);
    number2 = readline.question();
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES[LOCALE]['validOperation']);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt("Would you like to perform another operation? (y/n)");
  let answer = readline.question();
  while (invalidResponse(answer)) {
    prompt(MESSAGES[LOCALE]['validResponse']);
    answer = readline.question();
  }

  if (answer.toLowerCase()[0] === 'n') break;
}
