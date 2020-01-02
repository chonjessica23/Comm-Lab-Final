//  var dots =[];
//  var speed = 1;
//  var showCircles = false;
//  var canvas;

//  function setup() {
//    canvas = createCanvas(windowWidth, windowHeight);
//    canvas.position(0,0);
//    canvas.style('z-index', '-2');
//    var size = 5;
//    for (var i = 0; i < 150; i++){
//       var r = (0);
//       var g = (0);
//       var b = (0);
//       var xp = random(width);
//       var yp = random(height);
//       var dot = {
//          x: xp,
//          y: yp,
//          size: size,
//          r: r, 
//          g: g,
//          b: b,
//       };
//       dots.push(dot);
//     }
//  }

//  function draw() {
//    var timer = frameCount;
//     background(255);

//     if(showCircles == true){
//       for (var i = 0; i < dots.length; i++){
//          var d = dots[i];
//          fill(d.r,d.g,d.b);
//          noStroke();
//          ellipse(d.x,d.y,d.size);
//          d.y += speed;
//          if(d.y > height){
//            d.y = 0;
//          }
//          if(timer > 500){
//            speed = 0;
//          }
//       }
//   }
//  }


// //   // if (currY > height) {
// //   //   currY = 0;
// //   // }

// //   // if (currY < endY) {
// //   //   //currY = currY + 1;
// //   //   currY++;
 

//  function moveAgain() {
//    console.log("this!");
//   showCircles = true;
// }
