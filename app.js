const express = require('express')
const app = express()
const router = require('./routes')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
require('./db')
dotenv.config()

const port = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
  credentials: true,
  origin: 'https://chrisdav03.github.io/vite-deploy/'
}))

// Route will be localhost:4000
// Prefix will be /api
app.use('/api', router)

// Start server
const server = app.listen(port)
console.log('listening in port ' + port)

module.exports = server
