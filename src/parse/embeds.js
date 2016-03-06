'use strict';

function embeds() {
  var nodes = [];
  var nodeList = document.querySelectorAll('embed, video, iframe, object');
  var node;
  var rectangle;
  for (var i = 0; i < nodeList.length; i++) {
    node = nodeList[i];
    nodes.push({
      src: node.src,
      rectangle: node.getBoundingClientRect(),
      tag: node.tagName
    });
  }
  return { embeds: nodes };
}

module.exports = embeds;
