var matrix = [
    [0, 3, 1, 0, 5, 2, 0, 6, 3, 4, 0, 6],
    [1, 0, 3, 4, 6, 0, 3, 0, 5, 2, 3, 0],
    [0, 1, 0, 0, 2, 3, 4, 0, 2, 0, 3, 0],
    [0, 2, 1, 3, 4, 5, 3, 6, 2, 0, 0, 1],
    [1, 1, 0, 3, 6, 1, 0, 4, 5, 0, 2, 0],
    [1, 1, 0, 3, 2, 0, 4, 0, 0, 3, 0, 0],
    [1, 1, 0, 2, 6, 3, 0, 3, 0, 1, 4, 0],
    [1, 0, 3, 0, 4, 0, 2, 0, 1, 6, 0, 3],
    [0, 2, 0, 3, 3, 1, 5, 0, 0, 2, 3, 0],
    [3, 0, 4, 0, 1, 0, 0, 1, 0, 0, 3, 0],
    [1, 0, 1, 3, 6, 2, 5, 0, 4, 0, 2, 1],
    [1, 2, 3, 3, 0, 2, 5, 4, 6, 2, 0, 0],
    [2, 3, 0, 6, 2, 0, 3, 0, 5, 2, 4, 0],
    [1, 4, 0, 1, 0, 3, 3, 2, 6, 1, 4, 0],
];

var side = 30;
var grassArr = [];
var grassEaterArr = [];
var PredatorEaterArr = [];
var waterArr = [];
var stoneArr = [];
var MushroomArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acaca');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater);
            }

            else if (matrix[y][x] == 3) {
                var grEater = new PredatorEater(x, y, 3);
                PredatorEaterArr.push(grEater);

            }
            else if (matrix[y][x] == 4) {
                var waEater = new Water(x, y, 4);
                waterArr.push(waEater);
            }
            else if (matrix[y][x] == 5) {
                var st = new Stone(x, y, 5);
                stoneArr.push(st);
            }
            else if (matrix[y][x] == 6) {
                var grEater = new Mushroom(x, y, 6)
                MushroomArr.push(grEater)
            }


        }

    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(0, 255, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(192,192,192);
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                fill(255,0,0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(128,0,0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(0,255,255);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill(0,128,128);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill(255,69,0);
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].move();
        grassEaterArr[i].die();
    }
    for (var i in PredatorEaterArr) {
        PredatorEaterArr[i].eat();
        PredatorEaterArr[i].mul();
        PredatorEaterArr[i].move();
        PredatorEaterArr[i].die();
    }

    for (var i in waterArr) {
        waterArr[i].eat();
        waterArr[i].mul();
        waterArr[i].move();
        waterArr[i].die();
    }
    for (var i in stoneArr) {
        stoneArr[i].eat();
        stoneArr[i].mul();
        stoneArr[i].move();
        stoneArr[i].die();
    }
    for (var i in MushroomArr) {
        MushroomArr[i].mul();
        MushroomArr[i].die();
    }

}
