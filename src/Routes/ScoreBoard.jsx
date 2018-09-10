import React from "react";

import { Button, Link } from "../Components/Buttons";
import "../styles/score-board.css";
import { GAME_RESULT } from "../constants";

import { calculateTotalScore } from "../utils";
export default ({ location, history }) => {
  const levels = location.state.levels;
  const total = calculateTotalScore(levels);
  const lastLevel = levels[levels.length - 1];
  const won = lastLevel.result === GAME_RESULT.WON;
  return <div className="score-board">
      <div className="score-card-container">
        <div className="score-card">
          <div className="label">Total</div>
          <div className="score">{total}</div>
          <div className="label">Last Level</div>
          <div className="score">{lastLevel.score}</div>
          <div className="score">{won ? "😁🏆🥇💯" : "💔😔"}</div>
        </div>
        {!won && <Link onClick={e => history.push("/history")}>
          View History
        </Link>}
      </div>
      {won ? <div>
          <Button onClick={e => history.push("/new-game", { levels })}>
            Next Level
          </Button>
          <Link onClick={e => history.push("/new-game")}>
            Play Again
          </Link>
        </div> : <Button onClick={e => history.push("/new-game")}>
          Play Again
        </Button>}
    </div>;
};
