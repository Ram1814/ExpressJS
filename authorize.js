//// Middleware Function

const authorize = (req, res, next) => {
    const{user} = req.query    
    if (user === 'Ram') {
        req.user = {name : 'Ram', ID : 1}
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }

}

module.exports = authorize;