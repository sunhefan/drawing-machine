let noiseOffset = 0.0;
let strokeWidth = 3;
//let angle=10;

//background color
// let col=100;
// let a= 50;
// let b =100;
let xoff = 10;
let num = 100;






function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(HSB);


}

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
