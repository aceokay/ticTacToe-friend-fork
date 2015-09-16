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
}

Board.prototype.mark = function(space) {
  this.mark = space;
};

// Board.prototype.find = function(x, y) {
//
//   for(var i = 1; i <= this.x; ++i) {
//
//   }
// };
