const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '..', 'templates')

router.get('/add', (req, res) => {
    res.sendFile(path.join(basePath,'userform.html'))
})

router.post('/save', (req, res) => {
    console.log(req.body)
    const data = {
        name: req.body.name,
        age: req.body.age
    }
    res.sendFile(path.join(basePath, 'index.html'))
})

module.exports = router