const express  = require('express');
const app = express()

//// req => middleware => res {Middleware are the function that executes during the request}

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    // res.send('Middleware Successfully executed') 
    //// When working with middleware, you must, must, must, must, must pass it on to a next middleware.
   //// Or terminate the whole cycle by sending back the response.
    next()
}

app.get('/', logger , (req, res) => {
    res.send('Home')
})

app.get('/about', logger , (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})