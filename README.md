# General Assembly _ Project 0
## Tic Tac Toe (Naughts & Crosses) Game.


### Technology Used
* HTML
* CSS (Bootstrap)
* Javascript
* jQuery

### Aim Of The Game

The aim of the game is to get three matching icons in a row. Horizontally, veritically or diagonally.
Users select their icon and then take it in turns placing the icon on the board by clicking in a sqaure. An alert screen will show declaring the winning player & their icon. If, after 9 clicks, there is no winner. A different screen shows declaring a draw and offering a 'Play Again' button. 


### Functionality

* A function runs a For Loop after every click to check weather the player has a matching combination against a hard-coded array of possible winning variables.

* A draw is calculated by checking to see if the array.length of each player moves array is equal to 9. If so a draw is shown. 

* The Reset Button, clears PlayerMoves arrays, PlayerIcons and all the icons currently on the baord. Players must reselect their icons and start the game again.  


## Blank Game Board
![Blank Game](https://github.com/jamaspy/tic-tac-toe/blob/master/README-Images/blank.png)
## Vertical Win Example
![Vertical Win Example](https://github.com/jamaspy/tic-tac-toe/blob/master/README-Images/vert-win.png)
## Horizontal Win Example
![Horizontal Win Example](https://github.com/jamaspy/tic-tac-toe/blob/master/README-Images/hoz-win.png)
## Diagonal Win Example
![Diagonal Win Example](https://github.com/jamaspy/tic-tac-toe/blob/master/README-Images/diag-win.png)
## Draw Example
![Diagonal Win Example](https://github.com/jamaspy/tic-tac-toe/blob/master/README-Images/draw.png)

## Things I Would Like To Add
* An option to increase the baord size (6x6, 9x9).
* Ability to select from a slection of playing icons.
* Randon background GIFs shown on the winning and draw modal displays.
* Keeping a tally of the wins so players can play a "Best of X" style game.
