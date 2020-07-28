var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 50, 80);
  movingRect.shapeColor="orange";
  //movingRect.debug= true;
  fixedRect = createSprite(400,200,80,50);
  fixedRect.shapeColor="orange";
  //fixedRect.debug= true;
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
     fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
     fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.shapeColor="purple";
      fixedRect.shapeColor="purple";
  }else{
    movingRect.shapeColor="orange";
    fixedRect.shapeColor="orange";
  }

  drawSprites();
}