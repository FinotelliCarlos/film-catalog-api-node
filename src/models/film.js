const mongoose = require('mongoose')

const mongoosePaginate = require('mongoose-paginate')

const FilmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  producer: {
    type: String,
    required: true
  }
})

FilmSchema.plugin(mongoosePaginate)

const Film = mongoose.model('Film', FilmSchema)

module.exports = Film
