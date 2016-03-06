'use strict';

function validRectangle(rect) {
	return rect && rect.top >= 0 && rect.left >= 0 && rect.width > 0 && rect.height > 0;
}

// remove unwanted items with offscreen top/left
function prune(pageObj) {
	Object.keys(pageObj).forEach(function(key) {
		var arr = pageObj[key];
		if (Array.isArray(arr) && arr.length && arr[0].rectangle)
			for (var i = 0; i < arr.length; i++) {
				if (!validRectangle(arr[i].rectangle)) {
					arr.splice(i, 1);
					i--;
				}
			}
	});
	return pageObj;
}

module.exports = prune;
