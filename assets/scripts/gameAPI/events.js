'use strict'

const gamesApi = require('./api.js')
const gamesUi = require('./ui.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const onCreateGame = function () {
  event.preventDefault()
  gamesApi.createGame()
    .then(gamesUi.onSuccess)
    .catch(gamesUi.onError)
}

module.exports = {
  onCreateGame
}
