const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8]
]

const gridWidth = 3
const grid = []

const createGrid = function () {
  for (let i = 0; i < gridWidth * gridWidth; i++) {
    grid.push('')
  }
}

module.exports = {
  winCombinations,
  createGrid
}
