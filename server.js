/**
 * BusYA Server - Express + Socket.IO (Render Ready)
 */

const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

// ============================
// CONFIGURACIÓN BASE
// ============================

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0';

// ============================
// MIDDLEWARE
// ============================

app.use(express.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Fallback para SPA (muy importante en Render)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ============================
// STORE EN MEMORIA
// ============================

const tracksStore = new Map();

// ============================
// REST API
// ============================

app.get('/tracks', (req, res) => {
  const now = Date.now();

  for (const [id, track] of tracksStore.entries()) {
    if (!track.timestamp) continue;

    const age = now - new Date(track.timestamp).getTime();
    if (age > 2 * 60 * 1000) {
      tracksStore.delete(id);
    }
  }

  res.json(Array.from(tracksStore.values()));
});

app.post('/track', (req, res) => {
  const { id, username, lat, lng, timestamp } = req.body;

  if (id && !isNaN(lat) && !isNaN(lng)) {
    tracksStore.set(id, {
      id,
      username: username || 'Usuario',
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      timestamp: timestamp || new Date().toISOString()
    });

    return res.sendStatus(204);
  }

  res.status(400).json({ error: 'Invalid payload' });
});

// ============================
// SOCKET.IO
// ============================

io.on('connection', (socket) => {

  socket.on('location:update', (data) => {
    const { clientId, username, lat, lng, timestamp } = data;

    if (clientId && !isNaN(lat) && !isNaN(lng)) {
      tracksStore.set(clientId, {
        id: clientId,
        username: username || 'Usuario',
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        timestamp: timestamp || new Date().toISOString(),
        socketId: socket.id
      });

      io.emit('locations', Array.from(tracksStore.values()));
    }
  });

  socket.on('locations:request', () => {
    socket.emit('locations', Array.from(tracksStore.values()));
  });

  socket.on('location:stop', (clientId) => {
    tracksStore.delete(clientId);
    io.emit('locations', Array.from(tracksStore.values()));
  });

  socket.on('disconnect', () => {
    for (const [id, track] of tracksStore.entries()) {
      if (track.socketId === socket.id) {
        tracksStore.delete(id);
      }
    }

    io.emit('locations', Array.from(tracksStore.values()));
  });
});

// ============================
// LIMPIEZA AUTOMÁTICA
// ============================

setInterval(() => {
  const now = Date.now();

  for (const [id, track] of tracksStore.entries()) {
    if (!track.timestamp) continue;

    const age = now - new Date(track.timestamp).getTime();
    if (age > 5 * 60 * 1000) {
      tracksStore.delete(id);
    }
  }

  io.emit('locations', Array.from(tracksStore.values()));

}, 60 * 1000);

// ============================
// INICIAR SERVIDOR
// ============================

server.listen(PORT, HOST, () => {
  console.log(`🚌 BusYA corriendo en puerto ${PORT}`);
});