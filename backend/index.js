const express = require('express')

const app = express()

app.get('/', (request, response) => {
  return response.json({
    nome: 'Thallis André',
    idade: '20 anos'
  })
})

app.listen(3333)