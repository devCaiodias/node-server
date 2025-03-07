function getBooks(req, res) {
    try {
        res.send("Olá rapazeada para de graça")

    }catch (error){
        res.status(500)
        res.send({error: error.message})
    }
}

module.exports = {
    getBooks
}