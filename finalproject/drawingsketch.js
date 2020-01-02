
var paths = [];
var painting = false;
var next = 0;
var current;
var previous;

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.id("canvas");
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    current = createVector(0,0);
    previous = createVector(0,0);
};

function draw() {
    background(245, 83, 83);
    fill(255);
    textSize(50);
    text("Click and drag mouse on screen to draw!", width/2, height/4); 
    textAlign(CENTER);
    timing();
  
  if (millis() > next && painting) {     
    current.x = mouseX;
    current.y = mouseY;

    var force = p5.Vector.sub(current, previous);
    force.mult(0.05);

    paths[paths.length - 1].add(current, force);
  
    next = millis() + random(100);

    previous.x = current.x;
    previous.y = current.y;
  }

  for( var i = 0; i < paths.length; i++) {
    paths[i].update();
    paths[i].display();
  }
}

// Start it up
function mousePressed() {
  next = 0;
  painting = true;
  previous.x = mouseX;
  previous.y = mouseY;
  paths.push(new Path());
}

// Stop
function mouseReleased() {
  painting = false;
}
function timing(){
    var timer = frameCount;
    console.log(timer);
    if(timer > 200){
      document.getElementById("canvas").style.display = "none";
      document.getElementById("block").style.display = "block";
    }
}
function Path() {
  this.particles = [];
  this.hue = random(100);
}

Path.prototype.add = function(position, force) {
  this.particles.push(new Particle(position, force, this.hue));
}

Path.prototype.update = function() {  
  for (var i = 0; i < this.particles.length; i++) {
    this.particles[i].update();
  }
}  

// Display plath
Path.prototype.display = function() {
  
  for (var i = this.particles.length - 1; i >= 0; i--) {
    if (this.particles[i].lifespan <= 0) {
      this.particles.splice(i, 1);
    } else {
      this.particles[i].display(this.particles[i+1]);
    }
  }

}  

// Particles along the path
function Particle(position, force, hue) {
  this.position = createVector(position.x, position.y);
  this.velocity = createVector(force.x, force.y);
  this.drag = 0.95;
  this.lifespan = 255;
}

Particle.prototype.update = function() {
  // Move it
  this.position.add(this.velocity);
  // Slow it down
  this.velocity.mult(this.drag);
  // Fade it out
  this.lifespan--;
}

// Draw particle and connect it with a line
// Draw a line to another
Particle.prototype.display = function(other) {
  stroke(0, this.lifespan);
  fill(0, this.lifespan/2);    
  ellipse(this.position.x,this.position.y, 8, 8);    
  // If we need to draw a line
  if (other) {
    line(this.position.x, this.position.y, other.position.x, other.position.y);
  }
}