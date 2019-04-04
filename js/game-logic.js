console.log("**game-logic.js LOADED**");

const theGame = {
  player1: {
    icon: undefined,
    currentlyPlaying: true,
  },
  player2: {
    icon: undefined,
    currentlyPlaying: false
  },
  player1Moves: [],
  player2Moves: [],
  winningCombos: ["123", "456", "789", "147", "258", "369", "159", "357"],

  resetGame: function() {
    theGame.player1Moves.length = 0
    theGame.player1.icon = undefined
    $(".square").removeClass('disableClick');
    $("#player1_icon").html("");
    theGame.player2Moves.length = 0
    theGame.player2.icon = undefined
    $("#player2_icon").html("");
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
        } else {
          $("#winnerIcon").html("Player 2");
        };
        $('#myModal').modal('show')
        break;
      }
    }
    if (theGame.player1Moves.length + theGame.player2Moves.length == 9) {
      $("#draw-message").html("That's A Draw Jedi's, Play Again");
      $('#myModalDraw').modal('show');
      console.log("DRAW");
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
