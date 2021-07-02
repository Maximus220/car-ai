class Node{
  constructor(isInput, isOutput){
    this.isInput = isInput;
    this.isOutput = isOutput;
    this.weights = [];
    this.value = 0;
  }

  setValue(value){
    this.value = value;
  }

  setWeights(weights){
    this.weights = weights;
  }

  init(weights){
    for(let x=0;x<weights;x++){
      this.weights.push(random(-1, 1));
    }
  }
}
