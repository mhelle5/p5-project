let mappedValue;
let toggle;
let sorryImage;
let moneyImage;
let mehImage;
let img;
let value = 0;
let distance;
let increment;
let cupidImage;
let cupidPostionX;
let cupidPostionY;
let cupidSpeedX;
let cupidSpeedY;
let saleImage;




function preload() {
  sorryImage = loadImage('images/sorry.jpg');
  cupidImage = loadImage('images/cupid.png');
  skullImage = loadImage('images/skull.jpg');
  moneyImage = loadImage('images/money.jpg');
  daysImage = loadImage('images/days.jpg');
  mehImage = loadImage('images/meh.jpg');
  saleImage = loadImage('images/sale.jpg');
}

function setup() {
  // put setup code here
createCanvas(1400,1500);
 background(179,0,30); //pink
 //255,118,130
 distance = 10;
 increment = 0.5;
 //toggle = true;
strokeWeight(6);

mappedValue = 0;
toggle = false;




cupidPostionX = 200;
cupidPostionY = 200;
cupidSpeedX = random(-9,9);
cupidSpeedY = random(-9,9);


}

function draw() {
  background(179,0,30); //pink

  noFill();
 strokeWeight(6);
 //background(255,118,130);

distance = map(mouseX,0,500,5,10);
for (let i = 50; i < 1500; i += 30) {

  for (let j = 50; j < 1500; j += 30) {
    ellipse(i,j,distance, distance);
  }
}

// put drawing code here
mappedValue = map(mouseY, 0, 1200, 0, 255);

//noStroke();
if (toggle === true) {
  fill(mappedValue);
} else {
  fill(255,34,37);
}
ellipse(mouseX, mouseY,50,50);

//background(0,0,0);
image(cupidImage,cupidPostionX,cupidPostionY,500,300);
image(sorryImage,450,200,500,300);
image(skullImage,1000,700,300,200);
image(moneyImage,565,999,500,300);
image(daysImage,50,350,330,300);
image(mehImage,200,1300,330,200);
image(saleImage,1170,350,200,300);

fill(value);
  rect(550, 550, 250, 250);
  ellipse(200,200,100,100);
  ellipse(1200,1200,300,300);
  ellipse(1100,300,150,150);
  rect(1010,550,100,90);
  rect(100,800,100,100);
  ellipse(800,1000,100,100);
  ellipse(700,1400,250,250);
  rect(200,950,300,300);
  ellipse(400,700,100,100);

noFill();
strokeWeight(6);

//if (toggle === true) {
  //stroke(0);
//} else {
  //stroke (255,0,0);
//distance = distance + increment;

//if (distance > 20 || distance < 5) {
//increment = increment * -1;
//}
//for (let i = 20; i < 1200; j += 20) {
  //for (let j = 20; j < 1200; j += 20) {
    //ellipse(i,j,distance,distance);
    //}
  //}
//}

cupidPostionX = cupidPostionX + cupidSpeedX;
cupidPostionY = cupidPostionY + cupidSpeedY;
if (cupidPostionX >= width || cupidPostionX <= 0) {
cupidSpeedX = cupidSpeedX * -1;
}
if (cupidPostionY >= height || cupidPostionY <= 0) {
cupidSpeedY = cupidSpeedY * -1;

}


fill(255);
textSize(32);
text('V A L E N T I N E S   D A Y 😈☠️', 500, 100);

if (mouseIsPressed) {
    stroke(255);
  } else {
    stroke(0,0,0);
  }
    line(mouseX - 66, mouseY, mouseX + 66, mouseY);
    line(mouseX, mouseY - 66, mouseX, mouseY + 66);
}

function mousePressed() {
  toggle = !toggle;
}

function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
//toggle = !toggle;
  }
}
