const fs = require('fs')
const { getTodosBooks, getBookForId, addBooksNew, alterBook, deleteBook } = require('../servicos/books')

// Função para pegar todos os livros
function getBooks(req, res) {
    try {
        const books = getTodosBooks()
        res.send(books)

    }catch (error){
        res.status(500)
        res.send({error: error.message})
    }
}

// Função para pegar um livro pelo id
function getBook(req, res) {
    try {
        const id = req.params.id
        const book = getBookForId(id)
        res.send(book)

    }catch (error){
        res.status(500)
        res.send({error: error.message})
    }
}

// Função para post de livros
function postBooks(req, res) {
    try {
        const newBook = req.body
        addBooksNew(newBook)
        res.status(201)
        res.send("Book added")

    } catch (error){
        res.status(500)
        res.send({error: error.message})
    }
}

// Função para alterar um livro
function patchBooks(req, res) {
    try {
        const id = req.params.id
        const alterBookss = req.body
        alterBook(id, alterBookss)
        res.send("Book altered")
    } catch (error){
        res.status(500)
        res.send({error: error.message})
    }
}

// Função para deletar um livro
function deleteBooks(req, res) {
    try {
        const id = req.params.id
        deleteBook(id)
        res.send("Book deleted")
        
    } catch (error){
        res.status(500)
        res.send({error: error.message})
    }
}

module.exports = {
    getBooks,
    getBook,
    postBooks,
    patchBooks,
    deleteBooks
}