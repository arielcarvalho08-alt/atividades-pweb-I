const express = require('express')
const router = express.Router()

const pgSignin = (req, res) => res.render('signin', { title: 'Entrar' })
const pgSignup = (req, res) => res.render('signup', { title: 'Cadastrar' })

router.get('/signin', pgSignin)
router.get('/signup', pgSignup)

router.get('/:userid', (req, res) => {
    res.render('user-profile', { 
        title: 'Perfil do Usuário', 
        userid: req.params.userid 
    })
})

router.get('/', (req, res) => {
    res.redirect('/users/signup')
})

module.exports = router
