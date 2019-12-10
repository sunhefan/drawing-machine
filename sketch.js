


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#11BFBF');
  colorMode(HSB);


}


let isDrawing = false;

let  symbol = {}
symbol.r = 5
symbol.dr = 1;


function drawSymbolAt(x, y) {
  fill(color(255, 0, 0))
  push();
  	translate(x, y);
  	drawSymbol();
  pop();
}

function drawSymbol(){
  if(isDrawing == true){
    noFill();
    stroke(symbol.color);
    ellipse(10, 10, symbol.r, symbol.r);
     ellipse(40, 40, symbol.r, symbol.r);
  }
}

function updateSymbol(){

  symbol.r += symbol.dr

  if (symbol.r > 10) {
  	symbol.dr = -1;


  } else if (symbol.r < 20) {
    symbol.dr = 1;


  }

  symbol.color = color(random(150), random(150), random(250));
}



function mousePressed() {
  if(isDrawing == false){
    isDrawing = true;
  }
  else{
    isDrawing = false;
  }
  // Add logic to flip the "isDrawing" flag
}

function mouseMoved() {

  if (true) {	// Modify Me
  	updateSymbol();
  	drawSymbolAt(mouseX, mouseY);
  }

}



let noiseOffset = 0.0;
let strokeWidth = 3;

let xoff = 10;
let num = 100;
function draw() {



  if (mouseIsPressed) {

    //background color
    // col,a,b = mouseX/2;
    // background (col,a,b);


    noiseOffset += 0.05;
    strokeWidth = noise(noiseOffset * 5) * 200;
    fill(frameCount % 360, 100, 100);

    // stroke(map(mouseX, 0, 500, 50, 255, true))

    noStroke();

    rect(width - mouseX, height - mouseY, width / 2 - pmouseX, height / 2 - pmouseY)

    for (let i = 1; i < 5; i++) {
      fill(frameCount % 360, 30, 30)
      rect(mouseX, mouseY, 80, 80);
    }

  }
  return false;

}
