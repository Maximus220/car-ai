/*
e.g.
{
  layer: [
    {
      node: 5
    },
    {
      node: 3,
      actFunction: 'SOFTMAX'
    }
  ]
}


*/


class NeuralNetwork{
  constructor(config){ //No hidden layer implementation yet
    this.layer = [];
    for(let x=0;x<config.layer.length;x++){
      if(x==0){
        this.layer.push(new Layer(config.layer[x].node, 'SUM', true, false));
      }else if(x==config.layer.length-1){
        this.layer.push(new Layer(config.layer[x].node, config.layer[x].actFunction, false, true));
      }else{
        this.layer.push(new Layer(config.layer[x].node, config.layer[x].actFunction, false, false))
      }
    }
  }

  /*
  [
    [ //5 nodes l:0
      [0,5,4,7,2,4],
      [0,5,4,7,2,4],
      [0,5,4,7,2,4],
      [0,5,4,7,2,4],
      [0,5,4,7,2,4]
    ],
    [ //3 nodes l:1 / output

    ]
  ]

  */


  init(config){
    if(config && config.length===this.layer.length-1){
      for(let x=0;x<this.layer.length-1;x++){
        for(let y=0;y<this.layer[x].node.length;y++){
          this.layer[x].node[y].setWeights(config[x][y]);
        }
      }
    }else{
      for(let x=0;x<this.layer.length;x++){
        if(!this.layer[x].isOutput){
          this.layer[x].init(this.layer[x+1].node.length);
        }
      }
    }
  }

  setInputs(inputs){
    if(inputs.length >= this.layer[0].node.length){
      for(let x=0;x<this.layer[0].node.length;x++){
        this.layer[0].node[x].setValue(inputs[x]);
      }
    }
  }

  getOutputs(){
    let val=[];
    for(let x=0;x<this.layer[this.layer.length-1].node.length;x++){
      val.push(this.layer[this.layer.length-1].node[x].value);
    }
    return val;
  }

  feedForward(){
    let val=[];
    for(let x=1;x<this.layer.length;x++){
      for(let y=0;y<this.layer[x].node.length;y++){
        val=[];
        for(let z=0;z<this.layer[x-1].node.length;z++){
          val.push(this.layer[x-1].node[z].value*this.layer[x-1].node[z].weights[y]);
        }
        this.layer[x].node[y].setValue(this.layer[x].actFunction(val));
      }
    }
  }

}
