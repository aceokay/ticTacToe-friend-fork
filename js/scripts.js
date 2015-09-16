function Player(mark) {
  this.mark = mark;
  this.score = 0;
};

function Space(x, y) {
  this.x = x;
  this.y = y;
}

function Board(x, y) {
  this.x = x;
  this.y = y;
  this.marks = [];
}

function Game(players, turn, board) {
  this.players = players;
  this.turn = turn;
  this.board = board;
}

Space.prototype.markBy = function(player) {
  this.markBy = player;
};

function choose(x, y, id) {
  if ( $("#gameBoard table").hasClass('gameover') ) {
    alert("your game is over!")
  } else if (game.board.find(x, y) === undefined) {
    $("#errors").hide();
    var newSpace = new Space(x, y);
    newSpace.markBy(game.players[game.turn]);
    game.board.mark(newSpace);
    $("#gameBoard table td:eq("+ id +")").append('<img class="info-pic" src="img/' + game.players[game.turn].mark + '.jpg">')
    if (game.board.marks.length === 9) {
      alert("Cats Game.  You both lose!");
      $('#gameBoard table').addClass('gameover').on('click');
    } else if (game.board.winner() === undefined) {
      if (game.turn === 0) {
        game.turn = 1;
      } else {
        game.turn = 0;
      }
      $("#turnIndicator span").empty();
      $("#turnIndicator span").append('<img class="info-pic" src="img/' + game.players[game.turn].mark + '.jpg">')
    } else {
      $('#gameBoard table').addClass('gameover').on('click');
      game.players[game.turn].score += 1;
      $('#playerOneInfo .score').text(game.players[0].score);
      $('#playerTwoInfo .score').text(game.players[1].score);
    }
  } else {
    $("#errors").show();
    $("#errors").text("Already Chosen! Choose an empty square");
  }
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
  if (oneOne !== undefined && oneTwo !== undefined && oneThree !== undefined && oneOne.markBy === oneTwo.markBy && oneTwo.markBy === oneThree.markBy) {
    winner = oneOne.markBy;
  // Middle Row Win
} else if (twoOne !== undefined && twoTwo !== undefined && twoThree !== undefined && twoOne.markBy === twoTwo.markBy && twoTwo.markBy === twoThree.markBy) {
    winner = twoOne.markBy;
  // Bottom Row Win
} else if (threeOne !== undefined && threeTwo !== undefined && threeThree !== undefined && threeOne.markBy === threeTwo.markBy && threeTwo.markBy === threeThree.markBy) {
    winner = threeOne.markBy;
  // Left Column Win
} else if (oneOne !== undefined && twoOne !== undefined && threeOne !== undefined && oneOne.markBy === twoOne.markBy && twoOne.markBy === threeOne.markBy) {
    winner = oneOne.markBy;
  // Middle Column Win
} else if (oneTwo !== undefined && twoTwo !== undefined && threeTwo !== undefined && oneTwo.markBy === twoTwo.markBy && twoTwo.markBy === threeTwo.markBy) {
    winner = oneTwo.markBy;
  // Right Column Win
} else if (oneThree !== undefined && twoThree !== undefined && threeThree !== undefined && oneThree.markBy === twoThree.markBy && twoThree.markBy === threeThree.markBy) {
    winner = oneThree.markBy;
  // Diagonal Wins
} else if (oneOne !== undefined && twoTwo !== undefined && threeThree !== undefined && oneOne.markBy === twoTwo.markBy && twoTwo.markBy === threeThree.markBy) {
    winner = oneOne.markBy;
  } else if (oneThree !== undefined && twoTwo !== undefined && threeOne !== undefined && oneThree.markBy === twoTwo.markBy && twoTwo.markBy === threeOne.markBy) {
    winner = oneThree.markBy;
  }

  return winner;
};
