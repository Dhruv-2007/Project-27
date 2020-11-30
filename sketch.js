
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

	roof1 = new Roof(400,50,800,40);

	bobObject1 = new Bob(400,200,53.5);
	bobObject2 = new Bob(453.5,200,53.5);
	bobObject3 = new Bob(507,200,53.5);
	bobObject4 = new Bob(562.5,200,53.5);
	bobObject5 = new Bob(346.5,200,53.5);
	bobObject6 = new Bob(293,200,53.5);
	bobObject7 = new Bob(239.5,200,53.5);

	rope1 = new Rope(bobObject1.body,roof1.body,0,20);
	rope2 = new Rope(bobObject2.body,roof1.body,53.5,20);
	rope3 = new Rope(bobObject3.body,roof1.body,107,20);
	rope4 = new Rope(bobObject4.body,roof1.body,160.5,20);
	rope5 = new Rope(bobObject5.body,roof1.body,-53.5,20);
	rope6 = new Rope(bobObject6.body,roof1.body,-107,20);
	rope7 = new Rope(bobObject7.body,roof1.body,-160.5,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobObject6.display();
  bobObject7.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
}

//Hold down on the left most bob and dragged back and release it!
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bobObject7.body,bobObject7.body.position,{x:-50, y:-45})
	}
}
function mouseDragged(){
    Matter.Body.setPosition(bobObject7.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    Matter.Body.setPosition(bobObject7.body,{x: bobObject7.position.x,y:bobObject7.position.y})
}