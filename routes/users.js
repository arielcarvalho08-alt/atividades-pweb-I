const express = require('express')
const router = express.Router()

const pgSignin = (req, res) => res.send('Página: Signin')
const pgSignup = (req, res) => res.send('Página: Signup')

router.get('/signin', pgSignin)
router.get('/signup', pgSignup)

router.get('/:userid', (req, res) => {
  res.send(`Bem-Vindo! Seu ID é ${req.params.userid}`)
})

router.get('/', (req, res) => {
  res.redirect('/users/signup') 
})

module.exports = router
