const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080
const cors = require("cors")
const morgan = require("morgan")
const helmet = require("helmet")
const path = require("node:path")

app.use(cors())
app.use(morgan("dev"))
app.use(helmet())

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res, next) => {
    res.status(200).json({
        success: {message: "This route points to the Home page."},
        statusCode: 200
    })
})

app.get("/api/books", (req, res, next) => {
    res.status(200).json({
        success: {message: "This will send all of the book data."},
        statusCode: 200
    })
})

app.get("/api/books/:id", (req, res, next) => {
    res.status(200).json({
        success: {message: "This will send a single book by its id."},
        statusCode: 200
    })
})

app.get("/api/books/create/new", (req, res, next) => {
    res.status(200).json({
        success: {message: "This will create a new book."},
        statusCode: 200
    })
})

app.get("/api/books/update/:id", (req, res, next) => {
    res.status(200).json({
        success: {message: "This will update a book by its id."},
        statusCode: 200
    })
})

app.get("/api/books/delete/:id", (req, res, next) => {
    res.status(200).json({
        success: {message: "This will delete a book by its id."},
        statusCode: 200
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})