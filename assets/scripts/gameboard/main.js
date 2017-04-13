/*
 *  The game grid is represented as follows:
 *  [0] [1] [2]
 *  [3] [4] [5]
 *  [6] [7] [8]
 *
 *  winningCombinations
 *    [0,1,2]
 *    [3,4,5]
 *    [6,7,8]
 *    [6,4,2]
 *    [0,3,6]
 *    [1,4,7]
 *    [2,5,8]
 *    [0,4,8]
 *
 *  High Level Pseudocode
 *    1. User action
 *       - pull xo data from html gameboard
 *       - push xo data onto gameboard
 *         - place Xs and Os
 *       - restart (button)
 *    2. game logic
 *       - check for win:
 *           - horizontal: (0, 1, 2), (3, 4, 5), (6, 7, 8)
 *           - vertical: (0, 3, 6), (1, 4, 7), (2, 5, 8)
 *           - diagonal: (0, 4, 8), (2, 4, 6)
 *       - check for draw
 *       - game over
 */

'use strict'

$(document).ready(function () {
  let gameBoard = ['', '', '', '', '', '', '', '', '']
  let gameState = 'active'
  let turnCount = 0
  let currPlayer = 'X'

  /*
   *  Overall flow of the game
   */
  $('.cell').on('click', function () {
    if (checkValidClick(this.id) === false) {
      return
    }

    incrementTurnCount()
    insertIntoGameBoard(this.id)
    checkGameOutcome()
  })

  $('#restartButton').on('click', function () {
    restartGame()
  })

  /*
   *  Check if user is allowed to click on a cell
   */
  const checkValidClick = function (cellId) {
    // ignore if there's already input in that cell
    if (gameBoard[parseInt(cellId)] !== '') {
      return false
    }

    // ignore if game is over
    if (gameState !== 'active') {
      return false
    }

    return true
  }

  /*
   *  Keeps track of whose turn it is
   */
  const incrementTurnCount = function () {
    turnCount++

    if (turnCount % 2 === 0) {
      currPlayer = 'X'
    } else {
      currPlayer = 'O'
    }
  }

  /*
   *  Places X or O into html and updates array[index] with new value
   */
  const insertIntoGameBoard = function (cellId) {
    // push what's in the clicked cell to the array
    gameBoard[parseInt(cellId)] = currPlayer

    updateGameBoard(gameBoard)
  }

  /*
   *  Take the array and update gameBoard with the values
   */
  const updateGameBoard = function (valueArray) {
    gameBoard = valueArray

    // for each element in the gameBoard, update the html board
    for (let i = 0; i < gameBoard.length; i++) {
      $('#' + i).text(gameBoard[i])
    }
  }

  /*
   *  Checks for win or draw
   */
  const checkGameOutcome = function () {
    if (turnCount < 5) {
      return
    }

    if ((gameBoard[0] === currPlayer && gameBoard[1] === currPlayer && gameBoard[2] === currPlayer) ||
        (gameBoard[3] === currPlayer && gameBoard[4] === currPlayer && gameBoard[5] === currPlayer) ||
        (gameBoard[6] === currPlayer && gameBoard[7] === currPlayer && gameBoard[8] === currPlayer) ||
        (gameBoard[0] === currPlayer && gameBoard[3] === currPlayer && gameBoard[6] === currPlayer) ||
        (gameBoard[1] === currPlayer && gameBoard[4] === currPlayer && gameBoard[7] === currPlayer) ||
        (gameBoard[2] === currPlayer && gameBoard[5] === currPlayer && gameBoard[8] === currPlayer) ||
        (gameBoard[0] === currPlayer && gameBoard[4] === currPlayer && gameBoard[8] === currPlayer) ||
        (gameBoard[2] === currPlayer && gameBoard[4] === currPlayer && gameBoard[6] === currPlayer)) {
      renderGameOver('win')
    } else if (turnCount === 9) {
      renderGameOver('draw')
    }
  }

  /*
   *  Displays message after game over
   */
  const renderGameOver = function (outcome) {
    gameState = 'inactive'

    // show some indicator of winner/loser
    if (outcome === 'win') {
      updateOutcomeText(currPlayer + ' wins!')
    } else {
      updateOutcomeText("It's a draw!")
    }
  }

  /*
   *  Resets all game variables
   */
  const restartGame = function () {
    gameState = 'active'
    turnCount = 0
    updateGameBoard(['', '', '', '', '', '', '', '', ''])
    updateOutcomeText('')
  }

  const updateOutcomeText = function (message) {
    $('.outcomeText').text(message)
  }
})

module.exports = {
}

// $('#playButton').on('click', function () {
//   playButton.fadeOut('slow')
//   title.fadeOut('slow')
// })
