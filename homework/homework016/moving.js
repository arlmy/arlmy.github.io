window.onload = function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");
/*  canvas.width = screen.width;
  canvas.height = screen.height; 屏幕区域 */
/*  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight; 可视区域 */
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  drawCircle(canvas, context);
  movingCircle(canvas, context);
}

function drawCircle(canvas, context) {

  /*
  var radius = 60;
  var maxWidth = canvas.width - 60;
  var maxHeight= canvas.height - 60;
  var x = getRandom(60, maxWidth);
  var y = getRandom(60, maxHeight);

  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, true);
  context.fillStyle = "lightblue";
  context.fill();
  */

  var speed = 5;
  var angle = 55;
  var positionX = 60;
  var positionY = 60;
  var radius = 60;

  setInterval(function() {

  radians = angle * (Math.PI / 180);
  changeX = Math.cos(radians) * speed;
  changeY = Math.sin(radians) * speed;
  positionX += changeX;
  positionY += changeY;

  context.beginPath();
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  context.arc(positionX, positionY, radius, 0, 2 * Math.PI, true);
  context.fillStyle = "lightblue";
  context.closePath();
  context.fill();

  },30);

}

/*
  var posX = 20,
      posY = 100;
  var vx = 10,
      vy = -10,
      gravity = 1;

  setInterval(function() {
  	context.fillStyle = "black";
      context.fillRect(0,0,canvas.width, canvas.height);

    posX += vx;
    posY += vy;

    if (posY > canvas.height * 0.75) {
              vy *= -0.6;
              vx *= 0.75;
              posY = canvas.height * 0.75;
        }

    vy += gravity;

  	context.beginPath();
  	context.fillStyle = "white";

  	context.arc(posX, posY, 10, 0, Math.PI*2, true);
  	context.closePath();
  	context.fill();
  }, 30);


*/

function getRandom(min, max) {
  var Range = max - min;
  var Rand = Math.random();
  return (min + Math.round(Rand * Range));
}


/*
  var radius = 60;
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, true);
  context.fillStyle = "lightblue";
  context.fill();
*/

function movingCircle(canvas, context) {

}
