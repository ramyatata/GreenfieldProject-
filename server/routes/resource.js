const express = require('express');
const router = express.Router();
const colors = require('colors');
const resourceController = require('../controllers/resource.js');

/*************** Resource Routes  *************/
router.get('/', (req, res) => {
  resourceController.list()
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
  resourceController.get(id)
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

  resourceController.create(body)
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
  console.log(colors.blue(id));
  console.log(colors.blue(body));

  resourceController.update(id, body)
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

  resourceController.delete(id)
  .then((results) => {
    res.status(200);
    res.json(results);
  })
  .catch((err) => {
    throw err;
  })
});

module.exports = router;