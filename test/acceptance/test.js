'use strict'

const supertest = require('supertest');
const app = require('../../app');
const CONSTANTS = require('../../config/constants');
require('mongoose').connect(CONSTANTS.MONGO_URL);

// test if server is running with simple ping.
describe('GET /ping', ()=>{
  it('responds with pong', (done)=>{
    supertest(app)
    .get('/ping')
    .set('Accept', 'application/json')
    .expect('pong')
    .end(done)
  })
})

// test if History is correctly in the database
describe('GET', function(){
  it('Responds with appropriate data', function(done){
    supertest(app)
    .get('/content/History')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});
