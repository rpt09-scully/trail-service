var axios = require('axios');

// service ports TODO: move to config file
const servicePorts = {
  REVIEWS: '3004',
  PHOTOS: '3003'
};

// get data from reviews-service and trail-photos-service for the Banner
// component endpoint
var getBannerData = (id, callback) => {
  var result = {};
  var trailStats = `http://localhost:${servicePorts.REVIEWS}/${id}/trailStats`;
  var trailRank = `http://localhost:${servicePorts.REVIEWS}/${id}/trailRank`;
  var heroPhoto = `http://localhost:${servicePorts.PHOTOS}/${id}/heroPhoto`;
  var photosCount = `http://localhost:${servicePorts.PHOTOS}/${id}/photosCount`;

  axios.get(trailStats)
    .then((response) => {
      result.stats = response.data;
    })
    .catch((error) => {
      console.error('axios.get trailStats: ', error);
    });

  axios.get(trailRank)
    .then((rankResponse) => {
      result.rank = rankResponse.data;
    })
    .catch((err) => {
      console.error('axios.get trailRank: ', err);
    });

  axios.get(heroPhoto)
    .then((heroResponse) => {
      result.heroUrl = heroResponse.data.data.attributes.photo_url;
      console.log('heroUrl: ', heroResponse.data.data.attributes.photo_url);
    })
    .catch((err) => {
      console.error('axios.get heroPhoto: ', err);
    });

  axios.get(photosCount)
    .then((countResponse) => {
      result.count = countResponse.data.data.attributes.count;
      callback(result);
      console.log('photosCount: ', countResponse.data.data.attributes.count);
    })
    .catch((err) => {
      console.error('axios.get photosCount: ', err);
    });
};

module.exports.getBannerData = getBannerData;
