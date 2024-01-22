const fs = require('fs')
const { argv } = require('node:process');
const update = argv[2] + '/r/n'

fs.appendFile('req.txt', update, () => {
    console.log('Arquivo atualizado')
})
