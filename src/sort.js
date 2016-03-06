'use strict';

function sortByPosition(a, b) {
  if (a.rectangle.top === b.rectangle.top) return a.rectangle.left - b.rectangle.left;
  return a.rectangle.top - b.rectangle.top;
}

function sort(pageObj) {
	var sorted = [];
	Object.keys(pageObj).forEach(function(key) {
		var arr = pageObj[key];
		if (!Array.isArray(arr)) return;
		if (arr.length <= 0 || !arr[0].rectangle) return;
		arr.sort(sortByPosition);
		sorted = sorted.concat(arr);
	});
	sorted.sort(sortByPosition);
	pageObj.sorted = sorted;
	return pageObj;
}

module.exports = sort;
