var car, wall, speed, weight;





function setup() {
  createCanvas(1600,800);
  car = createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall = createSprite(1500,200,60,heiht/2);
}

function draw() {

  background("blue");  
  
  drawSprites();






}