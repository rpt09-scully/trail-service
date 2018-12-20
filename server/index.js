const express = require('express');
const app = express();
require('dotenv').config();
const trailInfo = require('./trailInfo');
const path = require('path');

const morgan = require('morgan');
const port = process.env.PORT || 3001;

// log every request to the console
// https://www.npmjs.com/package/morgan#dev
app.use(morgan('dev'));

// cors
app.use('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// Per requirements: Set up express to serve a static app
// via a differentiating port
// http://localhost:3001
app.use(express.static(__dirname + '/../public'));
// handle trailId in URL
app.get('/:trailId(\\d+$)*?', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname + '/../public/index.html'));
});

app.use('/:trailId', trailInfo);

var serviceHost = (process.env.RDS_HOSTNAME) ? 'http://trail-env.8jhbbn2nrv.us-west-2.elasticbeanstalk.com' : `http://localhost:${port}`;

app.listen(port, () => console.log(`trail-service widget listening on ${serviceHost}`));

module.exports = app;
