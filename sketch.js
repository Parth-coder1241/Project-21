var bullet,wall;
var speed,weight;
var collide;
function setup() {
  createCanvas(1600,1000);
  speed= random(55,90);
  weight= random(400,1500);
  bullet=createSprite(50,200,20,20);
  wall=createSprite(1000,200,10,height/2);
  bullet.velocityX=speed;  
  wall.shapeColor=color(0,0,255);  
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
      if(deformation>180)
        {
          bullet.shapeColour=color(255,0,0);
        }
       if(deformation<180 && deformation>100)
        {
         bullet.shapeColor=color(230,230,0);
        }
        if(deformation<100)
        {
          bullet.shapeColor=color(0,255,0);
        }
  }
  text("If the Color is :",500,400);
  text("Green=Good",500,420);
  text("Yellow=Average",500,440);
  text("Red=Lethal",500,460);
  bullet.collide(wall);
  drawSprites();
}