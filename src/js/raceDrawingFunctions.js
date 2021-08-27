//Race drawing
var drawingState=false;
var tempRace = [];
var tempFinalRace = null;
var canFinalize=false;

//Race drawing
function drawRace(){
  drawingState=!drawingState;
  actuButton();
  if(drawRace) drawTempRacePattern();
}

function finalizeRace(){
  if(canFinalize){
    tempFinalRace={
      "inner":[],
      "outer":[],
      "gates":[],
      "spawn":[],
      "nnDisplay":[]
    };
    spawnCars = [tempRace[0][0],tempRace[0][1],4.7123/*atan2((tempRace[1][0]-tempRace[0][0]),(tempRace[1][0]-tempRace[1][1]))+PI*/,spawnCars[3],spawnCars[4]];
    console.log(spawnCars);
    tempFinalRace.spawn = spawnCars;
    for(let x=0;x<tempRace.length-1;x++){
      let px= (tempRace[x][1] - tempRace[x+1][1])/1.2;
      let py= (tempRace[x+1][0] - tempRace[x][0])/1.2;
      const len = 100 / Math.hypot(px, py);
      px *= len;
      py *= len;
      line(tempRace[x][0]+px,tempRace[x][1]+py,tempRace[x][0]-px,tempRace[x][1]-py);
      tempFinalRace.inner.push([tempRace[x][0]-px,tempRace[x][1]-py]);
      tempFinalRace.outer.push([tempRace[x][0]+px,tempRace[x][1]+py]);
      tempFinalRace.gates.push([[tempRace[x][0]+px,tempRace[x][1]+py],[tempRace[x][0]-px,tempRace[x][1]-py]]);
    }
    tempFinalRace.inner.push(tempFinalRace.inner[0]);
    tempFinalRace.outer.push(tempFinalRace.outer[0]);
    race=new Race(tempFinalRace);
    drawingState=!drawingState;
    actuButton();
    restart();
  }
}

function actuButton(){
  document.getElementById('drawRaceButton').innerHTML= drawingState ? "Cancel drawing" : "Draw a race";
}

function drawTempRacePattern(){
  background('#95bff5');

  if(tempRace.length>0){
    for(let x=0;x<tempRace.length-1;x++){
      stroke('white');
      strokeWeight(5);
      line(tempRace[x][0],tempRace[x][1],tempRace[x+1][0],tempRace[x+1][1]);
    }
  }
  for(let x=0;x<tempRace.length;x++){
    if(x==0){
      stroke('red');
      strokeWeight(10);
    }else{
      stroke('yellow');
      strokeWeight(5);
    }
    ellipse(tempRace[x][0],tempRace[x][1],5,5);
  }
}

function mousePressed(){
  if(drawingState){
    if(mouseButton === LEFT){
      if(mouseX>0&&mouseX<width&&mouseY>0&&mouseY<height){
        tempRace.push([mouseX, mouseY]);
        if(tempRace.length>4 && dist(tempRace[0][0], tempRace[0][1], tempRace[tempRace.length-1][0], tempRace[tempRace.length-1][1]) < 50){ //Arbitrary value
          canFinalize=true;
          document.getElementById('finalizeRaceButton').hidden=false;
        }else{
          canFinalize=false;
          document.getElementById('finalizeRaceButton').hidden=true;
        }
      }
    }
    if(mouseButton === RIGHT){
      tempRace.pop();
    }

    drawTempRacePattern();
  }
}
