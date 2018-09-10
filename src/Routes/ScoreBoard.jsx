import React from "react";
import { Button, Link } from "../Components/Buttons";
import "../styles/score-board.css";
import { GAME_RESULT } from "../constants";
import { calculateTotalScore } from "../utils";
export default ({ location, history }) => {
  const {levels=[]} = location.state||{};
  const total = calculateTotalScore(levels);
  const lastLevel = levels[levels.length - 1]||{};
  const won = lastLevel.result ? lastLevel.result === GAME_RESULT.WON : false;
  return <div className="score-board">
      <div className="score-card-container">
        <ScoreCard total={total} levels={levels.length} lastLevel={lastLevel} won={won} />
        {!won && <Link onClick={e => history.push("/history")}>
            View History
          </Link>}
      </div>
      {won ? <div>
          <Button onClick={e => history.push("/new-game", { levels })}>
            Next Level
          </Button>
          <Link onClick={e => history.push("/new-game")}>New Game</Link>
        </div> : <Button onClick={e => history.push("/new-game")}>
          Play Again
        </Button>}
    </div>;
};

function ScoreCard({total, lastLevel,levels, won}) {
  return <div className="score-card">
      <div className="score-card-inner">
        <div className="label">Total</div>
        <div className="score">{total}</div>
      </div>
      <div className="score-card-inner">
        <div className="label">Level <span>{levels}</span></div>
        <div className="score">{lastLevel.score}</div>
      </div>
      <div className="score-result">{won ? "🏆 💯" : "💔 😔"}</div>
    </div>;
}

