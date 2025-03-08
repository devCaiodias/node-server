// fs para manipular arquivos
const fs = require('fs')

// Lendo o arquivo books.json
const dadosJson = JSON.parse(fs.readFileSync("books.json"))

// Adicionando um novo livro
const novodados = {id: '3', nome: 'Livro mais que demais'}

// Escrevendo no arquivo books.json
fs.writeFileSync("books.json", JSON.stringify([...dadosJson, novodados]))

// Lendo o arquivo books.json
console.log(JSON.parse(fs.readFileSync("books.json")))