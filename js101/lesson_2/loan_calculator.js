// loan_calculator.js
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isValidNumber(number) {
  return (!isNaN(number) && number > 0);
}

prompt("Welcome to Loan Calculator!");

while (true) {
  prompt("Please enter the principal/amount of the loan: ");
  let principal = Number(readline.question());
  while (!isValidNumber(principal)) {
    prompt("Please enter a valid amount for the principal: ");
    principal = Number(readline.question());
  }

  prompt("Please enter the duration of the loan in years: ");
  let loanDuration = Number(readline.question());
  while (!isValidNumber(loanDuration)) {
    prompt("Please enter a valid amount for the loanDuration: ");
    loanDuration = Number(readline.question());
  }

  prompt("Please enter the APR of the loan: ");
  let apr = Number(readline.question()) / 100;
  while (!isValidNumber(apr)) {
    prompt("Please enter a valid amount for the apr: ");
    apr = Number(readline.question()) / 100;
  }

  let loanDurationMonths = loanDuration * 12;
  let monthlyApr = apr / 12;

  let monthlyPayment = principal *
    (monthlyApr / (1 - Math.pow((1 + monthlyApr), (-loanDurationMonths))));

  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  prompt('Would you like to calculate another monthly payment (yes/no)? ');
  let answer = readline.question();
  if (answer[0].toLowerCase() !== 'y') break;
}

