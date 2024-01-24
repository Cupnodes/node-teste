const path = require('path')
const customPath = '/relatorios/financeiro/2024/rel01.pdf'
const absolutePath = path.resolve('../routing/index.js')
const fs = require('fs')

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))
console.log(absolutePath)

if(!fs.existsSync('./minhapasta')){
    console.log('Não existe')
}