const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var log1,log2,log3,log4,log5,log6,log7;
var engine, world;
var ground;

var plinkos=[]
var particles = []
var score = 0;
function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 800, 1200, 20);
  log1 = new Log(200,740)
  log2 = new Log(300,740)
  log3 = new Log(400,740)
  log4 = new Log(500,740)
  log5 = new Log(600,740)
  log6 = new Log(100,740)
  log7 = new Log(700,740)
  log8 = new Log(5,740)
  log9 = new Log(795,740)
  for(var i=30;i<=800;i=i+50){
    plinkos.push(new plinko(i,75))
  }
  for(var i=75;i<=800;i=i+50){
    plinkos.push(new plinko(i,175))
  }
  for(var i=30;i<=800;i=i+50){
    plinkos.push(new plinko(i,275))
  }
  for(var i=75;i<=800;i=i+50){
    plinkos.push(new plinko(i,375))
  }
}

function draw() {
  background(200,200,255);  
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
  log6.display();
  log7.display();
  log8.display();
  log9.display();
  for(var i =0; i<plinkos.length;i++){
    plinkos[i].display()
  }

  if(frameCount%60===0){ 
    console.log("pacrticle")
    particles.push(new particle(random(width/2-30, width/2+30)));
    score++; }

  for(var x =0; x<particles.length;x++){
    particles[x].display()
  }
  ground.display();
  drawSprites();
}