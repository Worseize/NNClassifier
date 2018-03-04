class myPoint{
	constructor(positionX, positionY, rgb, size){
		this.positionX = positionX;
		this.positionY = positionY;
		this.rgb = rgb;
		this.size = size;
	}
	show(){
		fill(this.rgb[0], this.rgb[1], this.rgb[2]);
		ellipse(this.positionX, this.positionY, this.size, this.size);
	}
}