const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Conection to MongoDB Atlas stablished succesfully')
  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error.message)
  })
