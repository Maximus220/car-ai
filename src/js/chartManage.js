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
    scoreChart.data.labels.push(neat.generation+1);
		scoreChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    scoreChart.update();
}

function resetDataset(){
  scoreChart.data.datasets.forEach((dataset) => {
    dataset.data = [];
  });
  scoreChart.data.labels = [];
  scoreChart.update();
}
