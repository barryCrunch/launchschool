const readline = require('readline-sync');
const WINNING_COMBOS = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['lizard', 'paper'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper'],
};
const VALID_CHOICES = Object.keys(WINNING_COMBOS);
const NUMBER_OF_ROUNDS = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(winner) {
  if (winner === 'player') {
    prompt('You win that round!');
  } else if (winner === 'computer') {
    prompt('Computer Wins that round!');
  } else {
    prompt("It's a tie");
  }
}

function returnWinner(playerChoice, computerChoice) {
  if (WINNING_COMBOS[playerChoice].includes(computerChoice)) {
    return 'player';
  } else if (WINNING_COMBOS[computerChoice].includes(playerChoice)) {
    return 'computer';
  } else {
    return 'tie';
  }
}

let playerScore = 0;
let computerScore = 0;
let winningScore = Math.ceil(NUMBER_OF_ROUNDS / 2);


while (true) {
  prompt(`Welcome to ${VALID_CHOICES.join(', ')}. This game is currently set to best out of ${NUMBER_OF_ROUNDS}.`);
  while (playerScore !== winningScore && computerScore !== winningScore) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let playerChoice = readline.question();

    while (true) {
      let matchingChoices = VALID_CHOICES.filter(possibleChoice => {
        return possibleChoice.slice(0, playerChoice.length) === playerChoice;
      });

      if (matchingChoices.length === 1) {
        playerChoice = matchingChoices[0];
        break;
      } else if (matchingChoices.length > 1) {
        prompt(`Please be more specific, ${matchingChoices.join(' or ')}?`);
      } else {
        prompt("Please enter a valid choice.");
      }
      playerChoice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);
    let winner = returnWinner(playerChoice, computerChoice);

    displayWinner(winner);
    if (winner === 'player') {
      playerScore += 1;
    } else if (winner === 'computer') {
      computerScore += 1;
    }

    prompt(`Current score is Player: ${playerScore} and Computer: ${computerScore}`);

  }

  if (playerScore > computerScore) {
    prompt("You win the match!");
  } else {
    prompt("The Computer wins the match!");
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "no".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
