const express = require('express');
const router = express.Router();
const colors = require('colors');
const checkinController = require('../controllers/checkin.js');


/*************** Checkin Routes  *************/
router.get('/', (req, res) => {
  checkinController.list()
  .then((results) => {
    res.status(200);
    res.json(results);
  })
  .catch((err) => {
    throw err;
  })
});
router.get('/:id', (req, res) => {
  let id = req.params.id;

  checkinController.get(id)
  .then((results) => {
    res.status(200);
    res.json(results);
  })
  .catch((err) => {
    throw err;
  })
});

router.post('/', (req, res) => {
  let body = req.body;

  checkinController.create(body)
  .then((results) => {
    res.status(201);
    res.json(results);
  })
  .catch((err) => {
    throw err;
  })
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let body = req.body;

  checkinController.update(id, body)
  .then((results) => {
    res.status(200);
    res.json(results);
  })
  .catch((err) => {
    throw err;
  })
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  checkinController.delete(id)
  .then((results) => {
    res.status(200);
    res.json(results);
  })
  .catch((err) => {
    throw err;
  })
});

module.exports = router;