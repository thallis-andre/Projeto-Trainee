const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb+srv://trainee:trainee@cluster0.fdaua.mongodb.net/trainee?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.get('/', (request, response) => {
  return response.json({
    nome: 'Thallis André',
    idade: '20 anos'
  })
})

app.listen(3333)