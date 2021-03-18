const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var polygon,polygonImg;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    background(12);

    ground1 = new Ground(1200,400,1200,400);
    stand= new Ground(600,200,10,50);

    polygon= new Polygon(200,200,10,10);

    block1= new Block(550,200,30,30);

    slingshot = new slingShot(polygon.body,{x:200, y:100});
}

function draw(){
    Engine.update(engine);

    text("Drag the Hexagonal Stone and Release it ,to launch it towards the box", 600, 100);

    ground1.display();
    stand.display();

    block1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
    slingshot.attach(polygon.body);

    }
}


