$(document).ready(function() {
  console.log("game-jQuery LOADED");

  //Get Player1 Icon
  //TODO: Add in IF logic that the both players can not be the same icon
  $("#player1-naught").on("click", function() {
    $("#player1_icon").html("O");
    let player1ChosenIcon = "0"
    theGame.player1 = "0"
    console.log(player1ChosenIcon);
  });

  $("#player1-cross").on("click", function() {
    $("#player1_icon").html("X");
    let player1ChosenIcon = "X"
    theGame.player1 = "X"
    console.log(player1ChosenIcon);
  });

  //Get Player2 Icon
  $("#player2-naught").on("click", function() {
    $("#player2_icon").html("O");
    let player2ChosenIcon = "0"
    theGame.player2 = "0"
    console.log(player2ChosenIcon);
  });

  $("#player2-cross").on("click", function() {
    $("#player2_icon").html("X");
    let player2ChosenIcon = "X"
    theGame.player2 = "X"
    console.log(player2ChosenIcon);
  });

  //Click square Function
  $(".square").on("click", function() {
    let squareId = $(this).attr("data-squareid");
    $(this).html("O");
    let squareValue = $(this).attr("data-squarevalue")
    theGame.player1Moves.push(squareValue)
    console.log(theGame.player1Moves);
  });






});
