let x, y;          // character position
let speed = 4;     // movement speed
let radius = 20;   // character size

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("sketch-container");

  x = width / 2;
  y = height / 2;
  noStroke();
}

function draw() {
  background(240);

  // Movement controls
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65))  x -= speed; // A or ←
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) x += speed; // D or →
  if (keyIsDown(UP_ARROW) || keyIsDown(87))    y -= speed; // W or ↑
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83))  y += speed; // S or ↓

  // Keep on screen
  x = constrain(x, radius, width - radius);
  y = constrain(y, radius, height - radius);

  // Draw player
  fill(100, 180, 255);
  ellipse(x, y, radius * 2);
}

