new p5();

//=====================      VARIABLES      ====================
let page = 1, currentDomLines = 0, page1DomLines = 1, resolution = 50, iterations = 30;
//=====================      BOOLEANS       ====================
let auto = false;
//=====================      ARRAYS         ====================
let myPoints = [], trainingData = [];
//=====================      UNDEFINED      ====================
let myCanvas, nn, lrSlider;


function preload(){
  
}
//=====================        SETUP        ====================
function setup(){
	createDomElements();
	myCanvas = createCanvas(innerWidth - 6, innerHeight - 38);
	myCanvas.style('margin','3px');	
	background(255);
	textSize(25);
	text("Ctrl + mouseClick or Shift + mouseClick ", width / 4 , height/2);
	text("To add training data", width / 3 , height / 2 + 50);
	fill(0,255,0);
	text("30000 trainings per frame", width / 3 , height / 2 + 100);
}
//=====================        VOID         ====================
function draw(){
	if(auto && iterations > 1){
		for(let i = 0; i < 100000; i++){
	    	let data = random(trainingData);
	    	nn.train(data.inputs, data.outputs);
	    	nn.setLearningRate(0.5);
		}
		let cols = width / resolution;
		let rows = height / resolution;
		for (let i = 0; i < cols; i++) {
		    for (let j = 0; j < rows; j++) {
		      	let x1 = i / cols;
		      	let x2 = j / rows;
		     	let inputs = [x1, x2, x1 * x2];
		     	let y = nn.predict(inputs);
			    noStroke();
			    fill(y * 255);
		     	rect(i * resolution, j * resolution, resolution, resolution);
		    }
		}
		iterations--;
		//console.log('sensetivity(Learning rate) = ' + 1);
	}
	for(let i = 0 ; i < myPoints.length; i++){
		myPoints[i].show();
	}
	if(iterations === 1 ){
		textSize(40);
		fill(0, 255, 0);
		text('Dear human I think I`ve done', width/4, height / 2);
	}
}
//===================== WINDOW RESIZE EVENT ====================
window.onresize = function(){
  resizeCanvas(innerWidth - 6, innerHeight - 38 - currentDomLines * 28);
}