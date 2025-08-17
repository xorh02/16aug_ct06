// //==================================================================================== task 1
// // We want a square in the exact middle.
// // If you hold ANY key → the square becomes BIG.
// // When you let go → the square goes back to SMALL.

// // ❗Words we use:
// // - canvas = our drawing paper
// // - pixel  = a tiny dot on the screen (we measure size/position in pixels)
// // - variable = a named box that remembers a value (like the size of the square)

// // 1) This variable remembers how big the square is right now.
// let rectSize = 50; // start small (50 pixels wide and 50 pixels tall)

// function setup() {
//   // 2) Make a 400-by-400 canvas (width = 400, height = 400).
//   createCanvas(400, 400);
// }

// function draw() {
//   // 3) Wipe the screen each time so we only see one square, not a trail.
//   background(220);

//   // 4) Find the middle of the canvas.
//   //    The middle left-right is width / 2.
//   //    The middle up-down   is height / 2.
//   let centerX = width / 2;   // here: 400 / 2 = 200
//   let centerY = height / 2;  // here: 400 / 2 = 200

//   // 5) Important: rect(x, y, w, h) uses the TOP-LEFT corner for (x, y),
//   //    NOT the center. But WE want the square's CENTER to be at (centerX, centerY).
//   //
//   //    So we must move from the CENTER to the TOP-LEFT corner.
//   //    How far? Half of the square's width to the LEFT, and half of its height UP.
//   //
//   //    Why half? Because the center is in the middle. To reach the corner, we go halfway.
//   //
//   //    🧮 Example with numbers (when rectSize = 50):
//   //    - centerX = 200, centerY = 200  (the middle of the canvas)
//   //    - half of 50 is 25
//   //    - topLeftX = 200 - 25 = 175  (go left 25)
//   //    - topLeftY = 200 - 25 = 175  (go up   25)
//   //
//   //    Now the square from (175, 175) with size 50×50 will have its center at (200, 200).
//   let topLeftX = centerX - rectSize / 2; // move left by half the square
//   let topLeftY = centerY - rectSize / 2; // move up   by half the square

//   // 6) Finally draw the square:
//   //    rect(x, y, width, height)
//   //    x = top-left corner x, y = top-left corner y
//   //    width = rectSize, height = rectSize (a square!)
//   rect(topLeftX, topLeftY, rectSize, rectSize);

//   // 🔎 (Teacher quick check)
//   // If you DELETE the “- rectSize / 2” parts above and run it,
//   // the square will sit down-right of the center, not perfectly centered.
//   // Adding “- rectSize / 2” fixes that by backing up to the true top-left corner.
// }

// function keyPressed() {
//   // 7) When ANY key is held down, make the square bigger.
//   //    With rectSize = 100, half is 50, so the math still centers it:
//   //    topLeft becomes (200 - 50, 200 - 50) = (150, 150).
//   rectSize = 100;
// }

// function keyReleased() {
//   // 8) When the key is released, go back to the small size (50×50).
//   rectSize = 50;
// }

// //==================================================================================== task 1


// // =========================================================================================== Challenge 1: Press & Release Random Circles =======================
// // Goal: When ANY key is pressed → draw 5–20 circles with random size, colour, and position.
// //       When the key is released → clear the canvas (remove all drawings).

// function setup() {                               // setup() runs ONCE at the start
//   createCanvas(400, 400);                        // make a 400×400 “paper” to draw on
//   background(220);                               // paint the paper light grey
//   noStroke();                                    // circles have no outline (looks cleaner)
// }

// function draw() {                                // draw() repeats many times per second
//   // We leave this empty on purpose.                     // we only draw during keyPressed()
// }

// function keyPressed() {                           // this runs when ANY keyboard key is pressed
//   let count = floor(random(5, 21));               // choose how many circles: a WHOLE number 5–20
//                                                   // random(5,21) gives 5.0 up to 20.999..., floor → 5–20

//   for (let i = 0; i < count; i++) {               // repeat the block below 'count' times
//     let s = random(10, 80);                       // pick a random size for this circle (10–80 pixels)

//     let x = random(s / 2, width  - s / 2);        // random left–right position; keep the whole circle on screen
//     let y = random(s / 2, height - s / 2);        // random up–down position; also kept fully on screen

//     fill(                                         // choose a random colour for this circle
//       random(255),                                // random RED amount   (0–255)
//       random(255),                                // random GREEN amount (0–255)
//       random(255)                                 // random BLUE amount  (0–255)
//     );

//     ellipse(x, y, s, s);                          // draw the circle at (x, y) with width s and height s
//   }                                               // end of the repeat block
// }                                                 // end of keyPressed()

// function keyReleased() {                          // this runs once when the key is released
//   background(220);                                // repaint the canvas grey → clears all previous circles
// }                                                 // end of keyReleased()
// // =========================================================================================== Challenge 1: Press & Release Random Circles =======================



// =========================================================================================== eg 2: c =======================


// ======================= If-statement demo: toggle a circle with 'c' =======================

// // 🧠 A Boolean (true/false) that tells us whether to draw the circle
// let showCircle = false;                 // starts as false = don't draw yet

// function setup() {                      // runs once at the start
//   createCanvas(400, 400);               // make a 400×400 drawing area (“paper”)
//   background(220);                      // paint the paper light grey
//   stroke(0);                            // black outline (so the circle has a border)
//   fill(255);                            // white fill (so it looks like the slide)
// }

// function draw() {                       // runs many times per second
//   background(220);                      // wipe & redraw the background each frame

//   if (showCircle) {                     // “Should we show the circle?”
//     // draw a circle in the middle: circle(centerX, centerY, diameter)
//     circle(width / 2, height / 2, 100); // 100px wide circle at the exact center
//   }
// }

// // ⌨️ This runs once whenever ANY key is pressed
// function keyPressed() {
//   // add this >
//   console.log("key:", key);         // Example: 'c' or 'A' or '1'
//   console.log("keyCode:", keyCode); // Example: 67 for 'C', 32 for SPACE, 38 for ↑
// // if (keyCode === UP_ARROW) { console.log("You pressed the UP arrow"); }
//   // if (keyCode === 32) { console.log("You pressed SPACE"); }  // 32 = spacebar

//   // Only react to the 'c' key (lowercase or uppercase)
//   if (key === 'c' || key === 'C') {
//     // The ! (“not”) flips true ↔ false.
//     // If showCircle was true, it becomes false. If it was false, it becomes true.
//     showCircle = !showCircle;           // toggle the Boolean value
//   }
// }

 
// // =========================================================================================== eg 2: c =======================


// // =========================================================================================== eg 3: up down arrow =======================
// // Task 2: Change the circle colour with the UP/DOWN arrow keys

// // 🎨 This variable remembers what colour to use for the circle
// let buttonColor = 'white'; // start as white so changes are obvious

// function setup() {                 // runs once at the start
//   createCanvas(400, 400);          // make a 400 × 400 drawing area
//   noStroke();                      // no outline on the circle
//   textSize(14);
// }

// function draw() {                  // runs many times every second
//   background(220);                 // clear the screen (light grey)

//   // 📍 draw the circle in the middle using the current colour
//   fill(buttonColor);
//   circle(width / 2, height / 2, 120);

// //   // small on-screen instructions
// //   fill(0);
// //   text("Press ↑ to make it RED, ↓ to make it BLACK", 10, 20);
// }

// // ⌨️ This runs ONCE whenever any key is pressed
// function keyPressed() {
//   // ✅ Use keyCode for special keys like arrows/space/enter
//   if (keyCode === UP_ARROW) {
//     buttonColor = 'red';           // ↑ makes the circle red
//   } else if (keyCode === DOWN_ARROW) {
//     buttonColor = 'black';         // ↓ makes the circle black
//   }

//   // (Optional: see the values in the Console)
//   // console.log("key:", key, "keyCode:", keyCode);
// }

// // =========================================================================================== eg 3: up down arrow=======================

// // =========================================================================================== eg 4:if else=======================

// // Task 3: Change circle colour with W / R / G … else YELLOW

// let circleColor = 'yellow'; // start as yellow

// function setup() {                 // runs once
//   createCanvas(200, 200);          // 200×200 canvas (as the slide says)
//   noStroke();                      // no border on the circle
//   textSize(12);
// }

// function draw() {                  // runs many times per second
//   background(220);                 // light grey background

//   // draw the circle in the middle using the current colour
//   fill(circleColor);
//   circle(width / 2, height / 2, 120);

//   // (tiny hint on screen)
//   fill(0);
//   text("W=white, R=red, G=green, else=yellow", 10, 18);
// }

// // runs ONCE when a key is pressed
// function keyPressed() {
//   // Use `key` because W/R/G are letters (printable characters)
//   if (key === 'w' || key === 'W') {          // W → white
//     circleColor = 'white';
//   } else if (key === 'r' || key === 'R') {   // R → red
//     circleColor = 'red';
//   } else if (key === 'g' || key === 'G') {   // G → green
//     circleColor = 'limegreen';
//   } else {                                   // ⭐ ANYTHING ELSE → yellow
//     circleColor = 'yellow';
//   }

//   // (optional: see what you pressed)
//   // console.log("key:", key);
// }
// // =========================================================================================== eg 4:if else=======================


// // =========================================================================================== eg 5: challenge shape changer=======================


// // Challenge 3: Shape Changer with Mouse (3 colour zones)

// // 🎨 This remembers the circle's colour
// let circleColor = 'red';

// function setup() {                   // runs once
//   createCanvas(300, 300);            // 300×300 so each zone is 100 px wide
//   noStroke();
//   textSize(14);
// }

// function draw() {                    // runs many times per second
//   background(220);                   // light grey

//   // 🖱️ mouseX = "how far from the LEFT edge" (in pixels)
//   // Decide the colour based on where the mouse is left→right:
//   if (mouseX < 100) {                // LEFT zone: x is 0–99
//     circleColor = 'red';
//   } else if (mouseX < 200) {         // MIDDLE zone: x is 100–199
//     circleColor = 'green';
//   } else {                           // RIGHT zone: x is 200 or more
//     circleColor = 'blue';
//   }

//   // 🎯 Draw the circle in the middle using the chosen colour
//   fill(circleColor);
//   circle(width / 2, height / 2, 180);

//   // 📏 Helpful guides (you can delete these 4 lines later)
//   fill(0);
//   text('Move mouse: x<100 → RED, 100–199 → GREEN, ≥200 → BLUE', 10, 20);
//   text('mouseX = ' + mouseX, 10, 40);
//   stroke(180); line(100, 0, 100, height); line(200, 0, 200, height); noStroke();
// }

// // =========================================================================================== eg 5: challenge shape changer=======================
// // =========================================================================================== eg 6: moving arrow=======================
// 🎮 Task 4: Control a ball with the keyboard
// - Arrow keys move the ball
// - Holding SHIFT makes it move faster
// - Ball must stay inside the canvas

// 📍 Ball position (starts at the middle)
let x = 200;
let y = 200;

// ⚽ Ball size
const r = 25; // radius (half the size)

// 🚀 Speeds
const normalSpeed = 3;  // walking speed
const turboSpeed  = 7;  // SHIFT speed (faster)

function setup() {                 // runs once
  createCanvas(400, 400);          // our playground
  noStroke();
  textSize(14);
}

function draw() {                  // runs many times every second
  background(220);                 // wipe old frame

  // 👆 Is SHIFT being held right now? If yes, use turbo speed.
  // keyIsDown(...) returns true/false every frame.
  let speed = keyIsDown(SHIFT) ? turboSpeed : normalSpeed;
  // (If SHIFT constant doesn't work for you, use 16 instead.)

  // 🧭 Movement amounts for this frame
  let dx = 0;
  let dy = 0;

  // ⬅️ ➡️ ⬆️ ⬇️
  // NOTE: four separate ifs (NOT else-if) so we can press
  //       multiple keys at once (e.g., up + right = diagonal).
  if (keyIsDown(LEFT_ARROW))  { dx -= speed; }
  if (keyIsDown(RIGHT_ARROW)) { dx += speed; }
  if (keyIsDown(UP_ARROW))    { dy -= speed; }
  if (keyIsDown(DOWN_ARROW))  { dy += speed; }

  // ✏️ Apply the movement
  x += dx;
  y += dy;

  // 🧱 Keep the ball inside the canvas.
  // constrain(value, min, max) pushes value back into the range.
  x = constrain(x, r, width  - r); // left/right walls
  y = constrain(y, r, height - r); // top/bottom walls

  // 🎯 Draw the ball
  fill(70, 140, 255);              // nice blue
  circle(x, y, r * 2);

  // ℹ️ On-screen help
  fill(0);
  text("Arrows = move | Hold SHIFT = faster", 10, 20);
  text("x: " + x + "  y: " + y + "  speed: " + speed, 10, 40);
}
