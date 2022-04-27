var caixa;
function setup() {
  createCanvas(400,400);
  caixa=createSprite(50,50,20,20);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    caixa.position.x+=5;
  }
  if(keyIsDown(LEFT_ARROW)){
    caixa.position.x-=5;
  }
  if(keyIsDown(UP_ARROW)){
    caixa.position.y-=5;
  }
  if(keyIsDown(DOWN_ARROW)){
    caixa.position.y+=5;
  }
  
drawSprites();
}




