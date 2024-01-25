const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const user = {
        nome: 'Theux',
        senha: 'CanalYt',
        autorizado: true
    }

    const items = ['Tv', 'carro', 'cama', 'comida']

    const segredo = 'Padaria'
    res.render('home', {user, segredo, items})
})

app.listen(3000, () => {
    console.log('Rodando...')
})
