const router = require('express').Router()
const books = require('./books')

router.use('/books', books)

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Conected to Library Api' })
})

module.exports = router
