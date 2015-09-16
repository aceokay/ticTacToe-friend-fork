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

function choose(x, y, id) {
  var newSpace = new Space(x, y);
  newSpace.markBy(players[turn]);
  board.mark(newSpace);
  $("#gameBoard table td:eq("+ id +")").append('<img class="info-pic" src="img/' + players[turn].mark + '.jpg">')
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
  $("#turnIndicator span").empty();
  $("#turnIndicator span").append('<img class="info-pic" src="img/' + players[turn].mark + '.jpg">')
}

Board.prototype.mark = function(space) {
  this.marks.push(space);
};

Board.prototype.find = function(x, y) {
  var result;
  this.marks.forEach(function(space) {
    if (space.x === x && space.y === y) {
      result = space;
    };
  });
  return result;
};

Board.prototype.winner = function() {
  var winner;
  var oneOne = this.find(1,1);
  var oneTwo = this.find(1,2);
  var oneThree = this.find(1,3);
  var twoOne = this.find(2,1);
  var twoTwo = this.find(2,2);
  var twoThree = this.find(2,3);
  var threeOne = this.find(3,1);
  var threeTwo = this.find(3,2);
  var threeThree = this.find(3,3);

  // Top Row Win
  if (oneOne !== undefined && oneOne.markBy === oneTwo.markBy && oneTwo.markBy === oneThree.markBy) {
    winner = oneOne.markBy;
  // Middle Row Win
  } else if (twoOne !== undefined && twoOne.markBy === twoTwo.markBy && twoTwo.markBy === twoThree.markBy) {
    winner = twoOne.markBy;
  // Bottom Row Win
  } else if (threeOne !== undefined && threeOne.markBy === threeTwo.markBy && threeTwo.markBy === threeThree.markBy) {
    winner = threeOne.markBy;
  // Left Column Win
  } else if (oneOne !== undefined && oneOne.markBy === twoOne.markBy && twoOne.markBy === threeOne.markBy) {
    winner = oneOne.markBy;
  // Middle Column Win
  } else if (oneTwo !== undefined && oneTwo.markBy === twoTwo.markBy && twoTwo.markBy === threeTwo.markBy) {
    winner = oneTwo.markBy;
  // Right Column Win
  } else if (oneThree !== undefined && oneThree.markBy === twoThree.markBy && twoThree.markBy === threeThree.markBy) {
    winner = oneThree.markBy;
  // Diagonal Wins
  } else if (oneOne !== undefined && oneOne.markBy === twoTwo.markBy && twoTwo.markBy === threeThree.markBy) {
    winner = oneOne.markBy;
  } else if (oneThree !== undefined && oneThree.markBy === twoTwo.markBy && twoTwo.markBy === threeOne.markBy) {
    winner = oneThree.markBy;
  }

  return winner;
};
