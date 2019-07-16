const express = require('express');

const server = express();

server.use(express.json());

server.get('/', async (req, res, next) => {
  try {
    res.json('Welcome');
  } catch (error) {
    next(new Error('RED ALERT!!!'));
  }
});

server.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.listen(4000, () => {
  console.log('listening on 4000');
});