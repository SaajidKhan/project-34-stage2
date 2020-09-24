//Create variables here
var dog,happydog;
var database;
var foodS
var dogImg,happydogImg;
var foodstock;

function preload()
{   dogImg=loadImage('images/doglmg.png');
    happydogImg=loadImage('images/doglmg1.png');
  //load images here
  
}

function setup() {
  database=firebase.database();
  console.log(database);

  createCanvas(500, 500);
  
  dog=createSprite(250,500,10,10);
  dog.addImage(dogImg);

 
  dog.scale=0.15;

  foodstock=database,ref('foodS');
  foodstock.on("value",readStock);
  textSize=20;
  
}


function draw() {  
    background(46,139,87);
      if(keyWentDown(UP_ARROW)){
        writeStock("foodS");
        happydog.addImage(happydogImg);

      }
 drawSprites();

  //add styles here
      foodstock.textSize(40);
      foodstock.fill("green");
      foodstock.stroke(5);
}
  function readStock(data){
      foodS=data.val();
}
  function writeStock(x){

    data.ref('/').update({
      Food:x
    })
  }

