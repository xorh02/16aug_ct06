let shapeColor='blue';
let circleSize =5 ;

function setup(){
    createCanvas(400,400);
    background(220);
    noStroke();
}


function mousePressed(){
    shapeColor = color(random(255),random(255), random(255));

}

function mouseDragged(){
    
    circleSize += 0.5;
}