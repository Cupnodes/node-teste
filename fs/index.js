const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000
const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true)
    const nickname = urlInfo.query.nickname

    fs.readFile('index.html', (err, data) => {
        if(!nickname){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        }
        fs.writeFile('req.txt', nickname, (err, data) => {
            res.writeHead(302)
            return res.end()
        })    
        
    })
})

server.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})