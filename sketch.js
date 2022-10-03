// variables for sprites and sprite related images goes here
var trex,trex_runAnimation, trex_collided;
var ground,groundImage,groundImage2;
var edges;

function preload(){

  //this function is necessary for loading all your media files and keep them ready

  trex_runAnimation = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground1.png");
  groundImage2 = loadImage("ground2.png");

}


function setup(){
  createCanvas(600,200);

  // trex var
  trex = createSprite(50,150,20,20);
  trex.addAnimation("running", trex_runAnimation); // sprite.addAnimation("string",Animation-loaded Var)
  trex.scale = 0.5;
  
 edges = createEdgeSprites();
  
 //ground
 ground = createSprite(300,175,600,10);
 ground.addImage(groundImage2);
 ground.velocityX = -4;
  
 
}

function draw(){
  background("lightgrey")

  // to make the ground - continous

  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  //trex jumping
  if(keyDown("space")){
    trex.velocityY = -10; 
  }
 

  // gravity 
  trex.velocityY = trex.velocityY+0.5;
  trex.collide(ground);



  drawSprites();

}

/*  edges - array
edges[0] - leftEdge
edges[1] - rightEdge;
edges[2] - topEdge;
edges[3] - bottomEdge;  */
