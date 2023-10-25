// I took info and some tips from this video https://youtu.be/UcdigVaIYAk

 class Fire{
	constructor(x){
		this.x = x;
		this.y = 580;
		this.vx = random(-1,1);
		this.vy = random(-5,-1);
		this.alpha = 255;
	}

	finished(){
		return this.alpha < 0;
	}

	update(){
		this.x += this.vx;
		this.y += this.vy;
		this.alpha -= 7;
	}

	show(){
		noStroke();
		fill(255, 0, 0, this.alpha)
		ellipse(this.x, this.y,60,50);
	}
}

 class Fire_2{
	constructor(x){
		this.x = x;
		this.y = 560;
		this.vx = random(-1,1);
		this.vy = random(-5,-1);
		this.alpha = 255;
	}

	finished(){
		return this.alpha < 0;
	}

	update(){
		this.x += this.vx;
		this.y += this.vy;
		this.alpha -= 7;
	}

	show(){
		noStroke();
		fill(255,140,0, this.alpha)
		ellipse(this.x, this.y,60,50);
	}
}
