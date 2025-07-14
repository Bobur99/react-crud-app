// backend/server.js

const path = require('path');
const express = require('express');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// JSON Server middleware
app.use(middlewares);
app.use('/api', router); // теперь JSON доступен по /api

// Подключение frontend из dist
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Запуск сервера
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
