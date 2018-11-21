var app = require('../server/index');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;

chai.use(chaiHttp);

// GET root, respond with static page from client/dist
describe('GET / server function', () => {
  it('it should GET client/dist/index.html with correct response and headers', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res)
          .to.have.status(200)
          .and.to.have.header('content-type', 'text/html; charset=UTF-8');
        done();
      });
  });
});

// GET trail api endpoint with trail_id
describe('GET :trailId/trailInfo server function', () => {
  it('it should GET trail data with correct response and headers', (done) => {
    chai.request(app)
      .get('/1/trailInfo')
      .end((err, res) => {
        expect(res)
          .to.have.status(200)
          .to.be.json;
        done();
      });
  });
});