const express = require('express')
const router = express.Router()

const {
  loginUser,
  signupUser,
  getUser,
  logout
} = require('../controller/userController.js')

router.post('/login', loginUser)

router.post('/signup', signupUser)

router.get('/profile', getUser)

router.get('/logout', logout)

module.exports = router