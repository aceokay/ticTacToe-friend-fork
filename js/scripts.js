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

function Board(width, height) {
  this.width = width;
  this.height = height;
}
