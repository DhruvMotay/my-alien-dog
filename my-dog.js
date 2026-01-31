function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(0, 150, 300);
  //ground
  fill(80, 200, 50), rect(-300, 100, 600, 600), fill(255)
  //back leg
  rect(80, 40, 40, 100)
  //front leg
  rect(-90, 40, 40, 100)
  //tail
  rect(150, -10, 100, 25)
  //body
  ellipse(0, 0, 350, 140)
  //head
  ellipse(-170, 5, 150, 160)
  //left ear
  triangle(-230, -40, -180, -70, -230, -100)
  //right ear
  triangle(-110, -40, -160, -70, -105, -100)
  //left eye
  circle(-200, -25, 20)
  //right eye
  circle(-140, -25, 20)
  //nose
  triangle(-170, 20, -185, 0, -155, 0)
  //mouth
  line(-200, 40, -140, 40)
}