'use strict'

let supertest = require('supertest');
var app = require('../../app');

describe('GET /ping', ()=>{
  it('responds with json', (done)=>{
    supertest(app)
    .get('/ping')
    .set('Accept', 'application/json')
    .expect('pong')
    .end(done)
  })
})
