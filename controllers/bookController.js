const Book = require('../models/Book')
const asyncHandler = require("express-async-handler")


exports.index = asyncHandler(async (req,res,next)=>{
    const allBooks = await Book.find();
    res.send({message: "Return all Books", books: allBooks});
})

exports.bookSearch = asyncHandler(async (req,res,next)=>{
    const findBook = await Book.find({"title": req.body.title});
    res.send({message: "Returned Book", books: findBook});
})

exports.bookSearchById = asyncHandler(async (req,res,next)=>{
    const findBookById = await Book.findById(req.body.id);
    res.send({message: "Returned Book by id ", book: findBookById});
})

exports.bookAdd = asyncHandler(async (req,res,next)=>{
    const addBook = await new Book(req.body).save();
    res.send({message: "Book saved succesfully", book: addBook})
})

exports.bookUpdateAdd = asyncHandler(async (req,res,next)=>{
    
    const updateBook = await Book.findOneAndUpdate({_id: req.body.id}, req.body, { new: true });
    console.log(req.body)
    res.send({message: "Book modified succesfully", book: updateBook})
})

exports.bookDelete = asyncHandler(async (req,res,next)=>{
    const deleteBook = await Book.deleteOne({_id: req.body.id});
    console.log(req.body)
    res.send({message: "Book deleted succesfully"})
})