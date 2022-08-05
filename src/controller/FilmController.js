const api = require('../lib/api')
const Film = require('../models/film')

module.exports = {
  async index(req, res) {
    try {
      const { page = 1 } = req.query
      const films = await Film.paginate({}, { page, limit: 10 })
      return res.json(films)
    } catch (error) {
      return res.json({ error: error.message })
    }
  },

  async show(req, res) {
    const { id } = req.params
    try {
      const film = await Film.findById(id)

      if (!film) {
        res.json({ message: 'Filme não encontrado!' })
      }
      return res.json(film)
    } catch (error) {
      return res.json({ error: error.message })
    }
  },

  async create(req, res) {
    try {
      const { data } = await api()
      const films = await data.map(
        ({ title, description, image, director, producer }) => ({
          title,
          description,
          image,
          director,
          producer
        })
      )

      await Film.create(films)
      res.json({ message: 'Filmes inseridos' })
    } catch (error) {
      res.json({ message: error.message })
    }
  }
}
