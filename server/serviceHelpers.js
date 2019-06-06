var axios = require('axios');

// get data from reviews-service and trail-photos-service for the Banner
// component endpoint
var getBannerData = (id, callback) => {
  // Production (deployed) services:
  if (process.env.RDS_HOSTNAME) {
    var serviceHost = {
      REVIEWS: 'http://reviewservice.jsxvmg3wq3.us-west-1.elasticbeanstalk.com',
      PHOTOS: 'http://trail-photos-service-dev.us-west-1.elasticbeanstalk.com'
    };
  } else {
    // Dev (local) services:
    var serviceHost = {
      REVIEWS: 'http://localhost:3004',
      PHOTOS: 'http://localhost:3003'
    };
  }

  var result = {};
  var trailStats = `${serviceHost.REVIEWS}/${id}/trailStats`;
  var trailRank = `${serviceHost.REVIEWS}/${id}/trailRank`;
  var heroPhoto = `${serviceHost.PHOTOS}/${id}/heroPhoto`;
  var photosCount = `${serviceHost.PHOTOS}/${id}/photosCount`;

  // getBannerData axios functions for multiple concurrent requests
  // https://www.npmjs.com/package/axios#example
  axios.all([
    axios.get(trailStats),
    axios.get(trailRank),
    axios.get(heroPhoto),
    axios.get(photosCount)
  ]).then(axios.spread(function (tStats, tRank, hPhoto, pCount) {
    // all requests should be complete
    result.stats = tStats.data;
    result.rank = tRank.data;
    result.heroUrl = hPhoto.data.data.attributes.photo_url;
    result.count = pCount.data.data.attributes.count;
    callback(result);
  })).catch((error) => {
    console.error('axios.all catch: ', error);
  });
};

module.exports.getBannerData = getBannerData;
