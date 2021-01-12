
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1;
var block2;
var block3;

function preload()
{
	block1=createSprite(450,700,10,100);
	block2=createSprite(550,750,200,10);
	block2=createSprite(650,700,10,100);
}

function setup() {
	createCanvas(800, 800);
    engine = Engine.create();
	world = engine.world;

	//paper = new paper(100,400);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



