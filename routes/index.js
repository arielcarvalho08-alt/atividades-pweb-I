const express = require('express')
const router = express.Router()

const pgIndex = (req, res) => res.send('Página: Index')
const pgAbout = (req, res) => res.send('Página: About')
const pgData = (req, res) => res.send('Página: Data')

router.get('/', pgIndex)
router.get('/about', pgAbout)
router.post('/data', pgData)

module.exports = router

