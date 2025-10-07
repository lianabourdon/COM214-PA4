let x, y, speed = 3;

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("sketch-container");
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(230);

  if (keyIsDown(LEFT_ARROW)) x -= speed;
  if (keyIsDown(RIGHT_ARROW)) x += speed;
  if (keyIsDown(UP_ARROW)) y -= speed;
  if (keyIsDown(DOWN_ARROW)) y += speed;

  if (x < 0) x = width;
  if (x > width) x = 0;
  if (y < 0) y = height;
  if (y > height) y = 0;

  fill(255, 180, 0);
  ellipse(x, y, 40);
}
