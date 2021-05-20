//win by getting 3 x's or 3 o's in a row
//if no one gets 3 in a row, both players lose
//rows go vertically, horizontally or diagonally

// 1.)
//create a displayBoard function which will take a data and display vertical and horizontal lines and x's and o's depending on state of the board

//2.)
//two-player game and we would want to alternate turns between players and each player is assigned an x or an 0 - define players: player1 & player2

//input for where the next move is

//there are nine unique position on the board - create an array of each unique positions in a particular order to represent the position in the grid and then remove the position from the array when selected by the player and then when the array.length === 0 the game is over 

///3.) Create a function that check for a winning three in a row

let gameState =
[
    ['x', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
]

let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

function displayBoard(gameState) {

    gameState.forEach(row => {
        console.log(`|${row.join('|')}|`)
        console.log('-------')
    })
}

displayBoard(positions)


function ticTacToe() {

    let winner = null;

    const playerOne = 'x'
    const playerTwo = 'o'

    const playerList = [playerOne, playerTwo]

    do {
        playerList.forEach(player => {
            //select a position from the === ' '
        })
      } while (winner = null);


      //winner = playerOne or playerTwo or DRAW


}

ticTacToe()