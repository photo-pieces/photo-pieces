const GAME_HISTORY="game-history";

export function saveStats(levels,update=false){
    const {snapshots=[]}=getItemObject(GAME_HISTORY)||{};
    if(update){
      const last=snapshots[snapshots.length-1];
      last.time = Date.now();
      last.levels=levels;
    }else{
      const snapshot = { id: snapshots.length+1, time: Date.now(), levels };
      snapshots.push(snapshot);
    }
    const history={snapshots};
    setItemObject(GAME_HISTORY,history);
}
export function getStats(){
    const {snapshots=[]}=getItemObject(GAME_HISTORY)||{};
    return {snapshots};
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
