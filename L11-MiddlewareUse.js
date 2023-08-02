const express  = require('express');
const app = express()
const logger = require('./logger')

//// req => middleware => res {Middleware are the function that executes during the request}
app.use('/api', logger) //? api/*
//// Everything goes in order. {All the middleware functions, all the app that uses at the top of the document.}

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/product', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})