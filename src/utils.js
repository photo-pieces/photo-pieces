
export function random(n, min = 0, ignore = []) {
  let number = min + Math.floor(Math.random() * n);
  while (true) {
    if (ignore.indexOf(number) > -1) {
      number = min + Math.floor(Math.random() * n);
    } else {
      break;
    }
  }
  return number;
}
let imageId = 5;
  
export function randomImage(width, height) {
  const src = `https://picsum.photos/${width}/${height}/?${imageId}`;
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = function() {
      resolve(src);
      imageId = imageId + 1;  
    };
    image.onerror = function() {
      reject(src);
    };
  });
}
export function buildImageCache(){
  let i = imageId;
  const len = i+20;
  for (; i < len; i++) {
    window.requestIdleCallback((function(id) {
        return function(){
          const image = new Image();
          image.src = `https://picsum.photos/300/300/?${id}`;
        }
      })(i));
  }
}
