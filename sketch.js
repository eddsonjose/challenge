let button;
let bg;

function setup() {
  noCanvas();
  button = createButton('Change Background');
  button.position(width/2, height/2);
  button.mousePressed(buttonPressed);
  bg = createElement('body');
}

function draw() {


function buttonPressed() {
  let body;
  body = select('body');
  body.style('background-image', "url('images/microsoft_surface_wallpaper_2.jpg')");
}
