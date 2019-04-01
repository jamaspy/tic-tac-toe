console.log("game-logic.js LOADED");

const winningCombos = ["123", "456", "789", "147", "258", "369", "159", "357"]

const theGame = {
  player1: null,
  player2: null,

  player1Moves: [],
  player2Moves: [],
}




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
