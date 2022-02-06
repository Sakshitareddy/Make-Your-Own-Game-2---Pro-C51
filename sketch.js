var superhero, apple, bottle, can, plasticBag;
var superheroImg, appleImg, bottleImg, canImg, plasticBagImg;
var bgImg, bg;

var score = 0;
var lives = 3;
var gameState = 1;
PLAY = 1;
END = 2;

function preload() {
  bgImg = loadImage("assets/background.jpeg");
  appleImg = loadImage("assets/apple.png");
  bottleImg = loadImage("assets/bottle.png");
  canImg = loadImage("assets/can.png");
  plasticBagImg = loadImage("assets/plasticBag.png");
  superheroImg = loadImage("assets/Superhero.png");
}

function setup() {
  createCanvas(450,450);
  //bg
  bg = createSprite(225,225);
  bg.addImage(bgImg);
  bg.scale = 0.7;

  //superhero
  superhero = createSprite(200,200);
  superhero.addImage(superheroImg);
  superhero.scale = 0.4;

}

function draw() {
  background(0);  
  edges= createEdgeSprites();
  superhero.collide(edges);
  if(gameState == 1) {
    playerControls();
    createApples();
    createBottles();
    createPlasticBags();
    createCans();
  }

  drawSprites();

  fill("black");
  textFont("Courier");
  textSize(20);
  text("SAVE THE OCEANS!",125,20);
  text("Score: " + score,25,50);
  text("Lives: " + lives,325,50);
}

function playerControls() {
  if(keyDown("left")) {
    superhero.position.x -= 10;
  }
  if(keyDown("right")) {
    superhero.position.x += 10;
  }
  if(keyDown("up")) {
    superhero.position.y -= 10;
  }
  if(keyDown("down")) {
    superhero.position.y += 10;
  }
}

function createApples() {
  if (World.frameCount % 200 == 0) {
  //apple
  apple = createSprite(random(50,375),-50);
  apple.addImage(appleImg);
  apple.scale = 0.2;
  apple.lifetime = 200;
  apple.velocityY = 5;
  apple.rotationSpeed = 3;
  }
}

function createBottles() {
  if (World.frameCount % 150 == 0) {
  //bottle
  bottle = createSprite(random(50,375),-150);
  bottle.addImage(bottleImg);
  bottle.scale = 0.2;
  bottle.lifetime = 200;
  bottle.velocityY = 5;
  bottle.rotationSpeed = 3;
  }
}

function createCans() {
  if (World.frameCount % 100 == 0) {
  //can
  can = createSprite(random(50,375),-250);
  can.addImage(canImg);
  can.scale = 0.2;
  can.lifetime = 200;
  can.velocityY = 5;
  can.rotationSpeed = 3;
  }
}

function createPlasticBags() {
  if (World.frameCount % 80 == 0) {
  //plasticBag
  plasticBag = createSprite(random(50,375),-350);
  plasticBag.addImage(plasticBagImg);
  plasticBag.scale = 0.2;
  plasticBag.lifetime = 200;
  plasticBag.velocityY = 5;
  plasticBag.rotationSpeed = 3;
  }
}