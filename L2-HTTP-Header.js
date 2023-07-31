const http = require('http');

const sever = http.createServer((req,res) => {
    res.writeHead(200, {'content-type' : 'text/html'}) //// passing text/plain will show html code
    res.write('<h1>Home Page<h1>')
    res.end() //CallBack
})

sever.listen(5000);