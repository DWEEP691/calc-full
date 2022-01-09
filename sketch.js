var canvas;
var ui = '';
var result;
var dc,mc;
var r,posY;
var calc;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    calc = new cal();
}

function draw(){
    background("lightgreen");
    calc.display();
    rect(calc.input.position.x-10,calc.input.position.y-10,600,600);
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}