require('dotenv').config()
const express = require('express')
//const PORT = 3000

const app = express()

app.get('/', (req, res)=>{
    res.send("hello world")
})

app.get('/login', (req, res)=>{
    res.send("<h1>Login Page</h1>")
})

app.listen(process.env.PORT, (req, res)=>{
    console.log(`App listening on port ${process.env.PORT}`)
})
