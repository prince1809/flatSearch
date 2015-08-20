var $ = require('cheerio');
var _ = require('lodash');
var S = require('string');

var getFormData = require('./form-data.js');

module.exports = function(input){
  console.log('parsing house detail');

  var data = {};

  var formData = getFormData(input);

  var page = $.load(input);

  var photosID = 0;


  return{
    photosID: photosID,
    house: data,
    form: formData
  };
};
