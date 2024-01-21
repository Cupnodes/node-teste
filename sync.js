import { writeFile } from 'fs'

console.log('inicio')
writeFile('sync.txt', 'epa', ()=>{
    try {
        setTimeout(() => {
            console.log('Arquivo criado')
        }, 3000)
    } catch (err) {
        console.log(err)
    }
})
console.log('fim')