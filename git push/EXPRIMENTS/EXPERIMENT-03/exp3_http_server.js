// Experiment 3: Basic HTTP server using http.createServer()
// ---------------------------------------------------------------
// This script creates a simple HTTP server that listens on port 3000.
// It responds with "Hello World" and includes response headers and a status code.

const http = require('http');

const PORT = 3000;

const requestListener = (req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('X-Custom-Header', 'Antigravity-Experiment');

  // Write status code and response body
  res.writeHead(200);
  res.end('Hello World');
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
