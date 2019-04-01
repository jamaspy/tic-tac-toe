$(document).ready(function() {
  console.log("game-jQuery LOADED");

  //Set Player 1 Icon
  $("#player1-naught").on("click", function() {
    theGame.player1 = "0";
    theGame.player2 = "X";
    $("#player1_icon").html(theGame.player1);
    $("#player2_icon").html(theGame.player2);
  });

  $("#player1-cross").on("click", function() {
    theGame.player1 = "X";
    theGame.player2 = "O";
    $("#player1_icon").html(theGame.player1);
    $("#player2_icon").html(theGame.player2);
  });

  //Set Player 2 Icon
  $("#player2-naught").on("click", function() {
    theGame.player2 = "0";
    theGame.player1 = "X";
    $("#player2_icon").html(theGame.player2);
    $("#player1_icon").html(theGame.player1);
  });

  $("#player2-cross").on("click", function() {
    theGame.player2 = "X";
    theGame.player1 = "O";
    $("#player2_icon").html(theGame.player2);
    $("#player1_icon").html(theGame.player1);
  });

  //Click square function
  $(".square").on("click", function() {
    let squareId = $(this).attr("data-squareid");
    $(this).html(theGame.player1);
    let squareValue = $(this).attr("data-squarevalue")
    console.log(squareValue);
  });






});
