var circles = [];

	function setup() {
		createCanvas(window.innerWidth, window.innerHeight);
		background(0);
		noStroke();
	}

	function draw() {
		background(0, 30);	

		for(var i = 0; i < circles.length; i++){
			circles[i].checkBoundary();
			circles[i].update();
			circles[i].display();
		}
	}

	function mousePressed() {
		for(var i = 0; i < 5; i++){
			
		circles.push(new Circle(mouseX, mouseY));
		}
	}

	function keyPressed() {
		if (key == " ") {
			for (var i = 0; i < circles.length; i++);
				circles[i].xVel = random(-10, 10);
				circles[i].yVel = random(-10, 10);
		}
	}

	function Circle(x, y) {
		this.x = x;
		this.y = y;
		this.xVel = random(-5, 5);
		this.yVel = random(-5, 5);
		this.dia = random(50, 100);
		this.r = random(255);
		this.g = random(255);
		this.b = random(255);

		this.checkBoundary = function(){
			if(this.x < 0 || this.x > width){
				this.xVel = -this.xVel;
			}

			if(this.y < 0 || this.y > height){
				this.yVel = -this.yVel;
			}
		}

		this.update = function(){
			this.xVel = this.xVel * 0.98; 
			this.yVel = this.yVel * 0.98;
			this.x = this.x + this.xVel;
			this.y = this.y + this.yVel;
		}

		this.display = function() { 
			fill(this.r, this.g, this.b, 75);
			ellipse(this.x, this.y, this.dia, this.dia);
		}
	}



