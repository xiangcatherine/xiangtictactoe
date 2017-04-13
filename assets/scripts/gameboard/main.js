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
  const gameBoard = ['', '', '', '', '', '', '', '', '']
  let gameState = 'active'
  let turnCount = 0
  let currPlayer = 'X'

  $('.cell').on('click', function () {
    if (checkValidClick(this.id) === false) {
      return
    }

    incrementTurnCount()
    updateArray(this.id)
    checkGameOutcome()
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
  const updateArray = function (cellId) {
    // put X/O into game board
    $('#' + cellId).text(currPlayer)

    // push what's in the clicked cell to the array
    gameBoard[parseInt(cellId)] = currPlayer
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

  const renderGameOver = function (outcome) {
    gameState = 'inactive'
    console.log(outcome)
    // stop the user from being able to click on the cells
    // show some indicator of winer/loser
  }

  const restartGame = function () {
    // clear the array
    // updateBoard
  }

  const updateBoard = function () {
    // take the array and update html with the values
  }
})

module.exports = {
}

// $(document).ready(function () {
//   let turnCount = 0
//   const playButton = $('#playButton')
//   const title = $('.TicTacToe')
//   const restart = $('#restartButton')
//   const cells = $('.cell')
//   const board = []

  // $('#playButton').on('click', function () {
  //   playButton.fadeOut('slow')
  //   title.fadeOut('slow')
  // })
  // restart.on('click', function () {
  //   $('.cell').text('')

  // when you click the play button, fade out the button + 'Tic Tac Toe'
//   playButton.on('click', function () {
//     $('.cell').text('')
//     playButton.fadeOut('slow')
//     title.fadeOut('slow')
//     $('#grid').find('.cell').on('click', function () {
//       if (turnCount % 2 === 0) {
//         $(this).text('X')
//         checkVictory('X')
//       } else {
//         $(this).text('O')
//         checkVictory('O')
//       }
//       turnCount++
//     })
//   })
//
//   function checkVictory (player) {
//     // 0, 1, 2
//     if (cells.find('#cell-0').text() !== '') {
//       if (cells.find('#cell-0').text() === cells.find('#cell-1').text()) {
//         if (cells.find('#cell-0').text() === ('#cell-2').text()) {
//           console.log('Game over! ' + player + ' is the winner!')
//         }
//       }
//       // 0, 3, 6
//       if (cells.find('#cell-0').text() === cells.find('#cell-3').text()) {
//         if (cells.find('#cell-0').text() === ('#cell-6').text()) {
//           console.log('Game over! ' + player + ' is the winner!')
//         }
//       }
//       // 0, 4, 8
//       if (cells.find('#cell-0').text() === cells.find('#cell-4').text()) {
//         if (cells.find('#cell-0').text() === ('#cell-8').text()) {
//           console.log('Game over! ' + player + ' is the winner!')
//         }
//       }
//     }
//     // 1, 4, 7
//     if (cells.find('#cell-1').text() !== '') {
//       if (cells.find('#cell-1').text() === cells.find('#cell-4').text()) {
//         if (cells.find('#cell-1').text() === ('#cell-7').text()) {
//           console.log('Game over! ' + player + ' is the winner!')
//         }
//       }
//     }
//     // 2, 5, 8
//     if (cells.find('#cell-2').text() !== '') {
//       if (cells.find('#cell-2').text() === cells.find('#cell-5').text()) {
//         if (cells.find('#cell-2').text() === ('#cell-8').text()) {
//           console.log('Game over! ' + player + ' is the winner!')
//         }
//       }
//       // 2, 4, 6
//       if (cells.find('#cell-2').text() === cells.find('#cell-4').text()) {
//         if (cells.find('#cell-2').text() === ('#cell-6').text()) {
//           console.log('Game over! ' + player + ' is the winner!')
//         }
//       }
//     }
//     // 3, 4, 5
//     if (cells.find('#cell-3').text() !== '') {
//       if (cells.find('#cell-3').text() === cells.find('#cell-4').text()) {
//         if (cells.find('#cell-3').text() === ('#cell-5').text()) {
//           console.log('Game over! ' + player + ' is the winner!')
//         }
//       }
//     }
//     // 6, 7, 8
//     if (cells.find('#cell-6').text() !== '') {
//       if (cells.find('#cell-6').text() === cells.find('#cell-7').text()) {
//         if (cells.find('#cell-6').text() === ('#cell-8').text()) {
//           console.log('Game over! ' + player + ' is the winner!')
//         }
//       }
//     } else {
//       if (cells.find('#cell-0').text() !== '') {
//         if (cells.find('#cell-1').text() !== '') {
//           if (cells.find('#cell-2').text() !== '') {
//             if (cells.find('#cell-3').text() !== '') {
//               if (cells.find('#cell-4').text() !== '') {
//                 if (cells.find('#cell-5').text() !== '') {
//                   if (cells.find('#cell-6').text() !== '') {
//                     if (cells.find('#cell-7').text() !== '') {
//                       if (cells.find('#cell-8').text() !== '') {
//                         console.log('It is a tie!')
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     restart.on('click', function () {
//       $('.cell').text('')
//     })
//   }
// })
