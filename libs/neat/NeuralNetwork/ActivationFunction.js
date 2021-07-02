let actFunctions = {
  TANH: function(array){
    let sum = array.reduce((a, b) => a + b, 0);
    return Math.tanh(sum);
  },
	SIGMOID: function (array){
    let sum = array.reduce((a, b) => a + b, 0);
    return (1/(1+Math.exp(-sum)));
  },
	RELU: function(array){
    let sum = array.reduce((a, b) => a + b, 0);
    return Math.max(0, sum);
	},
	LEAKY_RELU: function(array){
    let sum = array.reduce((a, b) => a + b, 0);
		if (sum > 0) return sum;
		else return (x * 0.01);
	},
  HEAVISIDE: function(array){
    let sum = array.reduce((a, b) => a + b, 0);
    if(sum>0) return 1;
    else return 0;
  },
	SOFTMAX: function(array){ //Doesn't work yet (return an array)
    let results = [];
    let sum;
    for(let y=0; y<array.length;y++){
      sum+=Math.exp(array[y]);
    }
		for(let i=0; i<array.length;i++){
      results.push(Math.exp(array[i])/sum);
    }
    return results;
	},
  SUM: function(array){
    return array.reduce((a, b) => a + b, 0);
  }
}
