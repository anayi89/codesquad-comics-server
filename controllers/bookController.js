const booksData = require("../data/books")

const getAllBooks = async (req, res, next) => {
    try {
        const books = booksData
        return res.status(200).json({
            success: { message: "This route points to the Books page with all of the books" },
            data: books
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: "Books not found. Try again." }
        })
    }
}

const getBook = async (req, res, next) => {
    const { _id } = req.params
    try {
        const book = booksData.find((book) => book._id === _id)
        return res.status(200).json({
            success: { message: `This route points to the Book page that has ID ${book._id}.` },
            data: book
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: "Book not found. Try again." }
        })
    }
}

const createBook = async (req, res, next) => {
    const { title, author, publisher, genre, pages, rating, synopsis, image } = req.body

    try {
        const newBook = { title, author, publisher, genre, pages, rating, synopsis, image }
        return res.status(201).json({
            success: { message: "A new book is created." },
            data: newBook
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: "There is an error when creating a book." }
        })
    }
}

const updateBook = async (req, res, next) => {
    const { title, author, publisher, genre, pages, rating, synopsis, image } = req.body
    const { _id } = req.params

    try {
        const updatedBook = { title, author, publisher, genre, pages, rating, synopsis, image }
        return res.status(201).json({
            success: { message: `This route points to the Book page that has ID ${_id}.` },
            data: updatedBook
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: `There is an error when updating the book with ID ${_id}.` }
        })
    }
}

const deleteBook = async (req, res, next) => {
    const { _id } = req.params

    try {
        const books = booksData.filter((book) => book._id !== _id)
        return res.status(200).json({
            success: { message: `The book with ID ${_id} has been deleted.` },
            data: books
        })
    }
    catch (error) {
        return res.status(400).json({
            error: { message: `There is an error when deleting the book with ID ${_id}.` }
        })
    }
}

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook }