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
        
        if (id && Number(id)) {
            const book = getBookForId(id)
            res.send(book)
        }
        else {
            res.status(422)
            res.send({error: "Id inválido"})
        }
    }catch (error){
        res.status(500)
        res.send({error: error.message})
    }
}

// Função para post de livros
function postBooks(req, res) {
    try {
        const newBook = req.body
        if (req.body.nome && req.body.id) {
            addBooksNew(newBook)
            res.status(201)
            res.send("Book added")
        } else {
            res.status(422)
            res.send({error: "Nome inválido ou id Invalido"})
        }

    } catch (error){
        res.status(500)
        res.send({error: error.message})
    }
}

// Função para alterar um livro
function patchBooks(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const alterBookss = req.body
            alterBook(id, alterBookss)
            res.send("Book altered")
        }
        else {
            res.status(422)
            res.send({error: "Id inválido"})
        }
    } catch (error){
        res.status(500)
        res.send({error: error.message})
    }
}

// Função para deletar um livro
function deleteBooks(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deleteBook(id)
            res.send("Book deleted")
        }
        else {
            res.status(422)
            res.send({error: "Id inválido"})
        }
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