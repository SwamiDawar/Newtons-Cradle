
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	cradle = new Ground(120, 50, 100, 30);


	bob1 = new Ball(100, 300, 10);
	bob2 = new Ball(110, 300, 10);
	bob3 = new Ball(120, 300, 10);
	bob4 = new Ball(130, 300, 10);
	bob5 = new Ball(140, 300, 10);

	chain1 = new Rope(bob1, cradle, -bobDiameter*2, 0);

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


}
