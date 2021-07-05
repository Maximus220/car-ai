var frixion = 0.05;
var car;
var nnDisplay;
var racePattern={
  "inner":[
    [652.3339794897448,53.0078125],[1115.5655952976488,61.0078125],[1414.7151700850425,77.0078125],[1601.808716858429,116.0078125],[1684.8502376188094,175.0078125],[1682.8492371185591,239.0078125],[1645.8307278639318,317.0078125],[1582.799212106053,391.0078125],[1519.767696348174,430.0078125],[1427.7216733366683,491.0078125],[1391.703664332166,559.0078125],[1400.7081665832916,616.0078125],[1462.7391820910454,640.0078125],[1552.784204602301,638.0078125],[1670.8432341170585,632.0078125],[1814.9152701350674,649.0078125],[1867.9417833916957,698.0078125],[1882.9492871435716,778.0078125],[1876.9462856428213,892.0078125],[1856.93628064032,985.0078125],[1807.911768384192,1084.0078125],[1730.873249124562,1174.0078125],[1639.8277263631815,1249.0078125],[1483.7496873436717,1274.0078125],[1298.657141070535,1283.0078125],[746.3810030015007,1277.0078125],[542.278951975988,1241.0078125],[412.2139194597298,1145.0078125],[371.1934092046023,1040.0078125],[356.18590545272633,887.0078125],[374.19490995497745,770.0078125],[430.22292396198094,692.0078125],[526.270947973987,647.0078125],[653.33447973987,611.0078125],[775.3955102551275,560.0078125],[812.4140195097548,479.0078125],[773.3945097548774,410.0078125],[646.3309779889945,367.0078125],[502.25894197098546,353.0078125],[349.1824037018509,340.0078125],[212.11386943471734,296.0078125],[155.08535517758878,218.0078125],[166.09085792896448,155.0078125],[244.12987743871935,118.0078125],[355.18540520260126,88.0078125],[458.2369309654827,70.0078125],[557.2864557278639,58.0078125],[652.3339794897448,53.0078125]
  ],
  "outer":[
    [731.3734992496247,196.0078125],[973.4945597798899,185.0078125],[1148.5821035517758,185.0078125],[1273.6446348174086,194.0078125],[1313.6646448224112,233.0078125],[1285.6506378189094,269.0078125],[1258.6371310655327,317.0078125],[1211.6136193096547,385.0078125],[1177.5966108054026,463.0078125],[1163.5896073036517,550.0078125],[1162.5891070535267,626.0078125],[1201.6086168084041,691.0078125],[1273.6446348174086,737.0078125],[1349.6826538269133,784.0078125],[1462.7391820910454,812.0078125],[1555.7857053526764,824.0078125],[1606.8112181090544,853.0078125],[1619.8177213606803,917.0078125],[1613.81471985993,977.0078125],[1583.799712356178,1039.0078125],[1510.7631940970484,1082.0078125],[1426.721173086543,1085.0078125],[1282.6491370685342,1087.0078125],[1132.574099549775,1076.0078125],[1006.511068034017,1069.0078125],[830.423024012006,1078.0078125],[698.3569909954977,1076.0078125],[589.3024637318659,1051.0078125],[553.2844547273636,1010.0078125],[553.2844547273636,950.0078125],[581.2984617308654,899.0078125],[653.33447973987,827.0078125],[874.4450350175088,724.0078125],[973.4945597798899,686.0078125],[1007.5115682841421,578.0078125],[1022.519072036018,433.0078125],[1024.5200725362681,367.0078125],[995.5055652826412,310.0078125],[955.4855552776388,266.0078125],[859.4375312656327,242.0078125],[763.3895072536268,236.0078125],[706.3609929964982,230.0078125],[613.3144697348674,224.0078125],[508.26194347173583,215.0078125],[731.3734992496247,196.0078125]
  ],
  "gates":[
    [[1180.598111555778,35.0078125],[1147.5816033016508,208.0078125]],[[1414.7151700850425,53.0078125],[1249.632628814407,224.0078125]],[[1645.8307278639318,121.0078125],[1255.6356303151574,281.0078125]],[[1693.854739869935,301.0078125],[1222.6191220610303,313.0078125]],[[1597.8067158579288,406.0078125],[1189.6026138069035,382.0078125]],[[1481.7486868434216,487.0078125],[1153.5846048024011,470.0078125]],[[1418.7171710855428,559.0078125],[1157.5866058029014,635.0078125]],[[1460.7381815907954,608.0078125],[1262.639132066033,761.0078125]],[[1529.7726988494246,617.0078125],[1469.7426838419208,826.0078125]],[[1631.823724362181,610.0078125],[1574.7952101050525,850.0078125]],[[1834.9252751375686,626.0078125],[1603.8097173586793,899.0078125]],[[1904.960292646323,710.0078125],[1603.8097173586793,928.0078125]],[[1904.960292646323,890.0078125],[1591.8037143571785,962.0078125]],[[1886.951288144072,1019.0078125],[1591.8037143571785,985.0078125]],[[1843.9297773886942,1108.0078125],[1577.7967108554276,1018.0078125]],[[1804.9102676338168,1171.0078125],[1544.7802026013005,1039.0078125]],[[1726.871248124062,1238.0078125],[1514.7651950975487,1048.0078125]],[[1636.8262256128064,1276.0078125],[1480.7481865932966,1052.0078125]],[[1544.7802026013005,1282.0078125],[1403.7096673336669,1049.0078125]],[[1385.7006628314157,1310.0078125],[1316.6661455727863,1049.0078125]],[[1223.6196223111556,1312.0078125],[1166.591108054027,1046.0078125]],[[1109.5625937968985,1301.0078125],[1006.511068034017,1037.0078125]],[[866.4410330165082,1294.0078125],[845.4305277638819,1049.0078125]],[[694.3549899949975,1280.0078125],[725.3704977488744,1052.0078125]],[[559.287456228114,1259.0078125],[640.3279764882441,1019.0078125]],[[469.2424337168584,1217.0078125],[598.3069659829914,1024.0078125]],[[392.2039144572286,1156.0078125],[578.2969609804902,998.0078125]],[[359.18740620310155,1069.0078125],[580.2979614807404,967.0078125]],[[323.16939719859926,965.0078125],[596.3059654827414,926.0078125]],[[343.1794022011005,856.0078125],[646.3309779889945,875.0078125]],[[359.18740620310155,728.0078125],[679.3474862431216,841.0078125]],[[467.2414332166083,628.0078125],[734.375,814.0078125]],[[590.302963981991,572.0078125],[766.391008004002,794.0078125]],[[700.3579914957478,550.0078125],[818.4170210105052,764.0078125]],[[748.3820035017509,530.0078125],[916.4660455227613,731.0078125]],[[773.3945097548774,506.0078125],[1009.5125687843921,664.0078125]],[[772.3940095047524,475.0078125],[1028.5220735367684,535.0078125]],[[761.3885067533766,452.0078125],[1036.5260755377687,398.0078125]],[[746.3810030015007,421.0078125],[1009.5125687843921,278.0078125]],[[709.3624937468734,409.0078125],[832.4240245122561,215.0078125]],[[650.3329789894947,391.0078125],[743.3795022511255,209.0078125]],[[596.3059654827414,380.0078125],[680.3479864932466,218.0078125]],[[529.2724487243621,374.0078125],[590.302963981991,211.0078125]],[[472.2439344672336,373.0078125],[526.270947973987,215.0078125]],[[361.18840670335163,359.0078125],[521.2684467233616,215.0078125]],[[182.09886193096548,277.0078125],[517.2664457228614,214.0078125]],[[128.0718484242121,197.0078125],[514.2649449724862,212.0078125]],[[187.10136318159078,106.0078125],[523.2694472236118,217.0078125]],[[319.167396198099,61.0078125],[512.2639444722361,212.0078125]],[[425.22042271135564,49.0078125],[514.2649449724862,217.0078125]],[[470.24293396698346,37.0078125],[524.2699474737368,212.0078125]],[[523.2694472236118,37.0078125],[511.26344422211105,214.0078125]],[[569.2924587293646,32.0078125],[511.26344422211105,212.0078125]],[[623.319472236118,40.0078125],[589.3024637318659,205.0078125]],[[686.3509879939969,35.0078125],[688.351988494247,202.0078125]],[[754.3850050025012,37.0078125],[758.3870060030015,208.0078125]],[[818.4170210105052,37.0078125],[817.4165207603802,194.0078125]],[[881.4485367683841,32.0078125],[877.4465357678839,197.0078125]],[[928.472048524262,32.0078125],[947.4815532766382,191.0078125]],[[1013.5145697848924,43.0078125],[1009.5125687843921,200.0078125]]
  ],
  "spawn":[
    1000, //x
    100, //Y
    4.7123, //Rotation (PI*1.5)
    25, //Width
    50 //Height
  ],
  "nnDisplay":[
    300, //Width
    300, //Height
    15, //Node Size
    100, //X
    300 //Y
  ]
};
var race;
var spawnCars;
var alive=0;
var numGen=100;

//Debug
var globalSighDisplay = false;
var playerCar = false;
var displayBest = false;
var highlightBest = false;
var showTrack = true;
var showGates = false;
var gameSpeed = 1;

//Neat parameters
var cars = [];
var mutationRate = 0.15;
let config = {
  layer: [
    {
      node: 7
    },
    {
      node: 3,
      actFunction: 'SIGMOID'
    }
  ]
}
let crossoverConfig = {
  type: "biggerRandomPart",
  randomSupplement: 0.25
}
let neat;

//Race drawing
var drawingState=false;
var tempRace = [];

//let tempGate = [];
//let tempGate2=null;

//Chart
var ctx;
var scoreChart;
var chartData = {datasets:[{
	data:[],
	label:['Fitness'],
	fill: false,
	borderColor: ['#3669cf']
}], labels:[]};

function addScore(data) { //Chart update function
    scoreChart.data.labels.push(neat.generation);
		scoreChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    scoreChart.update();
}

function setup(){
  //Canvas
  window.canvas = createCanvas(2000, 1350);
  window.canvas.parent('mainCanvas');
  rectMode(CENTER);

  //Game parameters
  race = new Race(racePattern);
  spawnCars = [1000,100,PI*1.5,10,0.5];
  //Player
  loadPlayerCar();
  //Neat
  restart();

  //GUI
  creatureSlider = createSlider(1, 1000, neat.popSize);
  creatureSlider.parent('creatureSlider');
  mutationRateSlider = createSlider(0.01, 1, neat.mutationRate, 0.01);
  mutationRateSlider.parent('mutationRateSlider');
  frixionSlider = createSlider(0.00, 1, frixion, 0.01);
  frixionSlider.parent('frixionSlider');
  maxSpeedSlider = createSlider(1, 100, spawnCars[3], 1);
  maxSpeedSlider.parent('maxSpeedSlider');
  accelerationSlider = createSlider(0.1, 50, spawnCars[4], 0.1);
  accelerationSlider.parent('accelerationSlider');
  speedSlider = createSlider(0, 20, gameSpeed, 1);
  speedSlider.parent('speedSlider');

  //Chart
  ctx = document.getElementById('scoreChart').getContext('2d');
  scoreChart=new Chart(ctx, {type:'line', data: chartData, options: {}});
}

function draw(){
  //Options
  document.getElementById('mutationDisplay').innerHTML= ("Mutation rate : " + neat.mutationRate);
	document.getElementById('populationDisplay').innerHTML= ("Population size : "+neat.popSize);
  document.getElementById('bestFitDisplay').innerHTML= ("Best fitness : "+neat.getBestCreature()[0].fit+" <=> "+cars[neat.getBestCreature()[1]].lap+" lap(s)");
  document.getElementById('generationDisplay').innerHTML= ("Generation : "+(neat.generation+1));
  neat.setCreatureNum(creatureSlider.value());
  neat.setMutationRate(mutationRateSlider.value());
  globalSighDisplay = document.getElementById('boxSights').checked;
  displayBest = document.getElementById('boxBestPlayerOnly').checked;
  highlightBest = document.getElementById('boxHighlight').checked;
  showTrack = document.getElementById('showTrack').checked;
  showGates = document.getElementById('showGates').checked;
  playerCar = document.getElementById('boxPlay').checked;
  frixion = frixionSlider.value();
  document.getElementById('frixionDisplay').innerHTML= frixion;
  spawnCars[3]=maxSpeedSlider.value();
  spawnCars[4]=accelerationSlider.value();
  document.getElementById('maxSpeedDisplay').innerHTML= spawnCars[3];
  document.getElementById('accelerationDisplay').innerHTML= spawnCars[4];
  gameSpeed = speedSlider.value();
  document.getElementById('speedDisplay').innerHTML= gameSpeed;
  document.getElementById('alive').innerHTML= ("Alive : "+alive+" / "+cars.length);
  numGen=neat.popSize;

  //Draw + updates
  if(!drawingState){
    for(let z=0;z<gameSpeed;z++){
      background('black');
      alive=0;
      for(i=0;i<cars.length;i++){
        if(cars[i].alive){
          alive++;
          neat.setInputs(cars[i].getInputs(),i);
          neat.setFitness(cars[i].fitness, i);
        }
      }
      neat.feedForward();
      let best = neat.getBestCreature();
      let stillAlive=false;
      for(i=0;i<cars.length;i++){
        if(cars[i].alive){
          let outputs = neat.getOutput(i);
          if(outputs[0]>0.5){
            cars[i].move('left');
          }else{
            cars[i].move('right');
          }
          if(outputs[1]>0.5){
            cars[i].move('right');
          }
          if(outputs[2]>0.5){
            cars[i].move('up');
          }/*else{
            cars[i].move('down');
          }*/
          /*if(outputs[3]>0.5){
            cars[i].move('down');
          }*/

          cars[i].update();
          if(z==gameSpeed-1){
            if(!displayBest) cars[i].draw();
          }
          stillAlive=true;
        }
      }
      if(z==gameSpeed-1){
        if(displayBest) cars[best[1]].draw();
        if(highlightBest) cars[best[1]].draw('#c7505f');
        if(nnDisplay){
          nnDisplay.remove();
        }
        nnDisplay = neat.getNeuralDisplay(best[1], 300, 300, 15);
      	image(nnDisplay, 100,300);
      }

      if(!stillAlive){
        start();
      }

      //Manual play
      if(playerCar){
        if(keyIsDown(LEFT_ARROW)){
          car.move('left');
        }
        if (keyIsDown(RIGHT_ARROW)) {
          car.move('right');
        }
        if (keyIsDown(UP_ARROW)) {
          car.move('up');
        }
        if (keyIsDown(DOWN_ARROW)) {
          car.move('down');
        }
        if(car.alive){
          car.update();
          if(z==gameSpeed-1) car.draw('#5874fc');
        }else{
          loadPlayerCar();
        }
      }
      if(z==gameSpeed-1){
        if(showTrack) race.draw();
        if(showGates) race.drawGates();
      }
    }
  }else{
    //Race drawing
    background('black');


  }


  //Race drawing
  /*if(tempRace.length>1){
    for(let x=0;x<tempRace.length-1;x++){
      stroke('white');
      strokeWeight(5);
      line(tempRace[x][0],tempRace[x][1],tempRace[x+1][0],tempRace[x+1][1]);
    }
  }*/
  //Gate drawing
  /*if(tempGate.length>0){
    for(let x=0;x<tempGate.length;x++){
      push();
      stroke('yellow');
      strokeWeight(5);
      line(tempGate[x][0][0],tempGate[x][0][1],tempGate[x][1][0],tempGate[x][1][1]);
      pop();
    }
  }*/
}

//Load player car
function loadPlayerCar(){
  car = new Car(race.spawn, spawnCars[3], spawnCars[4]);
}

//Race drawing
function drawRace(){
  drawingState=!drawingState;
  document.getElementById('drawRaceButton').innerHTML= drawingState ? "Cancel drawing" : "Draw a race";
}

//Start-restart function neat
function generateCars(){
  cars=[];
  for(x=0;x<neat.popSize;x++){
      cars.push(new Car(race.spawn, spawnCars[3], spawnCars[4]));
  }
}
function start(){
  generateCars();
  addScore(neat.getBestCreature()[0].fit);
  neat.makePop(/*[[[0.4096840818422428,-0.055636068960655025,-0.26857235465558393],[-0.6423431052147041,0.3068173241562083,0.49295169469630085],[0.10287158621006061,-0.06900661450287218,-0.11768708814919066],[-0.14874823191360848,0.532285399189419,0.07947750196666666],[0.0948671242972238,-0.1846340592239048,0.43639989233216275],[-0.12724760896716986,0.05376411762723943,-0.060197552657133266],[0.1704286483447552,-0.756648651168345,0.704172696128834]]]*/);
}
function restart(){
  neat = new Neat(numGen, mutationRate, config, crossoverConfig);
  generateCars();
}

function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
  // calculate the distance to intersection point
  let denom = ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1))
  let uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / denom;
  let uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / denom;

  // if uA and uB are between 0-1, lines are colliding
  if (uA < 0 || uA > 1 || uB < 0 || uB > 1) return null;
  return createVector(x1 + (uA * (x2-x1)), y1 + (uA * (y2-y1)));

}
function keyPressed(){
  if(key==='r'){
    start();
  }
  if(key==='y'){
    restart();
  }
}

function writeCurrentBestCreature(){
  document.getElementById('currentBestCrea').innerHTML=JSON.stringify(neat.getBestCreature()[0].genes);
}

function createFromCreature(){
  let tempCreature = document.getElementById('createFromCreature').value;
  console.log(tempCreature);
  if(tempCreature!=null){
    generateCars();
    neat.makePop(JSON.parse(tempCreature));
  }
}

/*
function mouseClicked(){
  //Race drawing
  //tempRace.push([mouseX, mouseY]);
  //Gate drawing
  /*
  if(tempGate2){
    tempGate.push([tempGate2, [mouseX, mouseY]]);
    tempGate2=null;
  }else{
    tempGate2=[mouseX, mouseY];
  }*/
/*}*/
