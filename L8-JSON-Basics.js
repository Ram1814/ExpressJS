const express = require('express');
const app = express()
const data = require('./data')

app.get('/', (req, res) => {
        res.status(200).json(data)    
    // res.json([{name : 'Ram'}, {name : 'Aashvi'}])
})


app.listen(5000, () => {
    console.log('Sever is listening on port 5000...');
})