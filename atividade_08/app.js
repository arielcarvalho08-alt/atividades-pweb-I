const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.use((req, res, next) => {
  console.log(`Acessou: ${req.url}`)
  next()
})

app.use('/', indexRouter)
app.use('/users', userRouter)

app.use((req, res) => {
  res.status(404).send('Erro 404 <a href="/">Voltar para o Index</a>')
})

module.exports = app;
