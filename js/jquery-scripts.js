$(document).ready(function() {
  $("#playerOneWeapon .choose").click(function() {
    var choice = $(this).attr('class').split(' ')[1];
    playerOne = new Player(choice);

    $("#playerOneWeapon").hide();
    $("#playerTwoWeapon").show();
  });
  
  $("#playerTwoWeapon .choose").click(function() {
    var choice = $(this).attr('class').split(' ')[1];
    playerTwo = new Player(choice);

    $("#playerTwoWeapon").hide();
  });

});
