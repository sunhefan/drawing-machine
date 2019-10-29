let noiseOffset = 0.0;
let strokeWidth = 3;
//let angle=10;

//background color
// let col=100;
// let a= 50;
// let b =100;
let xoff = 10;
let botton;

let checkboxes =[];
let size = 100;


function setup() {

  button = select ('#randButton');
  button.mousePressed(buttonPressed);
  button.class("randomizeButton");
  noCanvas();
  //createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(HSB);
for (let i=0; i<100; i++){ //create checkbox//
  checkboxes[i]=createCheckbox('')
  checkboxes [i].style ('display','inline');
  checkboxes[i].position (random(windowWidth),random(windowHeight));
  checkboxes[i].changed(myCheckedEvent);
}


}

function myCheckedEvent(){
size += 50;
}



function buttonPressed(){
  let body;
  body=select('body');
  body.style('background-image', "url('images/place1.jpg')");


}

function draw() {
ellipse (mouseX,mouseY, 100,100)

  if (mouseIsPressed) {




    noiseOffset += 0.05;
    strokeWidth = noise(noiseOffset * 5) * 200;
    fill(frameCount % 360, 100, 100);

    // stroke(map(mouseX, 0, 500, 50, 255, true))

noStroke();

    rect(width- mouseX, height- mouseY,  width/2-pmouseX, height/2 -pmouseY)
    for (let i=1; i<5; i++){
  rect(mouseX, mouseY,100, 100);}

  }
  return false;

}
