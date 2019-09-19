const express = require('express');

const Hobbits = require('../hobbits/hobbitsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/hobbits', (req, res) => {
  Hobbits.getAll()
    .then(hobbits => {
      res.status(200).json(rows);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/', (req, res) => {
  const hobbits = req.body;
  Hobbits.insert(hobbits)
    .then(hobbit => {
      res.status(201).json(hobbit);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.delete('/:id', (req, res) => {
  const id = req.params.id;
  Hobbits.remove(id)
    .then(hobbit => {
      res.status(200).json(hobbit);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
