"use strict";
const router  = require('express').Router();
const Content = require('../models/ContentSchema');


router.get('/:location', (req, res)=>{
  Content.findOne({title: req.params.location}, (err, content)=>{
    err ? res.status(400).send(err) : res.send(content);
  })
})

module.exports = router;
