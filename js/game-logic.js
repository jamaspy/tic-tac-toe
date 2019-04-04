console.log("**game-logic.js LOADED**");

const theGame = {
  player1: {
    icon: undefined,
    currentlyPlaying: true,
    score: 0,
  },

  player2: {
    icon: undefined,
    currentlyPlaying: false,
    score: 0,
  },


  player1Moves: [],
  player2Moves: [],
  winningCombos: ["123", "456", "789", "147", "258", "369", "159", "357"],

  playAgain: function() {
    theGame.player1Moves.length = 0;
    theGame.player1.icon = undefined;
    theGame.player1.currentlyPlaying = true;
    $(".square").removeClass('disableClick');
    $("#player1_icon").html("");

    theGame.player2Moves.length = 0;
    theGame.player2.icon = undefined;
    theGame.player2.currentlyPlaying = false;
    $("#player2_icon").html("");
    $(".square").html("");
  },

  resetGame: function() {
    theGame.player1Moves.length = 0;
    theGame.player1.icon = undefined;
    theGame.player1.currentlyPlaying = true;
    theGame.player1.score = 0;
    $(".square").removeClass('disableClick');
    $("#player1_icon").html("");
    $("#player1Score").html("0")

    theGame.player2Moves.length = 0;
    theGame.player2.icon = undefined;
    theGame.player2.currentlyPlaying = false;
    theGame.player2.score = 0;
    $("#player2_icon").html("");
    $("#player2Score").html("0");
    $(".square").html("");
  },

  checkWinner: function(arr) {
    toWinningString = arr.join().replace(/,/g, "");
    for (let i = 0; i < theGame.winningCombos.length; i++) {
      const candidate = theGame.winningCombos[i];
      let matches = 0;
      for (let j = 0; j < candidate.length; j++) {
        if (toWinningString.includes(candidate[j])) {
          matches++;
        }
      }
      if (matches === 3) {
        if (theIcon == theGame.player1.icon) {
          $("#winnerIcon").html("Player 1");
          theGame.player1.score += 1;
          $("#player1Score").html(theGame.player1.score)
        } else {
          $("#winnerIcon").html("Player 2");
          theGame.player2.score += 1;
          $("#player2Score").html(theGame.player2.score)
        };
        $('#myModal').modal('show')
        break;
      }
    }
    if (theGame.player1Moves.length + theGame.player2Moves.length == 9) {
      $("#draw-message").html("That's A Draw Jedi's, Play Again");
      $('#myModalDraw').modal('show');
    }
  },

  switchPlayer: function() {
    if (theGame.player1.currentlyPlaying == true) {
      theIcon = theGame.player1.icon;
      theArray = theGame.player1Moves;
      theGame.player1.currentlyPlaying = false;
    } else {
      theIcon = theGame.player2.icon;
      theArray = theGame.player2Moves;
      theGame.player1.currentlyPlaying = true;
    }
    return (theIcon);
  },
};
