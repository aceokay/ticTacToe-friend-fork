$(document).ready(function() {
  $("#playerOneWeapon .choose").click(function() {
    var choice = $(this).attr('class').split(' ')[1];
    game = new Game([new Player(choice)], 0, new Board(3,3));

    $("#playerOneInfo").append("Player One <img class='info-pic' src='img/" + choice + ".jpg'> <span class='score'>" + game.players[0].score + "</span>");

    $("#playerOneWeapon").hide();
    $("#playerTwoWeapon").show();
    $("#playerInfo").show();
    $("#playerTwoWeapon ." + choice).parent().hide();

    $("#playerTwoWeapon .choose").click(function() {
      var choice = $(this).attr('class').split(' ')[1];
      game.players.push(new Player(choice));

      $("#playerTwoInfo").append("<span class='score'>" + game.players[1].score + "</span> <img class='info-pic' src='img/" + choice + ".jpg'> Player Two");

      $("#playerTwoWeapon").hide();
      $("#gameBoard").show();

      $("#turnIndicator span").append('<img class="info-pic" src="img/' + game.players[game.turn].mark + '.jpg">')
    });
  });

  $(".newGame").click(function() {
    game.board = new Board(3,3);
    $("#gameBoard table td").empty();
    $('#gameBoard table').removeClass('gameover');
    $("#success").hide();
  });
});
