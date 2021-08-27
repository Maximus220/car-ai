function guiSetup(){
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
    spriteSizeSlider = createSlider(0.5, 3.5, spriteSizeCoef, 0.1);
    spriteSizeSlider.parent('spriteSizeSlider');
}

function guiUpdate(){
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
    useSprite = document.getElementById('useSpriteBox').checked;

    if(useSprite){
        document.getElementById('spriteSizeDisplay').style.display = "block";
        spriteSizeSlider.show();
        spriteSizeCoef=spriteSizeSlider.value();
        document.getElementById('spriteSizeDisplay').innerHTML = spriteSizeCoef;
    }else{
        spriteSizeSlider.hide();
        document.getElementById('spriteSizeDisplay').style.display = "none";
    }

    displayHitbox = document.getElementById('displayHitbox').checked;
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
}