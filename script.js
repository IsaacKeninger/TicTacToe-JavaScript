// Script for in-game mechanics and screen updates

let cells = document.querySelectorAll('.cell')
let turn = 0;
let winCondition = false;
let moveCount = 0;
let winner = "";
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

cells.forEach((cell) => {
    cell.addEventListener('click', function(){
        if (winCondition) return; // checks win condition
        if (cell.innerText != '') return; // ignore clicks on filled cells

        // Turns
        if (turn == 0){
            cell.innerText = 'O';
            gameTracker.set(cell.id, 'O');
        } else if (turn == 1){
            cell.innerText = 'X';
            gameTracker.set(cell.id, 'X');
        }

        moveCount++; // Update Count of Turns

        let winner = winCheck();
        if (winner) {
            winCondition = true;
            showEnd(winner);
            return;
        }

        if (moveCount == 9){
            winCondition = true;
            showEnd("Stalemate")
            return;
        };

        // Switch Turns
        turn = 1 - turn;
    });
});

reset.addEventListener('click', resetGame);

// Functions
function winCheck() {
    for (let sequence of winningVals) {
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

function showEnd(winner){

    if (winner != "Stalemate"){
        document.getElementById("endText").innerText = winner + " Wins!";
    } else{
        document.getElementById("endText").innerText = "The game ends in a Stalemate.";
    }

    document.getElementById("reset").style.display = "block";
};

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