'use strict'

// (1) Grid layout
//
// The game grid is represented in the array grid.cells as follows:
//
// [0] [1] [2]
// [3] [4] [5]
// [6] [7] [8]

$(document).ready(function () {
  let turnCount = 0

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

  function checkVictory (player) {
    if ($('.cells').find('#cell-0').text() !== '') {
      if ($('.cells').find('#cell-0').text() === $('board').find('#cell-1').text()) {
        if ($('.cells').find('#cell-0').text() === $('#cell-2').text()) {
          console.log('Game over! ' + player + ' is the winner!')
          $('#newGame').removeClass('invisible')
        }
      }
      if ($('.cells').find('#cell-0').text() === $('.cells').find('#cell-3').text()) {
        if ($('.cells').find('#cell-0').text() === $('#cell-6').text()) {
          console.log('Game over! ' + player + ' is the winner!')
          $('#newGame').removeClass('invisible')
        }
      }
      if ($('.cells').find('#cell-0').text() === $('.cells').find('#cell-4').text()) {
        if ($('.cells').find('#cell-0').text() === $('#cell-8').text()) {
          console.log('Game over! ' + player + ' is the winner!')
          $('#newGame').removeClass('invisible')
        }
      }
    }
    if ($('.cells').find('#cell-1').text() !== '') {
      if ($('.cells').find('#cell-1').text() === $('.cells').find('#cell-6').text()) {
        if ($('.cells').find('#cell-3').text() === $('#cell-7').text()) {
          console.log('Game over! ' + player + ' is the winner!')
          $('#newGame').removeClass('invisible')
        }
      }
    }
    if ($('.cells').find('#cell-2').text() !== '') {
      if ($('.cells').find('#cell-2').text() === $('.cells').find('#cell-5').text()) {
        if ($('.cells').find('#cell-2').text() === $('#cell-8').text()) {
          console.log('Game over! ' + player + ' is the winner!')
          $('#newGame').removeClass('invisible')
        }
      }
      if ($('.cells').find('#cell-2').text() === $('.cells').find('#cell-4').text()) {
        if ($('.cells').find('#cell-2').text() === $('#cell-6').text()) {
          console.log('Game over! ' + player + ' is the winner!')
          $('#newGame').removeClass('invisible')
        }
      }
    }
    if ($('.cells').find('#cell-3').text() !== '') {
      if ($('.cells').find('#cell-3').text() === $('.cells').find('#cell-4').text()) {
        if ($('.cells').find('#cell-3').text() === $('#cell-5').text()) {
          console.log('Game over! ' + player + ' is the winner!')
          $('#newGame').removeClass('invisible')
        }
      }
    }
  }
  $('#newGame').on('click', function () {
    $('.square').text('')
  })
})

module.exports = {
}
