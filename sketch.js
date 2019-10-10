let array = [];
let backgroundColor = 200;
let noiseOffset = 0.0;
let strokeWidth = 2;



function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(backgroundColor);


  drawGrid();
  strokeWeight(10);
  noFill();
}

function draw() {

  noiseOffset += 5;
  strokeWidth = noise(noiseOffset * 100) * 100;
  stroke(map(mouseX, 0, 500, 50, 255, true))



  if (mouseIsPressed) {

    backgroundColor -= 5;
    // background(backgroundColor);
    fill(160, 245, 187);
    array.push([mouseX, mouseY]);

    background(255);




    beginShape();
    for (let i = 0; i < array.length; i++) {

      curveVertex(array[i][0], array[i][1])

    }
    endShape();

  }

  return false;

}


function mousePressed() {

  array = [];
  backgroundColor = 255;


}


function drawGrid() {

  numCells = 20;
  fillColor = 255;
  // noStroke();
  strokeWeight(0);


  for (let i = 0; i <= width; i += width / numCells) {

    for (let j = 0; j <= height; j += height / numCells) {

      if (fillColor === 255) {

        fillColor = 200;
      } else {

        fillColor = 255;

      }

      fill(255,230,235);

      rect(i*2, j*2, width / numCells, height / numCells);


    }


  }

  strokeWeight(5);
}
