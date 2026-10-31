'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'public');

const types = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.csv': 'text/csv; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
    '.webmanifest': 'application/manifest+json'
};

const server = http.createServer((req, res) => {
    try {
        const url = new URL(req.url, 'http://localhost');

        if (url.pathname === '/api/status') {
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            });

            return res.end(JSON.stringify({
                mode: 'offline',
                apiRequired: false,
                engine: 'Reference matching + user confirmation'
            }));
        }

        if (req.method !== 'GET' && req.method !== 'HEAD') {
            res.writeHead(405);
            return res.end('Method not allowed');
        }

        const requestedPath = decodeURIComponent(
            url.pathname === '/' ? '/index.html' : url.pathname
        );

        const target = path.resolve(root, '.' + requestedPath);

        if (
            !target.startsWith(root + path.sep) &&
            target !== path.join(root, 'index.html')
        ) {
            res.writeHead(403);
            return res.end('Forbidden');
        }

        fs.readFile(target, (error, data) => {
            if (error) {
                res.writeHead(404);
                return res.end('Not found');
            }

            res.writeHead(200, {
                'Content-Type':
                    types[path.extname(target).toLowerCase()] ||
                    'application/octet-stream',
                'Cache-Control': 'no-cache',
                'X-Content-Type-Options': 'nosniff'
            });

            if (req.method === 'HEAD') {
                return res.end();
            }

            res.end(data);
        });

    } catch (error) {
        console.error('Server error:', error);

        if (!res.headersSent) {
            res.writeHead(500);
        }

        res.end('Internal server error');
    }
});

const PORT = Number(process.env.PORT) || 10000;

server.listen(PORT, '0.0.0.0', () => {
    console.log(`EcoSort AI running on port ${PORT}`);
});

process.on('SIGTERM', () => {
    console.log('EcoSort AI shutting down...');
    server.close(() => process.exit(0));
});