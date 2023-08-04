const express = require('express')
const auth = express.Router()


auth.post('/', (req, res) => {
    console.log(req.body);
    const{name} = req.body
    if(name) {
        res.status(200).send(`Hey, welcome ${name}`)
    }
    res.status(404).send('Please provide credentials')
})

module.exports = auth;