'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').addClass('hidden')
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  console.log('You have successfully signed in!')
  // store the user object:
  store.user = data.user
  $('#startButton').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#getGames').removeClass('hidden')
  if ($('#sign-up').not('hidden')) {
    $('#sign-up').addClass('hidden')
  }
}

const signInFailure = (error) => {
  console.log(error)
  console.log('Either the username or password is wrong.')
}

const changePasswordSuccess = (data) => {
  console.log(data)
  console.log('You have changed your password!')
}

const changePasswordFailure = (error) => {
  console.log(error)
  console.log('Sorry, your password did not change.')
}

const signOutSuccess = () => {
  console.log('You have signed out!')
  store.user = null
  $('.gameStateActive').toggleClass('gameStateActive gameStateInactive')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#getGames').addClass('hidden')
  $('.gameHistoryContainer').css('visibility', 'hidden')
}

const signOutFailure = (error) => {
  console.log(error)
  console.log('Sorry, you were unable to sign out.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
