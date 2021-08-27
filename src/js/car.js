class Car{
  constructor(spawnInfo,maxSpeed,acceleration){ //spawnInfo [X, Y, Rotation, Width, Height]
    this.coord=createVector(spawnInfo[0],spawnInfo[1]); //Check if it can be only one value
    this.size=[spawnInfo[3],spawnInfo[4]];

    this.rotation=spawnInfo[2];
    this.steering=0; //Rotation of the wheels
    this.maxSteering=PI/8;
    this.rotationSpeed=0.16;

    this.maxSpeed = maxSpeed;
    this.acceleration = acceleration;
    this.vel=0;

    //Collisions
    this.collisions = [
      createVector(this.coord.x-this.size[0]/2,this.coord.y-this.size[1]/2), //top left
      createVector(this.coord.x+this.size[0]/2,this.coord.y-this.size[1]/2), //top right
      createVector(this.coord.x+this.size[0]/2,this.coord.y+this.size[1]/2), //bottom right
      createVector(this.coord.x-this.size[0]/2,this.coord.y+this.size[1]/2), //bottom left
    ]

    this.sights = [
      PI,
      2*PI,
      5*PI/4, //Those two inputs can be removed
      7*PI/4, //To show results that seem better
      4*PI/3,
      5*PI/3,
      PI*1.5
    ];
    this.sighLength=1500;

    //Gates
    this.gate=0;
    this.noGate=0;

    //Neat
    this.fitness=0;
    this.alive=true;
    this.lap=0;
  }

  move(direction){
    switch(direction){
      case 'right':
        if(this.steering+this.rotationSpeed<=this.maxSteering){
          this.steering+=this.rotationSpeed;
        }else{
          this.steering=this.maxSteering;
        }
        break;
      case 'left':
        if(this.steering-this.rotationSpeed>=-this.maxSteering){
          this.steering-=this.rotationSpeed;
        }else{
          this.steering=-this.maxSteering;
        }
        break;
      case 'up':
        if(this.vel-this.acceleration>=-this.maxSpeed){
          this.vel-=this.acceleration;
        }else{
          this.vel=-this.maxSpeed;
        }
        //this.fitness+=1;
        break;
      case 'down':
        if(this.vel+this.acceleration<=this.maxSpeed){
          this.vel+=this.acceleration;
        }else{
          this.vel=this.maxSpeed;
        }
        break;
    }
    //this.fitness+= (int(dist(this.coord.x,mouseX,this.coord.y,mouseY)))**2;
  }
  update(){
    this.vel-=this.vel*frixion;
    this.rotation+=this.steering*frixion*this.vel;

    this.coord.add(sin(this.rotation)*this.vel,cos(this.rotation)*this.vel);

    if(this.steering>0) this.steering -= this.rotationSpeed/4;
    if(this.steering<0) this.steering += this.rotationSpeed/4;
    if(abs(this.steering)<this.rotationSpeed) this.steering = 0;

    this.collisions = [
      createVector(this.coord.x-this.size[0]/2,this.coord.y-this.size[1]/2), //top left
      createVector(this.coord.x+this.size[0]/2,this.coord.y-this.size[1]/2), //top right
      createVector(this.coord.x+this.size[0]/2,this.coord.y+this.size[1]/2), //bottom right
      createVector(this.coord.x-this.size[0]/2,this.coord.y+this.size[1]/2), //bottom left
    ]
    let tempGate;
    if(this.gate-4>0){
      tempGate=this.gate-4
    }else{
      tempGate=race.getGateNumber()-this.gate-4;
    }
    //console.log(tempGate);
    let prevGate=this.gate;
    for(let x=0;x<this.collisions.length;x++){
      if(x==this.collisions.length-1){
        if(race.testCollision([this.collisions[x], this.collisions[0]])){
          this.die();
          break;
        }
        if(race.testCollisionToGate([this.collisions[x], this.collisions[0]], this.gate)){
          this.fitness+=1000*(this.gate+1);
          this.gate++;
          if(this.gate>=race.getGateNumber()){
            this.gate = 0;
            this.lap++;
          }
        }
        if(race.testCollisionToGate([this.collisions[x], this.collisions[0]], tempGate)){
          this.die();
          break;
        }
      }else{
        if(race.testCollision([this.collisions[x], this.collisions[x+1]])){
          this.die();
          break;
        }
        if(race.testCollisionToGate([this.collisions[x], this.collisions[x+1]], this.gate)){
          this.fitness+=1000*(this.gate+1);
          this.gate++;
          if(this.gate>=race.getGateNumber()){
            this.gate = 0;
            this.lap++;
          }
        }
        if(race.testCollisionToGate([this.collisions[x], this.collisions[x+1]], tempGate)){
          this.die();
          break;
        }
      }
      if(this.gate===prevGate){
        this.noGate++;
      }else{
        this.noGate=0;
      }
      if(this.noGate>=1000){
        this.die();
      }
    }

    //Neat
    //this.fitness+= (int(dist(this.coord.x,target.getX(),this.coord.y,target.getY())))**2; //HERE
  }

  getSights(){
    let sights = [];
    for(let i=0;i<this.sights.length;i++){
      let a = this.sights[i];
      let coord2 = createVector(this.coord.x+cos(a-this.rotation)*this.sighLength,this.coord.y+sin(a-this.rotation)*this.sighLength);
      let closest = race.findClosestCollide([this.coord, coord2]);

      if(closest != null) sights.push([closest, coord2]);
      else sights.push(this.sighLength, null);
    }
    return sights;
  }

  getInputs(){
    //let inputs = [];
    let inputs = this.getSights()
    for(let x=0;x<inputs.length;x++){
      if(inputs[x][0][1]) inputs[x] = inputs[x][0][1];
      else inputs[x] = inputs[x][0];
    }
    return inputs;
  }

  draw(highlight=null){
    if(highlight){
      fill(highlight);
    }else if(this.alive){
      fill('white');
    }else{
      fill('grey');
    }
    stroke('purple');
    strokeWeight(5);

    push();
    translate(this.coord.x,this.coord.y);
    rotate(-this.rotation);
    if(useSprite) rotate(PI);
    translate(-this.coord.x,-this.coord.y);
    if(useSprite){
      image(carSprite, this.coord.x,this.coord.y,this.size[0]*spriteSizeCoef,this.size[1]*spriteSizeCoef);
    }else{
      rect(this.coord.x,this.coord.y,this.size[0],this.size[1]);
      strokeWeight(0);
      fill('red');
      rect(this.coord.x,this.coord.y-this.size[0]/3*2,this.size[0]/4,this.size[1]/4);
    }
    //Hitbox
    if(displayHitbox){
      stroke('green');
      strokeWeight(3);
      for(let x=0;x<this.collisions.length;x++){
        if(x==this.collisions.length-1){
          line(this.collisions[x].x, this.collisions[x].y, this.collisions[0].x, this.collisions[0].y);
        }else{
          line(this.collisions[x].x, this.collisions[x].y, this.collisions[x+1].x, this.collisions[x+1].y);
        }
      }
    }
    pop();

    //Sights
    if(globalSighDisplay){
      let sights = this.getSights();
      for(let x=0;x<sights.length;x++){
        if(sights[x][1]){
          push();
          stroke('purple');
          line(this.coord.x,this.coord.y,sights[x][1].x,sights[x][1].y);
          fill('red');
          noStroke();
          ellipse(sights[x][0][0].x,sights[x][0][0].y,25, 25);
          pop();
        }
      }
    }
  }

  die(){
    this.fitness-=500;
    this.alive=false;
  }


}
