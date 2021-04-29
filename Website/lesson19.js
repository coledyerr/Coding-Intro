var setup = function () {
  createCanvas(1500, 1000);
  //   noLoop();
};

var draw = function () {
  ellipse(300, 300, 300);
  background("white");
  fill("red");
  stroke("black");
  strokeWeight(40);

  for (let index = 0; index < 100; index++) {
    fill(random(["red", "blue", "green"]));
    // stroke(random(red, yellow));
    circle(290 * index, 200, 200);
    square(250 * index, 310, 200);
    rect(200 * index, 200, 100);
  }
};
