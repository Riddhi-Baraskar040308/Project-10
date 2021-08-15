var seaImg,shipImg;
var sea,ship;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,150,50,30);
  ship = createSprite(200,200);
  ship.addAnimation("moving",shipImg);
  sea.addImage(seaImg);
  sea.velocityX = -4;
 ship.scale = 0.4;
}

function draw() {
  background("white");
  sea.velocityX = -4;
 if(sea.x < 0){
   sea.x = sea.width/8;
 
 }
 drawSprites();
}