let abbyX, abbyY, easing = 0.05;

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("sketch-container");
  abbyX = width / 2;
  abbyY = height / 2;
}

function draw() {
  background(240);

  let targetX = mouseX;
  let targetY = mouseY;

  abbyX += (targetX - abbyX) * easing;
  abbyY += (targetY - abbyY) * easing;

  fill(150, 50, 255);
  ellipse(abbyX, abbyY, 40);
}
