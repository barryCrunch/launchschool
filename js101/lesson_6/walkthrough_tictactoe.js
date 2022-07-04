const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NUMBER_OF_GAMES = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}


function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  | ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  | ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  | ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function joinOr(items, delimiter = ', ', joinWord = "") {
  if (joinWord !== "" && items.length !== 1) {
    let allButLast = items.slice(0, (items.length - 1));
    let lastItem = items[(items.length) - 1];
    return `${allButLast.join(delimiter)} ${joinWord} ${lastItem}`;
  } else {
    return `${items.join(delimiter)}`;
  }
}


function intializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}


function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];
    if (board[sq1] === HUMAN_MARKER && board[sq2] === HUMAN_MARKER && board[sq3] === HUMAN_MARKER) {
      return 'Player';
    } else if (board[sq1] === COMPUTER_MARKER && board[sq2] === COMPUTER_MARKER && board[sq3] === COMPUTER_MARKER) {
      return 'Computer';
    }
  }
  return null;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function findAtRiskSquare(board, marker) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];
  let availableSquares = emptySquares(board);
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];
    if (board[sq1] === marker && board[sq2] === marker) {
      if (availableSquares.includes(sq3.toString())) return sq3;
    } else if (board[sq2] === marker && board[sq3] === marker) {
      if (availableSquares.includes(sq1.toString())) return sq1;
    } else if (board[sq1] === marker && board[sq3] === marker) {
      if (availableSquares.includes(sq2.toString())) return sq2;
    }
  }
  return null;

}

function computerChoosesSquare(board) {

  let defensiveSquare = findAtRiskSquare(board, HUMAN_MARKER);
  let offensiveSquare = findAtRiskSquare(board, COMPUTER_MARKER);
  let optimalSquare = 5;

  if (offensiveSquare) {
    board[offensiveSquare] = COMPUTER_MARKER;
  } else if (defensiveSquare) {
    board[defensiveSquare] = COMPUTER_MARKER;
  } else if (emptySquares(board).includes(optimalSquare.toString())) {
    board[optimalSquare] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];

    board[square] = COMPUTER_MARKER;
  }
}

function playerChoosesSquare(board) {
  let square;


  while (true) {
    prompt(`Choose a square(${joinOr(emptySquares(board), ', ', 'or')}): `);
    square = readline.question();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");

  }
  board[square] = HUMAN_MARKER;
}

while (true) {
  let playerScore = 0;
  let computerScore = 0;
  let winningScore = Math.ceil(NUMBER_OF_GAMES / 2);


  while (playerScore < winningScore && computerScore < winningScore) {
    let board = intializeBoard();

    while (true) {
      displayBoard(board);

      playerChoosesSquare(board);
      if (boardFull(board) || someoneWon(board)) break;

      computerChoosesSquare(board);
      if (boardFull(board) || someoneWon(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      let winner = detectWinner(board);
      if (winner === "Player") playerScore++;
      if (winner === "Computer") computerScore++;
      prompt(`${winner} won the game, current score - Player: ${playerScore} Computer: ${computerScore}`);
    } else {
      prompt("It's a tie!");
    }
    prompt('Press enter to continue...');
    readline.question();
  }
  if (playerScore > computerScore) {
    prompt("You won the set!");
  } else {
    prompt("The Computer won the set!");
  }
  prompt("Would you like to play again? (y/n)");
  let answer = readline.question()[0].toLowerCase();
  if (answer !== 'y') break;
}
