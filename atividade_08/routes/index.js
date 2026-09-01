const express = require('express')
const router = express.Router()

const pgIndex = (req, res) => res.render('index', { title: 'Página Inicial' })
const pgAbout = (req, res) => res.render('about', { title: 'Sobre Nós' })
const pgData = (req, res) => res.render('data', { title: 'Dados Recebidos' })

router.get('/', pgIndex)
router.get('/about', pgAbout)
router.post('/data', pgData)

module.exports = router
