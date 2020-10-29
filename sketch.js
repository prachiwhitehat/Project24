
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var box1,box2,box3;
var paper;
var ground;
var engine,world;


function setup() {
	createCanvas(950, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(475,590,950,20);

	box1= new Box(820,570,150,20);
	box2 = new Box(900,570,20,80);
	box3 = new Box(750,570,20,80);
    
	paper = new Paper(20,580,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});



	//Engine.run(engine);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  
  ground.display();
  paper.display();

 //keyPressed();
 // drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body, paper.body.position,{x:200,y:-200});
}

}



