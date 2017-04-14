'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const gameEvents = require('./gameAPI/events.js')
const gameLogic = require('./gameboard/main.js')

// On document ready
$(() => {
  setAPIOrigin(location, config)

  authEvents.addHandlers()

  $('#startButton').on('click', function () {
    this.blur()
    gameEvents.onCreateGame()
    gameLogic.startGame()
  })

  $('.cell').on('click', function () {
    if (gameLogic.checkValidClick(this.id) === false) { return }
    gameLogic.incrementTurnCount()
    gameLogic.insertIntoGameBoard(this.id)
    gameLogic.checkGameOutcome()
    gameLogic.updateGameState(this.id)
  })
})
