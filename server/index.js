const express = require('express');
const db = require('../database/index');

const app = express();
var port = process.env.PORT;

if (!port || port === '') {
  port = 3000;
}

// app.get('/', (req, res) => res.send('Howdoo'));

// test out sending all rows from trail table
app.get('/', (req, res) => {
  db.getAllTrails( (rowsRes) => {
    res.json(rowsRes);
  });
});

app.get('/:trailId/trailInfo', (req, res) => {
  var theId = req.params.trailId;
  db.getAtrail(theId, (trail) => {
    // TODO:
    // getAtrail functioning as-expected
    // need to call getTags, create array of tags, append to
    // trail object for response
    console.log(trail);
  });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
