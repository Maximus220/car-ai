class Creature{
  constructor(nn, genes){
    this.nn = nn;
    this.genes = genes;
    this.fit = 0;
  }

  setFit(fit){
    this.fit = fit;
  }

  resetFit(){
    this.fit = 0;
  }
}
