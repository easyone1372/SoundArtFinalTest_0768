let bg = 0;
let sat = 50;
let touchended =false;
let touchstarted = false;

var osc;
var playing = false;
var notes = [261,293,329,349,391,440,493,523];

let fr = 440;
let qr;

function setup() {
  Width = displayWidth;
  Height = displayHeight;
  //디스플레이 크기에 캔버스 크기 맞춤
  createCanvas(Width, Height); 
  textAlign(CENTER);
  pixelDensity(displayDensity());
  textSize(32);
  
  //오실레이터 종류
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.start();
  // wave.freq(440);
  osc.amp(0);
  qr = osc.freq(fr);
}


function playNote(note, duration){
  osc.freq(note);
  osc.fade(0.5,0.2);
}

function draw() {
  let r=rotationX;
  let b=rotationZ;
  
  background(r,100,b);
  for(let i = 0; i<touches.length; i++){
    ellipse(touches[i].x, touches[i].y,100,100);
  }
  
  
  if(touches.length == 0 && touchstarted){
    ellipse(mouseX, mouseY, 100,100);
    osc.amp(0,1);
    var key = floor(map(mouseX, 0,width,0,notes.length));
    playNote(notes[key]);
  }
  
   
  if(touchended){
    text("touch is NO", Width/2, Height/2);
  }
  
  if(touchstarted){
    text("touch is YES", Width/2, Height/2);
  }
  
}

function touchStarted(){
  
  touchstarted = true;
  touchended = false;
  return false;
  
}
function touchMoved(){
  handleMouseAndTouch();
  return false;
}

function mouseMoved(){
  handleMouseAndTouch();
}


function handleMouseAndTouch(){
  // bg = map(mouseX,0,width,0,360);
  // sat = map(mouseX, 0, height, 0, 100);
  
}
function touchEnded() {
  if(touches.length == 0){
    touchended = true;
    touchstarted = false;
    // osc.fade(0,0.5);  
  }
  
}