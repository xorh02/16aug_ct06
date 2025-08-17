// // “This is where we store the colour of the shape. Right now it starts as blue.
// let shapeColor = 'blue';


// //This runs once at the start — it makes our drawing space (canvas).
// function setup() {
//   createCanvas(400, 400); // Make a drawing area
//   background(220); // Light gray background
// }


// // this runs over and over — it’s where we tell the computer to draw the circle with the current colour.”
// function draw() {
//   fill(shapeColor); // Use the current color
//   ellipse(200, 200, 80, 80); // Draw a circle in the middle


//   //**************************************************************explanation
//   /*What it does: Draws a circle or oval.
//     Code: ellipse(x, y, width, height)
//         x = how far across from the left
//         y = how far down from the top
//         width = how wide the shape is
//         height = how tall the shape is
   
//     Circle vs Oval:
//         If width = height → circle
//         If width ≠ height → oval
   
//     Example:
//         ellipse(200, 200, 80, 80)
//         → Draws a circle in the middle of a 400×400 canvas, 80 pixels wide and tall.*/


//   //**************************************************************explanation


// }






// //this runs once when we let go of the mouse. We change the colour back to blue.
// function mouseReleased() {
//   shapeColor = 'blue'; // Change back to blue when mouse is released
// }






// //This runs once when we click the mouse. We’re changing the colour to red.
// function mousePressed() {
//   shapeColor = 'red'; // Change to red when mouse is pressed
// }





// //==========================SHOW LATER . changing the colour to RANDOM.
// //**************************************************************explanation
// /*random()


// Think of it like a dice roller, but it can roll any number, not just whole numbers.
// 1. random() (no numbers inside)  --> Picks a random number between 0 and 1.
//     Example: Could be 0.28, 0.73, etc.


// 2. random(high)  --> Picks a random number between 0 and high.
//     Example: random(255) → number between 0 and 255.
// (Perfect for colours, because red, green, and blue values go from 0–255.)


// 3. random(low, high) --> Picks a random number between low and high(not included)
//     Example: random(50, 100) → number between 50 and 100.*/
// //**************************************************************explanation


// function mousePressed() {
//   shapeColor = color(random(255), random(255), random(255));
// }
// //==========================SHOW LATER . changing the colour to RANDOM.



//-------------------------------------------------------------------------------------------------task2

// // 🎨 Shape colour starts as blue
// let shapeColor = 'blue';


// // 🔹 NEW: variable to store circle size
// let circleSize = 20;


// // This runs once at the start — it makes our drawing space
// function setup() {
//   createCanvas(400, 400); // Drawing area
//   background(220);        // Light gray background
// }


// function mouseDragged() {
//   // ! CHANGED: pick a new random colour for every circle
//   shapeColor = color(random(255), random(255), random(255)); // ! CHANGED
//   fill(shapeColor); // Current colour


//   // ! CHANGED: random size for every circle
//   circleSize = random(10, 50); // ! CHANGED


//   // ! CHANGED: draw with the random size at the cursor
//   ellipse(mouseX, mouseY, circleSize, circleSize); // ! CHANGED
// }


// // This runs when mouse moves
// function mouseMoved() {
//   // circleSize += 2; // ! CHANGED: disabled for paint-splatter (size is random per splat)
// }


// // When mouse is pressed → random colour
// function mousePressed() {
//   shapeColor = color(random(255), random(255), random(255));
//   circleSize = 20; // Reset size when clicking
// }


// // When mouse is released → back to blue
// function mouseReleased() {
//   shapeColor = 'blue';
// }



// ================================================================ Paint Brush (Recap 1) ================================
// Click & hold: choose a random colour ONCE, draw circles that start at 5px and grow by 0.5px.
// Let go: it stops drawing because we only draw while dragging the mouse.

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
