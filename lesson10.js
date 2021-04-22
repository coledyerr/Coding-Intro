let createCard = function (suit, rank) {
  let color = "red";
  if (suit === "Spades" || suit === "Clubs") {
    color = "black";
  }
  let name = rank;
  if (rank === 11) {
    name = "Jack";
  } else if (rank === 12) {
    name = "Queen";
  } else if (rank === 13) {
    name = "King";
  } else if (rank === 14) {
    name = "Ace";
  }

  let card = {
    rank: rank,
    suit: suit,
    color: color,
    name: name,
  };
  return card;
};

/*let color = "red";
  if (suit === "Clubs" || suit === "Spades") {
    color = "black";
  }*/

// createCard("Spades", 11);
// let deck = [card];
// console.table(createCard("Spades", 11));
// for index=2;<13;{
// deck.Push(createCard("suit", index))}

let createDeck = function () {
  let deck = [];
  for (let rank = 2; rank <= 14; rank++) {
    deck.push(createCard("Clubs", rank));
    deck.push(createCard("Spades", rank));
    deck.push(createCard("Diamonds", rank));
    deck.push(createCard("Hearts", rank));
  }
  return deck;
};

let deck = createDeck();
console.table(deck);

/**
 * TODO:
 * Fix the case for 14 so it shows "Ace"
 * Add Diamdons, Spades, and Clubs to the deck
 * see if player 1 & player 2 have cards in their hands
 * Find out if randomCard works
 * Create game rules - who's hand is best?
 */

let player1Hand = [];
let player2Hand = [];

let randomCard = function () {
  return deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
};
// console.log(randomCard);

for (let index = 0; index <= 5; index++) {
  player1Hand.push(randomCard());
  player2Hand.push(randomCard());
}

for (let rank = 2; rank < 15; rank++) {
  deck.push(createCard("Spades", rank));
  deck.push(createCard("Clubs", rank));
  deck.push(createCard("Hearts", rank));
  deck.push(createCard("Diamonds", rank));
}
console.table(deck);

console.table(player1Hand);
console.table(player2Hand);

console.log(player1Hand, player2Hand);

console.log(randomCard);

let score = function (playerHand) {
  total = 0;

  for (let i = 0; i < playerHand.length; i++) {
    total += playerHand[i].rank;
  }

  return total;
};

let winner = function (player1Hand, player2Hand) {
  if (player1Hand > player2Hand) {
    return "Player1 wins!";
  } else if (player2Hand > player1Hand) {
    return "Player2 wins!";
  } else {
    return "Tie!";
  }
};

console.log(winner(score(player1Hand), score(player2Hand)));
