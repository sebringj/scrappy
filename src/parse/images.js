'use strict';

function getImages() {
	var images = [];
	var imageList = document.querySelectorAll('img');
	var img;
	var rectangle;
	for (var i = 0; i < imageList.length; i++) {
		img = imageList[i];
		rectangle = img.getBoundingClientRect();
		if (rectangle.width > 0 && rectangle.height > 0)
			images.push({
				src: img.src,
				rectangle: rectangle
			});
	}
	return { images: images };
}

module.exports = getImages;
