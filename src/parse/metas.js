'use strict';

function getMetas() {
  var metasList = document.querySelectorAll('meta');
  var metas = [];
  var meta, i, j, attr, attributes;
  for (i = 0; i < metasList.length; i++) {
    meta = metasList[i];
    attributes = {};
    for (j = 0; j < meta.attributes.length; j++) {
      attr = meta.attributes[j];
      attributes[attr.name] = attr.value;
    }
    metas.push(attributes);
  }
  return {
    title: document.title,
    metas: metas
  };
}

module.exports = getMetas;
