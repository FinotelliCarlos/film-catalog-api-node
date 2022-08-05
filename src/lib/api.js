const axios = require('axios')

const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com/films?limit=50'
})

module.exports = api
