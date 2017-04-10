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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
