'use strict'

const gamesApi = require('./api.js')
const gamesUi = require('./ui.js')
const store = require('../store.js')

const onCreateGame = function (event) {
  gamesApi.createGame()
    .then(
      function (result) {
        store.gameId = result['game']['id']
        gamesUi.onCreateGameSuccess()
      }
    )
    .catch(gamesUi.onCreateGameFailure)
}

const onUpdateGame = function (index, value, over) {
  gamesApi.updateGame(index, value, over)
    .then(gamesUi.onUpdateGameSuccess)
    .catch(gamesUi.onUpdateGameFailure)
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
