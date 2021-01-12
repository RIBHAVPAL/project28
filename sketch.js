
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, boyImg,boy;
var mango1, mango2, mango3, mango4, mango5, mango6;
var cn;

function preload()
{
	boyImg = loadImage("PM/boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,650,1600,20);
	tree = new TREE(1150,350,500,600)
    boy = createSprite(200,500,20,20)
	boy.addImage(boyImg)
	boy.scale = 0.2;
	stone = new STONE(90,390,50,50)
	mango1 = new MANGO(1100,200,40,40)
	mango2 = new MANGO(1100,280,40,40)
	mango3 = new MANGO(1200,250,40,40)
	mango4 = new MANGO(1000,230,40,40)
	mango5 = new MANGO(1200,150,40,40)
	mango6 = new MANGO(1300,190,40,40)
	cn = new CHAINSHOT(stone.body,{x: 100,y: 400})

    detectollision(stoneObj,mango1);
	detectollision(stoneObj,mango2);
	detectollision(stoneObj,mango3);
	detectollision(stoneObj,mango4);
	detectollision(stoneObj,mango5);
	detectollision(stoneObj,mango6);


   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  
  
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  cn.display();

  drawSprites();
 
}

function keyPessed(){
if(keyCode === 32) {
Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
laucherObject.attach(stoneObj.body);

}
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});
	
	}
	
	function mouseReleased() {
	
	cn.fly();
	
	}

	function detectollision(lstone,lmango){
	 mangoBodyPosition = lmango.body.position;
	 stoneBodyPosition = lstone.body.position;

	 var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	 if(distance<=lmango.r+lstone.r){

        Matter.Body.setStatic(lmango.body,false);

	 }


	}



