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

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  if (data.game.id.length !== 0) {
    gamesApi.update(data)
      .then(gamesUi.onSuccess)
      .catch(gamesUi.onError)
  } else {
    console.log('Please provide a book id!')
  }
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
