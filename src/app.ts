import http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('SERVER IS RUNNING ON PORT 3000');
});