export const ItemTypes = {
  PIECE: "PIECE"
};
export const GAME_HISTORY = "game-stats";
export const GAME_RESULT = { WON: "w", LOST: "l" };
export const GAME_SETTING = "game-setting";
export const DEFAULT_SETTING = {
  muted: false
};
export const GAME_CONFIGURATON = {
  levels: [
    { interval: 15, size: 100, pieces: 2 },
    { interval: 15, size: 90, pieces: 3 },
    { interval: 10, size: 90, pieces: 3 },
    { interval: 20, size: 80, pieces: 4 },
    { interval: 15, size: 80, pieces: 4 },
    { interval: 10, size: 80, pieces: 4 },
    { interval: 20, size: 65, pieces: 5 },
    { interval: 15, size: 65, pieces: 5 },
    { interval: 10, size: 65, pieces: 5 },
    { interval: 20, size: 55, pieces: 5 },
    { interval: 15, size: 55, pieces: 5 },
    { interval: 10, size: 55, pieces: 5 }
  ]
};
