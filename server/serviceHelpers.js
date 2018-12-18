var axios = require('axios');

// service ports TODO: move to config file
const servicePorts = {
  REVIEWS: '3004',
  PHOTOS: '3003'
};

// getBannerData axios functions for multiple concurrent requests
// https://www.npmjs.com/package/axios#example
var getTrailStats = (endpoint) => {
  return axios.get(endpoint);
};
var getTrailRank = (endpoint) => {
  return axios.get(endpoint);
};
var getHeroPhoto = (endpoint) => {
  return axios.get(endpoint);
};
var getPhotosCount = (endpoint) => {
  return axios.get(endpoint);
};

// get data from reviews-service and trail-photos-service for the Banner
// component endpoint
var getBannerData = (id, callback) => {
  var result = {};
  var trailStats = `http://localhost:${servicePorts.REVIEWS}/${id}/trailStats`;
  var trailRank = `http://localhost:${servicePorts.REVIEWS}/${id}/trailRank`;
  var heroPhoto = `http://localhost:${servicePorts.PHOTOS}/${id}/heroPhoto`;
  var photosCount = `http://localhost:${servicePorts.PHOTOS}/${id}/photosCount`;

  axios.all([
    getTrailStats(trailStats),
    getTrailRank(trailRank),
    getHeroPhoto(heroPhoto),
    getPhotosCount(photosCount)
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
