export function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
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
export function randomImage(width, height) {
  const id = random(10000);
  const src = `https://picsum.photos/${width}/${height}/?${id}`;
  //return 'https://plamoya.com/bmz_cache/e/e631027ec8aec3bb07ceedef43a2edfa.image.500x300.jpg';
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = function() {
      resolve(src);
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
  const size = 50;
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
export const onDragLeave = id => state => {
  const { pieces } = state;
  return {
    ...state,
    pieces: pieces.map(p => {
      if (p.id === id) {
        p.highlight = false;
      }
      return p;
    })
  };
};
export const onDragEnter = id => state => {
  const { pieces } = state;
  return {
    ...state,
    pieces: pieces.map(p => {
      if (p.id === id) {
        p.highlight = true;
      }
      return p;
    })
  };
};
export const dropPiece = id => state => {
  const { pieces, currentPiece } = state;
  return {
    ...state,
    pieces: pieces.map(p => {
      if (p.id === id) {
        p.highlight = false;
        p.matched = currentPiece === id;
      }
      return p;
    })
  };
};
