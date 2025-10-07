let walkerX, walkerY;
let stepSize = 10;

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("sketch-container");
  walkerX = width / 2;
  walkerY = height / 2;
  background(0); // dark base looks good in both modes
}

function draw() {
  // adaptive color handling: detect dark vs light mode
  const isDark = window.matchMedia &&
                 window.matchMedia('(prefers-color-scheme: dark)').matches;

  // soft fade to give a “trail” effect instead of full clear
  if (isDark) {
    fill(0, 20);
  } else {
    fill(255, 20);
  }
  noStroke();
  rect(0, 0, width, height);

  // walker stroke color
  stroke(isDark ? 255 : 0);
  strokeWeight(4);
  point(walkerX, walkerY);

  // random step
  const dir = int(random(4));
  if (dir === 0) walkerX += stepSize;
  else if (dir === 1) walkerX -= stepSize;
  else if (dir === 2) walkerY += stepSize;
  else walkerY -= stepSize;

  // wrap edges
  if (walkerX < 0) walkerX = width;
  if (walkerX > width) walkerX = 0;
  if (walkerY < 0) walkerY = height;
  if (walkerY > height) walkerY = 0;
}

