var balloon;
var balloon1, balloon2, balloon3, balloon4;
var backgroundImg;
var database, position;



function preload(){

  
  balloon1.addImage("Hot Air Balloon-02.png")
  balloon2.addImage("Hot Air Balloon-03.png")
  balloon3.addImage("Hot Air Balloon-04.png")

  backgroundImg.addImage("Hot Air Balloon-01.png")


}




function setup() {
  createCanvas(500,500);
  database = firebase.database();

  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation(balloon1, balloon2, balloon3)

  var balloonPosition=database.ref("balloon/height");
balloonPosition.on("value, readPosition, showError")
}

function draw() {
  background(255,255,255);  


  textSize(24)
  text("Use the arrows to move the balloon")

    if(keyDown(LEFT_ARROW)){
      balloon.x = balloon.x -10;
    }

    else if(keyDown(RIGHT_ARROW)){
      balloon.x = balloon.x +10;
    }
    
    else if(keyDown(UP_ARROW)){
      balloon.y = balloon.y -10;
    }

    else if(keyDown(DOWN_ARROW)){
      balloon.y = balloon.y +10;
    }

    if(keyDown(UP_ARROW)){
      updateHeight(0,-10);
      balloon.addAnimation("balloon", balloon2);
      balloon.scale= balloon.scale -0.01;
    }

  drawSprites();
}

function updateHeight(x,y){
  database.ref("balloon/height").set({
    "x" : height.x + x,
    "y" : height.y + y
   })
}

function readHeight(data){
height = data.val();
balloon.x = height.x;
balloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the database")
}