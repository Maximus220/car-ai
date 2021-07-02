class Race{
  constructor(pattern){
    this.inner=pattern.inner;
    this.outer=pattern.outer;
    this.gate=pattern.gates;
  }

  draw(){
    stroke('white');
    strokeWeight(5);
    for(let x=0;x<this.inner.length-1;x++){
      line(this.inner[x][0],this.inner[x][1],this.inner[x+1][0],this.inner[x+1][1]);
    }
    for(let x=0;x<this.outer.length-1;x++){
      line(this.outer[x][0],this.outer[x][1],this.outer[x+1][0],this.outer[x+1][1]);
    }
  }

  testCollision(line){ //Line: [vector, vector]
    for(let x=0;x<this.inner.length-1;x++){
      if(lineIntersection(line[0].x, line[0].y, line[1].x, line[1].y, this.inner[x][0],this.inner[x][1],this.inner[x+1][0],this.inner[x+1][1]) != null){
        return true;
      }
    }
    for(let x=0;x<this.outer.length-1;x++){
      if(lineIntersection(line[0].x, line[0].y, line[1].x, line[1].y, this.outer[x][0],this.outer[x][1],this.outer[x+1][0],this.outer[x+1][1]) != null){
        return true;
      }
    }
    return false;
  }

  testCollisionToGate(line, gateIndex){ //Line: [vector, vector]
    if(lineIntersection(line[0].x, line[0].y, line[1].x, line[1].y, this.gate[gateIndex][0][0], this.gate[gateIndex][0][1], this.gate[gateIndex][1][0], this.gate[gateIndex][1][1])){
      return true;
    }
    return false;
  }

  getGateNumber(){
    return this.gate.length;
  }

  findClosestCollide(line){ //Line: [vector, vector]
    let collidePoints = [];
    for(let x=0;x<this.inner.length-1;x++){
      let temp = lineIntersection(line[0].x, line[0].y, line[1].x, line[1].y, this.inner[x][0],this.inner[x][1],this.inner[x+1][0],this.inner[x+1][1]);
      if(temp != null){
        collidePoints.push(temp);
      }
    }
    for(let x=0;x<this.outer.length-1;x++){
      let temp = lineIntersection(line[0].x, line[0].y, line[1].x, line[1].y, this.outer[x][0],this.outer[x][1],this.outer[x+1][0],this.outer[x+1][1])
      if(temp != null){
        collidePoints.push(temp);
      }
    }
    if(collidePoints.length===0){
      return null;
    }else if(collidePoints.length===1){
      return [collidePoints[0], dist(line[0].x,line[0].y,collidePoints[0].x, collidePoints[0].y)];
    }else{
      let distt = [];
      for(let x=0;x<collidePoints.length;x++){
        distt[x] = dist(line[0].x,line[0].y,collidePoints[x].x, collidePoints[x].y);
      }
      return [collidePoints[distt.indexOf(Math.min(...distt))], Math.min(...distt)];
    }
  }
}
