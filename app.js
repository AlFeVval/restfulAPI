const express = require('express')
const app = express()
const port = 443

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.listen(port,() =>{
    console.log(`Server started in http://localhost:${port}`)
})