const express = require('express');
const db = require('../database/index');

const app = express();
const port = process.env.PORT;
if (port === null || port === '') {
  port = 8000;
}

// app.get('/', (req, res) => res.send('Howdoo'));

app.get('/', (req, res) => {
  db.getAllTrails( (rowsRes) => {
    res.json(rowsRes);
  });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
