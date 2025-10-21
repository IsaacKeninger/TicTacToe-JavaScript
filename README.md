Tic Tac Toe in JavaScript

This is a simple browser-based Tic Tac Toe game for two players. Player 1 uses O and Player 2 uses X. Players take turns clicking on the board to place their mark. The game keeps track of whose turn it is and prevents moves on cells that are already filled.

The board is a 3x3 grid. The game checks for a winner after every move. A winner is declared if a player gets three in a row horizontally, vertically, or diagonally. If all cells are filled and no one has won, the game ends in a stalemate. After the game ends, a reset button appears so players can start over.

How to play:

Open the github Pages link.

Click on any empty cell to place your mark.

Players alternate turns until someone wins or all cells are filled.

When the game ends, click reset to start a new game.

The game uses JavaScript to track the board state and check for winning combinations. Each cell has a unique ID, and the game keeps track of moves using a map. When a player wins or the board is full, the game stops accepting moves until reset is clicked.

Future improvements could include an AI opponent, keeping score over multiple games, or highlighting the winning line when the game ends.
