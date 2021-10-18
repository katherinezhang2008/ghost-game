var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
doorsGroup=new Group();
climbersGroup= new Group();
invisibleBlockGroup=new Group();
}


function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    spawnDoor();
    drawSprites();
}

function spawnDoor(){
  if(frameCount % 240 === 0 ){
    door = createSprite(200,50);
    door.addImage("door", doorImg);
    door.velocityY=1;
    door.x=Math.round(random (150,500));
    door.lifetime=600
   doorsGroup.add (door);
  
   climber = createSprite(200,100);
   climber.addImage("climber", climberImg);
   climber.velocityY=1;
   climber.x=door.x;
   climber.lifetime=600
   climbersGroup.add (climber);

   invisibleBlock=createSprite(200,110,100,2);
   invisibleBlock.debug=true; 
   invisibleBlock.velocityY=1;
   invisibleBlock.lifetime=600;
   invisibleBlock.x=climber.x;
   invisibleBlockGroup.add (invisibleBlock);


   
  }


}