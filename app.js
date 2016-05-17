'use strict';

const constants = require('./config/constants.js')

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//declares routers
app.get("/", (req, res) => res.render("index"));
app.use('/content', require('./routes/content'));
app.use('/tests', require('./routes/tests'));

// render index across all routes for single-page application
app.all('/*', function(req, res, next) {
    res.render('index');
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
