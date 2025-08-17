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

function setup(){
    createCanvas(400,400);
    background(220);
    noStroke();
}

function keyPressed(){
    // counter??? - how many cirlce
    let count = floor(random(5,21));

    for(let i=0; i <count; i++){
        let size = random(10,80);
        fill(random(255),random(255))
    }

    /* for (let i = 0; end ; step){

            change size
            change color
            change position x
            change position y

    }*/

}

function keyReleased(){
    background(220);
}

// floor(random(5, 21))