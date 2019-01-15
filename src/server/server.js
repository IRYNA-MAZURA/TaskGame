const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../config/db');

const app = express();
app.use(cors());

app.use(bodyParser.json());

const port = 8000;


MongoClient.connect(db.url, (err, database) => {
  const myAwesomeDB = database.db('scores');

  if (err) return console.log(err);
  require('./routes')(app, myAwesomeDB);
  app.listen(port, () => {
    console.log(`We are live on ${port}`);
  });
});
