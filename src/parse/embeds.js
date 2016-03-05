'use strict';

function embeds() {
  var nodes = [];
  var nodeList = document.querySelectorAll('embed, video, iframe, object');
  var node;
  var rectangle;
  for (var i = 0; i < nodeList.length; i++) {
    node = nodeList[i];
    rectangle = node.getBoundingClientRect();
    if (rectangle.width > 0 && rectangle.height > 0)
      nodes.push({
        src: node.src,
        rectangle: rectangle,
        tag: node.tagName
      });
  }
  return { embeds: nodes };
}

module.exports = embeds;
