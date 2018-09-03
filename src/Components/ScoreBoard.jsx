import React from "react";
import "../styles/score-board.css";

export default ({ match, history }) => (
  <div className="score-board">
    <div className="score-card">
      <div className="label">Score</div>
      <div className="score">{match.params.score}</div>
    </div>
    <div
      className="btn"
      onClick={e => {
        history.push("/new-game");
      }}
    >
      <div>Play Again</div>
    </div>
  </div>
);
