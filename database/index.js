require('dotenv').config();


var getAllTrails = (callback) => {
  const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: process.env.DB_HEROKU_HOST,
      user: process.env.DB_HEROKU_USER,
      password: process.env.DB_HEROKU_PASS,
      database: 'heroku_7288f22ed8d6924'
    }
  });
  knex.select()
    .from('trail')
    .then( (rows) => {
      callback(rows);
    })
    .catch( (error) => {
      console.error(error);
    });
};


module.exports.getAllTrails = getAllTrails;