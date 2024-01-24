const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
    res.write('Http bacana')
    res.end()
})

server.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})