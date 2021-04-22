let canvas = { width: 1400, height: 800 };
let boxes = [
  { x: 100, y: 100, w: 150, h: 200, s: 5 },
  { x: 200, y: 200, w: 150, h: 200, s: 15 },
  { x: 300, y: 300, w: 200, h: 200, s: 10 },
];
var setup = function () {
  createCanvas(canvas.width, canvas.height);

  for (let index = 0; index < 500; index++) {
    boxes.push({ x: 100, y: 100, w: 150, h: 200, s: 5 });
  }

  let box = rect(100, 100, 150, 200);
};

var draw = function () {
  background(100);

  box.x = random(
    max(box.x - box.s, 0),
    min(box.x + box.s, canvas.width - box.w)
  );
  box.y = random(
    max(box.y - box.s, 0),
    min(box.y + box.s, canvas.height - box.h)
  );
  rect(box.x, box.y, box.w, box.h);
};
