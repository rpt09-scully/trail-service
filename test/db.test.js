// tests for database/index.js
require('dotenv').config();
var db = require('../database/index');
var expect = require('chai').expect;

/*
 * https://mochajs.org/#arrow-functions
 *
   Passing arrow functions (“lambdas”) to Mocha is discouraged.
   Lambdas lexically bind this and cannot access the Mocha
   context. If you do not need to use Mocha’s context, lambdas
   should work. However, the result will be more difficult to
   refactor if the need eventually arises.
 *
 */

// test main database function
// get trail data from trail_id
describe('getAtrail() db function', function () {

  context('with trail ID argument', function () {
    it('should return results object to callback with all required keys', function (done) {

      db.getAtrail(1, function (trailResult) {
        expect(trailResult[0])
          .to.be.a('object')
          .and.to.have.all.keys('trail_id', 'trail_name', 'distance', 'distance_units', 'elevation_gain', 'elevation_units', 'description', 'route_type', 'difficulty', 'general_area', 'origin');
        done();
      });
    });
  });
});

// get tags from trail_id
describe('getTags() db function', function () {

  context('with trail ID argument', function () {
    it('should return an array of tags with at lease 6 tags', function (done) {

      db.getTags(1, function (tagsResult) {
        expect(tagsResult)
          .to.be.a('array')
          .and.to.have.lengthOf.at.least(6);
        done();
      });
    });
  });
});