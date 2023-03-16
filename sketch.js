const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao, bloco1, bloco2;

var rotator1, rotator2, rotator3;

var angle1 = 60, angle2 = 60, angle3 = 60;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
   var chao_options = {
	isStatic: true
   }

   var particle_options = {
    restitution: 0.4,
    friction: 0.02
   }
 
   chao = Bodies.rectangle(240, 500, 500, 20, chao_options)
   World.add(world,chao)

  bloco1 = Bodies.rectangle (100, 300, 100, 10, chao_options)
  World.add(world,bloco1);

  bloco2 = Bodies.rectangle (300, 300, 100, 10, chao_options)
  World.add (world, bloco2);
 
  particle1 = Bodies.circle (240, 10, 10, particle_options)
  World.add (world, particle1);

  particle2 = Bodies.circle (260, 10, 10, particle_options)
  World.add (world, particle2);

  particle3 = Bodies.circle (280, 10, 10, particle_options)
  World.add (world, particle3);

  particle4 = Bodies.circle (300, 10, 10, particle_options)
  World.add (world, particle4);

  particle5 = Bodies.circle (320, 10, 10, particle_options)
  World.add (world, particle5);

  var rotator_options = {
     isStatic: true
      } 
  
  rotator1 = Bodies.rectangle (250, 200, 150, 20, rotator_options)
 World.add (world, rotator1)

 rotator2 = Bodies.rectangle (250, 200, 150, 20, rotator_options)
 World.add (world, rotator2)

 rotator3 = Bodies.rectangle (250, 200, 150, 20, rotator_options)
 World.add (world, rotator3)

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("#80ff80");

  Engine.update (engine);

  Matter.Body.rotate(rotator1,angle1)
  push();
  translate (rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect (0, 0, 150, 20);
  pop();
  angle1 +=1.2;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate (rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect (0, 0, 150, 20);
  pop();
  angle2 +=1.6;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate (rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect (0, 0, 150, 20);
  pop();
  angle3 +=2;

  fill ("purple");
   rect(chao.position.x, chao.position.y, 500, 20);

   rect(bloco1.position.x,bloco1.position.y, 100,10)

   rect(bloco2.position.x, bloco2.position.y, 100,10)

   ellipse(particle1.position.x, particle1.position.y, 10, 10)

   ellipse(particle2.position.x, particle2.position.y, 10, 10)

   ellipse(particle3.position.x, particle3.position.y, 10, 10)

   ellipse(particle4.position.x, particle4.position.y, 10, 10)

   ellipse(particle5.position.x, particle5.position.y, 10, 10)
}



