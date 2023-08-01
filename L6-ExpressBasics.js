const Express = require('express') //// Can also be invoke directly by simply putting ()
const app = Express()

app.get('/', (req, res) => {
    console.log('User hit the Server');
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(5000, () => {
    console.log('Sever is listening on port 5000...');
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen