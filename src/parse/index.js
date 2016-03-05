'use strict';

function parse(horseman) {
  var promises = [
    horseman.evaluate(require('./metas')),
    horseman.evaluate(require('./texts')),
    horseman.evaluate(require('./images')),
    horseman.evaluate(require('./embeds'))
  ];
  return Promise.all(promises);
}

module.exports = parse;
