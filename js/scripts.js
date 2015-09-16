function Player(mark) {
  this.mark = mark;
};

function Space(x, y) {
  this.x = x;
  this.y = y;
}

Space.prototype.markBy = function(player) {
  this.markBy = player;
};

function Board(x, y) {
  this.x = x;
  this.y = y;
  this.marks = [];
}

Board.prototype.mark = function(space) {
  this.marks.push(space);
};

Board.prototype.find = function(x, y) {
  this.marks.forEach(function(space) {
    if (space.x === x && space.y === y) {
      return space;
    };
  });
};
