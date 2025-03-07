//  Criar rotas para o recurso de livros
const { Router} = require('express');
const {getBooks} = require('../controladores/books')

const router = Router();

//  req = requisição
//  res = resposta
// Criando uma rota para o método GET
router.get("/", getBooks)

// Criando uma rota para o método POST
router.post("/", (req, res) => {
    res.send("Vc fez uma resquisição POST")
})

// Criando uma rota para o método patch
router.patch("/", (req, res) => {
    res.send("Vc fez uma resquisição Patch")
})

// Criando uma rota para o método DELETE
router.delete("/", (req, res) => {
    res.send("Vc fez uma resquisição Delete")
})

// extando o router
module.exports = router