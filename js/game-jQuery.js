$(document).ready(function() {
  console.log("**game-jQuery LOADED**");

  //Set Player 1 Icon
  $("#player1-naught").on("click", function() {
    theGame.player1.icon = "O";
    theGame.player2.icon = "X";
    $("#player1_icon").html(theGame.player1.icon);
    $("#player2_icon").html(theGame.player2.icon);
  });

  $("#player1-cross").on("click", function() {
    theGame.player1.icon = "X";
    theGame.player2.icon = "O";
    $("#player1_icon").html(theGame.player1.icon);
    $("#player2_icon").html(theGame.player2.icon);
  });

  //Set Player 2 Icon
  $("#player2-naught").on("click", function() {
    theGame.player2.icon = "O";
    theGame.player1.icon = "X";
    $("#player2_icon").html(theGame.player2.icon);
    $("#player1_icon").html(theGame.player1.icon);
  });

  $("#player2-cross").on("click", function() {
    theGame.player2.icon = "X";
    theGame.player1.icon = "O";
    $("#player2_icon").html(theGame.player2.icon);
    $("#player1_icon").html(theGame.player1.icon);
  });

  //Click square function
  $(".square").on("click", function() {
    theGame.switchPlayer();
    let squareId = $(this).attr("data-squareid");
    $(this).html(theIcon);
    let squareValue = $(this).attr("data-squarevalue")
    theArray.push(squareValue)
    theGame.checkWinner(theArray);
  });

  //Change Sqaure color on hover
  $(".square").hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });

});
