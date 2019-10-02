function setup() {
  createCanvas(600, 600);
  background(72, 201, 176);
  strokeWeight(5);
  
}

function draw() {
  stroke(map(mouseX, 0, 500, 50, 255, true))
  if (mouseIsPressed) {
    line(width - mouseX, height - mouseY, width - pmouseX, width - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped(){
  //console.log('key ${key} is being typed')
//  console.log("key" + key +"is being typed")
  if (key === 's') {
 saveCanvas('fileName', 'png');
  }
  return false;
}
