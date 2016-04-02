'use strict'

let mongoose = require('mongoose');


let ContentSchema = new mongoose.Schema({
  title: {type: String, unique: true},
  subtitle: {type: String},
  datePosted: {type: Date, default: new Date()},
  paragraphs: [{type: String}]
})


module.exports = mongoose.model('Content', ContentSchema)
