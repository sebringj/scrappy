'use strict';

function getImages() {
  var images = [];
  var imageList = document.querySelectorAll('img');
  var img;
  var rectangle;
  for (var i = 0; i < imageList.length; i++) {
    img = imageList[i];
    images.push({
      src: img.src,
      rectangle: img.getBoundingClientRect(),
      tag: 'IMG'
    });
  }
  return { images: images };
}

module.exports = getImages;
