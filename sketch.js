var wall,tickness;
var bullet,speed,weight;
var damage
function setup() {

createCanvas(1600,600);

speed =random(223,321);
weight = random(30,52);
thickness = random(22,83);

bullet = createSprite(50,100,10,30);
bullet.velocityX = speed;

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor= color(80,80,80);

 damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;

}

function draw() {

background("black");  

if(hasCollided(bullet,wall))

{ 
bullet.velocityX = 0;


if (damage<50000000)
{
   wall.shapeColor=color(225,0,0);

}

if (damage>50000000)
{

    wall.shapeColor=color(0,225,0);
}

}

drawSprites();

}
