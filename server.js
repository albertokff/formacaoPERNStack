const express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.send('Olá, mundo!')
})

app.listen(8080, () => {
    console.log('Rodando no endereço http://localhost:8080')
})