var database = firebaseDatabase;
var dog , dogSprite;
var happyDog;
var food;
var foodStock;

function preload(){
	dog  = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png"); 
}

function setup() {
  createCanvas(500,500);
  
  dogSprite = createSprite(250,250,20,20);
  //dogSprite = addImage(dog);

  //foodStock = database.ref('Food');
  //foodStock.on("20",readFood);
}


function draw() {  
  background(46,139,87);
  
  if (keyWentDown) {
    writeStock(food);
    dog.addImage(happyDog);
  }
  
  fill("Red");
  text("Press ^ arrow to feed the dog",200,40);

  drawSprites();
}

//Reading the database
function readStock(data) {
  food-data.val()
}

//Writing in the database
function writeStock(x) {
  if(x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }

  database.ref('Food').update({food:x})
}



