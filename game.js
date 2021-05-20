function ticTacToe() {

    let winner = null;

    let boardGrid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]

    let availablePositions = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const playerList = ['x', 'o']

    function displayBoard(gameState) {

        gameState.forEach(row => {
            console.log(`|${row.join('|')}|`)
            console.log('-------')
        })
    };

    function getRandomPosition(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const position = array[randomIndex];
        return position;
    }

    do {
        //Loop through the list of players ("x" and "o") and do the following for each until there is a winner:
        playerList.forEach(player => {
            console.log({availablePositions})
            //Player randomly selects position from array of available positions

            let selectedPosition = getRandomPosition(availablePositions)
            console.log({selectedPosition})

            //After the player selects position, it is removed from the array so it isn't selected again
            let selectedPositionIndex = availablePositions.indexOf(selectedPosition)
            availablePositions.splice(selectedPositionIndex, 1 )

            //Loop through the tic tac toe board grid
            boardGrid.forEach(rowArray => {
                //if a row in the grid includes the position the player selected, it is replaced with the player aka "x" or "o"
                if(rowArray.includes(selectedPosition)) {
                    let selectedPositionIndex = rowArray.indexOf(selectedPosition)
                    rowArray.splice(selectedPositionIndex, 1, player)
                }
            })

            displayBoard(boardGrid)

            //Check for 3 in a row winner
            //Winning row combinations:
            // boardGrid[0][0] boardGrid[0][1] boardGrid[0][2]
            // boardGrid[1][0] boardGrid[1][1] boardGrid[1][2]
            // boardGrid[2][0] boardGrid[2][1] boardGrid[2][2]
            boardGrid.forEach(rowArray => {
                // console.log("rowArray at index 0:", rowArray[0])
                if(rowArray[0] === player && rowArray[1] === player && rowArray[2] === player) {
                    winner = player
                }
            })

            //Winning column combinations:
            // boardGrid[0][0] boardGrid[1][0] boardGrid[2][0]
            // boardGrid[0][1] boardGrid[1][1] boardGrid[2][1]
            // boardGrid[0][2] boardGrid[1][2] boardGrid[2][2]

            //Winning diagonal combinations:
            // boardGrid[0][0] boardGrid[1][1] boardGrid[2][2]
            // boardGrid[0][2] boardGrid[1][1] boardGrid[2][0]

            if(boardGrid[0][0] === player && boardGrid[1][0] === player && boardGrid[2][0] ) {
                winner = player
            } else if( boardGrid[0][1] === player && boardGrid[1][1] === player && boardGrid[2][1] === player) {
                winner = player
            } else if(boardGrid[0][2] === player && boardGrid[1][2] === player && boardGrid[2][2] === player ) {
                winner = player
            } else if(boardGrid[0][0] === player && boardGrid[1][1] === player && boardGrid[2][0] === player ) {
                winner = player
            }

            //Check for tie game winner
            if(availablePositions.length === 0) {
                winner = 'tie game'
            }

        })
    } while (winner === null);

    console.log({winner})

    if(winner != null) {
        return winner
    }

}

ticTacToe()