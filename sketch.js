//Create variables here
var dog, happyDog 
var dog1,dog2
var  foodS, foodStock

var database

function preload()
{
  //load images here
   dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
   dog=createSprite(250,250,20,20);
  //dog=addImage("dog",dog1);
  dog=addImage(dog1);
  
}


function draw() {  
    drawSprites();
  //add styles here

}



