const express = require('express')
const app = express()
const {products} = require('./data.js')

app.get('/', (req,res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req,res) => {
    const newProduct = products.map((products) => {
       const {id, name, image} = products
       return {id, name, image}
    })
    res.json(newProduct)
})

app.get('/api/products/:productID', (req,res) => {  //// Route Parameters
    console.log(req.params);
    const {productID} = req.params

    const singleProduct = products.find (
        (product) => product.id === Number(productID))
    if (!singleProduct) {
        res.status(404).send('Product Does Not Exist')
    } 
    return res.json(singleProduct)  

})

app.get('/api/products/:productID/reviews/:reviewID', (req,res) => {
    console.log(req.params);
    res.send('Complex Route Parameters')
})

////Query String Parameters or URL Parameters
app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('Product not found')
        return res.status(200).json({ success : true, data : [] })        
    }
    res.status(200).json(sortedProducts)
})


app.listen(5000, () => {
    console.log('Sever is listening on port 5000');
})
