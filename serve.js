#!/usr/bin/env node

/**
 * Simple HTTP Server para BusYA
 * Sirve archivos estáticos y maneja solicitudes
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8000;
const HOST = 'localhost';

// Tipos MIME comunes
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
    // Parsear URL
    const parsedUrl = url.parse(req.url, true);
    let pathname = decodeURIComponent(parsedUrl.pathname);
    
    // Simple in-memory store para tracks (demo)
    // Estructura: { id: { id, username, lat, lng, timestamp } }
    if (!global._busya_tracks) global._busya_tracks = {};
    const tracksStore = global._busya_tracks;

    // Endpoint POST /track para recibir posición
    if (pathname === '/track' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const obj = JSON.parse(body);
                if (obj && obj.id) {
                    tracksStore[obj.id] = {
                        id: obj.id,
                        username: obj.username || obj.id,
                        lat: parseFloat(obj.lat),
                        lng: parseFloat(obj.lng),
                        timestamp: obj.timestamp || new Date().toISOString()
                    };
                    res.statusCode = 204;
                    res.end();
                    return;
                }
            } catch (e) {}
            res.statusCode = 400;
            res.end('Bad Request');
        });
        return;
    }

    // Endpoint GET /tracks para devolver posiciones actuales
    if (pathname === '/tracks' && req.method === 'GET') {
        // Limpiar entradas muy antiguas (> 2 minutos)
        const now = Date.now();
        Object.keys(tracksStore).forEach(k => {
            const t = tracksStore[k];
            if (!t.timestamp) return;
            const age = now - new Date(t.timestamp).getTime();
            if (age > 2 * 60 * 1000) delete tracksStore[k];
        });

        const arr = Object.keys(tracksStore).map(k => tracksStore[k]);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'no-cache');
        res.end(JSON.stringify(arr));
        return;
    }

    // Ruta base del proyecto
    let filePath = path.join(__dirname, pathname);
    
    // Si es una carpeta, intenta servir index.html
    if (pathname === '/' || pathname === '/map-app/' || pathname.endsWith('/')) {
        if (pathname === '/') {
            // Servir la app principal directamente
            filePath = path.join(__dirname, 'map-app.html');
        } else if (pathname === '/map-app/') {
            filePath = path.join(__dirname, 'map-app.html');
        }
    }
    
    // Prevenir directory traversal
    const requestedPath = path.normalize(filePath);
    const basePath = path.normalize(__dirname);
    
    if (!requestedPath.startsWith(basePath)) {
        res.statusCode = 403;
        res.end('Acceso denegado');
        return;
    }
    
    // Leer archivo
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Archivo no encontrado
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end(`
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <title>404 - Página no encontrada</title>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    text-align: center;
                                    margin-top: 50px;
                                }
                                h1 { color: #333; }
                                p { color: #666; }
                                a { color: #0066cc; text-decoration: none; }
                            </style>
                        </head>
                        <body>
                            <h1>404 - Página no encontrada</h1>
                            <p>La página que buscas no existe.</p>
                            <p><a href="/">Volver al inicio</a></p>
                        </body>
                    </html>
                `);
            } else {
                // Error al leer archivo
                res.statusCode = 500;
                res.end('Error interno del servidor');
            }
            return;
        }
        
        // Determinar tipo MIME
        const ext = path.extname(filePath).toLowerCase();
        const contentType = mimeTypes[ext] || 'application/octet-stream';
        
        // Configurar headers
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'no-cache');
        
        // Enviar archivo
        res.end(data);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`
╔════════════════════════════════════════╗
║          🚌 BusYA - Servidor           ║
╠════════════════════════════════════════╣
║                                        ║
║  Servidor corriendo en:                ║
║  http://${HOST}:${PORT}                   ║
║                                        ║
║  Acciones:                             ║
║  • Principal: http://${HOST}:${PORT}      ║
║  • App Mapa:  http://${HOST}:${PORT}/map-app.html ║
║                                        ║
║  Presiona CTRL+C para detener          ║
║                                        ║
╚════════════════════════════════════════╝
    `);
});

// Manejar errores del servidor
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Error: Puerto ${PORT} ya está en uso.`);
        console.error('Intenta cambiar el puerto en el archivo serve.js');
    } else {
        console.error('\n❌ Error del servidor:', err);
    }
    process.exit(1);
});

// Capturar CTRL+C
process.on('SIGINT', () => {
    console.log('\n\n✅ Servidor detenido correctamente.');
    process.exit(0);
});
