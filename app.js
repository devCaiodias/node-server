const express = require("express")
// Importando a rota de books
const rotaBooks = require("./rotas/books")

// Criando uma instância do express
const app = express()

// Usando o express para interpretar json
app.use(express.json())

// Usando a rotaBooks
app.use("/books", rotaBooks)

const port = 8000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})