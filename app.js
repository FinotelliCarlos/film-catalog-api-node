const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app
  .use(
    express.urlencoded({
      extended: true
    })
  )
  .use(express.json())
  .use(cors({ origin: '*' }))
  .use('/', require('./src/routes'))

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@apicluster.ysr4siw.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('MongoDB is connected!')
    app.listen(process.env.PORT || 4002)
  })
  .catch(err => {
    console.log(err)
  })
