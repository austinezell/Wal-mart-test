"use strict";

// function to generate dummy data;

const Content = require('./models/ContentSchema');
const CONSTANTS = require('./config/constants');
const mongoose = require('mongoose');
mongoose.connect(CONSTANTS.MONGO_URL);

function createContent(){
  let pages = [{
    title: "Home",
    subtitle: "Welcome to this site!",
    paragraphs: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta incidunt consequuntur tempore ipsa maiores molestias, placeat voluptatem nesciunt est rem molestiae aspernatur, suscipit nisi voluptates veritatis porro fugit eaque facilis."]
  },{
    title: "History",
    subtitle: "Read all about us!",
    paragraphs: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta incidunt consequuntur tempore ipsa maiores molestias, placeat voluptatem nesciunt est rem molestiae aspernatur, suscipit nisi voluptates veritatis porro fugit eaque facilis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vitae, iure autem. Esse dolorum sapiente, blanditiis explicabo quia harum iusto amet fugit doloribus! Eaque, tempora! Placeat ex enim minus labore?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis unde, necessitatibus dolorum cupiditate ad iure ducimus earum aliquam voluptatibus ex incidunt debitis ipsam vero ab! Ipsum maiores inventore numquam officia."]
  }];
  let promise = new Promise((resolve, reject)=> {
    for(let i = 0; i< pages.length; i++){
      Content.create(pages[i], err=>{
        console.log(err || "page created");
        if (i === pages.length-1) resolve();
      })
    }

  })
  promise.then(res=>{
    mongoose.connection.close();
  })
  return
}

module.exports = createContent;
