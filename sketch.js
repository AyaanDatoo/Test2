var box
function setup() {
  createCanvas(400,400);
  box = createSprite(40,40,20,20)
}




function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW)) {
  box.position.x += 3  
  }
  if (keyDown(LEFT_ARROW)) {
    box.position.x -= 3  
    }
    if (keyDown(UP_ARROW)) {
      box.position.y -= 3  
      }
      if (keyDown(DOWN_ARROW)) {
        box.position.y += 3  
        }
  drawSprites()

}




