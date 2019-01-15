module.exports = function (app, db) {
  app.get('/score', (req, res) => {
    db.collection('scores').find().toArray().then((items) => {
      res.send(items);
    })
      .catch(error => res.send({ error }));
  });
  app.post('/score', (req, res) => {
    const score = { name: req.body.name, score: req.body.score };
    db.collection('scores').insert(score, (err, result) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
