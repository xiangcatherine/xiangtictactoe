'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getGames = function () {
  return $.ajax({
    url: config.apiOrigin + 'games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = () => {
  return $.ajax({
    url: config.apiOrigin + 'games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + 'games/' + store.gameId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGames
}
