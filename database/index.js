require('dotenv').config();

var getAtrail = (id, callback) => {
  var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'trailService'
    }
  });
  knex.select()
    .from('trail')
    .where('trail_id', '=', id)
    .then((row) => {
      callback(row);
    })
    .catch((error) => {
      console.error('getAtrail select error: ', error);
    });
};

var getTags = (id, callback) => {
  var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'trailService'
    }
  });
  // TODO
  // SELECT tag_name FROM tags WHERE tag_id IN (SELECT tag_id FROM trail_tags WHERE trail_id = 1)
  knex.select('tag_name').from('tags')
    .wherein('tag_id', function(id) {
      this.select('tag_id').from('trail_tags').where('trail_id', '=', id);
    })
    .then( (tags) => {
      callback(tags);
    })
    .catch( (error) => {
      console.error('getTags select error: ', error);
    });
};

var getAllTrails = (callback) => {
  var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'trailService'
    }
  });
  knex.select()
    .from('trail')
    .then((rows) => {
      callback(rows);
    })
    .catch((error) => {
      console.error('getAllTrails select error: ', error);
    });
};

module.exports.getAllTrails = getAllTrails;
module.exports.getAtrail = getAtrail;
module.exports.getTags = getTags;