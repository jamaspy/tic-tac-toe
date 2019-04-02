console.log("game-logic.js LOADED");

const resetGame = () => {
location.reload();
};


const theGame = {
  player1: {
    icon: undefined,
    currentlyPlaying: true
  },
  player2: {
    icon: undefined,
    currentlyPlaying: false
  },
  player1Moves: [],
  player2Moves: [],
  winningCombos: ["123", "456", "789", "147", "258", "369", "159", "357"],
};

const checkWinner = (arr) => {
  toWinningString = arr.sort().join().replace(/,/g, "");
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
      console.log("WINNER");
      break;
    }
  }

}

const switchPlayer = () => {
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
};







// THOUGHTS & NOTES
// > Assign each player a moves array.
// > Assign each square a move value.
// > Push that value into the array when a square is clicked.
// There are 8 possible winning coimbinations
//****THERE ARE MORE WAYS TO WIN***
//Sort the array to cover the player not clicking on the squares in order
// Google join() methods for arrays
// p1moves: []
// p2moves: []
// winningCombos = "123" "456" "789" "147" "258" "369" "159" "357"
// make game setup function
// Find away to keep track of whos go it is
