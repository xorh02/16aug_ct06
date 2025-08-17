

// 🎨 start colour before clicking (will change when we press the mouse)
let shapeColor = 'blue';            // a variable = a box that remembers a value

// 🔵 starting size for each new brush stroke
let circleSize = 5;                 // begins at 5 pixels (small circle)

function setup() {                  // setup() runs once at the start
  createCanvas(400, 400);           // make a 400x400 drawing area (our “paper”)
  background(220);                  // fill the paper with light grey
  noStroke();                       // circles have no outline (looks more like paint)
}

function mousePressed() {           // runs the moment we press the mouse button
  shapeColor = color(               // pick ONE random colour for this whole stroke
    random(255),                    // random red   (0–255)
    random(255),                    // random green (0–255)
    random(255)                     // random blue  (0–255)
  );
  circleSize = 5;                   // reset size to 5 at the start of the stroke
}

function mouseDragged() {           // runs many times WHILE the mouse is held & moving
  fill(shapeColor);                 // use the colour we chose in mousePressed()
  ellipse(mouseX, mouseY,           // draw a circle at the mouse position (x, y)
          circleSize, circleSize);  // width & height = current brush size (a circle)
  circleSize += 0.5;                // make the next circle a tiny bit bigger (+0.5)
}

// (Optional) We don’t need mouseReleased() here.
// When you let go, p5 stops calling mouseDragged(), so drawing automatically stops.
// If you want to show it explicitly to students, you can add:
//
// function mouseReleased() {        // runs once when you release the mouse button
//   // nothing to do — drawing stops because mouseDragged() no longer runs
// }
