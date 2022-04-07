var track,trackimage
var boy,boyimage
var left,right
function preload(){
  //pre-load images
  trackimage = loadImage("path.png")
  boyimage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200)
  track.addImage("track",trackimage)
  left = createSprite(60,200,20,400)
  right = createSprite(340,200,20,400)
  boy = createSprite(200,320)
  boy.addAnimation("boy",boyimage)
  boy.scale = 0.1
  left.visible = false
  right.visible = false
}

function draw() {

  background(0);
  drawSprites();
  track.velocityY = 2
  if(track.y>400) {
   track.y = height/2

  }
  boy.x = mouseX
  boy.collide(right)
  boy.collide(left)
  if(boy.x>=300) {
    boy.x=300

  }
  if(boy.x<=110) {
    boy.x=110

  }
}
