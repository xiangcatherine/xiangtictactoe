'use strict'

const gamesApi = require('./api.js')
const gamesUi = require('./ui.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const onGetAllGames = function (event) {
  event.preventDefault()
  gamesApi.getAllGames()
    .then(gamesUi.onSuccess)
    .catch(gamesUi.onError)
}

module.exports = {
  onGetAllGames
}
