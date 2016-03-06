'use strict';

var Horseman = require('node-horseman');
var horseman = new Horseman();
var parse = require('./parse');
var aggregate = require('./aggregate');
var prune = require('./prune');
var sort = require('./sort');

horseman = horseman
  .userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36')
  .open('http://www.cnn.com');

parse(horseman)
.then(aggregate)
.then(prune)
.then(sort)
.then(function store(page) {
  console.log(JSON.stringify(page, null, 2));
  return horseman.close();
})
.catch(function() {
  console.error(arguments);
  horseman.close();
});
