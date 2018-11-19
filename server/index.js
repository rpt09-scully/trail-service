const express = require('express');
const db = require('../database/index');

const app = express();
var port = process.env.PORT;

if (!port || port === '') {
  port = 3001;
}

// Per requirements: Set up express to serve a static app
// via a differentiating port
// TODO: will be proxy index.html
app.use(express.static(__dirname + '/../client/dist'));

// test out sending all rows from trail table
// app.get('/', (req, res) => {
//   db.getAllTrails( (rowsRes) => {
//     res.json(rowsRes);
//   });
// });

app.get('/:trailId/trailInfo', (req, res) => {
  var theId = req.params.trailId;
  db.getAtrail(theId, (row) => {
    // TODO
    // trail object for response
    var theTrail = row[0];
    var resObj = {};
    resObj.data = {};
    resObj.data.attributes = {};
    for (var prop in theTrail) {
      if (prop === 'trail_id') {
        resObj.data['trail_id'] = theTrail['trail_id'];
      } else {
        resObj.data.type = 'trail';
        resObj.data.attributes[prop] = row[0][prop];
      }
    }
    db.getTags(theId, (tags) => {
      resObj.data.attributes.tags = tags;
      res.send(resObj);
    });
  });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
