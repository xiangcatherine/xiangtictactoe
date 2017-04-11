console.log('mainjs here')

// all the possible winning combinations
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  [0, 4, 8]
]

const board = []
const slots = document.getElementsByClassName('slot')
const play = function () {
}

const boardWidth = 3
console.log('grid width is ' + boardWidth)

// create the board
const createBoard = function () {
  for (let i = 0; i < boardWidth * boardWidth; i++) {
    board.push('')
  }
}

// show the board
const render = function () {
  for (let i = 0; i < slots.length; i++) {
    slots[i].innerHTML = board[i]
  }
}

module.exports = {
  winCombos,
  createBoard,
  render,
  play
}
