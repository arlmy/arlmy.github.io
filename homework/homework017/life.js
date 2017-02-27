window.onload = function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  canvas.width = 600;
  canvas.height = 600;
  /* canvas 内的元素根据 canvas.width/height 定位，不加此项会有变形 */

  drawLines(canvas, context);
  // giveLife();
}

/* 初始网格 */
function drawLines(canvas, context) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.fillStyle="#000000";
  var positionX = [];
    for(var i=0; i<30; i++) {
      positionX[i] = i*20;
    }
  var positionY = [];
    for(var j=0; j<30; j++) {
      positionY[j] = j*20;
    }
  for(var k=0; k<30; k++) {
    for(var l=0; l<30; l++) {
      context.fillRect(positionX[k],positionY[l],20,20);
      context.clearRect(positionX[k]+1,positionY[l]+1,18,18);
    }
  }
}

/* 按数组填充 */
function displayLife(life) {
  for(var i=1; i<29; i++) {
    for(var j=1; j<29; j++) {
      if (life[i][j] == 1) {
        // console.log(life[i][j]);
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.fillStyle="#FF0000";
        context.fillRect(i*20+1,j*20+1,18,18);
      } else if (life[i][j] == 0) {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.fillStyle="#FFFFFF";
        context.fillRect(i*20+1,j*20+1,18,18);
      }
    }
  }
}

var generationCount = 0;
var firstGeneration = new Array();
    for(var i=0; i<30; i++) {
        firstGeneration[i] = new Array(); // 格式化
          for(var j=0; j<30; j++) {
              firstGeneration[i][j] = 0;
          }
    }

/* 初始生命赋值及显示 */
function giveLife() {
    for(var i=0; i<30; i++) {
      firstGeneration[i] = new Array();
        for(var j=0; j<30; j++) {
          firstGeneration[i][j] = Math.round(Math.random()); // 0与1 随机赋值
          // console.log(life[i][j]);
        }
    }
  // console.log(life[1]);
  displayLife(firstGeneration);
  // lifeEvolution(life);
  generationCount++;
  // console.log(generationCount);
}

/* 演绎后代 */
function displayNextGeneration() {
    if ( generationCount == 0 ) {
        alert("请先点击一次初始生命！");
    } else if ( generationCount == 1 ) {
        displayLife(lifeEvolution(firstGeneration));
    } else {
        displayLife(lifeEvolution(nextGeneration));
    }
}

/* 生命演绎函数，数组赋值 */
var nextGeneration = new Array();
    for(var i=0; i<30; i++) {
        nextGeneration[i] = new Array(); // 格式化
          for(var j=0; j<30; j++) {
              nextGeneration[i][j] = 0;
          }
    }

function lifeEvolution(life) {
    for(var i=0; i<30; i++) {
        nextGeneration[i][0] = 0;
    }
    for(var j=0; j<30; j++) {
        nextGeneration[0][j] = 0;
    }
    // console.log(life[1]);
    for(var i=1; i<29; i++) {
        for(var j=1; j<29; j++) {
        var count = life[i-1][j-1] + life[i][j-1] + life[i+1][j-1] + life[i-1][j] + life[i+1][j] + life[i-1][j+1] + life[i][j+1] + life[i+1][j+1];
        // console.log(count);
            if ( life[i][j] == 0 && count == 3 ) {
            nextGeneration[i][j] = 1;
            } else if ( life[i][j] == 1 && ( count != 2 && count != 3 )) {
            nextGeneration[i][j] = 0;
            } else {
            nextGeneration[i][j] = life[i][j];
            }
            // console.log(nextGeneration[i][j]);
        }
    }

  // console.log(nextGeneration[1]); // 测试赋值结果
  generationCount++;
  console.log(generationCount);
  // console.log(nextGeneration[1]);
  return nextGeneration;
}

/* 自动循环 */
function autoGenerate() {
    if ( generationCount == 0 ) {
        giveLife();
        displayLife(lifeEvolution(firstGeneration));
        setInterval(function() {
            displayLife(lifeEvolution(nextGeneration));
        }, 30);
    } else {
        displayLife(lifeEvolution(firstGeneration));
        setInterval(function() {
            displayLife(lifeEvolution(nextGeneration));
        }, 30);
    }
}

/* 10x10 初始生命 */
function giveTenLife() {
    for(var i=10; i<20; i++) {
      firstGeneration[i] = new Array();
        for(var j=10; j<20; j++) {
          firstGeneration[i][j] = Math.round(Math.random()); // 0与1 随机赋值
        }
    }
  displayLife(firstGeneration);
  generationCount++;
}

/* 16x16 初始生命 */
function giveSixteenLife() {
    for(var i=7; i<23; i++) {
      firstGeneration[i] = new Array();
        for(var j=7; j<23; j++) {
          firstGeneration[i][j] = Math.round(Math.random()); // 0与1 随机赋值
        }
    }
  displayLife(firstGeneration);
  generationCount++;
}

/* Glider/滑翔者 */
function glider() {
    firstGeneration = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ];
  displayLife(firstGeneration);
  generationCount++;
  console.log(generationCount);
}
