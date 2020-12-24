//PacmanInTheCircus
//Use Up and Down arrow keys to help Pacman pass through the hoops on fire!

//Variables:

//Hoop Ellipse;
let x1, y1, // Hoop coordinates 
  a1 = 50,
  b1 = 90, //Major and Minor axes of hoop
  k,
  velX = 2.5,
  sizeEll = 5,
  hoopClr; //colour of hoop


//Pacman:
let pacX = 0, //coordinates of pacman
  pacY = 250, //starting y coordinate
  r = 75, //pacman radius
  fr = 100, //starting FPS
  velY, // velocity
  pacClr; //colour of pacman

function setup() {
  createCanvas(1000, 500);
  background(0);
  angleMode(DEGREES);
  frameRate(fr); // Attempt to refresh at starting FPS
  pacClr = color(253, 255, 0);
  hoopClr = color(255, 191, 0);
}

function draw() {
  background(0);
  hoop(width / 2, height / 4);
  hoop(width / 4, 3 * height / 4);
  hoop(3 * width / 4, 3 * height / 4);

  //wrap pacman
  push();
  pacX = pacX += velX; // Move Pacman
  if (pacX >= width && velX <= 10) {
    // limits velX to a maximum value of 10
    if (fr == 100) {
      pacClr = color(253, 255, 0);
      frameRate(fr); // make frameRate 100 FPS
      velX += 1.5; //increases speed after every round
    }
    pacX = 0;
    pop();
  }
  //create pacman
  fill(pacClr);
  arc(pacX, pacY, r, r, 40, 320, PIE);
}

//create hoop 
function hoop(tx, ty) {
  push();
  translate(tx, ty);
  fill(hoopClr);
  for (let k = 0; k <= 360; k++) {
    x1 = a1 * cos(k) + random(-10, 10);
    y1 = b1 * sin(k) + random(-10, 10);
    ellipse(x1, y1, sizeEll, sizeEll);
  }
  pop();
}

function keyPressed() {
  let velY = 20;
  if (keyCode === UP_ARROW) {
    pacY -= velY;
  } else if (keyCode === DOWN_ARROW) {
    pacY += velY;
  }
}