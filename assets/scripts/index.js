'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
require('./gameboard/main.js')

const authEvents = require('./auth/events.js')
const gameEvents = require('./gameAPI/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
  $('#restartButton').on('click', gameEvents.onCreateGame)
})

// $(() => {
//   $('#books-search').on('submit', bookEvents.onGetBooks)
//   $('#book-search').on('submit', bookEvents.onGetBook)
//   $('#book-delete').on('submit', bookEvents.onDeleteBook)
//   $('#book-update').on('submit', bookEvents.onUpdateBook)
//   $('#book-update').on('submit', bookEvents.onCreateBook)
// })
