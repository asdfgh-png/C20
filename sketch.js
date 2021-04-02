var cat , catImg , catImgs , catImg2 ;
var mouse , mouseImg, mouseImg2 ;
var garden , gardenImg ;
function preload() {
    //load the images here
   gardenImg = loadAnimation("garden.png");
   catImg = loadAnimation("cat1.png");
   catImgs = loadAnimation("cat2.png","cat3.png");
   catImg = loadAnimation("cat4.png") ;
   mouseImg = loadAnimation("mouse2.png");
   mouseImg2 = loadAnimation("mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,20,20);
    garden.addAnimation("grd",gardenImg);
    //create tom and jerry sprites here
    cat = createSprite(500,400,20,20);
    cat.addAnimation("sit",catImg);
    mouse = createSprite(200,300,20,20);
    mouse.addAnimation("one",mouseImg);
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
    isTouching();
    keyPressed();
    drawSprites();
}


function keyPressed(){

 // For moving and changing animation write code here

if(keyCode === LEFT_catRROW){
  cat.velocityX = -3 ;
   cat.addAnimation("walk",catImgs);
   cat.changeAnimation("walk");

}
}

  function isTouching(cat,mouse){
    if (cat.x - mouse.x  <=  cat.width/2 + mouse.width/2){
        cat.addAnimation("end",catImg2);
        cat.changeAnimation("end");
      mouse.addAnimation = ("over",mouseImg2);
      
     // return true ;
  }
  else {
    cat.addAnimation("walk",catImgs);
    cat.changeAnimation("walk");
   // return false ;
  }
  }
