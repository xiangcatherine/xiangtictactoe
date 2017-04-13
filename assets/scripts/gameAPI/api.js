'use strict'

const app = require('../app.js')

const getAllGames = function () {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET'
  })
}

module.exports = {
  getAllGames
}
