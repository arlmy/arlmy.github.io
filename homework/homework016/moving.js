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
}

function drawCircle(canvas, context) {

  var maxWidth = canvas.width - 60;
  var maxHeight= canvas.height - 60;
  var positionX = getRandom(60, maxWidth);
  var positionY = getRandom(60, maxHeight);
  var speed = 10;
  var angle = getRandom(5, 350);
  var radius = 60;

  setInterval(function() {

    radians = angle * Math.PI / 180;
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

    if (positionX < 60 || positionX > (canvas.width - 60)) {
      angle = 180 - angle;
      radians = angle * (Math.PI / 180);
      changeX = Math.cos(radians) * speed;
      changeY = Math.sin(radians) * speed;
      positionX += changeX;
      positionY += changeY;

    } else if (positionY < 60 || positionY > (canvas.height - 60)) {
      angle = 360 - angle;
      radians = angle * (Math.PI / 180);
      changeX = Math.cos(radians) * speed;
      changeY = Math.sin(radians) * speed;
      positionX += changeX;
      positionY += changeY;

    }



}, 15);

}

function getRandom(min, max) {
  var Range = max - min;
  var Rand = Math.random();
  return (min + Math.round(Rand * Range));
}
