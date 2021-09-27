

const Engine= Matter.Engine//namespace
const World = Matter.World
const Bodies =Matter.Bodies
var myengine,myworld,ground,ball;

function setup() {
  createCanvas(800,400);

  myengine=Engine.create()
 myworld = myengine.world

 var ground_options={isStatic :true}
 ground=Bodies.rectangle(400, 390, 800, 20,ground_options)
 World.add(myworld,ground)
 console.log(ground)

 var ball_options={restitution :1}
 ball=Bodies.circle(200,150,20,ball_options)
World.add(myworld,ball)
}

function draw() {
  background("pink");  
  Engine.update(myengine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}