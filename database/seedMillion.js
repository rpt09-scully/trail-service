const loremIpsum = require('lorem-ipsum');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const seedFuncs = require('../generateSql.js')
const csvWriter = createCsvWriter({
  path: './milly.csv',
  header: [
      {id: 'trail_id', title: 'trail_id'},
      {id: 'trail_name', title: 'trail_name'},
      {id: 'distance', title: 'distance'},
      {id: 'distance_units', title: 'distance_units'},
      {id: 'elevation_gain', title: 'elevation_gain'},
      {id: 'elevation_units', title: 'elevation_units'},
      {id: 'description', title: 'description'},
      {id: 'route_type', title: 'route_type'},
      {id: 'difficulty', title: 'difficulty'},
      {id: 'general_area', title: 'general_area'},
      {id: 'origin', title: 'origin'}
  ]
});

let start = new Date();
const records = [];

for (var i = 101; i <= 1000000; i ++) {
  records.push({
    trail_id: i,
    trail_name: seedFuncs.setTrailName(),
    distance: seedFuncs.setNumber(100),
    distance_units: 'miles',
    elevation_gain: seedFuncs.setNumber(1900),
    elevation_units: 'ft',
    description: seedFuncs.sentences(3, 5, 200),
    route_type: seedFuncs.setRouteType(),
    difficulty: seedFuncs.setDifficulty(),
    general_area: seedFuncs.sentences(1, 3, 65),
    origin: seedFuncs.setOrigin()
  })
}

csvWriter.writeRecords(records, start)       // returns a promise
    .then(() => {
      let end = new Date();
      let seconds = (end.getTime() - start.getTime()) / 1000;
      console.log('...Done - wrote seed-data.csv in ' + seconds + ' seconds');
    });







