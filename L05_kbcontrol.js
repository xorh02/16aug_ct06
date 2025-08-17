let shapeColor ='blue';

function setup(){
    createCanvas(400,400);
    background(220);
    noStroke();
}

function mousePressed(){
    shapeColor= color(random())
}