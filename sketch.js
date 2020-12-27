var fixedrect,movingrect;
var ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);
//creating all the sprite and giving them color.
 fixedrect = createSprite(200,200,50,80);
 movingrect = createSprite(400,200,80,30);
 ob1 = createSprite (100,100,50,50);
 ob2 = createSprite (200,100,50,50);
 ob3 = createSprite (300,100,50,50);
 ob4 = createSprite (400,100,50,50);

 movingrect.shapeColor = "orange";
 fixedrect.shapeColor = "orange";
 ob1.shapeColor = "orange";
 ob2.shapeColor = "orange";
 ob3.shapeColor = "orange";
 ob4.shapeColor = "orange";

}

function draw() {
  background(0);  
    
  //to make movingrect move with the mouse.
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  
  //making the rects lightblue if its true.
  if(istouching(movingrect,ob2)){
   
    movingrect.shapeColor = "lightblue";
    ob2.shapeColor = "lightblue";
   


  } else {

    movingrect.shapeColor = "orange";
    ob2.shapeColor = "orange";
   


  };
  

  drawSprites();


  
}



