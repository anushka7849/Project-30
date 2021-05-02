const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

 //level one
 block20 = new Block(610,175,30,40);
 block21 = new Block(640,175,30,40);
 block22 = new Block(670,175,30,40);
 block23 = new Block(700,175,30,40);
 block24 = new Block(730,175,30,40);
 block25 = new Block(760,175,30,40);
 block26 = new Block(790,175,30,40);
 //level two
 block27 = new Block(640,135,30,40);
 block28 = new Block(670,135,30,40);
 block29 = new Block(700,135,30,40);
 block30 = new Block(730,135,30,40);
 block31 = new Block(760,135,30,40);
 //level three
 block32 = new Block(670,95,30,40);
 block33 = new Block(700,95,30,40);
 block34 = new Block(730,95,30,40);
 //top
 block35 = new Block(700,55,30,40);
  
polygon=Bodies.circle(50,200,30);
this.r=30;
World.add(world,polygon);
slingShot=new SlingShot(this.polygon,{x:100,y:200});
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightgreen");
  text("Press Space to get one more chance",200,50);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  fill("gold");
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

fill("pink");
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();

fill("red");
  block32.display();
  block33.display();
  block34.display();

fill("orange");
  block35.display();

  slingShot.display();
  imageMode (CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,30,30);

  
}
function mouseDragged () {
  Matter.Body.setPosition (this.polygon, {x: mouseX, y: mouseY});
  }
  function mouseReleased () {
      slingShot.fly ();
  }
  function keyPressed(){
    if(keyCode===32){
      slingShot.attach(this.polygon);
    }
  }