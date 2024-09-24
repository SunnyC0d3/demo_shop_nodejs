const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title>Tutorial</title></header>');
    res.write('<body><h1>Tutorial</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);