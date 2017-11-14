const express = require('express');
const router = express.Router();
const colors = require('colors');
const userController = require('../controllers/user.js');

/*************** User Routes  *************/
router.get('/', (req, res) => {
  userController.list()
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

  userController.get(id)
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

  userController.create(body)
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

  userController.update(id, body)
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

  userController.delete(id)
  .then((results) => {
    res.status(200);
    res.json(results);
  })
  .catch((err) => {
    throw err;
  })
});

module.exports = router;