// Script for in-game mechanics and screen updates

let cells = document.querySelectorAll('.cell') // Selects all the HTML Div's named cell
let turn = 0; // Turn of Game
let winCondition = false; // True if game is won, false otherwise
let moveCount = 0; // Tracks number of game turns/moves
let winner = ""; // Tracks Winner of the game (if applicable)

// This tracks which value is inside each cell of the board.
let gameTracker = new Map([
    ["1", null],
    ["2", null],
    ["3", null],
    ["4", null],
    ["5", null],
    ["6", null],
    ["7", null],
    ["8", null],
    ["9", null],
]);

// All possible pattens to win the game
const winningVals = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

// 
cells.forEach((cell) => { // This will iterate over all cells to give properties
    cell.addEventListener('click', function(){ // Activates below code if a cell is clicked
        if (winCondition) return; // checks win condition
        if (cell.innerText != '') return; // ignore clicks on filled cells

        // Set Value in cell based off Turn/Player
        if (turn == 0){
            cell.innerText = 'O';
            gameTracker.set(cell.id, 'O');
        } else if (turn == 1){
            cell.innerText = 'X';
            gameTracker.set(cell.id, 'X');
        }

        moveCount++; // Update Count of Turns

        let winner = winCheck(); //Returns a string to be checked
        if (winner) {
            winCondition = true;
            showEnd(winner);
            return;
        }

        // Check Stalemate Condition
        if (moveCount == 9){ 
            winCondition = true;
            showEnd("Stalemate")
            return;
        };

        // Switch Turns
        turn = 1 - turn;
    });
});

reset.addEventListener('click', resetGame); //Reset Game if Button Clicked

// Functions
function winCheck() {
    for (let sequence of winningVals) { //for all sequences
        // Check if all positions are 'O'
        if (sequence.every(pos => gameTracker.get(pos.toString()) == 'O')) {
            return "Player 1";
        }
        // Check if all positions are 'X'
        if (sequence.every(pos => gameTracker.get(pos.toString()) == 'X')) {
            return "Player 2";
        }
    }
    return null;
}

// This changes the screen depending on who winner is / stalemate.
function showEnd(winner){

    if (winner != "Stalemate"){
        document.getElementById("endText").innerText = winner + " Wins!";
    } else{
        document.getElementById("endText").innerText = "The game ends in a Stalemate.";
    }

    document.getElementById("reset").style.display = "block";
};

// This resets game to inital board.
function resetGame(){
    cells.forEach(cell => {
        cell.innerText = '';
    });
    document.getElementById("endText").innerText = "";
    document.getElementById("reset").style.display = "none";
    gameTracker.forEach((value,key) => {
        gameTracker.set(key,null);
    });
    winCondition = false;
    turn = 0;
    moveCount = 0;
};