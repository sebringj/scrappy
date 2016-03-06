var _ = require('lodash');

function aggregate(args) {
  var parsed = {};
  for (var obj of args) {
    parsed = _.assign({}, parsed, obj);
  }
  return parsed;
}

module.exports = aggregate;
