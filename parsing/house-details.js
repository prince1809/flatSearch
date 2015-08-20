var $ = require('cheerio');
var _ = require('lodash');
var S = require('string');

function findKeyValues(elements){
  var specs = {};
  var pendingKey;

  elements.find('td').each(function(){
    var spec = $(this);
    var text = (spec.text() || '').trim();

    //if the table contains another table skip it
    if(spec.find('table').length) return;

    var reg = /(.+?):(.+)/;
    var found =text.match(reg);

    if(found){
      specs[found[1].trim] = found[2].trim();
      return;
    }
    if(S(text).contains(':')){
      pendingKey = S(text).strip(':',',').s;
    }

    else if(pendingKey){
      specs[pendingKey] = text;
    }

  });

  return specs;

}

var getFormData = require('./form-data.js');

module.exports = function(input){
  console.log('parsing house detail');

  var data = {};

  var formData = getFormData(input);

  var page = $.load(input);

  var photosID = 0;
  var photosMatch = page('a[title="Photo Viewer"]').attr('href').match(/ml=(\d+)/);
  if(photosMatch) photosID = photosMatch[1];

  var detail = page('.REPORT_SELECTION_BIG');
  var tables = page('.table[width="100%"]');

  tables.each(function(i,elem){
    var item = $(this);
    _.extend(data,findKeyValues(item))
  });

  _.extend(data,findKeyValues(detail));

  return{
    photosID: photosID,
    house: data,
    form: formData
  };
};
