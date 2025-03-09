//  Criar rotas para o recurso de livros
const { Router} = require('express');
const {getBooks, getBook, postBooks, patchBooks, deleteBooks} = require('../controladores/books')
const router = Router();

//  req = requisição
//  res = resposta
// Criando uma rota para o método GET
router.get("/", getBooks)

// Criando uma rota para o método GET com um parâmetro
router.get("/:id", getBook)

// Criando uma rota para o método POST
router.post("/", postBooks)

// Criando uma rota para o método patch
router.patch("/:id", patchBooks)

// Criando uma rota para o método DELETE
router.delete("/:id", deleteBooks)

// extando o router
module.exports = router