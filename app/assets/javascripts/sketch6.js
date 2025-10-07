let drops = [];

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("sketch-container");

  for (let i = 0; i < 50; i++) {
    drops.push({ x: random(width), y: random(height), speed: random(2, 5), c: color(random(255), random(255), random(255)) });
  }
}

function draw() {
  background(10);

  for (let d of drops) {
    fill(d.c);
    ellipse(d.x, d.y, 8);
    d.y += d.speed;
    if (d.y > height) d.y = 0;
  }
}
