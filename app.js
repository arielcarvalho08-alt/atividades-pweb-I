const express = require('express')
const app = express()
const port = 3000

const publicRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.use((req, res, next) => {
  console.log(`Acessou: ${req.url}`)
  next()
})

app.use('/', publicRouter)
app.use('/users', userRouter)

app.use((req, res) => {
  res.status(404).send('Erro 404 <a href="/">Voltar para o Index</a>')
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
