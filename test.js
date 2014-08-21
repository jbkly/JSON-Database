require('./server');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var should = chai.should;

describe('JSON database', function() {

  it('correctly receives POST request', function(done) {
    chai.request('http://localhost:8000')
      .post('/rickastley')
      .req(function(req) {
        req.send({"nevergonna" : "give you up"});
      })
      .res(function(res) {
        expect(res).to.have.status(200);
        expect(res.body.nevergonna).to.eql("give you up");
        done();
      });
  });

  it('correctly handles GET request', function(done) {
    chai.request('http://localhost:8000')
      .get('/rickastley')
      .res(function(res) {
        expect(res).to.have.status(200);
        expect(res.body.nevergonna).to.eql("give you up");
        done();
      });
  });

});
