//// Middleware Funtion

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

module.exports = logger