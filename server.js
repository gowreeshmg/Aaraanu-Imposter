const http = require('http');
const fs = require('fs');
const path = require('path');

const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webmanifest': 'application/manifest+json'
};

const createAndListen = (port) => {
  const srv = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url.split('?')[0] === '/' ? 'index.html' : req.url.split('?')[0]);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mime[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' });
          res.end('404 Not Found: ' + req.url);
        } else {
          res.writeHead(500, { 'Cache-Control': 'no-store' });
          res.end('500 Server Error: ' + err.code);
        }
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
          'Pragma': 'no-cache',
          'Expires': '0'
        });
        res.end(content);
      }
    });
  });
  srv.on('error', (err) => {
    if (err.code !== 'EADDRINUSE') console.error(`Error on port ${port}:`, err);
  });
  srv.listen(port, () => {
    console.log(`Server running cleanly on http://localhost:${port} with zero caching!`);
  });
};
createAndListen(8080);
createAndListen(3000);
