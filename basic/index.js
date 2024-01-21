const fs = require('fs')
const soma = require('./interno').soma

fs.readFile('file.txt', 'utf8', (err, data)=> {
    if(err){
        console.error(err)
    }
    console.log(data)
})

soma(2,4)
soma(6,4)
soma(3,4)