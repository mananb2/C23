
var qwer, asdf,wer,zxc,qwe,bnm ,roof , gvb;


function setup() {
  createCanvas(800,400);
 qwer= createSprite(500, 300, 50, 300);
 asdf=createSprite(300,300,50,300);
wer = createSprite(200,300,30,355);
 zxc = createSprite(700,220,50,370);
 qwe  = createSprite(100,220,50,370);
 bnm= createSprite(400,55,600,40);
 
 gvb=createSprite(600,300,30,355);
}

function draw() {
  background(0); 
  
    //triangle(40, 86, 80, 143, 0, 143);
    //triangle(173, 100, 173, 60, 220, 80);
    triangle(400,100,500,300,300,300); 
  drawSprites();
}