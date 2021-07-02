class Layer{
  constructor(node, actFunction, isInput, isOutput){
    this.node = [];
    for(let x=0;x<node;x++){
      this.node.push(new Node(isInput, isOutput));
    }
    this.actFunction = actFunctions[actFunction];
    this.isInput = isInput;
    this.isOutput = isOutput;
  }

  init(nextLNN){ //Next Layer Node Number
    for(let x=0;x<this.node.length;x++){
      this.node[x].init(nextLNN);
    }
  }
}
