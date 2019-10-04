let noiseOffset = 0.0;
let strokeWidth = 30;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(72, 201, 176);



}

function draw() {
  background(72, 201, 176, 1);
  strokeWeight(strokeWidth);
  noiseOffset += 3;
  strokeWidth = noise(noiseOffset*100) * 100;
  stroke(map(mouseX, 0, 500, 50, 255, true))


  if (mouseIsPressed) {

    point(width - mouseX, height - mouseY, width - pmouseX, width - pmouseY);

    // line(width - mouseX, height - mouseY, width - pmouseX, width - pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  //console.log('key ${key} is being typed')
  //  console.log("key" + key +"is being typed")
  if (key === 's') {
    saveCanvas('fileName', 'png');
  }
  return false;
}
