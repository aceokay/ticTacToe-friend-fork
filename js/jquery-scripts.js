$(document).ready(function() {
  $("#playerOneWeapon .choose").click(function() {
    var choice = $(this).attr('class').split(' ')[1];
    players = [new Player(choice)];
    turn = 0;
    board = new Board(3,3);

    $("#playerOneInfo").append("Player One <img class='info-pic' src='img/" + choice + ".jpg'> <span class='score'>0</span>");

    $("#playerOneWeapon").hide();
    $("#playerTwoWeapon").show();
    $("#playerInfo").show();
    $("#playerTwoWeapon ." + choice).parent().hide();

    $("#playerTwoWeapon .choose").click(function() {
      var choice = $(this).attr('class').split(' ')[1];
      players.push(new Player(choice));

      $("#playerTwoInfo").append("<span class='score'>0</span> <img class='info-pic' src='img/" + choice + ".jpg'> Player Two");

      $("#playerTwoWeapon").hide();
      $("#gameBoard").show();

      $("#turnIndicator span").append('<img class="info-pic" src="img/' + players[turn].mark + '.jpg">')

    });


  });


});
