
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var bob1Diameter, bob2Diameter, bob3Diameter, bob4Diameter, bob5Diameter;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400, 600, 50);
	bob2 = new Bob(500, 600, 50);
	bob3 = new Bob(600, 600, 50);
	bob4 = new Bob(700, 600, 50);
	bob5 = new Bob(800, 600, 50);
	
	roof = new Roof(600, 200, 500, 50);

	rope1 = new Rope(bob1.body, roof.body, -40*5, 0);
	rope2 = new Rope(bob2.body, roof.body, -40*2.5, 0);
	rope3 = new Rope(bob3.body, roof.body, -40*0, 0);
	rope4 = new Rope(bob4.body, roof.body, -40*-2.5, 0);
	rope5 = new Rope(bob5.body, roof.body, -40*-5, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
