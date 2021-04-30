var PLAY=1
var END=0
var gameState=1
var tower,towerImage;
var door,doorImage,doorGroup;
var climber,climberImage,climberGroup;
var invisibleBlock,invisibleBlockGroup;
var ghost,ghostImage;

function preload(){
  
  towerImage=loadImage("tower.png")
  
  doorImage=loadImage("door.png")
  doorGroup= new Group();
  
  climberImage=loadImage("climber.png");
  climberGroup= new Group();
  
  ghostImage=loadImage("ghost-standing.png")

  invisibleBlockGroup=new Group();
}

function setup(){
  createCanvas(600,600);
 
  tower=createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY=1;
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImage);
  
  ghost.scale=0.3

}

function draw(){
  
  background("black");

  if(gameState===PLAY){
    
     
     
  if(tower.y>400) 
  {
     tower.y=300    
  }
  if(keyDown("left_arrow")){
     
     ghost.x=ghost.x-3;
     }
   if(keyDown("right_arrow")){
     
     ghost.x=ghost.x+3;
     }
 // ghost.velocityY=3;
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
    
    ghost.destroy();
    gameState=END;
  }
  
  spawnDoors()  
  drawSprites();
  }
  if(gameState===END){
    
    stroke("yellow"); 
    fill("yellow"); 
    textSize(30);
    text("Game Over", 230,250);
     }
}

 function spawnDoors(){
 
   if(frameCount%200===0){
      
     door=createSprite(200,-50);
     door.addImage("door",doorImage);
     door.x=Math.round(random(120,400));
     door.velocityY=1 
     door.lifetime=800
     doorGroup.add(door);
     
     climber=createSprite(200,10);
     climber.addImage("climber",climberImage);
     climber.x= door.x;
     climber.velocityY=1;
     climber.lifetime=800;
     climberGroup.add(climber);
   
     ghost.depth=door.depth;
     ghost.depth+=1
   
     invisibleBlock=createSprite(200,15);
     invisibleBlock.width = climber.width;
     invisibleBlock.height = 2;
     invisibleBlock.x= door.x;
     invisibleBlock.velocityY=1;
     invisibleBlock.lifetime=800;
     invisibleBlockGroup.add(invisibleBlock);
   
   
   }
 
   
}