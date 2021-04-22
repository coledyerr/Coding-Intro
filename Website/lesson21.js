class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = random(canvas.width);
    this.y - random(canvas.height);
  }

  x = -1000;
  y = 360;
  w = 20;
  h = 10;

  vx = random(-2, 5);
  vy = random(-2, 5);

  c = random(100);

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.canvas.width) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.vy = -this.vy;
    }
  }

  draw() {
    this.move();
    fill(this.c);
  }
}

class Square extends Shape {
  c = [random(1000), random(1000), random(1000)];

  draw() {
    super.draw();
    square(this.x, this.y, this.w);
  }
}

class Circle extends Shape {
  c = [random(1000), random(1000), random(1000)];

  draw() {
    super.draw();
    this.move();
    circle(this.x, this.y, this.w);
  }
}

// let s = new Square();

// let square = new Square();
// s.x = 200;
// s.draw();

let shapes = [];
let canvas = { width: 1519, height: 734 };

var setup = function () {
  createCanvas(1519, 734);
  background(200, 200, 100);
  for (let index = 0; index < 400; index++) {
    let box = new Square(canvas);
    shapes.push(box);

    let cir = new Circle(canvas);
    shapes.push(cir);
  }
};

var draw = function () {
  background(200, 110, 90);
  for (let index = 0; index < shapes.length; index++) {
    let shape = shapes[index];
    shape.draw();
  }
};
