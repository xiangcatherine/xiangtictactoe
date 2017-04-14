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

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}

// $('#playButton').on('click', function () {
//   playButton.fadeOut('slow')
//   title.fadeOut('slow')
// })
