import "../styles/game.scss";

import React, { useEffect, useState } from "react";
import {
  calculateStats,
  dropPiece,
  generateState,
  saveStats
} from "../utils/game";

import Deck from "../Components/Deck/Deck";
import { DragDropContext } from "react-dnd";
import { GAME_RESULT } from "../utils/constants";
import Header from "../Components/Header";
import Level from "../Components/Level";
import Picture from "../Components/Picture/Picture";
import PiecePreview from "../Components/PiecePreview";
import { default as TouchBackend } from "react-dnd-touch-backend";
import { buildImageCache } from "../utils/utils";

function useGameBoard(levels, history) {
  const [state, setState] = useState({});
  let timer = null;

  useEffect(
    () => {
      if (levels.length === 0) {
        saveStats(levels);
      }
      generateState(300, 300, levels.length).then(state => {
        setState({ ...state });
        timer = setTimeout(
          () => showScore(calculateStats(state)),
          state.interval * 1000
        );
        buildImageCache();
      });

      return () => {
        clearTimeout(timer);
      };
    },
    [levels]
  );

  function showScore(stats) {
    levels.push(stats);
    saveStats(levels, true);
    history.replace("/score", { levels });
  }
  function dropPieceHandler(id) {
    setState(dropPiece(id));
    const stats = calculateStats(state);
    if (stats.result === GAME_RESULT.WON) {
      showScore(stats);
    }
  }
  return [state, dropPieceHandler];
}
function GameBoard({ location, history }) {
  const { levels = [] } = location.state || {};
  const [state, dropPieceHandler] = useGameBoard(levels, history);
  if (!state.picture) {
    return null;
  }
  const key = Math.random();
  return (
    <div className="App">
      <Header {...state} maxTime={state.interval} />
      <Level value={levels.length + 1} />
      <Picture {...state} dropPiece={dropPieceHandler} />
      <Deck {...state} />
      <PiecePreview key={key} />
    </div>
  );
}
export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(
  GameBoard
);
