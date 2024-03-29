const router = require('express').Router()
const { check } = require('express-validator')
const bookController = require('../controllers/bookController')
const { validateFields } = require('../middlewares/validateFields')

router.get('/', bookController.index)
router.get('/search', bookController.bookSearch)

// router.get('/:id', bookController.bookSearchById)

router.post('/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('author', 'Author is required').not().isEmpty(),
    check('date', 'Date is required').not().isEmpty(),
    check('genre', 'Genre is required').not().isEmpty(),
    validateFields
  ],
  bookController.bookAdd
)

router.put('/', [
  check('id', 'id is required').not().isEmpty(),
  check('title', 'Title is required').not().isEmpty(),
  check('author', 'Author is required').not().isEmpty(),
  check('date', 'Date is required').not().isEmpty(),
  check('genre', 'Genre is required').not().isEmpty(),
  validateFields
], bookController.bookUpdateAdd)

router.delete('/', bookController.bookDelete)

router.post('/filter', bookController.bookFilter)

module.exports = router
