const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var ground;
var divisions = [];
var divisionHeight = 300;
var particles = [];
var plinkos = [];

function preload(){

}

function setup() {
  var canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(599,590,1200,30);

  for(var j = 40; j <= width-10; j = j+60){
    plinkos.push(new Plinkos(j,25));
}

  for(var j = 15; j <= width-10; j = j+60){
    plinkos.push(new Plinkos(j,100));
}

  for(var j = 40; j <= width-10; j = j+60){
    plinkos.push(new Plinkos(j,175));
}

  for(var j = 15; j <= width-10; j = j+60){
    plinkos.push(new Plinkos(j,250));
}

 for(var k = 0; k <= width; k = k+80){
  divisions.push(new Divisions(k, height-divisionHeight/2+15, 10, divisionHeight));
}

  Engine.run(engine);
}

function draw() {
  if(frameCount%60 === 0){
    particles.push(new Particles(random(width/2-30, width/2+30),8,8));
  }

  background("black");  
  Engine.update(engine);

  for(var i = 0; i<particles.length; i++){
    particles[i].display();
}

for(var k = 0; k<divisions.length; k++){
  divisions[k].display();
}

  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
}

  ground.display();

  console.log(plinkos.length);
  drawSprites();
}