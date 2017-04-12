'use strict'

// Grid layout
//
// The game grid is represented in the array grid.cells as follows:
//
// [0] [1] [2]
// [3] [4] [5]
// [6] [7] [8]

// winningCombinations
//   [0,1,2], yes
//   [3,4,5], yes
//   [6,7,8], yes
//   [6,4,2], yes
//   [0,3,6], yes
//   [1,4,7], yes
//   [2,5,8], yes
//   [0,4,8], yes
//
// const ticTacToe = (function () {
//   let board = []
//   let boardWidth = 3
//   let currPlayer = 'X'
//   cells = document.getElementsByClassName('cell')
//   const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [2, 4, 6],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8]
//   ]
// })

$(document).ready(function () {
  let turnCount = 0
  const playButton = $('#playButton')
  const title = $('.TicTacToe')
  const restart = $('#restartButton')
  const cells = $('.cell')
  const board = []

  // $('#playButton').on('click', function () {
  //   playButton.fadeOut('slow')
  //   title.fadeOut('slow')
  // })
  // restart.on('click', function () {
  //   $('.cell').text('')

  playButton.on('click', function () {
    $('.cell').text('')
    playButton.fadeOut('slow')
    title.fadeOut('slow')
    $('#grid').find('.cell').on('click', function () {
      if (turnCount % 2 === 0) {
        $(this).text('X')
        checkVictory('X')
      } else {
        $(this).text('O')
        checkVictory('O')
      }
      turnCount++
    })
  })

  function checkVictory (player) {
    // 0, 1, 2
    if ($('.cells').find('#cell-0').text() !== '') {
      if ($('.cells').find('#cell-0').text() === $('board').find('#cell-1').text()) {
        if ($('.cells').find('#cell-0').text() === $('#cell-2').text()) {
          console.log('Game over! ' + player + ' is the winner!')
        }
      }
      // 0, 3, 6
      if ($('.cells').find('#cell-0').text() === $('.cells').find('#cell-3').text()) {
        if ($('.cells').find('#cell-0').text() === $('#cell-6').text()) {
          console.log('Game over! ' + player + ' is the winner!')
        }
      }
      // 0, 4, 8
      if ($('.cells').find('#cell-0').text() === $('.cells').find('#cell-4').text()) {
        if ($('.cells').find('#cell-0').text() === $('#cell-8').text()) {
          console.log('Game over! ' + player + ' is the winner!')
        }
      }
    }
    // 1, 4, 7
    if ($('.cells').find('#cell-1').text() !== '') {
      if ($('.cells').find('#cell-1').text() === $('.cells').find('#cell-4').text()) {
        if ($('.cells').find('#cell-1').text() === $('#cell-7').text()) {
          console.log('Game over! ' + player + ' is the winner!')
        }
      }
    }
    // 2, 5, 8
    if ($('.cells').find('#cell-2').text() !== '') {
      if ($('.cells').find('#cell-2').text() === $('.cells').find('#cell-5').text()) {
        if ($('.cells').find('#cell-2').text() === $('#cell-8').text()) {
          console.log('Game over! ' + player + ' is the winner!')
        }
      }
      // 2, 4, 6
      if ($('.cells').find('#cell-2').text() === $('.cells').find('#cell-4').text()) {
        if ($('.cells').find('#cell-2').text() === $('#cell-6').text()) {
          console.log('Game over! ' + player + ' is the winner!')
        }
      }
    }
    // 3, 4, 5
    if ($('.cells').find('#cell-3').text() !== '') {
      if ($('.cells').find('#cell-3').text() === $('.cells').find('#cell-4').text()) {
        if ($('.cells').find('#cell-3').text() === $('#cell-5').text()) {
          console.log('Game over! ' + player + ' is the winner!')
        }
      }
    }
    // 6, 7, 8
    if ($('.cells').find('#cell-6').text() !== '') {
      if ($('.cells').find('#cell-6').text() === $('.cells').find('#cell-7').text()) {
        if ($('.cells').find('#cell-6').text() === $('#cell-8').text()) {
          console.log('Game over! ' + player + ' is the winner!')
        }
      }
    } if ($('.cells').find('#cell-0').text() !== '') {
        if ($('.cells').find('#cell-1').text() !== '') {
          if ($('.cells').find('#cell-2').text() !== '') {
            if ($('.cells').find('#cell-3').text() !== '') {
              if ($('.cells').find('#cell-4').text() !== '') {
                if ($('.cells').find('#cell-5').text() !== '') {
                  if ($('.cells').find('#cell-6').text() !== '') {
                    if ($('.cells').find('#cell-7').text() !== '') {
                      if ($('.cells').find('#cell-8').text() !== '') {
                        console.log('It is a tie!')
                      }
                    }
                  }
                }
              }
            }
          }
        }
    }
    restart.on('click', function () {
      $('.cell').text('')
    })
  }
})

module.exports = {
}
