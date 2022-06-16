var sam 
function setup() {
  createCanvas(400,400);
  sam = createSprite(100,100);
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)) {
    sam.x = sam.x+5
    }
    if (keyIsDown(UP_ARROW)) {
      sam.y = sam.y-5
      }
      if (keyIsDown(DOWN_ARROW)) {
        sam.y = sam.y+5
        }
        if (keyIsDown(LEFT_ARROW)) {
          sam.x = sam.x-5
          }
  drawSprites();

}




