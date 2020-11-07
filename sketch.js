var obj1,obj2;

function setup() {
  createCanvas(800,400);
 obj1 = createSprite(400, 200, 50, 50);
 obj1.velocityY = 3;
 
 obj2 = createSprite(400,300,50,50);
 obj2.velocityY = -3;
}

function draw() {
  background("red"); 
  
  drawSprites();
  bounceOff(obj1,obj2);
  if(isTouching(obj1,obj2)){
   obj1.shapeColor = "white"
   obj2.shapeColor = "white";
  }
}







