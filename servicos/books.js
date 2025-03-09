const fs = require('fs');

// Função para pegar todos os livros
function getTodosBooks() {
    return JSON.parse(fs.readFileSync("books.json"));
}

// Função para pegar um livro pelo id
function getBookForId(id) {
    const livros = JSON.parse(fs.readFileSync("books.json"));
    
    const booksfiltrado = livros.filter(book => book.id == id);
    return booksfiltrado[0];
}

// Função para adicionar um novo livro
function addBooksNew(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"));

    const newListBooks = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newListBooks))
}

function alterBook(id, alterBookss){
    // Pegar todos os livros
    let currentBooks = JSON.parse(fs.readFileSync("books.json"));
    
    // Encontrar o livro que será alterado
    const indinceAlter = currentBooks.findIndex(book => book.id === id);

    // Alterar o livro
    const contentAlter = { ...currentBooks[indinceAlter], ...alterBookss}

    // Substituir o livro alterado na lista de livros
    currentBooks[indinceAlter] = contentAlter
    fs.writeFileSync("books.json", JSON.stringify(currentBooks))
    
}

function deleteBook(id) {
    const livros = JSON.parse(fs.readFileSync("books.json"));

    const booksfiltrado = livros.filter(book => book.id !== id);
    fs.writeFileSync("books.json", JSON.stringify(booksfiltrado))
}


module.exports = {
    getTodosBooks,
    getBookForId,
    addBooksNew,
    alterBook,
    deleteBook
}