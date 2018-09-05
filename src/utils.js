
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
      x: random(maxX - size, 0, ignore.x),
      y: random(maxY - size, 0, ignore.y),
      size
    };
  }
  return pieces;
}

export async function generateState(width, height) {
  const size = 55;
  const count = 5;
  const pieces = generatePieces(width, height, size, count);
  const picture = await randomImage(width, height);
  return {
    size: { width, height },
    picture,
    pieces
  };
}
export function calculateStats(state) {
  const stats = state.pieces.reduce(
    (obj, item) => {
      if (item.matched === false) {
        obj.result = "l";
      } else {
        obj.score = item.score + obj.score;
      }
      return obj;
    },
    {
      result: "w",
      score: 0
    }
  );
  return stats;
}
export const dropPiece = id => state => {
  const { pieces } = state;
  return {
    ...state,
    pieces: pieces.map(p => {
      if (p.id === id) {
        p.matched = true;
      }
      return p;
    })
  };
};
