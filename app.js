'use strict';


const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const constants = require('./config/constants.js')

//declare middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//declares routers
app.use('/content', require('./routes/content'));
app.use('/tests', require('./routes/tests'));

// render index across all routes for single-page application
app.all('/*', function(req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, "public") } );
});

const http = require('http');
const port = constants.PORT;
require('mongoose').connect(constants.MONGO_URL);
app.set('port', port);

const server = http.createServer(app);
server.listen(port, (err)=>{
  if (err) console.error("err ", err);
  console.log("listening on ", port);
});

module.exports = app;
