import {GAME_CONFIGURATON} from './constants';

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

export function generatePieces(maxX, maxY, size, number) {
  const pieces = new Array(number);
  for (let i = 0; i < number; i++) {
    const ignore = pieces.reduce(
      (result, item) => {
        if (item) {
          result.x.push(item.x + size);
          result.y.push(item.y + size);
        }
        return result;
      },
      { x: [], y: [] }
    );
    pieces[i] = {
      id: i,
      score: random(1000),
      matched:false,
      x: random(maxX - size, 0, ignore.x),
      y: random(maxY - size, 0, ignore.y),
      size
    };
  }
  return pieces;
}

export async function generateState(width, height,level) {
  const {interval=10, size= 55, pieces= 5}= GAME_CONFIGURATON.levels[level]||{}
  const piecesObj = generatePieces(width, height, size, pieces);
  const picture = await randomImage(width, height);
  return { size: { width, height }, picture, interval, pieces: piecesObj };
}
