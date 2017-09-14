window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 600;
    /* canvas 内的元素根据 canvas.width/height 定位，不加此项会有变形 */

    drawLines(canvas, context);
    // giveLife();
}

var generationCount = 0;

/* 绘制初始网格 */
function drawLines(canvas, context) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    var positionX = [];
    for (var i = 0; i < 30; i++) {
        positionX[i] = i * 20;
    }
    var positionY = [];
    for (var j = 0; j < 30; j++) {
        positionY[j] = j * 20;
    }
    for (var k = 0; k < 30; k++) {
        for (var l = 0; l < 30; l++) {
            context.fillRect(positionX[k], positionY[l], 20, 20);
            context.clearRect(positionX[k] + 1, positionY[l] + 1, 18, 18);
        }
    }
    generationCount = 0;
}

/* 初始化数组，50×50，比显示范围大 */
var firstGeneration = new Array();
for (var i = 0; i < 50; i++) {
    firstGeneration[i] = new Array(); // 格式化
    for (var j = 0; j < 50; j++) {
        firstGeneration[i][j] = 0;
    }
}
var nextGeneration = new Array();
for (var i = 0; i < 50; i++) {
    nextGeneration[i] = new Array(); // 格式化
    for (var j = 0; j < 50; j++) {
        nextGeneration[i][j] = 0;
    }
}

/* 按数组填充网格 */
function displayLife(life) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    for (var i = 10; i < 40; i++) {
        for (var j = 10; j < 40; j++) {
            if (life[i][j] == 1) {
                // console.log(life[i][j]);       
                context.fillStyle = "#FF0000"; // 红色
                context.fillRect((i - 10) * 20 + 1, (j - 10) * 20 + 1, 18, 18);
            } else if (life[i][j] == 0) {
                context.fillStyle = "#FFFFFF"; // 白色
                context.fillRect((i - 10) * 20 + 1, (j - 10) * 20 + 1, 18, 18);
            }
        }
    }
}

/* 初始生命赋值及显示 */
function giveLife() {
    for (var i = 1; i < 49; i++) {
        for (var j = 1; j < 49; j++) {
            firstGeneration[i][j] = Math.round(Math.random() * 0.6); // 0与1 随机赋值，*0.6 加权
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
    if (generationCount == 0) {
        alert("请先点击一次初始生命！");
    } else if (generationCount == 1) {
        displayLife(lifeEvolution(firstGeneration));
    } else {
        displayLife(lifeEvolution(nextGeneration));
    }
}

/* 生命演绎函数，数组赋值 */
function lifeEvolution(life) {
    var nextRound = new Array();
    for (var i = 0; i < 50; i++) {
        nextRound[i] = new Array(); // 格式化
        for (var j = 0; j < 50; j++) {
            nextRound[i][j] = 0;
        }
    }
    for (var i = 1; i < 49; i++) {
        for (var j = 1; j < 49; j++) {
            var count = life[i - 1][j - 1] + life[i][j - 1] + life[i + 1][j - 1] + life[i - 1][j] + life[i + 1][j] + life[i - 1][j + 1] + life[i][j + 1] + life[i + 1][j + 1];
            // console.log(count);
            if (life[i][j] == 0 && count == 3) {
                nextRound[i][j] = 1;
            }
            // else if (life[i][j] == 1 && (count != 2 && count != 3)) {
            // }
            else if (life[i][j] == 1 && (count == 2 || count == 3)) {
                nextRound[i][j] = 1;
            } else {
                nextRound[i][j] = 0;
            }
        }
    }
    for (var i = 0; i < 50; i++) {
        for (var j = 0; j < 50; j++) {
            nextGeneration[i][j] = nextRound[i][j];
        }
    }

    generationCount++;
    console.log(generationCount);
    return nextRound;
}

/* 自动循环 */
function autoGenerate() {
    if (generationCount == 0) {
        giveLife();
        displayLife(lifeEvolution(firstGeneration));
        setInterval(function() {
            displayLife(lifeEvolution(nextGeneration));
        }, 50);
    } else {
        displayLife(lifeEvolution(firstGeneration));
        setInterval(function() {
            displayLife(lifeEvolution(nextGeneration));
        }, 50);
    }
}

/* 10x10 初始生命 */
function giveTenLife() {
    for (var i = 20; i < 30; i++) {
        firstGeneration[i] = new Array();
        for (var j = 20; j < 30; j++) {
            firstGeneration[i][j] = Math.round(Math.random()); // 0与1 随机赋值
        }
    }
    displayLife(firstGeneration);
    generationCount++;
}

/* 16x16 初始生命 */
function giveSixteenLife() {
    for (var i = 17; i < 33; i++) {
        firstGeneration[i] = new Array();
        for (var j = 17; j < 33; j++) {
            firstGeneration[i][j] = Math.round(Math.random()); // 0与1 随机赋值
        }
    }
    displayLife(firstGeneration);
    generationCount++;
}

/* --------------- Important oscillators ---------------- */

/* Glider/滑翔者 */
function glider() {
    var cells = new Array();
    cells = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    for (var i = 20; i < 30; i++) {
        for (var j = 20; j < 30; j++) {
            firstGeneration[i][j] = cells[i - 20][j - 20];
        }
    }
    displayLife(firstGeneration);
    generationCount = 0;
    generationCount++;
    console.log(generationCount);
}

/* Queen bee shuttle */
function queenBeeShuttle() {
    var cells = new Array();
    cells = [
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ];

    for (var i = 14; i < 36; i++) {
        for (var j = 20; j < 31; j++) {
            firstGeneration[i][j] = cells[i - 14][j - 20];
        }
    }
    displayLife(firstGeneration);
    generationCount = 0;
    generationCount++;
    console.log(generationCount);
}

/* Figure eight */
function figureEight() {
    var cells = new Array();
    cells = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    for (var i = 20; i < 30; i++) {
        for (var j = 20; j < 30; j++) {
            firstGeneration[i][j] = cells[i - 20][j - 20];
        }
    }
    displayLife(firstGeneration);
    generationCount = 0;
    generationCount++;
    console.log(generationCount);
}