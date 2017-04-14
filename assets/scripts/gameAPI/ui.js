'use strict'

const onCreateGameSuccess = function () {
  console.log('game created successfully!')
}

const onCreateGameFailure = function () {
  console.log('game could not be created')
}

const onUpdateGameSuccess = function () {
  console.log('game updated successfully!')
}

const onUpdateGameFailure = function () {
  console.log('game could not be updated')
}

const onGetGamesSuccess = function (response) {
  console.log(response['games'].length)
  $('.gameHistoryContainer').css('visibility', 'visible')
  if (response['games'].length === 0) {
    $('.gameHistoryContainer').text('Play a game first!')
  } if (response['games'].length === 1) {
    $('.gameHistoryContainer').text('You have played ' + response['games'].length + ' game!')
  } else {
    $('.gameHistoryContainer').text('You have played ' + response['games'].length + ' games!')
  }
  // const showGames = document.createElement('p')
  // showGames.textContent = data
  // document.getElementById('show-games-container').appendChild(showGames)
  // $('#show-games-container').text('Game with ID ' + response.games[0].id + 'resulted in: ' + response.games[0].cells)
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetGamesSuccess
}

// $('#playButton').on('click', function () {
//   playButton.fadeOut('slow')
//   title.fadeOut('slow')
// })
