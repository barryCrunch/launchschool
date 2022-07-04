// tictactoe.js
const readline = require('readline-sync');

// Display the initial empty Board
/*
  START

  SET BOARD_ROWS = 3
  SET BOARD_COLUMNS = 3

  WHILE row_counter < BOARD_ROWS
    WHILE column counter < BOARD_COLUMNS
      PRINT tile
*/

const PLAYER_MARK = 'X';
const COMPUTER_MARK = 'O';


let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

function checkWinner(board) {
  // Check for a horizontal winnner
  for (let row = 0; row < board.length; row++) {
    if (board[row][0] === board[row][1] && board[row][0] === board[row][1] && board[row][0] !== ' ') {
      return [board[row][0], true];
    }
  }

  // Check for a vertical winner
  for (let col = 0; col < board.length; col++) {
    if (board[0][col] === board[1][col] && board[0][col] === board[2][col] && board[0][col] !== ' ') {
      return [board[0][col], true];
    }
  }
  // Check for Diagnoal Winner starting at 0,0
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== ' ') {
    return [board[0][0], true];
  }

  // Check for Diagnoal Winner starting at 0,2
  if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== ' ') {
    return [board[0][2], true];
  }
  return ['', false];
}

function displayBoard(board) {
  console.log('');
  console.log(`     |     |`);
  console.log(`  ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}`);
  console.log(`     |     |`);
  console.log('');
}

function markSquare(row, column, board, player) {
  let mark = '';
  let copyOfBoard = board.slice();
  if (player === "computer") {
    mark = COMPUTER_MARK;
  } else {
    mark = PLAYER_MARK;
  }
  copyOfBoard[row][column] = mark;
  return copyOfBoard;
}

function checkOpenSquare(row, column) {
  if (board[row][column] === ' ') {
    return true;
  } else {
    return false;
  }
}

function getPlayerChoice() {
  prompt('Please enter a row and column where you would like to place a mark: ');
  let row = Number(readline.question(`Row: `));
  while (!isValidNumber(row)) {
    prompt('Please enter valid number');
    row = Number(readline.question(`Row: `));
  }

  let column = Number(readline.question(`Column: `));
  while (!isValidNumber(column)) {
    prompt('Please enter valid number');
    column = Number(readline.question(`Column: `));
  }

  return [row - 1, column - 1];

}

// Input: NONE
// Output: Two Integers
// Generate two RandomNumbers
// Check to see if square is open
// If open return two numbers
// Else generate two new randomNumbers

function getComputerChoice() {
  let row = (Math.floor(Math.random()) * 3);
  let column = (Math.floor(Math.random()) * 3);

  while (!checkOpenSquare(row, column)) {
    row = (Math.floor(Math.random() * 3));
    column = (Math.floor(Math.random() * 3));
  }

  return [row, column];

}

function fullBoard(board) {
  let flatBoard = [].concat(...board);
  return flatBoard.every((char) => char === 'X' || char === 'O');
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function isValidNumber(num) {
  return num >= 1 && num <= board.length;
}

let answer = 'y';
do {
  prompt('WELCOME TO TIC TAC TOE!!!!!');
  console.log('=========================\n');
  while (!fullBoard(board)) {
    displayBoard(board);

    // Get player choice and then validate the square has
    // not already been played.
    let [row, column] = getPlayerChoice();
    while (!checkOpenSquare(row, column)) {
      prompt("You have selected a tile that is already taken. Please select a different tile.");
      [row, column] = getPlayerChoice();
    }
    board = markSquare(row, column, board, 'player');
    prompt("Computer playing");

    let [computerRow, computerColumn] = getComputerChoice();
    board = markSquare(computerRow, computerColumn, board, 'computer');

    const [winningMark, winnerExists] = checkWinner(board);
    if (winnerExists && winningMark === PLAYER_MARK) {
      prompt('You WIN!!!!');
      displayBoard(board);
      break;
    }
    if (winnerExists && winningMark === COMPUTER_MARK) {
      prompt('Computer WINS!!!!');
      displayBoard(board);
      break;
    }
  }
  prompt("Would you like to play again?");
  answer = readline.question();
} while (answer[0].toLowerCase() === 'y');

