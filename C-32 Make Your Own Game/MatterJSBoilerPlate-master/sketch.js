
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var rim1,rim2,rim3
var ball
var xVelocity, yVelocity


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,395,800,10)
	rim1 = new Block(610,115,20,50)
	rim2 = new Block(675,150,150,20)
	rim3 = new Block(740,115,20,50)
	ball = new Ball(30,380,40)

	xVelocity = 0;
	yVelocity = 0;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(160,136,112);
  ground.display()
  rim1.display()
  rim2.display()
  rim3.display()
  ball.display()
  drawSprites();
  fill("yellow")
  text("The horizontal power is: "+xVelocity,100,100)
  text("The vertical power is: "+yVelocity,100,150)
  console.log(round(ball.body.position.x),round(ball.body.position.y))
}

function keyPressed(){
	if(round(ball.body.position.x)<=40 && round(ball.body.position.y)<=360){
		if(keyCode===38){
			yVelocity += 20;
		}
	
		if(keyCode===40&&yVelocity >= 10){
			yVelocity -= 20;
		}
	
		if(keyCode===39){
			xVelocity += 20;
		}
	
		if(keyCode===37&&xVelocity >= 10){
			xVelocity -= 20;
		}
	
	
		if (keyCode === 32){
			Matter.Body.applyForce(ball.body, ball.body.position, {x:xVelocity,y:-yVelocity})
		}
	}
	
	if(keyCode===82){
		Matter.Body.setPosition(ball.body,{x:30,y:380})
	}
}



