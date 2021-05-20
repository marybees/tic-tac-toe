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


function ticTacToe() {

    // Variables

    let winner = null;

    let boardGrid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]

    let availablePositions = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const playerList = ['x', 'o']

    //Helper Functions

    function displayBoard(gameState) {

        gameState.forEach(row => {
            console.log(`|${row.join('|')}|`)
            console.log('-------')
        })
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * max - min) + min
    };

    do {
        //Loop through the list of players ("x" and "o") and do the following for each until there is a winner:
        playerList.forEach(player => {
            //Player randomly selects position from array of available positions

            let selectedPosition = getRandomInt(1, availablePositions.length)
            console.log({selectedPosition})

            //After the player selects position, it is removed from the array so it isn't selected again
            let selectedPositionIndex = availablePositions.indexOf(selectedPosition)
            availablePositions.splice(selectedPositionIndex, 1 )
            console.log({availablePositions})

            //Loop through the tic tac toe board grid
            boardGrid.forEach(rowArray => {
                //if a row in the grid includes the position the player selected, it is replaced with the player aka "x" or "o"
                if(rowArray.includes(selectedPosition)) {
                    let selectedPositionIndex = rowArray.indexOf(selectedPosition)
                    rowArray.splice(selectedPositionIndex, 1, player)
                }
            })

            displayBoard(boardGrid)

        })
    } while (winner = null);


    if(winner != null) {
        return winner
    }

      //winner = playerOne or playerTwo or DRAW

}

ticTacToe()