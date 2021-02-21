const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var sground1, sground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16
var box17, box18, box19, box20, box21, box22, box23, box24, box25;
var hexagon;

function preload(){
    //background(225,225,225);
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);
   //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new SlingShot(this.ball,{x:100,y:200});
    
}
function draw(){
    Engine.update(engine);

    background(225,225,225);
    ground.display();
    slingShot.display();
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);

}
