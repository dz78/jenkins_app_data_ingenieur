/*var http = require('http');

function onRequest(request, response ) {
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hello Word');
    response.end();
}

http.createServer(onRequest).listen(8080); */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
