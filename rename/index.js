const fs = require('fs')

fs.rename('file.txt', 'newFile.txt', (err, data) => {
    if(err){
        console.error(err)
    }
    console.log('Renomeado!!')
})