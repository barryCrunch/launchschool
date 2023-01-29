const readline = require('readline-sync');

// Pedac
/*
Input
 - Deck of 52 Cards
  - 4 suits (Hearts, Diamonds, Clubs and Spades)
  - 13 values (2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace)
  - list of suits
  - list of values

Alogorithm
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.


*/

let SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let NUMBER_CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
let FACE_CARDS = ['Jack', 'Queen', 'King', 'Ace'];
let deck = [];
let playerHand = [];
let dealerHand = [];


function initializeDeck() {
  deck = [];
  NUMBER_CARDS.concat(FACE_CARDS).forEach((card) => {
    SUITS.forEach((suit) => {
      let cardObj = {};
      cardObj['name'] = `${card} of ${suit}`;
      cardObj['suit'] = suit;
      if (card in NUMBER_CARDS) {
        cardObj['value'] = Number(card);
      } else if (card === 'Ace') {
        cardObj['value'] = 11;
      } else {
        cardObj['value'] = 10;
      }
      deck.push(cardObj);
    });
  });
}

/*
Input: Nothing
Output: Return Card Object {name: 'card Name', value: 'number value'}

1. Generate Random Number between 0 and length of Deck
2. Remove and Save card at that index within the deck
3. Return Card 0bject
*/
function getRandomCard() {
  let cardIndex = (Math.floor(Math.random() * deck.length));
  let card = deck.splice(cardIndex, 1)[0];
  return card;
}

function dealCard(recipient) {
  let card = getRandomCard();
  if (recipient === 'player') {
    playerHand.push(card);
  }
  if (recipient === 'dealer') {
    dealerHand.push(card);
  }
}

function initializeHands() {
  playerHand = [];
  dealerHand = [];
  playerHand.push(getRandomCard());
  playerHand.push(getRandomCard());
  dealerHand.push(getRandomCard());
  dealerHand.push(getRandomCard());
}

function calculatePlayerScore() {
  let initialScore = 0;
  let score = playerHand.reduce((prev, curr) => {
    return prev + curr.value;
  }, initialScore);

  return score;
}

function calculateDealerScore() {
  let initialScore = 0;
  let score = dealerHand.reduce((prev, curr) => {
    return prev + curr.value;
  }, initialScore);

  return score;
}

function displayPlayerHand() {
  let initialScore = 0;
  playerHand.forEach((card) => {
    console.log(`${card.name} -> ${card.value}`);
  });

  let score = playerHand.reduce((prev, curr) => {
    return prev + curr.value;
  }, initialScore);
  console.log(`=> Player Score: ${score}\n`);
}

function displayDealerHand(fullHand = true) {
  let initialScore = 0;
  if (fullHand) {
    dealerHand.forEach((card) => {
      console.log(`${card.name} -> ${card.value}`);
    });

    let score = dealerHand.reduce((prev, curr) => {
      return prev + curr.value;
    }, initialScore);
    console.log(`Dealer Score: ${score}`);
  } else {
    console.log(`${dealerHand[0].name} -> ${dealerHand[0].value}`);
    console.log(`Blind Card`);
  }
}

/*
check for bust
if bust check for ACE
if ACE, reassign card to be worth 1
*/
function checkBust(person) {
  if (person === "player") {
    if (calculatePlayerScore() > 21) {
      for (const card in playerHand) {
        if (playerHand[card]['name'] === "Ace") {
          card['value'] = 1;
          return false;
        }
      }
      return true;
    }
  } else if (person === "dealer") {
    if (calculateDealerScore() > 21) {
      for (const card in playerHand) {
        if (playerHand[card]['name'] === "Ace") {
          card['value'] = 1;
          return false;
        }
      }
      return true;
    }
  }
}


/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
- repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
- repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/
let playAgain = 'y';
do {
  initializeDeck();
  initializeHands();

  // Player Loop
  while (!checkBust("player") && calculatePlayerScore() !== 21) {
    console.clear();
    console.log('*********************');
    console.log('TURN');
    console.log('*********************');
    console.log('Dealer Hand');
    displayDealerHand(false);

    console.log('\nPlayer Hand');
    displayPlayerHand();

    let answer = readline.question("Would you like to hit or stay(h/s)? ");
    console.clear();

    if (answer[0].toLowerCase() === "s") {
      break;
    }
    dealCard("player");
  }

  // Dealer Loop
  while (calculateDealerScore() < 17) {
    dealCard('dealer');
    checkBust('dealer');

  }

  console.clear();
  console.log('\n*********************************');
  console.log('Results');
  console.log('*********************************\n');

  console.log('*********************');
  console.log('Player Hand');
  console.log('*********************');
  displayPlayerHand();


  console.log('*********************');
  console.log('Dealer Hand');
  console.log('*********************');
  displayDealerHand();
  let playerScore = calculatePlayerScore();
  let dealerScore = calculateDealerScore();

  if (checkBust('player') && checkBust('dealer')) {
    console.log('Nobody Wins :|');
  } else if (checkBust('player')) {
    console.log('Dealer Wins :(');
  } else if (checkBust('dealer')) {
    console.log('Player Wins :)');
  } else if (dealerScore === 21 || dealerScore > playerScore) {
    console.log('Dealer Wins :(');
  } else {

    console.log('Player Wins :)');
  }

  playAgain = readline.question("Would you like to play again(y/n)? ");
} while (playAgain[0].toLowerCase() === 'y');
