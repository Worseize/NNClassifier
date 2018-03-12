mouseReleased = function(){
	
	if(!auto){

		if(keyIsDown(16)){
			
			let color = [255, 0, 0];//red
			myPoints.push(new myPoint(mouseX, mouseY, color, resolution));
			trainingData.push({inputs:[
				mouseX / width ,
				mouseY / height,
				mouseX * mouseY  / width  /  height
			], outputs: [0]});
		}else if(keyIsDown(17)){
			let color = [0, 0, 255];//blue
			myPoints.push(new myPoint(mouseX, mouseY, color, resolution));
			trainingData.push({inputs:[
				mouseX / width ,
				mouseY / height ,
			 	mouseX / width * mouseY / height
			], outputs: [1]});
		}
	}
}
