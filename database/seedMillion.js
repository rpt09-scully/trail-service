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
csvWriter.writeRecords([])
  .then(() => {
    console.log('...Done creating hero csv');
  });
let start = new Date();
const records = [];
let records2 = [];
let count = 0;

for (var i = 101; i <= 10000000; i ++) {
  count +=1;

  if (count <= 5000000) {
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
    });

  } else {
    records2.push({
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
    });
  };
};


//empty array where records
csvWriter.writeRecords(records, start)       // returns a promise
    .then(() => {
      csvWriter.writeRecords(records2, start)
      .then(() => {
        let end = new Date();
        let seconds = (end.getTime() - start.getTime()) / 1000;
        console.log('...DONE!!! - wrote 10 million records to milly.csv in ' + seconds + ' seconds!!');
      });
    });







