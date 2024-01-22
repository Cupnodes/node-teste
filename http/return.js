const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', ['text/html', 'charset=utf-8'])
    res.end('<h1>Título HTTP bom de mais</h1>')
})

server.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})