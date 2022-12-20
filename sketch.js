var wave;
var button;
var playing = false;
var notes = [261,293,329,249,391,440,493,523];

function setup() {
  Width = displayWidth;
  Height = displayHeight;
  createCanvas(Width, Height); 
  //디스플레이 크기에 캔버스 크기 맞춤
  
  //오실레이터 종류
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.start();
  // wave.freq(440);
  osc.amp(0);
  
 
  // button = createButton('Play/Pause');
  // button.mousePressed(toggle);
}


function playNote(note, duration){
  osc.freq(note);
  osc.fade(0.5,0.2);
  if(duration){
    setTimeout(function(){
      osc.fade(0,0.2);
    },duration-50);
  }
}

function draw() {
  var h = Height / notes.length;
  for(var i =0;i<notes.length;i++){
    var y = i * h;
    if(mouseY > y && mouseY < y+h && mouseX <width){
      if(touches){
        fill(100,255,200);
      }
      else{fill(127);}
    }
    else{fill(200);}
    rect(0,y,Width-1,h-1);
  }
  
}

function touchStarted(){
  
  background(255,255,255);
  text(touches.length,200,200);
  // var key = floor(map(mouseY,0,Height,0,notes.length));
  // playNote(notes[key]);
  
  text(touches[0].x, 200,220);
  text(touches[0].y, 200,240);
  text(touches[1].x, 200,260);
  text(touches[1].y, 200,280);
  text(touches[2].x, 200,300);
  text(touches[2].y, 200,320);
  
  
}
function mouseReleased() {
  osc.fade(0,0.5);
}