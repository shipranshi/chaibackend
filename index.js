require('dotenv').config()
// import .env from '  dotenv  ';
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Welcome!</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('https://www.youtube.com/')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})