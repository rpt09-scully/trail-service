const loremIpsum = require('lorem-ipsum');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const seedFuncs = require('/Users/ryanbrennan/Desktop/SDC/trail-service/generateSql.js')
const csvWriter = createCsvWriter({
  path: './milly.csv',
  header: [
      {id: 'name', title: 'NAME'},
      {id: 'lang', title: 'LANGUAGE'}
  ]
});




const records = [
  {name: 'Bob',  lang: 'French, English'},
  {name: 'Mary', lang: 'English'}
];

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });