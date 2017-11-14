const express = require('express');
const router = express.Router();
const colors = require('colors');
const goalController = require('../controllers/goal.js');


/*************** Goal Routes  *************/
router.get('/', (req, res) => {
  console.log(colors.blue('in goal router'));
  goalController.list()
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

  goalController.get(id)
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

  goalController.create(body)
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

  goalController.update(id, body)
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

  goalController.delete(id)
  .then((results) => {
    res.status(200);
    res.json(results);
  })
  .catch((err) => {
    throw err;
  })
});

module.exports = router;