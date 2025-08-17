// ----------------------------------------- recap
// let shapeColor='blue';
// let circleSize =5 ;

// function setup(){
//     createCanvas(400,400);
//     background(220);
//     noStroke();
// }


// function mousePressed(){
//     shapeColor = color(random(255),random(255), random(255));
//     circleSize = 5;
// }

// function mouseDragged(){
//     fill(shapeColor);
//     ellipse(mouseX, mouseY,circleSize,circleSize);
//     circleSize += 0.5;
// }
// ----------------------------------------- recap

// ----------------------------------------- eg 1

// let rectSize = 50;

// function setup(){
//     createCanvas(400,400);
// }

// function draw(){
//     background(220);

//     let centerX = width/2;
//     let centerY = height/2;

//     let topLeftX = centerX - rectSize/2;
//     let topLeftY = centerY - rectSize/2;

//     rect(topLeftX,topLeftY,rectSize,rectSize);

// }

// function keyPressed(){
//     rectSize = 100;
// }


// function keyReleased(){
//     rectSize = 50;
// }

// ----------------------------------------- challenge 1

// function setup(){
//     createCanvas(400,400);
//     background(220);
//     noStroke();
// }

// function keyPressed(){
//     // counter??? - how many cirlce
//     let count = floor(random(5,21));

//     for(let i=0; i <count; i++){
//         let size = random(10,80);
//         fill(random(255),random(255),random(255));

//         let x = random(size/2, width-size/2)
//         let y = random(size/2, height-size/2)

//         ellipse(x,y,size , size);

//     }


// }

// function keyReleased(){
//     background(220);
// }


// let a = 5;
// let b ="5";
// let c = 7;

// // console.log(a==b);
// // console.log(a===b);

// console.log(a!=b);
// console.log(a>=b);


// ----------------------------------------- key c

function setup(){
    createCanvas(400,400);
    background(220);
    stroke(0);
    fill(255);
}


function draw(){
    background(220);

}

function keyPressed(){

    if(key==="c"|| key==="C"){
        showCircle =
    }
}