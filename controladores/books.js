const fs = require('fs')
const { getTodosBooks } = require('../servicos/books')

function getBooks(req, res) {
    try {
        const books = getTodosBooks()
        res.send(books)

    }catch (error){
        res.status(500)
        res.send({error: error.message})
    }
}

module.exports = {
    getBooks
}