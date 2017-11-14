const express = require('express');
const router = express.Router();
const colors = require('colors');
const milestoneController = require('../controllers/milestone.js');

/*************** Milestone Routes  *************/
router.get('/', (req, res) => {
  milestoneController.list()
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

  milestoneController.get(id)
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

  milestoneController.create(body)
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

  milestoneController.update(id, body)
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

  milestoneController.delete(id)
  .then((results) => {
    res.status(200);
    res.json(results);
  })
  .catch((err) => {
    throw err;
  })
});

module.exports = router;