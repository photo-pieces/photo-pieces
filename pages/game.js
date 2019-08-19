import { DndProvider } from "react-dnd";
import React, { useEffect, useState } from "react";
import {
  calculateStats,
  dropPiece,
  generateState,
  saveStats
} from "../utils/game";

import Deck from "../components/Deck/Deck";
import { GAME_RESULT } from "../utils/constants";
import Header from "../components/Header";
import Level from "../components/Level";
import Picture from "../components/Picture/Picture";
import PiecePreview from "../components/PiecePreview";
import { default as TouchBackend } from "react-dnd-touch-backend";
import { buildImageCache } from "../utils/utils";
import { useInterval } from "./../utils/hooks";

function useGameBoard(levels, history) {
  const [state, setState] = useState({});

  useEffect(() => {
    if (levels.length === 0) {
      saveStats(levels);
    }

    generateState(300, 300, levels.length).then(state => {
      setState({ ...state });
    });
  }, [levels, levels.length]);
  // useInterval(function() {
  //   if (state.picture) {
  //     showScore(calculateStats(state));
  //   }
  // }, state.interval * 1000);

  useEffect(function() {
    buildImageCache();
  }, []);

  function showScore(stats) {
    levels.push(stats);
    saveStats(levels, true);
    // history.replace("/score", { levels });
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
const emptyArray=[]
function GameBoard({  history }) {
  const { levels=emptyArray } =  {};
  const [state, dropPieceHandler] = useGameBoard(levels, history);
  if (!state.picture) {
    return null;
  }
  const key = Math.random();
  return (
    <div>
      <Header {...state} maxTime={state.interval} />
      <Level value={levels.length + 1} />
      <Picture {...state} dropPiece={dropPieceHandler} />
      <Deck {...state} />
      <PiecePreview key={key} />
    </div>
  );
}
export default (props) => {
  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <GameBoard {...props}/>
    </DndProvider>
  );
};