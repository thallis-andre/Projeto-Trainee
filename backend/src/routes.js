const { Router } = require('express')

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({
    nome: 'Thallis André',
    idade: '20 anos'
  })
})

module.exports = routes