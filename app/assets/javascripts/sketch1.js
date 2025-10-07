let x = 200, y = 150, r = 20;
let vx = 3, vy = 4;

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("sketch-container");
}

function draw() {
  background(230);

  x += vx;
  y += vy;

  if (x < r || x > width - r) vx *= -1;
  if (y < r || y > height - r) vy *= -1;

  fill(255, 100, 100);
  noStroke();
  ellipse(x, y, r * 2);
}
