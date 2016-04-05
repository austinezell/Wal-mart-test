'use strict'

const mongoose = require('mongoose');


const ContentSchema = new mongoose.Schema({
  title: {type: String, unique: true},
  subtitle: {type: String},
  paragraphs: [{type: String}]
})


module.exports = mongoose.model('Content', ContentSchema)
