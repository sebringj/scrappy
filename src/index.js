'use strict';

var Horseman = require('node-horseman');
var horseman = new Horseman();
var parse = require('./parse');
var _ = require('lodash');

horseman = horseman
	.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36')
	.open('http://www.cnn.com');

parse(horseman)
.then(function(args) {
	var parsed = {};
	for (var obj of args) {
		parsed = _.assign({}, parsed, obj);
	}
	console.log(JSON.stringify(parsed, null, 2));
	return horseman.close();
})
.catch(function() {
	console.error(arguments);
	horseman.close();
});
