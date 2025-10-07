function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("sketch-container");
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    stroke(random(255), random(255), random(255));
    strokeWeight(random(5, 15));
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
