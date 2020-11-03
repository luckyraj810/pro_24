
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dp1,dp2,dp3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(400,650,800,20);

	ball=new Ball(200,470,40);


	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  ball.display();
 drawSprite();
 
}



