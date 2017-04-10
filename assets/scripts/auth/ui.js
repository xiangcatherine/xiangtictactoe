'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  console.log('You have successfully signed in!')
  // store the user object:
  store.user = data.user
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
