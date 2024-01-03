var router = require('express').Router()

router.get('/', (req,res)=>{
    res.json({ message: 'Connected to API: Books'})
})
router.get('/search', (req, res)=> {
    res.json({ message: 'You are going to search a book' })
  })

  router.get('/:id', (req,res)=>{
    res.json({message: 'Youre getting a book by id ' + req.params.id})
  })

  router.post('/', (req,res)=>{
    res.json({message: 'Youre about to add a book'})
  })

  router.put('/', (req,res)=>{
    res.json({message: 'Youre about to update a book'})
  })

  router.delete('/',(req,res)=>{
    res.json({message: 'Youre about to delete a book'})
  })


  module.exports = router