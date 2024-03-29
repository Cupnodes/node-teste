const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const path = require('path')

app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine());

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home');
});

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect((err) => {
    if(err){
        console.error(err)
    }
    console.log('Conectado ao MySQL')
    app.listen(3000, () => {
        console.log('Running...')
    });
})