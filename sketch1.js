var catImg , cat ;
var gardenImg , garden ;
var mouseImg , mouse ;
var catImg2 ,catImg3 ;
var music ;

function preload(){
    catImg = loadAnimation("images/cat1.png");
    gardenImg = loadAnimation("images/garden.png")
    mouseImg = loadAnimation("images/mouse2.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouse2 = loadAnimation("images/mouse1.png");
   
}

function setup(){
    createCanvas(800,600);
    background("black");
    garden = createSprite(400,300,100,100);
    garden.scale = 1 ;
    garden.addAnimation("ground",gardenImg);
    cat = createSprite(670,500,40,40);
    cat.addAnimation("sit",catImg);
    cat.scale = 0.2 ;
    mouse = createSprite(100,480,40,40);
    mouse.addAnimation("one",mouseImg);
    mouse.scale = 0.2 ;
    mouse.setCollider("rectangle",50,100,600,600);
    cat.setCollider("rectangle",50,00,600,600);

}
 function draw(){
     keyPressed();
     isTouching();
     drawSprites();
   //  mouse.debug = true ;
    // cat.debug = true ;
 }
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5 ;
        cat.addAnimation("walk", catImg2);
        cat.changeAnimation("walk");
       
    }
}

 function isTouching(){
     if(cat.x < 250){
         cat.velocityX = 0 ;
         cat.addAnimation("end",catImg3);
         cat.changeAnimation("end");
         mouse.addAnimation("two", mouse2);
         mouse.changeAnimation("two");
        
     }
 }