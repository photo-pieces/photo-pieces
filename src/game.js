
import { GAME_CONFIGURATON, GAME_HISTORY } from "./constants";
import { random, randomImage } from "./utils";

function generatePieces(maxX, maxY, size, number) {
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
      matched: false,
      x: random(maxX - size, 0, ignore.x),
      y: random(maxY - size, 0, ignore.y),
      size
    };
  }
  return pieces;
}

export async function generateState(width, height, level) {
  const { interval = 10, size = 55, pieces = 5 } =
    GAME_CONFIGURATON.levels[level] || {};
  const piecesObj = generatePieces(width, height, size, pieces);
  const picture = await randomImage(width, height);
  return { size: { width, height }, picture, interval, pieces: piecesObj };
}
function normalizeSnapshots(snapshots) {
  return snapshots.filter(s => {
      return s.levels[0] && s.levels[0].score;
    });
}
export function saveStats(levels,update=false){
    let {snapshots=[]}=getItemObject(GAME_HISTORY)||{};
    if(update){
      const last=snapshots[snapshots.length-1];
      last.time = Date.now();
      last.levels=levels;
      snapshots = normalizeSnapshots(snapshots);
    }else{
      const snapshot = { id: snapshots.length+1, time: Date.now(), levels };
      snapshots.push(snapshot);
    }
    const history={snapshots};
    setItemObject(GAME_HISTORY,history);
}
export function getStats(){
    let {snapshots=[]}=getItemObject(GAME_HISTORY)||{};
    snapshots = normalizeSnapshots(snapshots);
    return {snapshots};
}
export function clearStats(){
    const history = { snapshots:[] };
    setItemObject(GAME_HISTORY, history);
}
function getItemObject(key){
    const value=localStorage.getItem(key);
    if(value){
        return JSON.parse(value);
    }else{
       return null; 
    }
}
function setItemObject(key,value){
    const str=JSON.stringify(value);
    localStorage.setItem(key,str);
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
