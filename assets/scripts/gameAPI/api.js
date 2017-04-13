'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
  return $.ajax({
    url: config.apiOrigin + 'games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = (index, value, isOver) => {
  return $.ajax({
    url: config.apiOrigin + 'games/ ' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': isOver
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
