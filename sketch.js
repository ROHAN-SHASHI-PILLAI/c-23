const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase,computerPlayer,playerBase,player;

function preload(){
computerBaseImage=loadImage("./assets/base2.png");
computerPlayerImage=loadImage("./assets/player.png");
playerBaseImage=loadImage("./assets/base1.png");
playerImage=loadImage("./assets/player.png");


}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase = new ComputerBase(900,random(450,height-300),180,50);
   computerPlayer= new ComputerPlayer(885,computerBase.body.position.y,-153,50,180);
   playerBase= new PlayerBase(300,random(450,height-300),180,50);
   player= new Player(285,playerBase.body.position.y,-153,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
    playerBase.display()
   //display Player and computerplayer
   computerPlayer.display();
   player.display();
}
