var thickness,wall
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
 
 bullet= createSprite(50, 200, 50, 5);
 weight=random(32,52)
  speed=random(223,321)
 bullet.velocityX=speed;
 bullet.shapeColor=color(255);


 wall= createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80)

 thickness=random(22,83)
  
}

function draw() {
  background('pink');  
  if(hasCollided(bullet,wall))
{

bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)


if(damage>10)
{
wall.shapeColor=color(255,0,0)
}

if(damage<10)
{

  wall.shapeColor=color(0,255,0)
}


}

//hasCollided();
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;


}



