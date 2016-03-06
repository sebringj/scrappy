'use strict';

function texts() {
  var node = document.querySelector('body');
  var includeWhitespaceNodes = false;
  var textNodes = [];
  var nonWhitespaceMatcher = /\S/;
  function getTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE && node.parentNode && node.parentNode.tagName !== 'SCRIPT') {
      if (includeWhitespaceNodes || nonWhitespaceMatcher.test(node.nodeValue)) {
        var parentNode = node.parentNode;
        var href = parentNode && parentNode.href;
        var rectangle = node.parentNode && node.parentNode.getBoundingClientRect && node.parentNode.getBoundingClientRect();
        textNodes.push({
          text: node.textContent,
          rectangle: rectangle,
          tag: parentNode.tagName,
          href: href
        });
      }
    } else {
      for (var i = 0, len = node.childNodes.length; i < len; ++i) {
        getTextNodes(node.childNodes[i]);
      }
    }
  }
  getTextNodes(node);
  return { texts: textNodes };
}

module.exports = texts;
