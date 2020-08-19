
var car,wall;
var speed,weight;

function setup() {
 speed = random(55,90);
 weight=random(400,1500);
 
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,10,height/2);
  car.velocityX=speed;
}


function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    var deformation=(0.5*weight*speed*speed)/22500;
    car.velocityX=0;
    if(deformation<100){
      car.shapeColor="green";
    }
    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }
    if(deformation>180){
      car.shapeColor="red";
    }

    
  }
  drawSprites();
} 
