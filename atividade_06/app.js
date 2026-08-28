const express = require('express')
const app = express()
const port = 3000
  
app.use((req, res, next) => { 
  console.log(`Acessou: ${req.url}`) 
  next() 
}) 
  
const pgIndex = (req, res) => res.send('Página: Index') 
const pgAbout = (req, res) => res.send('Página: About') 
const pgData = (req, res) => res.send('Página: Data') 
const pgSignin = (req, res) => res.send('Página: Signin') 
const pgSignup = (req, res) => res.send('Página: Signup') 
  
app.get('/', pgIndex) 
app.get('/about', pgAbout)
app.post('/data', pgData) 
app.get('/signin', pgSignin)
app.get('/signup', pgSignup) 
app.get('/users/:userid', (req, res) => {
  res.send(`Bem-Vindo! Seu ID é ${req.params.userid}`)
}) 

app.get('/users', (req, res) => {
  res.redirect('/signup')
}) 
  
app.use((req, res) => {
  res.status(404).send('Erro 404 <a href="/">Voltar para o Index</a>') 
}) 
  
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`)) 
