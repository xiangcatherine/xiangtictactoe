'use strict'

const onSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.game) {
    console.log(data.game)
  } else {
    console.table(data.games)
  }
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onError
}
