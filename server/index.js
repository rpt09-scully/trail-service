const express = require('express');
const cors = require('cors');
const db = require('../database/index');
const service = require('./serviceHelpers');
const morgan = require('morgan');

const app = express();
var port = 3001;

// log every request to the console
// https://www.npmjs.com/package/morgan#dev
app.use(morgan('dev'));

// Per requirements: Set up express to serve a static app
// via a differentiating port
// http://localhost:3001
app.use(express.static(__dirname + '/../public'));

// If, for whatever reason you need to test getting & sending all rows from
// the trail db table:
// app.get('/', (req, res) => {
//   db.getAllTrails( (rowsRes) => {
//     res.json(rowsRes);
//   });
// });

/*
  API endpoint for trail service
  Requests must include /:trailId/trailInfo
  Example: http://localhost:3001/3/trailInfo
  for the Trail where trail_id === 3
*/
app.get('/:trailId/trailInfo', cors(), (req, res) => {
  var theId = req.params.trailId;
  db.getTrail(theId, (row) => {
    // trail object for response
    // see example-data.json for example
    var theTrail = row[0];
    var resObj = {};
    resObj.data = {
      attributes: {}
    };
    for (var prop in theTrail) {
      if (prop === 'trail_id') {
        resObj.data['id'] = theTrail['trail_id'].toString();
      } else {
        resObj.data.attributes[prop] = theTrail[prop];
      }
      resObj.data.type = 'trail';
    }
    db.getTags(theId, (tags) => {
      resObj.data.attributes.tags = tags;
      res.status(200).json(resObj);
    });
  });
});

/*
  API endpoint for trail service Banner component state
*/
app.get('/:trailId/banner', cors(), (req, res) => {
  var theId = req.params.trailId;
  db.getTrail(theId, (row) => {
    var theTrail = row[0];
    // banner state only needs trailName and difficulty from trail-service
    var resObj = {
      trailId: theTrail.trail_id,
      trailName: theTrail.trail_name,
      difficulty: theTrail.difficulty
    };
    // banner state data from reviews and trail-photos services
    service.getBannerData(theId, (bannerRes) => {
      resObj.totalReviews = bannerRes.stats.totalReviews;
      resObj.avgRating = bannerRes.stats.avgRating;
      resObj.trailRank = bannerRes.rank;
      resObj.heroUrl = bannerRes.heroUrl;
      resObj.photosCount = bannerRes.count;
      res.status(200).json(resObj);
    });
  });
});

/*
  API endpoint for trail service TrailDescription component state
*/
app.get('/:trailId/trailDescription', cors(), (req, res) => {
  var theId = req.params.trailId;
  db.getTrail(theId, (row) => {
    // trail object for response to trailDescription component
    var theTrail = row[0];
    var resObj = {
      description: theTrail.description,
      distance: theTrail.distance,
      distanceUnits: theTrail.distance_units,
      elevationGain: theTrail.elevation_gain,
      elevationUnits: theTrail.elevation_units,
      routeType: theTrail.route_type,
    };
    db.getTags(theId, (tags) => {
      resObj.tags = tags;
      res.status(200).json(resObj);
    });
  });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

// for Mocha tests
module.exports = app;
