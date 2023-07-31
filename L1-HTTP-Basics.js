const http = require('http');

const sever = http.createServer((req,res) => {
    console.log('User hit the sever');
     res.end('Home Page')
})

sever.listen(5000);