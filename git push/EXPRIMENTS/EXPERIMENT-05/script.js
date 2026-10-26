const http = require('http');

const PORT = 3000;

let data = 'Hello World';

const server = http.createServer((req, res) => {

    console.log(`Request received: ${req.method} ${req.url}`);

    res.setHeader('Content-Type', 'text/plain');

    // GET route
    if (req.method === 'GET' && req.url === '/data') {
        res.statusCode = 200;
        res.end(data);
    }

    // POST route
    else if (req.method === 'POST' && req.url === '/data') {

        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            data = body;
            res.statusCode = 201;
            res.end('Data created: ' + data);
        });
    }

    // PUT route
    else if (req.method === 'PUT' && req.url === '/data') {

        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            data = body;
            res.statusCode = 200;
            res.end('Data updated: ' + data);
        });
    }

    // DELETE route
    else if (req.method === 'DELETE' && req.url === '/data') {

        data = '';
        res.statusCode = 200;
        res.end('Data deleted');
    }

    // Route not found
    else {
        res.statusCode = 404;
        res.end('Route not found');
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});