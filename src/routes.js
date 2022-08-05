const express = require('express')
const routes = express.Router()
const FilmController = require('./controller/FilmController')

routes.get('/films', FilmController.index)
routes.get('/films/:id', FilmController.show)
routes.post('/films', FilmController.create)

module.exports = routes
