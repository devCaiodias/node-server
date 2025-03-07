const express = require("express")
// Importando a rota de books
const rotaBooks = require("./rotas/books")

const app = express()

// Usando a rotaBooks
app.use("/books", rotaBooks)

const port = 8000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})