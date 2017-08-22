var cols, rows;
var w = 40; // canh hinh vuong cell
var grid = [];

function setup() {
    createCanvas(400, 400);
    cols = width / w;
    rows = height / w;

    for(var j = 0; j < rows; j++) {
        for(var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}

function draw() {
    background(51);

    for(var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(i, j) {
    this.i = i; // column number
    this.j = j; // row number
    this.walls = [true, true, true, true];
    
    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);

        if(this.walls[0]) {
            line(x, y, x + w, y);
        }
        if(this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        if(this.walls[2]) {
            line(x + w, y + w, x, y + w);
        }
        if(this.walls[3]) {
            line(x, y + w, x, y);
        }
        // noFill();
        // rect(x, y, w, w);
    }
}