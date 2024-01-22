const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
    fs.readFile()   
    res.end()
})

server.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})