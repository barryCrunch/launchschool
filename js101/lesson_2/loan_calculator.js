const readline = require('readline-sync');

const MONTHS_IN_YEAR = 12;

function formatToDollars(amount) {
  return `$${amount.toFixed(2)}`;
}

function prompt(message) {
  return `=> ${message}`;
}

function calculateMonthlyDuration(duration) {
  return duration * MONTHS_IN_YEAR;
}

function calculateMonthlyRate(annualPercentageRate) {
  return annualPercentageRate / MONTHS_IN_YEAR;

}

function calculateMonthlyPayment(amount, rate, duration) {
  return amount * (rate / (1 - Math.pow((1 + rate), (-duration))));
}

let loanAmount = Number(readline.question(prompt('What is the loan amount? ')));

let annualPercentageRate = readline.question(prompt('What is the Annual Percentage Rate? '));

let loanDurationInYears = readline.question(prompt('What is the loan duration in years? '));

let loanDurationInMonths = calculateMonthlyDuration(loanDurationInYears);

let monthlyInterestRate = calculateMonthlyRate(annualPercentageRate) / 100;

let monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyInterestRate, loanDurationInMonths);

console.log(prompt(`Your monthly payment is ${formatToDollars(monthlyPayment)}`));
