let size = 25;
let rows; let cols;

let boxes = [];

let font;
let msg = "AI"; let points = [];
let fontX = -200; let fontY = 155; let fontSize = 500;

function preload() {
  font = loadFont("Anta/Anta-Regular.ttf");
}

function setup() {
  createCanvas(600, 600, WEBGL); //WEBGL allows us to render things in 3D mode
  angleMode(DEGREES);
  cols = width/size;
  rows = height/size;
  
  points = font.textToPoints(msg, fontX, fontY, fontSize);
  
  for (let i=0; i<cols; i++) {
    boxes[i] = [];
    for (let j=0; j<rows; j++) {
      boxes[i][j] = new Box(size/2 + i*size - size*cols/2, size/2 + j*size - size*rows/2);
    }
  }
}

function draw() {
  background(0, 0, 139);
  let distance;
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      for (let k=0; k<points.length; k++){
        distance = dist(points[k].x, points[k].y, boxes[i][j].x, boxes[i][j].y);
        
        if (distance < 13) {
          boxes[i][j].isLetter = true;
        } 
      }

      boxes[i][j].display();
    }
  }
  
  // fill(255, 0, 0);
  // for (let i=0; i<points.length; i++) {
  //   ellipse(points[i].x, points[i].y, 10, 10);
  // }
  
}