const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const colors = require('colors');
const PORT = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/', function() {
  res.end();
});

app.listen(PORT, () => {
  console.log(colors.blue(`Listening on PORT ${PORT}`));
});



