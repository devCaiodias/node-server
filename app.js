const express = require("express")
const app = express()

const port = 8000

//  req = requisição
//  res = resposta
app.get("/", (req, res) => {
    res.send("Olá rapazeada para de graça")
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})