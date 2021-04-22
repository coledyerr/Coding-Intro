class VisualCard {
  constructor(card) {
    this.card = card;
  }
  x = 20;
  y = 20;
  isDragging = false;

  dragging() {
    if (
      mouseX > this.x &&
      mouseX < this.x + 150 &&
      mouseY > this.y &&
      mouseY < this.y + 200
    ) {
      this.isDragging = true;
      return true;
    } else {
      return false;
    }
  }
  drag() {
    if (this.isDragging) {
      this.x = mouseX;
      this.y = mouseY;
    }
  }

  getIcon() {
    // this.cars.suit
    //♥ ♦ ♠ ♣
    if (this.card.suit === "Diamonds") {
      return "♦";
    } else if (this.card.suit === "Hearts") {
      return "♥";
    } else if (this.card.suit === "Clubs") {
      return "♣";
    } else if (this.card.suit === "Spades") {
      return "♠";
    }
  }

  draw() {
    this.drag();
    push();
    {
      translate(this.x, this.y);
      fill("white");
      rect(0, 0, 150, 200, 7);

      fill(card.color);
      textSize(100);
      textAlign(CENTER);
      text(this.getIcon(), 73, 130);

      fill(card.color);
      textSize(30);
      textAlign(CENTER);
      text(this.getIcon(), 19, 57);

      fill(card.color);
      textSize(30);
      textAlign(CENTER);
      text(this.getIcon(), 134, 160);

      textSize(30);
      textAlign(LEFT);
      text(this.card.name, 10, 30);

      textAlign(RIGHT);
      text(this.card.name, 142, 187);
    }
    pop();
  }
}

// get a card dealer:
let dealer = new Dealer();
// Get some cards
let card = dealer.getCard();

let hand = dealer.getHand();

let visHand = [];
for (let i = 0; i < hand.length; i++) {
  const card = hand[i];
  let visCard = new VisualCard(card);
  visCard.x = 180 * i;
  visHand.push(visCard);
}

var setup = function () {
  createCanvas(1380, 646.9);
};
var draw = function () {
  background("forestgreen");
  for (let index = 0; index < visHand.length; index++) {
    const visCard = visHand[index];
    visCard.draw();
  }
};

window.mousePressed = function () {
  for (let index = 0; index < visualHand.length; index++) {
    const xyz = visualHand[index];
    xyz.dragging();
  }
};

// visualHand.forEach(vc=>vc.dragging())

window.mouseReleased = function () {
  visCard.isDragging = true;
};
