const fs = require('fs');

function getTodosBooks() {
    return JSON.parse(fs.readFileSync("books.json"));
}


module.exports = {
    getTodosBooks
}